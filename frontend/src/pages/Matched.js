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

  return (
    <div className='match'>
      <h3>You have been matched with -insert name-!</h3>

      <div className='zoom-link'>
        <input defaultValue='us.zoom.com/blah' name='zoom-link' readOnly />

        <button className='cpy-btn'>
          <FaClipboard />
        </button>
      </div>
    </div>
  )
}

export default Matched
