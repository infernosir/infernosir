import React from 'react';
import logo from './Photos/logo.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
        <span className="logo-text">कुक्कुरः.com</span>
      </div>
      <ul className="navbar-links">
        <Link to="/"><li>Home</li></Link>
        <Link to="/cats"><li>Cats</li></Link>
        <Link to="/dogs"><li> Dogs </li></Link>
        {/* <li> Services</li> */}
        <Link to="/contactus"><li>Contact Us</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
