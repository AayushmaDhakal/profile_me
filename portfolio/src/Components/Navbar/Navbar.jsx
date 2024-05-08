import React from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt=""/>
     <ul className="nav-menu">
        <li><Link to="home" smooth={true} duration={1000}>Home</Link></li> 
        <li><Link to="aboutme" smooth={true} duration={1000}>About Me</Link></li> 
        <li><Link to="service" smooth={true} duration={1000}>Services</Link></li> 
        <li><Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li> 
        <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li> 
     </ul>
<div className="nav-connect"> Connect With Me</div>
    </div>
  )
}

export default Navbar
