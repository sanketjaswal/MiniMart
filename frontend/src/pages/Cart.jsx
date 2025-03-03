import React, { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components";
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { getCart, removeFromCart } from '../services/cartAPI';
import { sendQuery } from '../services/queryAPI';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const token = user?.token;
  const [loading, setLoading] = useState(true);
  const [querySent, setQuerySent] = useState(false); 




  useEffect(() => {
    const fetchCart = async () => {
      if (token) {
        try {
          const res = await getCart(token);
          setCart(res.data.products);
        } catch (error) {
          console.error("Error fetching cart:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // Fix: Ensure loading is set to false if no user is logged in
      }
    };
    document.title = "Mini Mart - Cart";

  
    fetchCart();
  }, [token, setCart]);

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId, token);
      setCart(cart.filter((item) => item.productId._id !== productId));
      toast.success("Product Removed successfully")
  
    } catch (error) {
      toast.error("Error removing item! Please try again later!")
      // console.error("Error removing item:", error);
    }
  };
  const handleSendQuery = async () => {
    if (!token) {
      toast.warning("Please login to send a query.")
      return;
    }

    if (cart.length === 0) {
      toast.warning("Your cart is empty.")
      return;
    }

    const productNames = cart.map((item) => item.productId.name);

    try {
      await sendQuery(productNames, token);
      toast.success("Query sent successfully!")
      setQuerySent(true);
    } catch (error) {
      toast.error("Error sending query!")
      // console.error("", error);
    }
  };

  return (
    <Container>
      <Title>CART</Title>
      {loading ? (
        <Message>Loading...</Message>
      ) : user == null ? (
        <Message>Please login to view your cart.</Message>
      )
      : cart.length === 0 ? (
        <Message>Your cart is empty.</Message>
      ) : (
        cart.map((item) => (
          <CartItem key={item.productId._id}>
            <ImageContainer>
             {/* { <Image src={item.productId.image} alt={item.productId.name} />} */}
              <Video autoPlay muted loop>
                <source src={item.productId.image} type="video/mp4" />
              </Video>
            </ImageContainer>
            <Details>
              <ItemTitle>{item.productId.name}</ItemTitle>
              <Description>{item.productId.description}</Description>
              <QuantityControls>
                {/* <h3>Quanity : </h3> */}
                {/* <Quantity>{item.quantity}</Quantity> */}
              </QuantityControls>
              <RemoveButton onClick={() => handleRemove(item.productId._id)}>Remove</RemoveButton>
            </Details>
          </CartItem>
        ))
      )}
      {
       cart.length > 0 && (
        <QueryButton onClick={handleSendQuery} disabled={querySent}>
          Send Query
        </QueryButton>
      )
      }
    </Container>
  );
};

export default Cart;


// Styled Components

const slideRight = keyframes`
  0% {
    transform: translateX(100%);
    font-style: italic;

  }
  95% {
    transform: translateX(-2%);
    font-style: italic;

  }
  100% {
    transform: translateX(0);
    font-style: normal

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
  margin-block: 9rem 2rem;
  color: #a3a3a3;
  animation: ${slideRight} 01s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  opacity: 0;
  animation: ${SlideIn} 0.5s ease-in-out 1s forwards;

`;

const CartItem = styled.div`
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
  padding: 1rem;
  color: white;
  filter: saturate(0.3);
  font-family: 'Ubuntu', sans-serif;
  cursor: pointer;
  opacity: 0;
  animation: ${SlideIn} 0.5s ease-in-out 1.5s forwards;


  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    background: rgb(29, 29, 29);
    color: #f3f4f6;
    filter: saturate(1);
    transform: scale(1.01) translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s;
`;

// const Image = styled.img`
//   width: 50%;
//   height: auto;
//   display: none;
//   border-radius: 0.5rem;
//   position: absolute;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: 0.3s ease-in-out;
//   transform: scale(0.9);
//   top: 0.75rem;

//   ${CartItem}:hover & {
//     transform: scale(1);
//     top: -0.75rem;
//   }
// `;

const Video = styled.video`
  width: 80%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 85%;
  }
`;

const Details = styled.div`
  width: 100%;
  padding: 0.25rem 1rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;

const ItemTitle = styled.div`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
  transition: all 0.3s;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  color: #4b5563;
  font-size: 1rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  text-align: center;
  transition: all 0.3s;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

// const Quantity = styled.span`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #fff;
// `;

const RemoveButton = styled.button`
  background: #be123c;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  color: white;
  border: none;
  opacity: 0;
  
  ${CartItem}:hover & {
    opacity: 1;
    transform: translateY(-15px);
  }

  &:hover {
    background: #890d2c;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const QueryButton = styled.button`
  background: #0ea5e9;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  max-width: 50%;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  color: white;
  border: none;
  margin-top: 2rem;
  opacity: 0;
  animation: ${SlideIn} 01s ease-in-out 2s forwards;
  font-size: 18px;


  &:hover {
    background: rgb(24, 115, 160);
    box-shadow: 0 2px 4px rgb(51, 51, 51);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;