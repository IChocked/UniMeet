// Interests page where user can select interests

import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

const EditInterests = () => {
  // Check to see if tags are selected

  const [checkedWrite, setCheckedWrite] = useState(false)

  const [checkedPhoto, setCheckedPhoto] = useState(false)

  const [checkedOut, setCheckedOut] = useState(false)

  const [checkedMusic, setCheckedMusic] = useState(false)

  const [checkedRead, setCheckedRead] = useState(false)

  const [checkedCook, setCheckedCook] = useState(false)

  const [checkedAI, setCheckedAI] = useState(false)

  const [checkedTravel, setCheckedTravel] = useState(false)

  const [checkedGarden, setCheckedGarden] = useState(false)

  const [checkedProgram, setCheckedProgram] = useState(false)

  const [checkedRun, setCheckedRun] = useState(false)

  const [checkedBike, setCheckedBike] = useState(false)

  const history = useHistory()

  // Handle Submit Button
  const handleSubmit = () => {
    var interests = []
    if (checkedWrite) {interests.push("write")}
    if (checkedPhoto) {interests.push("photo")}
    if (checkedOut) {interests.push("out")}
    if (checkedMusic) {interests.push("music")}
    if (checkedRead) {interests.push("read")}
    if (checkedCook) {interests.push("cook")}
    if (checkedAI) {interests.push("ai")}
    if (checkedTravel) {interests.push("travel")}
    if (checkedGarden) {interests.push("garden")}
    if (checkedProgram) {interests.push("program")}
    if (checkedRun) {interests.push("run")}
    if (checkedBike) {interests.push("bike")}

    modifyInterests(interests)

    history.push('/homepage')
  }

  // Handle Click
  const handleClickWrite = e => {
    // If not selected yet, change to selected
    if (checkedWrite === false) {
      setCheckedWrite(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedWrite(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickPhoto = e => {
    // If not selected yet, change to selected
    if (checkedPhoto === false) {
      setCheckedPhoto(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedPhoto(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickOut = e => {
    // If not selected yet, change to selected
    if (checkedOut === false) {
      setCheckedOut(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedOut(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickMusic = e => {
    // If not selected yet, change to selected
    if (checkedMusic === false) {
      setCheckedMusic(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedMusic(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickRead = e => {
    // If not selected yet, change to selected
    if (checkedRead === false) {
      setCheckedRead(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedRead(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickCook = e => {
    // If not selected yet, change to selected
    if (checkedCook === false) {
      setCheckedCook(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedCook(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickAI = e => {
    // If not selected yet, change to selected
    if (checkedAI === false) {
      setCheckedAI(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedAI(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickTravel = e => {
    // If not selected yet, change to selected
    if (checkedTravel === false) {
      setCheckedTravel(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedTravel(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickGarden = e => {
    // If not selected yet, change to selected
    if (checkedGarden === false) {
      setCheckedGarden(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedGarden(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickProgram = e => {
    // If not selected yet, change to selected
    if (checkedProgram === false) {
      setCheckedProgram(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedProgram(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickRun = e => {
    // If not selected yet, change to selected
    if (checkedRun === false) {
      setCheckedRun(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedRun(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  // Handle Click
  const handleClickBike = e => {
    // If not selected yet, change to selected
    if (checkedBike === false) {
      setCheckedBike(true)
      e.target.style.backgroundColor = '#A8DADC'
      // If selected, change to not selected
    } else {
      setCheckedBike(false)
      e.target.style.backgroundColor = '#fff'
    }
  }

  return (
    <div className='interests'>
      <h3>Interests</h3>

      <div className='label'>
        <h2>Please select up 5 topics that interest you.</h2>
      </div>

      <div className='tags'>
        <button
          onClick={handleClickWrite}
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
          Writing
        </button>

        <button
          onClick={handleClickPhoto}
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
          Photography
        </button>

        <button
          onClick={handleClickOut}
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
          Outdoors
        </button>

        <button
          onClick={handleClickMusic}
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
          Music
        </button>

        <button
          onClick={handleClickRead}
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
          Reading
        </button>

        <button
          onClick={handleClickCook}
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
          Cooking
        </button>

        <button
          onClick={handleClickAI}
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
          AI
        </button>

        <button
          onClick={handleClickTravel}
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
          Travel
        </button>

        <button
          onClick={handleClickGarden}
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
          Gardening
        </button>

        <button
          onClick={handleClickProgram}
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
          Programming
        </button>

        <button
          onClick={handleClickRun}
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
          Running
        </button>

        <button
          onClick={handleClickBike}
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
          Biking
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
        <b>Save</b>
      </button>
    </div>
  )
}

export default EditInterests
