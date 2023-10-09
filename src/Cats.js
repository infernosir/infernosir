import React from 'react'
import Bengalcat from './Photos/bengal-cat.jpg'
import persian from './Photos/persiancat.webp'
import siamese from './Photos/siamese.jpg'
import bombay from './Photos/bombaycat.jpg'
import himalyancat from './Photos/himalyancat.jpg'
import exoticcat from './Photos/exoticcat.webp'
export default function Cats(){
  return (
    <div>
      <div class="dog-cards" id='catloc' data-aos="zoom-in-left">
      <div class="cardd">
         <img src={Bengalcat} alt="" height="220px" width="260px"/>
         <div class="dog-card-container">
            <h2>Bengal Cat</h2>
         </div>
      </div>
      <div class="cardd">
        <img src={persian} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Persian Cat</h2>
        </div>
     </div>
     <div class="cardd">
        <img src={siamese} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Siamese Cat</h2>
        </div>
     </div>
     <div class="cardd">
        <img src={bombay} alt="" height="220px" width="260px"/>
        <div class="dog-cardd-container">
           <h2>Bombay Cat</h2>
        </div>
     </div>
     <div class="cardd">
        <img src={himalyancat} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Himalyan Cat</h2>
        </div>
     </div>
     <div class="cardd">
        <img src={exoticcat} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Exotic Cat</h2>
        </div>
       </div>
     </div> 
    </div>
  )
}
