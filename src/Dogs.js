import React from 'react'
import labra from './Photos/labrador.webp'
import german from './Photos/german shephard.jpg'
import golden from './Photos/golden.png'
import pug from './Photos/pug.jpg'
import husky from './Photos/husky.jpg'
import beagle from './Photos/Beagle-Puppy.jpg'
import rott from './Photos/Rottweiler-On-White-10.jpg'
import pitbull from './Photos/pitbull.jpg'
import dachshund from './Photos/dachshund.jpg'

export default function Dogs() {
  return (
    <div>
      <div class="dog-cards" data-aos="zoom-in-left"> 
      <div class="cardd"data-aos="zoom-out-up">
         <img src={labra} alt="" height="220px" width="260px"/>
         <div class="dog-card-container">
            <h2>Labrador</h2>
            <p>Agile, gentle, kind, Intelligent</p> 
         </div>
      </div>
      <div class="cardd"data-aos="zoom-out-up">
        <img src={german} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>German Shephard</h2>
           <p>Loyal, obedient,watchful, courageous</p> 
        </div>
     </div>
     <div class="cardd"data-aos="zoom-out-up">
        <img src={golden} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Golden Retriever</h2>
           <p>friendly, reliable,kind, intelligent</p> 
        </div>
     </div>
     <div class="cardd"data-aos="zoom-out-up">
        <img src={pug} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Pug</h2>
           <p>Docile, Clever,Quiet, Charming</p> 
        </div>
     </div>
     <div class="cardd"data-aos="zoom-out-up">
        <img src={husky} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Husky</h2>
           <p>	Stubborn, lively,playful, clever</p> 
        </div>
     </div>
     <div class="cardd"data-aos="zoom-out-up">
        <img src={beagle} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Beagle</h2>
           <p>Determined, excitable,amiable, Gentle</p> 
        </div>
     </div>
     <div class="cardd"data-aos="zoom-out-up">
        <img src={rott} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Rottweiler</h2>
           <p>Steady,Alert,Courageous,Obedient</p> 
        </div>
     </div>
     <div class="cardd"data-aos="zoom-out-up">
        <img src={pitbull} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Pitbull</h2>
           <p>Steady,Alert,Courageous,Obedient</p> 
        </div>
     </div>
     <div class="cardd"data-aos="zoom-out-up">
        <img src={dachshund} alt="" height="220px" width="260px"/>
        <div class="dog-card-container">
           <h2>Dachshund</h2>
           <p>	Stubborn, lively,playful, clever</p> 
        </div>
     </div>
    </div>
</div> 
  )
}
