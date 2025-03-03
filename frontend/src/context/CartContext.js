import React from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    //state
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Product added to cart.")
  };

//   remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success("Product removed from cart.")
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
