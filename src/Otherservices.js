import React, { useEffect } from 'react'
import pettrain from './Photos/Servicetraining.jpeg'
import grooming from './Photos/Servicegrooming.avif'
import petcare from './Photos/ServiceCare.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Otherservices() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div>
       <div class="otherservicescont">
  <p id="otherservices"  data-aos="fade-down-right">Other Services</p>
    <div class="services-container"  data-aos="fade-down-right">
      <div class="otherservice">
        <div class="container-card">
          <img src={pettrain} alt=""/>
          <div id="container">
            <p id="name">Pet Training</p>
            <p id="exp">We provide Training for dogs and cats.</p>
          </div>
        </div>
      </div>
      <div class="otherservice">
        <div class="container-card">
          <img src={grooming} alt=""/>
          <div id="container">
            <p id="name">Pet grooming</p>
            <p id="exp">We provide best pet grooming service</p>
          </div>
        </div>
      </div>
      <div class="otherservice">
        <div class="container-card">
          <img src={petcare} alt=""/>
          <div id="container">
            <p id="name">Pet care</p>
            <p id="exp"> Don't worry we will take care of your pet.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
