import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  // Authcontext
  const { user, logout } = useContext(AuthContext);

  return (
    <Nav>
    <Brand>Mini Mart</Brand>
    <Links>
      <StyledLink to="/">Home</StyledLink>
      {user ? (
        <>
          <LogoutButton onClick={logout}>LogOut</LogoutButton>
          {user.isAdmin && <StyledLink to="/adminPanel">Admin Panel</StyledLink>}
        </>
      ) : (
        <>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </>
      )}
      <StyledLink to="/cart">Cart</StyledLink>
    </Links>
  </Nav>
  )
}

export default Navbar

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(28, 28, 28);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Brand = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column;
    gap: 1rem;

  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s ease-in-out;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #0ea5e9;
    background-color: rgb(22, 22, 22);
  }
`;

const LogoutButton = styled.div`
  background:rgba(225, 29, 71, 0.06);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: white;
  font-size: 1.1rem;

  &:hover {
    background: #be123c;
  }
`;