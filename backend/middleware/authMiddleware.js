import jwt from "jsonwebtoken";

export const authorize = (req, res, next) => {
  const token = req.header("Authorization");
  console.log("authorization", token);
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
