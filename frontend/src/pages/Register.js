// Register page, input name and email

import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const Register = () => {
  // States for fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  // Error message
  const error = () => toast.error('Please fill in all fields.')

  // Email error
  const emailError = () => toast.error('Invalid email address.')

  // Handle Submit Button
  const handleSubmit = () => {
    // Check to see if any fields are empty
    if (!email || !name || !password) {
      error()
    }

    // Non-empty fields
    else {
      // Check to see if email has .edu
      if (!email.includes('.edu')) {
        emailError()
      }
      // If email is valid and non-empty fields, move to interests page
      else {
        register(email, password)
      }
    }
  }

  return (
    <div className='register'>
      <Toaster position='top-center' reverseOrder={false} />

      <h3>Register</h3>

      <form>
        <input
          defaultValue={name}
          className='input'
          placeholder='Name'
          onChange={e => {
            setName(e.target.value)
          }}
          style={{
            color: 'black',
            width: '300px',
            height: '30px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '20px',
            borderRadius: '25px',
            padding: '10px',
            border: 'none'
          }}
        />
      </form>

      <form>
        <input
          defaultValue={email}
          className='input'
          type='email'
          placeholder='E-mail'
          onChange={e => {
            setEmail(e.target.value)
          }}
          style={{
            color: 'black',
            width: '300px',
            height: '30px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '20px',
            borderRadius: '25px',
            padding: '10px',
            border: 'none'
          }}
        />
      </form>

      <form>
        <input
          defaultValue={password}
          className='input'
          type='password'
          placeholder='Password'
          onChange={e => {
            setPassword(e.target.value)
          }}
          style={{
            color: 'black',
            width: '300px',
            height: '30px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '20px',
            borderRadius: '25px',
            padding: '10px',
            border: 'none'
          }}
        />
      </form>

      <button
        onClick={handleSubmit}
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
        <b>Get Started!</b>
      </button>
    </div>
  )
}

export default Register
