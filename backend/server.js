import cors from "cors";
import { config } from "dotenv";
import express, { json } from "express";

import color from "colors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";

// Configure .env
config();

const app = express();

// Connect to Monogo DB
connectDB();

app.use(json());
app.use(cors());

// app.use(cors({
//   origin: ["http://localhost:3000", "https://your-frontend.onrender.com"],
//   credentials: true
// }))

// Add Routes to Server
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/query", queryRoutes);

app.get("/", (req, res) => {
  res.send("Mini Mart API is running..!");
});

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(color.bgGreen.bold(` Server running on port ${PORT} `)));
