import React, { useEffect } from 'react'
import logo from './Photos/logo.png'
import { Link, NavLink } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Navbar() {
  return (
    <>
    <div class="container">                                      
      <div class="namelogo">
          <img src={logo} alt="" height="80px" width="150px" class="logo"/>
          <Link to="/"><h1 id="pagename">Kuttabilla.com</h1></Link>
                </div> 
    <nav className="navbar1">
      <ul>
        <Link to="/"><li><i class="fa-solid fa-paw"></i> </li></Link>
        <Link to={"/dogs"}><li>Dogs</li></Link>
        <Link to="/cats"><li>Cats</li></Link>
        <Link href="#otherservices"><li>Services</li></Link>
        {/* <Link href="#address"><li>Contact Us</li></Link> */}
        <Link href="#aboutus"><li>About Us</li></Link>
        {/* <span class="search"><input type="search"/><button><i class="fa-solid fa-magnifying-glass"></i></button></span> */}
      </ul>
    </nav>
    </div>
 
  
    </>
  )
}
