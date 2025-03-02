import { Router } from "express";


import { authorize } from "../middleware/authMiddleware.js";
import { addProductToCart, getCart, removeProductFromCart } from "../controllers/cartController.js";

const cartRoutes = Router();

// Add Product to Cart
cartRoutes.post("/add", authorize , addProductToCart);

// Remove Product from Cart
cartRoutes.delete("/remove/:productId", authorize, removeProductFromCart);

// Get User's Cart
cartRoutes.get("/", authorize, getCart);

export default cartRoutes;
