// Homepage for logged in user, show previous matches, upcoming meetings, interests

import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { FaClipboard, FaCopy } from 'react-icons/fa'

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
        <div className='section'>
          <h4>Interests</h4>
          <div className='buttons-hp'>
            <button
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
              <b>
                <h7>Gym</h7>
              </b>
            </button>

            <button
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
              <b>
                <h7>Programming</h7>
              </b>
            </button>

            <button
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
              <b>
                <h7>Hiking</h7>
              </b>
            </button>
          </div>

          <button
            onClick={handleEdit}
            type='submit'
            style={{
              color: 'white',
              width: '100px',
              height: '25px',
              borderRadius: '25px',
              border: 'none',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#E63946',
              fontSize: '10px',
              resize: 'none',
              boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
              cursor: 'pointer'
            }}
          >
            <b>Edit Interests</b>
          </button>
        </div>

        <hr style={{ width: '50%' }} />

        <div className='section'>
          <h4>Matches</h4>
          <h1>John Doe</h1>
          <p>March 27 4:30pm</p>
          <div className='zoom-link'>
            <input defaultValue='us.zoom.com/blah' name='zoom-link' readOnly />

            <button className='cpy-btn'>
              <FaClipboard />
            </button>
          </div>

          <h1>Jane Doe</h1>
          <p>March 27 4:30pm</p>
          <div className='zoom-link'>
            <input defaultValue='us.zoom.com/blah' name='zoom-link' readOnly />

            <button className='cpy-btn'>
              <FaClipboard />
            </button>
          </div>

          <h1>Dababy</h1>
          <p>March 27 4:30pm</p>
          <div className='zoom-link'>
            <input defaultValue='us.zoom.com/blah' name='zoom-link' readOnly />

            <button className='cpy-btn'>
              <FaClipboard />
            </button>
          </div>

          <button
            onClick={handleSubmit}
            type='submit'
            style={{
              color: 'white',
              width: '100px',
              height: '25px',
              borderRadius: '25px',
              border: 'none',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#E63946',
              fontSize: '10px',
              resize: 'none',
              boxShadow: '0 4px 7px rgba(0, 0, 0, 0.4)',
              cursor: 'pointer'
            }}
          >
            <b>Get new match</b>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Homepage
