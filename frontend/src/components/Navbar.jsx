import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { CiSquarePlus } from 'react-icons/ci';
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"1140px"} px={4}>
            <Flex 
                h={16} 
                justifyContent={"space-between"} 
                alignItems={"center"}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}>
                <Text
                    fontSize={{ base: "22", sm: "28"}}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    
                >
                    <Link to="/" >
                    <Flex gap={3}>
                        Product House
                        <img height={30} width={30} src='cart-large-minimalistic-svgrepo-com.svg'></img>
                        </Flex>
                    </Link>
                </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to="/create">
                    <Button>
                        <CiSquarePlus fontSize={24} />
                    </Button>
                </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <FaSun fontSize={18} /> : <FaMoon fontSize={18} />}
                    </Button>
            </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar
