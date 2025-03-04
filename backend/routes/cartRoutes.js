import { Router } from "express";


import { authorize } from "../middleware/authMiddleware.js";
import { addProductQuantity, addProductToCart, getCart, removeProductFromCart, subtractProductQuantity } from "../controllers/cartController.js";

const cartRoutes = Router();

// Add Product to Cart
cartRoutes.post("/add", authorize , addProductToCart);

// Remove Product from Cart
cartRoutes.delete("/remove/:productId", authorize, removeProductFromCart);

// Get User's Cart
cartRoutes.get("/get", authorize, getCart);

// Increase Product Quantity in Cart
cartRoutes.put("/increase/:productId", authorize, addProductQuantity)

// Decrease Product Quantity in Cart
cartRoutes.put("/decrease/:productId", authorize, subtractProductQuantity)


export default cartRoutes;
