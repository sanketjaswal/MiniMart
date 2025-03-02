import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../services/authAPI'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await register({
        firstName,
        lastName,
        email,
        password,
      })

      console.log(data)
      // Set user token in local storage for future authenticated requests

      alert('Registration successful! Please log in.')
      navigate('/login')
    } catch (error) {
      console.error(
        'Error registering user: ' +
          (error.response?.data?.error || error.message)
      )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
