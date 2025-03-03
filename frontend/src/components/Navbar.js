import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import styled, { keyframes } from 'styled-components'

import { AuthContext } from '../context/AuthContext'
import logoIcon from '../assets/logo.png'
import menu from '../assets/menu.png'
import menuOn from '../assets/menu-on.png'
import menuHover from '../assets/menu-hover.png'

const Navbar = () => {
  // Authcontext
  const { user, logout } = useContext(AuthContext)
  const [showDropdown, setShowDropdown] = useState(true)

  // Menu Animation
  const [isAnimating, setIsAnimating] = useState(false);

  //menu toggle and anutomatic close
  const closeMenuAfterTime = () => {
    setShowDropdown((prev) => !prev);
    if (showDropdown !== false) { 
      setTimeout(() => {
        document.getElementById('menu-toggle')?.click();
      }, 10000);
    }
  };
  
  // Menu Animation
  const menuClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <Nav>
      <Brand>
        <Logo src={logoIcon} alt="shopping-cart" />
        <BrandText>
          <Mini>Mini</Mini>
          <Mart>Mart</Mart>
        </BrandText>
      </Brand>
      {showDropdown ? (
        ''
      ) : (
        <Links>
          <StyledLink to="/">Home</StyledLink>
          {user ? (
            <>
              <LogoutButton onClick={logout}>LogOut</LogoutButton>
              {user.isAdmin && (
                <StyledLink $admin to="/adminPanel">
                  Admin Panel
                </StyledLink>
              )}
            </>
          ) : (
            <>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </>
          )}
          <StyledLink to="/cart">Cart</StyledLink>
        </Links>
      )}
      <ToggleButton
        id='menu-toggle'
        src={showDropdown ? menu : menuOn}
        $showDropdown={showDropdown}
        $isAnimating={isAnimating}
        alt="menu"
        onClick={() => {closeMenuAfterTime(); menuClick() }}
      />{' '}
    </Nav>
  )
}

export default Navbar

// Styled Components

const logoAnimation = keyframes`
0% {
  padding-block:23%;
  padding-left: 45%;
  transform: scale(2);
  }
  50% {
  padding-left: 45%;
  padding-block: 1rem;
    opacity: 1;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`

const SlideIn = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`
const wobble = keyframes`
  0% { transform: scale(1) }
  10% { transform: scale(0.9) }
  70% { transform: scale(1.2) }
  100% { transform: scale(1) ; }
`


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(28, 28, 28);
  color: white;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 9999;
  animation: ${logoAnimation} 2.5s ease-in-out forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`

const Brand = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Logo = styled.img`
  width: 48px;
  height: 48px;
  padding: 0 0.2rem;
  border-radius: 5px;
  cursor: pointer;
`

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`

const Mini = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #0ea5e9;
`

const Mart = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 10%;
  /* background-color: #fff; */

  /* background-color: red; */

  @media (max-width: 768px) {
    width: 100%;

    margin-top: 1rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s ease-in-out;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  user-select: none;
  font-weight: 700;
  opacity: 0;

  &:nth-child(1) {
    animation: ${SlideIn} 0.4s ease-in-out forwards;
  }

  &:nth-child(2) {
    animation: ${SlideIn} 0.3s ease-in-out forwards;
  }

  &:nth-child(3) {
    animation: ${SlideIn} 0.2s ease-in-out forwards;
  }

  &:nth-child(4) {
    animation: ${SlideIn} 0.1s ease-in-out forwards;
  }


  background-color: ${({ $admin }) =>
    $admin ? 'rgba(14, 164, 233, 0.06)' : 'transparent'};

  &:hover {
    color: #0ea5e9;
    transform: scale(1.2);
    background-color: rgb(22, 22, 22);
    box-shadow: 0 0 6px black;
  }

  
  @media (max-width: 768px) {
    text-align: right;
    width: 100%;}
`

const LogoutButton = styled.div`
  background: rgba(225, 29, 71, 0.06);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  color: white;
  font-size: 1.1rem;
  opacity: 0;
  animation: ${SlideIn} 0.5s ease-in-out forwards;

  &:hover {
    background: #be123c;
    transform: scale(1.1);
    box-shadow: 0 0 6px black;
  }
`

const ToggleButton = styled.img`
  width: 48px;
  height: 48px;
  padding: 0 0.2rem;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 30%;

  &:hover {
    content: ${({ $showDropdown }) =>
      !$showDropdown ? `url(${menuOn})` : `url(${menuHover})`};
  }
  
  animation: ${({ $isAnimating }) => ($isAnimating ? wobble : "none")} 0.5s ease-in-out forwards;

  /* &:active{
    animation: ${wobble} 0.5s ease-in-out forwards;
  } */

  @media (max-width: 768px) {
    right: 5%;
    top: 35px;
    }
`
