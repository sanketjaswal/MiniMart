import { Router } from "express";
import { isAdmin } from "../middleware/authMiddleware";
import { addProduct, deleteProduct, getProducts } from "../controllers/productController";

const productRoutes = Router();

// Add Product (Admin only)
productRoutes.post("/", isAdmin , addProduct );

// Get All Products
productRoutes.get("/", getProducts);

// Delete Product (Admin only)
productRoutes.delete("/:id", isAdmin, deleteProduct);

export default productRoutes;
