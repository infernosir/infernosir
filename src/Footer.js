import React from 'react'
import footlogo from './Photos/logo.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
       <footer >
<div class="footer">
    <div class="footerlogo"><img src={footlogo} alt="" height="100px" width="180px"/>
    </div>
    <div class="address" id="address"> <p class="footerhead">Address</p> Village Gopal Nagar<br/>PO Daruhi<br/>Hamirpur (H.P.) 177001 <br/> Phone: 8278710241 
      <br/>
    </div>
    <div class="footer_nav">
    <Link to="/"><li><i class="fa-solid fa-paw"></i> </li></Link>
        <Link to={"/dogs"}><li>Dogs</li></Link>
        <Link to="/cats"><li>Cats</li></Link>
        <Link to="/contactus"><li>Contact Us</li></Link>
    </div>
    <div class="news">
    <div class="email">
        <button style={{color:'rgb(255, 255, 255)', backgroundColor:'rgb(0, 0, 0)',fontSize: '14px' , paddingRight: '2px' ,borderRadius: '4px', border: 'none'}}><input type="email" placeholder="Enter for News"/>Sign Up</button>
    </div>
    <div class="social">
     <a href="whatsapp.com"><i class="fa-brands fa-whatsapp"></i></a>
     <a href="http//www.facebook.com"><i class="fa-brands fa-facebook"></i></a>  
     <a href="http//www.instagram.com"><i class="fa-brands fa-instagram" ></i></a> 
     <a href="http//www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
    </div>
  </div>
</div>
</footer>
  )
}
