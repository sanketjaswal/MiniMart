import React, { useContext, useEffect, useState } from 'react'

import Product from '../components/ProductCard'
import { CartContext } from '../context/CartContext'
import { getProducts } from '../services/productAPI'
import styled, { keyframes } from 'styled-components'

const Home = () => {
  const [products, setProducts] = useState([])
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts()
      setProducts(res.data)
      // console.log(res.data);
    }
    fetchProducts()
  }, [])

  return (
    <Container>
      <Title>Products</Title>
      <ProductsGrid>
        {products.map((product) => (
          <Product key={product._id} product={product} addToCart={addToCart} />
        ))}
      </ProductsGrid>
    </Container>
  )
}

export default Home

// Styled Components


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
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #a3a3a3;
  animation: ${slideLeft} 01s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProductsGrid = styled.div`
  
  justify-content: center;
  opacity: 0;
  animation: ${SlideIn} 1s ease-in-out 1s forwards;
`;
