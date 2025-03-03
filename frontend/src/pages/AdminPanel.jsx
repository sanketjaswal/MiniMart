import React, { useContext, useEffect } from 'react'
import { useState } from 'react'

import { AuthContext } from '../context/AuthContext'
import { addProduct, deleteProduct, getProducts } from '../services/productAPI'
import styled, { keyframes } from 'styled-components'
import { toast } from 'react-toastify'

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
    if (!token) return toast.warning('Unauthorized');

    const newProduct = { name, time, description, image }

    // API call
    try {
      await addProduct(newProduct, token)
      toast.success('New Product added!');
    } catch (error) {
      toast.success('Error Adding Product!');
      // console.error('Error Adding Product', error)
    }
  }

  // Delete product
  const handleDeleteProduct = async (id) => {
    const token = user?.token
    if (!token) return toast.warning('Unauthorized')

      //API call
    try {
      await deleteProduct(id, token)
      setProducts(products.filter((product) => product._id !== id))
      toast.success('Product deleted!')
    } catch (error) {
      toast.error('Error deleting product!')
      // console.error('Error deleting product:', error)
    }
  }

  return (
    <Container>
      <Title>Admin Panel</Title>
      <Form onSubmit={handleAddProduct}>
        <Input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="text" placeholder="Time taken for Completion" value={time} onChange={(e) => setTime(e.target.value)} />
        <Input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input type="text" placeholder="Video URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <SubmitButton type="submit">Add Product</SubmitButton>
      </Form>

      <br/> <br/>

      <HR/>

      <MiniTitle>Product List</MiniTitle>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product._id}>
            <Video autoPlay muted loop>
                <source src={product.image} type="video/mp4" />
              </Video>
            {product.name}
            <p>

            {
              product.time
            } Weeks
            </p>
            <DeleteButton onClick={() => handleDeleteProduct(product._id)}>Delete</DeleteButton>
          </ProductItem>
        ))}
      </ProductList>
    </Container>
  )
}

export default AdminPanel

//Styled components

const slideLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  95% {
    transform: translateX(2%);
  }
  100% {
    transform: translateX(0);
  }
`;


const SlideIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;



const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;

`;

const HR = styled.hr`
 color: #0ea4e966;
 opacity: 0;
 animation: ${SlideIn} 1s ease-in-out 1.5s forwards;


`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #0ea5e9;
  animation: ${slideLeft} 01s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MiniTitle = styled.h2`
  font-size: 1%.5;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #a3a3a3;
  opacity: 0;
  animation: ${SlideIn} 1s ease-in-out 1s forwards;


  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Video = styled.video`
  width: 10%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  @media (max-width: 1000px) {
    width: 20%;
  }

  @media (max-width: 768px) {
    width: 20%;
  }

  @media (max-width: 600px) {
    width: 45%;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  background: transparent;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
  transition: 0.3s ease-in-out;
  color: white;
  text-align: center;
  filter: saturate(0.3);
  opacity: 0;
  animation: ${SlideIn} 1s ease-in-out 1s forwards;


  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    background: rgb(29, 29, 29);
    color: #f3f4f6;
    filter: saturate(1);
    transform: scale(1.02);
  }
`;

const Input = styled.input`
 width: 98%;
  padding: 0.75rem 0;
  padding-left: 2%;
  margin: 0.5rem 0;
  border: none;
  border-radius: 0.5rem;
  background: #333;
  color: white;
  font-size: 1rem;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
    background: #444;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: #0ea5e9;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  opacity: 0.9;

  &:hover {
    background: rgb(24, 115, 160);
    opacity: 1;
  }
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  opacity: 0;
  animation: ${SlideIn} 1s ease-in-out 2s forwards;

`;

const ProductItem = styled.li`
  background: #222;
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  transition: 0.3s ease-in-out;
  color: white;

  &:hover {
    background: #333;
  }
`;

const DeleteButton = styled.button`
  background: #be123c;
  border: none;
  padding: .75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #981b27;
  }
`;