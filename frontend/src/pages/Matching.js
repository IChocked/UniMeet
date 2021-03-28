// Matching page that will show loading animation

import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

import loading from '../media/loading.gif'

const Matching = () => {
  return (
    <div className='matching'>
      <h3>Matching</h3>
      <img src={loading} width='250px' height='200px' alt='loading...' />
    </div>
  )
}

export default Matching
