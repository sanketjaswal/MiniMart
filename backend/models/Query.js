import { Schema, model } from "mongoose";

const QuerySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  cart: { type: Schema.Types.Array, ref: "cart", required: true },
  message: { type: String, required: true }
});

const Query = model("Query", QuerySchema);
export default Query;
