import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", updateProduct);
router.put("/:id", deleteProduct);

export default router;