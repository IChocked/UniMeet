// Home Page to input Name and Email

import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const Home = () => {
  // States for fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const history = useHistory()

  // Error message
  const error = () => toast.error('Please fill in all fields.')

  // Handle Submit Button
  const handleSubmit = () => {
    // Check to see if any fields are empty
    if (!email || !name) {
      error()
    }

    // If email is valid and non-empty fields, move to interests page
    else {
      history.push('/interests')
    }
  }

  return (
    <div className='home'>
      <Toaster position='top-center' reverseOrder={false} />

      <header>UniMeet</header>

      <div className='motto'>
        <h2>Meet with fellow students who share your interests.</h2>
      </div>

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

export default Home
