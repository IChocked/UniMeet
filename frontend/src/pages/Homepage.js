// Homepage for logged in user, show previous matches, upcoming meetings, interests

import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

const Homepage = () => {
  const history = useHistory()

  // Handle Edit Interests
  const handleEdit = () => {
    history.push('/editinterests')
  }

  // Handle Submit Button
  const handleSubmit = () => {
    history.push('/matching')
  }
  return (
    <div className='homepage'>
      <h3>Welcome -user-!</h3>

      <div className='content'>
        <h4>Interests</h4>
        <p>Gaming, Programming, Sports</p>

        <button
          onClick={handleEdit}
          type='submit'
          style={{
            color: '#1D3557',
            width: '100px',
            height: '25px',
            borderRadius: '25px',
            border: 'none',
            backgroundColor: '#fff',
            fontSize: '10px',
            resize: 'none',
            boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer'
          }}
        >
          <b>Edit Interests</b>
        </button>

        <h4>Previous Matches</h4>
        <p>Gaming, Programming, Sports</p>

        <h4>Upcoming Meetings</h4>
        <p>Gaming, Programming, Sports</p>
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
        <b>Get new match</b>
      </button>
    </div>
  )
}

export default Homepage
