// Interests page where user can select interests

import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

const Interests = () => {
  // Check to see if tags are selected
  const [checked, setChecked] = useState(false)

  const history = useHistory()

  // Handle Submit Button
  const handleSubmit = () => {
    history.push('/schedule')
  }

  // Handle Click - Doesn't account for individual tag's status
  const handleClick = e => {
    // If not selected yet, change to selected
    if (checked === false) {
      setChecked(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setChecked(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  return (
    <div className='interests'>
      <h3>Interests</h3>

      <div className='tags'>
        <button
          onClick={handleClick}
          style={{
            color: '#1D3557',
            width: '120px',
            height: '40px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '15px',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          <b>Football</b>
        </button>

        <button
          onClick={handleClick}
          style={{
            color: '#1D3557',
            width: '120px',
            height: '40px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '15px',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          <b>Gym</b>
        </button>

        <button
          onClick={handleClick}
          style={{
            color: '#1D3557',
            width: '120px',
            height: '40px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '15px',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          <b>Programming</b>
        </button>

        <button
          onClick={handleClick}
          style={{
            color: '#1D3557',
            width: '120px',
            height: '40px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '15px',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          <b>Hiking</b>
        </button>

        <button
          onClick={handleClick}
          style={{
            color: '#1D3557',
            width: '120px',
            height: '40px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '15px',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          <b>Tennis</b>
        </button>

        <button
          onClick={handleClick}
          style={{
            color: '#1D3557',
            width: '120px',
            height: '40px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '15px',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          <b>Art</b>
        </button>

        <button
          onClick={handleClick}
          style={{
            color: '#1D3557',
            width: '120px',
            height: '40px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '15px',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          <b>Manga</b>
        </button>

        <button
          onClick={handleClick}
          style={{
            color: '#1D3557',
            width: '120px',
            height: '40px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '15px',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer',
            margin: '10px'
          }}
        >
          <b>Anime</b>
        </button>
      </div>

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
        <b>Next Step</b>
      </button>
    </div>
  )
}

export default Interests
