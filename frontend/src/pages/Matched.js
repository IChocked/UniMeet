// Matched Page that will show who the person matched with based on interests, will display zoom link to meet with person

import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { FaClipboard, FaCopy } from 'react-icons/fa'

const Matched = () => {
  //const [link] = useState(/*insert generated zoom link here*/);

  /*
    // Copies to Clipboard
  const clipboard = () => {
    const textArea = document.createElement('textarea')

    textArea.innerText = password;

    document.body.appendChild(textArea)

    textArea.select()

    document.execCommand('copy')

    textArea.remove()
  }
  */

  const history = useHistory()

  // Handle New Match
  const handleNewMatch = () => {
    history.push('/matching')
  }

  // Handle Home
  const handleHome = () => {
    history.push('/homepage')
  }

  return (
    <div className='matched'>
      <h3>You have been matched with -insert name-!</h3>

      <div className='zoom-link'>
        <input defaultValue='us.zoom.com/blah' name='zoom-link' readOnly />

        <button className='cpy-btn'>
          <FaClipboard />
        </button>
        </div>

        <div className='buttons'>
        <button
          onClick={handleNewMatch}
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

        <button
          onClick={handleHome}
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
          <b>Go home</b>
        </button>
      
      </div>
    </div>
  )
}

export default Matched
