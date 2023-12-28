import React from 'react'
import './navbar.css'
import Logo from './Logo'
import Navigation from './Navigation/Navigation'
import Cta_Button from './Navigation/Cta_Button'

const Navbar = () => {
  return (
    <div className='navbar'>
    <Logo/>
    <Navigation/>
    <Cta_Button/>
    </div>
  )
}

export default Navbar