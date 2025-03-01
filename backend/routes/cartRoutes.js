import { Router } from "express";

import { addProductToCart, getCart, removeProductFromCart } from "../controllers/cartController.js";

const cartRoutes = Router();

// Add Product to Cart
cartRoutes.post("/add", addProductToCart);

// Remove Product from Cart
cartRoutes.delete("/remove/:productId", removeProductFromCart);

// Get User's Cart
cartRoutes.get("/", getCart);

export default cartRoutes;
