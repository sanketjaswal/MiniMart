import React, { useContext, useEffect } from 'react'
import { useState } from 'react'

import { AuthContext } from '../context/AuthContext'
import { addProduct, deleteProduct, getProducts } from '../services/productAPI'

const AdminPanel = () => {
  // Auth context
  const { user } = useContext(AuthContext)

  //States
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  // fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      //API call
      const res = await getProducts()
      setProducts(res.data)
    }
    fetchProducts()
  }, [])

  // Add new product
  const handleAddProduct = async (e) => {
    e.preventDefault()

    const token = user?.token
    if (!token) return alert('Unauthorized')

    const newProduct = { name, time, description, image }
    console.log(newProduct)

    // API call
    try {
      await addProduct(newProduct, token)
      alert('Product added!')
    } catch (error) {
      console.error('Error Adding Product', error)
    }
  }

  // Delete product
  const handleDeleteProduct = async (id) => {
    const token = user?.token
    if (!token) return alert('Unauthorized')

      //API call
    try {
      await deleteProduct(id, token)
      setProducts(products.filter((product) => product._id !== id))
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Time taken for project"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="textbox"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>

      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - ${product.price}
            <button onClick={() => handleDeleteProduct(product._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminPanel
