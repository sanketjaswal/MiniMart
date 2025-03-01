import React from 'react';
import { useState } from "react";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAddProduct = () => {  }

  const handleDeleteProduct = () => {  }


  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <input type="text" placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
