
import { Router } from "express";
import { registerController, loginController } from "../controllers/authController";

const authRoutes = Router();

// User Registration
authRoutes.post("/register", registerController);

// User Login
authRoutes.post("/login", loginController);

export default authRoutes;
