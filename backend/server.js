import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { config } from "dotenv";

import color from "colors";

config();


const app = express();

connectDB();

app.use(json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("E-commerce API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(color.bgGreen.bold(` Server running on port ${PORT} `)));
