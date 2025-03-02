import { API } from "./api";

// Get All Products
export const getProducts = () => API.get("/products");

// Add Product (Admin only)
export const addProduct = (product, token) => API.post("/products", product, { headers: { Authorization: token } });

// Delete Product (Admin only)
export const deleteProduct = (id, token) => API.delete(`/products/${id}`, { headers: { Authorization: token } });
