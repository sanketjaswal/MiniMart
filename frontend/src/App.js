import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminPanel from './pages/AdminPanel'
import Cart from './pages/Cart'
import { AuthProvider } from './context/AuthContext'

function App() {
  // Check if user is authenticated

  const storedUser = localStorage.getItem('user')

  console.log(storedUser)

  const isAuthenticated = storedUser ? JSON.parse(storedUser).isAdmin : false

  // const isAuthenticated = true;
  console.log('isAuthenticated:', isAuthenticated)

  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default App
