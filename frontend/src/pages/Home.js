// Home Page to register or login

import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  // Handle Login
  const handleLogin = () => {
    history.push('/login')
  }

  // Handle Register
  const handleRegister = () => {
    history.push('/register')
  }

  return (
    <div className='home'>
      <header>UniMeet</header>

      <div className='label'>
        <h2>Meet with fellow students who share your interests.</h2>
      </div>

      <div className='buttons'>
        <button
          onClick={handleRegister}
          type='submit'
          style={{
            color: 'white',
            width: '150px',
            height: '50px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#E63946',
            fontSize: '15px',
            resize: 'none',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer'
          }}
        >
          <b>Register</b>
        </button>

        <button
          onClick={handleLogin}
          type='submit'
          style={{
            color: 'white',
            width: '150px',
            height: '50px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#E63946',
            fontSize: '15px',
            resize: 'none',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer'
          }}
        >
          <b>Login</b>
        </button>
      </div>
    </div>
  )
}

export default Home
