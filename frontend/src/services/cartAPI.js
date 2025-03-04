import { API } from './api';

// Add product to cart
export const addTOCart = (productId, token) => API.post("/cart/add", productId,  { headers: { Authorization: token }} );

// Get cart Products
export const getCart = (token) => API.get(`/cart/get`, { headers: { Authorization: token } } )

// Remove product from cart
export const removeFromCart = (productId, token) => API.delete(`/cart/remove/${productId}`,  { headers: { Authorization: token }} );

// Increase quantity of a product in cart
export const increaseQuantity  = (productId, token) => API.put(`/cart/increase/${productId}`, {}, { headers: { Authorization: token }})

// Decrease quantity of a product in cart
 export const decreaseQuantity  = (productId, token) => API.put(`/cart/decrease/${productId}`, {},  { headers: { Authorization: token }})
