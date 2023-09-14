import React from 'react'
import './NotFound.css'
import notFoundImg from '../assets/not-found-4k.jpeg'

const NotFound = () => {
  return (
    <div>
        <img className='notFoundImg' src={notFoundImg} />
        <h1>Sorry Nobody's Home :(</h1>
    </div>
  )
}

export default NotFound