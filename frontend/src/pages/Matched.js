// Matched Page that will show who the person matched with based on interests, will display zoom link to meet with person

import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { FaClipboard, FaCopy } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters
} from '../characters.js'

const Matched = () => {
  const history = useHistory()

  // Displays message if no password has been generated
  const errorCopy = () => toast('No password has been generated.')

  // Notifies if password has been copied to clipboard
  const notify = () => toast('Copied to clipboard.')

  // Creates Entire Link
  const handleLink = () => {
    let characterList = ''

    characterList += upperCaseLetters

    characterList += lowerCaseLetters

    characterList += numbers

    const sublink = createLink(characterList)

    let template = 'talky.io/' + sublink
    return template
  }

  // Generate Sublink
  const createLink = characterList => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < 6; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  // Copies to Clipboard
  const clipboard = () => {
    const textArea = document.createElement('textarea')

    textArea.innerText = link

    document.body.appendChild(textArea)

    textArea.select()

    document.execCommand('copy')

    textArea.remove()
  }

  // Handle Copy
  const handleCopy = () => {
    if (link === '') {
      errorCopy()
    } else {
      notify()
      clipboard()
    }
  }

  // Handle New Match
  const handleNewMatch = () => {
    history.push('/matching')
  }

  // Handle Home
  const handleHome = () => {
    history.push('/homepage')
  }

  const link = handleLink()

  return (
    <div className='matched'>
      <Toaster position='top-center' reverseOrder={false} />
      <h3>You have been matched with -insert name-!</h3>

      <div className='zoom-link'>
        <input defaultValue={link} name='zoom-link' readOnly />

        <button className='cpy-btn' onClick={handleCopy} style={{cursor: 'pointer'}}>
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
