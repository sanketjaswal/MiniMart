import React from 'react';
import styled from "styled-components";

const Cart = () => {

    const removeFromCart = () => { }

  return (
    <Container>
      <h2>Shopping Cart</h2>
      <p>Your cart is empty.</p>
          <CartItem k>
            {/* <img src={} alt="img" /> */}
            <div>
              <h3>Name</h3>
              <p>$50</p>
              <button onClick={() => removeFromCart()}>Remove</button>
            </div>
          </CartItem>
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
  margin-bottom: 10px;
  
  img {
    width: 80px;
    height: 80px;
  }
  
  button {
    background: red;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
`;
