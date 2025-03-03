import React, { useContext, useEffect, useState } from 'react'

import styled, { keyframes } from 'styled-components'

import Product from '../components/ProductCard'
import { CartContext } from '../context/CartContext'
import { getProducts } from '../services/productAPI'
import { Loader } from '../components/Loader'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts()
        setProducts(res.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false) // Ensure loading is set to false after fetch
      }
      document.title = 'Mini Mart'
    }
    fetchProducts()
  }, [])

  return (
    <Container>
      <Title>OUR PRODUCTS</Title>
      {loading ? (
          <Loader />
      ) : (
        <ProductsGrid>
          {products.map((product) => (
            <Product key={product._id} product={product} addToCart={addToCart} />
          ))}
        </ProductsGrid>
      )}
    </Container>
  )
}

export default Home


// Styled Components

const slideLeft = keyframes`
  0% {
    transform: translateX(-100%);
    font-style: italic;
  }
  95% {
    transform: translateX(2%);
    font-style: italic;

  }
  100% {
    transform: translateX(0);
    font-style: normal

  }
`

const SlideIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  text-align: center;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-block: 9rem 2rem;
  color: #a3a3a3;
  animation: ${slideLeft} 01s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const ProductsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  opacity: 0;
  animation: ${SlideIn} 0.5s ease-in-out 1.5s forwards;
`
