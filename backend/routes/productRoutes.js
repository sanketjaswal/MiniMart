import { Router } from "express";
import { isAdmin } from "../middleware/authMiddleware";

const router = Router();

// Add Product (Admin only)
router.post("/", isAdmin , );

// Get All Products
router.get("/", );

// Delete Product (Admin only)
router.delete("/:id", isAdmin, );

export default router;
