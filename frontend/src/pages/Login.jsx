import React from 'react'
import { useState, useContext } from 'react'

import { toast } from 'react-toastify';

import { login } from '../services/authAPI'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const Login = () => {
  //states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //login context
  const { login: loginUser } = useContext(AuthContext)

  //useNavigate hook
  const navigate = useNavigate()

  // Login User
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // API call to login user
      const data = await login({ email, password })
      console.log(data.data)

      // Save user data in local storage
      loginUser(data.data)
      toast.success(`Login successful!`)

      // Redirect to home page
        navigate('/')
    } catch (error) {
      toast.error("Error Logging In!")
      console.error(
        'Error Logging in user: ' +
          (error.response?.data?.error || error.message)
      )
    }
  }

  return (
    <Container>
      <Title>Login</Title>
      <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <SubmitButton type="submit">Login</SubmitButton>
      </form>
    </FormContainer>
    </Container>
  )
}

export default Login

const slideRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  95% {
    transform: translateX(-2%);
  }
  100% {
    transform: translateX(0);
  }
`;


const SlideIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  text-align: center;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  margin-top: 5%;
  background: transparent;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0);
  transition: 0.3s ease-in-out;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  filter: saturate(0.3);
  opacity: 0;
  animation: ${SlideIn} 1s ease-in-out 1s forwards;


  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    background: rgb(29, 29, 29);
    color: #f3f4f6;
    filter: saturate(1);
  }
`;


const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #a3a3a3;
  animation: ${slideRight} 01s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 98%;
  padding: 0.75rem 0;
  padding-left: 2%;
  margin: 0.5rem 0;
  border: none;
  border-radius: 0.5rem;
  background: #333;
  color: white;
  font-size: 1rem;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
    background: #444;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: #0ea5e9;
  border: none;
  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  opacity: 0.9;

  &:hover {
    background: rgb(24, 115, 160);
    opacity: 1;
  }
`;
