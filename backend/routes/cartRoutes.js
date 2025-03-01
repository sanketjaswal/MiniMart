import { Router } from "express";

import { verifyToken } from "../middleware/authMiddleware.js";
import { addProductToCart, removeProductFromCart } from "../controllers/cartController.js";

const cartRoutes = Router();

// Add Product to Cart
cartRoutes.post("/add", verifyToken, addProductToCart);

// Remove Product from Cart
cartRoutes.delete("/remove/:productId", verifyToken, removeProductFromCart);

// Get User's Cart
cartRoutes.get("/", verifyToken, getCart);

export default cartRoutes;
