import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { getCart, removeFromCart } from '../services/cartAPI';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const token = user?.token;
  const [loading, setLoading] = useState(true);

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
      }
    };
    fetchCart();
  }, [token, setCart]);

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId, token);
      setCart(cart.filter((item) => item.productId._id !== productId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // const handleQuantityChange = async (productId, newQuantity) => {
  //   if (newQuantity < 1) return;
  //   try {
  //     await updateCartQuantity(productId, newQuantity, token);
  //     setCart(cart.map((item) => item.productId._id === productId ? { ...item, quantity: newQuantity } : item));
  //   } catch (error) {
  //     console.error("Error updating quantity:", error);
  //   }
  // };

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {loading ? (
        <p>Loading...</p>
      ) : cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.productId._id}>
            <img src={item.productId.image} alt={item.productId.name} />
            <div>
            <video width="320" height="240" autoPlay muted loop>
          <source src={item.productId.image} type="video/mp4" />
        </video>
              <h3>{item.productId.name}</h3>
              <p>{item.productId.description}</p>
              <p>${item.productId.price}</p>
              <QuantityControls>
                {/* <button onClick={() => handleQuantityChange(item.productId._id, item.quantity - 1)}>-</button> */}
                <span>{item.quantity}</span>
                {/* <button onClick={() => handleQuantityChange(item.productId._id, item.quantity + 1)}>+</button> */}
              </QuantityControls>
              <RemoveButton onClick={() => handleRemove(item.productId._id)}>Remove</RemoveButton>
            </div>
            <button>Send Query</button>
          </CartItem>
        ))
      )}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;
