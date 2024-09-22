import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows use to accept JSON data in the req.body

// API routes
app.use("/api/products", productRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// The "catch-all" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Internal server error"
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});