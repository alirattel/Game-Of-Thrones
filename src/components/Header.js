import React from 'react'
import image from '../img/wall.jpg'
import About from './About'
const Header = () => {
  return (
    <header>
      <h1 className='GOT'>GAME OF THRONES</h1>
      <div className='img-div'>
        <img src={image} width={'80%'} alt="" />
      </div>
      <About />
    </header>
  )
}

export default Header