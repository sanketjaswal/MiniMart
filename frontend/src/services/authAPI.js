import { API } from './api';


// Register User
export const register = (userData) => API.post("/auth/register", userData);

// Login User
export const login = (userData) => API.post("/auth/login", userData);