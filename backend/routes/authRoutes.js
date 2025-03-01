
import { Router } from "express";
import { registerController, loginController } from "../controllers/authController";

const router = Router();

// User Registration
router.post("/register", registerController);

// User Login
router.post("/login", loginController);

export default router;
