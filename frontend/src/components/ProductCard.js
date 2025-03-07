import React, { useEffect,  useContext, useRef } from 'react'

import styled from 'styled-components'
import { toast } from 'react-toastify'

import { addTOCart } from '../services/cartAPI'
import { AuthContext } from '../context/AuthContext'

const Product = ({ product, addToCart }) => {
  const { user } = useContext(AuthContext)
  const videoRef = useRef(null)

  // Set video initial speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5 
    }
  }, [])

  // No product return
  if (!product) {
    return null
  }

  // Add to cart 
  const handleAddToCart = async () => {
    const token = user?.token
    if (!token) return toast.warning('Login to access cart')

    try {
      await addTOCart({ productId: product._id }, token)
      toast.success('Product added to cart!')
    } catch (error) {
      toast.error('Error adding to cart! Please try again later.')
      console.error('Error Adding to cart: ' + error.message)
    }

    addToCart(product)
  }

// Increase video speed on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5 
    }
  }

// Reset video speed on hover out
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5 
    }
  }

  return (
    <Card onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <ImageContainer>
        <Image alt="img" src={product.image} />
        <Video
         as="video" 
          ref={videoRef}
          autoPlay
          muted
          loop          
        >
          <source src={product.image} type="video/mp4" />
        </Video>
      </ImageContainer>
      <Details>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Button id="addBtn" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </Details>
    </Card>
  )
}

export default Product

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin: 12px auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
  transition: 0.3s ease-in-out;
  position: relative;
  transition: all.5s;
  padding: 1rem;
  color: white;
  filter: saturate(0.3);
  font-family: 'Ubuntu', sans-serif;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    background: rgb(29, 29, 29);
    color: #f3f4f6;
    filter: saturate(1);
    transform: scale(1.01) translateY(-5px);
  }

  /* Alternate row direction */
  &:nth-child(odd) {
    flex-direction: row;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    &:nth-child(odd) {
      flex-direction: column;
    }

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 1rem;
  position: relative;
  transition: all.3s;
  overflow: hidden;
  @media (max-width: 768px) {
  }
`

const Image = styled.img`
  width: 50%;
  height: auto;
  display: none;
  border-radius: 0.5rem;
  position: absolute;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  transform: scale(0.9);
  top: 0.75rem;

  ${Card}:hover & {
    transform: scale(1);
    top: -0.75rem;
  }
`

const Video = styled.video`
  width: 80%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all.3s;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`

const Details = styled.div`
  width: 100%;
  padding: 0.25rem 1rem;
  text-align: start;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all.3s;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  transition: all.3s;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  color: #4b5563;
  font-size: 1rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  text-align: center;
  transition: all.3s;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`

const Button = styled.div`
  background: #0ea5e9;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 50%;
  transition: 0.3s ease-in-out;
  opacity: 0;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
  margin-bottom: 10px;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(15px);
  }

  &:hover {
    background: rgb(24, 115, 160);
    box-shadow: 0 2px 4px rgb(51, 51, 51);
  }

  @media (max-width: 768px) {
    bottom: -0.5rem;
    font-size: 0.875rem;
  }
`
