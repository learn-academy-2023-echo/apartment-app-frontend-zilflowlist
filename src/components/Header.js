import React, { useState } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import './Header.css'
import aptLogo from '../assets/aptLogo.png'
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    
  return (
    <Nav className='navbar'>
        <NavItem>
            <NavLink to="/" className='nav-link'>
            <img src={aptLogo} alt='apt home image' width="50px"/>
            </NavLink>
        </NavItem>

        <div className={click ? "nav-menu active" : 
        "nav-menu"}>
        <NavItem>
            <NavLink to="/apartmentindex" className='nav-link'>
                View Listings
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink to="/apartmentnew" className='nav-link'>
                Create Listing
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
        </div>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>
            ) : (<FaBars size={20} style={{color: "#fff"}}/>) }
        </div>
    </Nav>
  )
}

export default Header