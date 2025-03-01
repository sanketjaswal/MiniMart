import mongoose from "mongoose";

// Cart Data Model

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, quantity: Number }]
}, { timestamps: true });

export default mongoose.model("Cart", CartSchema);