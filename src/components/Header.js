import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './Header.css'
import aptLogo from '../assets/aptLogo.png'

const Header = () => {
  return (
    <Nav>
        <NavItem>
            <NavLink to="/" className='nav-link'>
            <img src={aptLogo} alt='apt home image' width="50px"/>
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink to="/login" className='nav-link'>
                Login
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink to="/signup" className='nav-link'>
                Sign Up
            </NavLink>
        </NavItem>
    </Nav>
  )
}

export default Header