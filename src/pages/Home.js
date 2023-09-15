import React from 'react'
import './Home.css';
import aptGif from '../assets/Apt-slide.gif'


function Home() {
  return (
    <div className='home-container'>
      <div className='background-img'>
        <img src={aptGif} className='home-img' alt='home-img'/>
      </div>
      <div className='home-content'>
        <h2>Welcome to Apartment Finder!</h2> 
        <p>Looking for your next home? You are on the right spot!</p>
        </div>
    </div>
  )
}

export default Home