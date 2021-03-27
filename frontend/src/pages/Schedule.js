// Schedule page where user will select time they are available

import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

const Schedule = () => {
  const history = useHistory()

  // Handle Submit Button
  const handleSubmit = () => {
    history.push('/matching')
  }

  return (
    <div className='schedule'>
      <h3>Schedule</h3>

      <div className='label'>
        <h2>Please select the times you're available to talk.</h2>
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

export default Schedule
