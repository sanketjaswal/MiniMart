import React from 'react';
import styled from 'styled-components';

const Product = () => (
  <Card>
    <ImageContainer>
      <Image alt="img" />
    </ImageContainer>
    <Details>
      <Title>Name</Title>
      <Description>p.description</Description>
    </Details>
    <Button>Buy Now</Button>
  </Card>
);

export default Product;

const Card = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e7e5e4;
  margin: 12px 40px;
  max-width: 20rem;
  border-radius: 0.5rem;
  padding-bottom: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    background: #f3f4f6;
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

const Image = styled.img`
  width: 100%;
  height: 95%;
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
`;

const Details = styled.div`
  width: 100%;
  padding: 0.25rem 1rem;
  text-align: start;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #4b5563;
  font-size: 1rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`;

const Button = styled.div`
  background: #0ea5e9;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  position: absolute;
  bottom: -1rem;
  transition: 0.3s ease-in-out;
  opacity: 0;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;

  ${Card}:hover & {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.1);
    background: #0284c7;
  }
`;
