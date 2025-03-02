import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../services/authAPI'

const Register = () => {
  // States
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    //useNavigate hook
  const navigate = useNavigate()

  // Register User
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // API call to register
      const { data } = await register({
        firstName,
        lastName,
        email,
        password,
      })

      console.log(data)

      alert('Registration successful! Please log in.')

      // Redirect to login page
      navigate('/login')
    } catch (error) {
      console.error(
        'Error registering user: ' +
          ( error.message)
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
