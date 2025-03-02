import { Router } from "express";
import { authorize } from "../middleware/authMiddleware.js";
import { addProduct, deleteProduct, getProducts } from "../controllers/productController.js";

const productRoutes = Router();

// Add Product (Admin only)
productRoutes.post("/", authorize , addProduct );

// Get All Products
productRoutes.get("/", getProducts);

// Delete Product (Admin only)
productRoutes.delete("/:id", authorize, deleteProduct);

export default productRoutes;
