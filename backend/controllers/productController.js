import Product from "../models/Product.js"; 

// Add Product (Admin only)
const addProduct = async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: "Not authorized" });

  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error: error.message });
  }
};

// Get All Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// Delete Product (Admin only)
const deleteProduct = async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: "Not authorized" });

  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id); 
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};

export { addProduct, getProducts, deleteProduct };
