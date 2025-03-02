import React from 'react';
import { useState, useContext } from "react";
import { login } from '../services/authAPI';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // API call to login user
        const data = await login({ email, password });

        console.log(data.data);

        // Save user data in local storage
        // localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.error(
        'Error Logging in user: ' +
          (error.response?.data?.error || error.message)
      )
    }
    




  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
