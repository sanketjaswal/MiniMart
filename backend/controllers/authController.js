import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import User, { findOne } from "../models/User";


const registerController =  async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  const user = new User({ firstName, lastName, email, password: hashedPassword });

  try {
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await findOne({ email });

  if (!user || !(await compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
  res.json({ token, isAdmin: user.isAdmin });
}


export default { loginController, registerController };