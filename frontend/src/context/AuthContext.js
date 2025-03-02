import React from 'react';
import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  // User authentication
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  // Login token to Local Storage
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };
  
  // Logout Funciton
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    // Auth Provider
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
