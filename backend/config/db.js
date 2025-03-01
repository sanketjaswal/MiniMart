import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

// Connect to Mongo DB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(colors.green.bold(`MongoDB Connected: ${conn.connection.host}`));
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;   

