import React from 'react'
import drool from './Photos/droollogo-removebg-preview.png'
import pedigree from './Photos/pedigreelogo-removebg-preview.png'

export default function Aboutus() {
  return (
    <div>
       <div class="aboutus" id="aboutus">
     <p id="about1">About Us</p>
     <p id="about2">We are a family-owned Petshop dedicated to providing and supplying best and healthy pets. We have been in the business of providing best pets ever since we started back in 2000. Being in the business for several years now, we are proud to say that we are a company known to grant high-quality and healthy pets as well as grooming services.</p>
 </div>
     <div class="brand-container">
     <p id="brands">Brands We Work With</p>
     <div class="brands">
      <img src={drool} alt="" height="200px" width="300px"/>
      <img src={pedigree} alt="" height="200px" width="300px"/>
     </div>
    </div>
    </div>
  )
}
