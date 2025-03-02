import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import AdminPanel from './pages/AdminPanel'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

function App() {
  // Check if user is authenticated
  const storedUser = localStorage.getItem('user')
  const isAuthenticated = storedUser ? JSON.parse(storedUser).isAdmin : false

  // const isAuthenticated = true;
  console.log('isAuthenticated:', isAuthenticated)

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            {/* Only available for Admin */}
            <Route
              path="/adminPanel"
              element={isAuthenticated ? <AdminPanel /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
