import Product, { find, findByIdAndDelete } from "../models/Product";

// Add Product (Admin only)
const addProduct = async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).json({ message: "Not authorized" });
  
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  };
  
 // Get All Products 
const getProducts = async (req, res) => {
  const products = await find();
  res.json(products);
}

// Delete Product (Admin only)
const deleteProduct = async (req, res) => {
    if (!req.user.isAdmin) return res.status(403).json({ message: "Not authorized" });
  
    await findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  }

export { addProduct, getProducts, deleteProduct };