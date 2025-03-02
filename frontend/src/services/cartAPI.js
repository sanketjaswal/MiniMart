import { API } from './api';

// Add product to cart
export const addTOCart = (productId, token) => API.post("/add", productId,  { headers: { Authorization: token }} );

// Remove product from cart
export const removeFromCart = (productId, token) => API.delete(`/remove/${productId}`,  { headers: { Authorization: token }} );

// Get cart Products
export const getCart = (token) => API.get(`/get/${token}`, { headers: { Authorization: token } } )
