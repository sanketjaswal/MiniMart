import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';


const Product = () => {
    // const navigate = useNavigate();
  return (
    <ProductCard>
      <ImageContainer>
        <ProductImage alt="img" />
      </ImageContainer>
      <ProductDetails>
        <ProductInfo>
          <ProductTitle>Name</ProductTitle>
          <ProductDescription>p.description</ProductDescription>
        </ProductInfo>
      </ProductDetails>
      <BuyButton >Buy Now</BuyButton>
    </ProductCard>
  );
};

export default Product;

    const ProductCard = styled.div`
      width: 340px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-color: #e7e5e4;
      margin: 12px 40px;
      max-width: 20rem;
      border-radius: 0.5rem;
      padding-bottom: 2.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
      position: relative;
    
      &:hover {
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        background-color: #f3f4f6;
      }
    `;
    
    const ImageContainer = styled.div`
      width: 100%;
      min-height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
      position: relative;
    `;
    
    const ProductImage = styled.img`
      width: 100%;
      height: 95%;
      border-radius: 0.5rem;
      position: absolute;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out, top 0.3s ease-in-out;
      transform: scale(0.9);
      top: 0.75rem;
    
      ${ProductCard}:hover & {
        transform: scale(1);
        top: -0.75rem;
      }
    `;
    
    const ProductDetails = styled.div`
      width: 100%;
      padding: 0.25rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `;
    
    const ProductInfo = styled.div`
      text-align: start;
      padding: 0 1.25rem;
    `;
    
    const ProductTitle = styled.div`
      font-weight: bold;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    `;
    
    const ProductDescription = styled.p`
      color: #4b5563;
      font-size: 1rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    `;
    
    const BuyButton = styled.div`
      background-color: #0ea5e9;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      position: absolute;
      bottom: -1rem;
      transition: all 0.3s ease-in-out;
      opacity: 0;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      color: white;
      text-align: center;
    
      ${ProductCard}:hover & {
        opacity: 1;
      }
    
      &:hover {
        transform: scale(1.1);
        background-color: #0284c7;
      }
    `;