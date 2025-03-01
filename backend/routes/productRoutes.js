import { Router } from "express";
import { isAdmin } from "../middleware/authMiddleware.js";
import { addProduct, deleteProduct, getProducts } from "../controllers/productController.js";

const productRoutes = Router();

// Add Product (Admin only)
productRoutes.post("/", isAdmin , addProduct );

// Get All Products
productRoutes.get("/", getProducts);

// Delete Product (Admin only)
productRoutes.delete("/:id", isAdmin, deleteProduct);

export default productRoutes;
