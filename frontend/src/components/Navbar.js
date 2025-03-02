import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  // Authcontext
  const { user, logout } = useContext(AuthContext)

  return (
    <Nav>
      <h2>E-Commerce</h2>
      <Links>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <div onClick={logout}>LogOut</div>
            {user.isAdmin && <Link to="/adminPanel">Admin Panel</Link>}
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <Link to="/cart">Cart</Link>
      </Links>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #333;
  color: white;
`

const Links = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: white;
    text-decoration: none;
  }

  button {
    background: red;
    border: none;
    color: white;
    cursor: pointer;
  }
`
