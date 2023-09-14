import React from 'react'
import './Home.css';
import aptGif from '../assets/Apt-slide.gif'


function Home() {
  return (
    <div>
        <h2>Welcome to Apartment Finder</h2> 
        <img src={aptGif} />
    </div>
  )
}

export default Home