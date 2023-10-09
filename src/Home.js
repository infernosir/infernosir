import React from 'react'
import Services from './Services'
import Otherservices from './Otherservices'
import Aboutus from './Aboutus'
import Footer from './Footer'
import Carousel from './Carousel'
import Food from './Food'
import Navbarmain from './Navbarmain'
import Mainphoto from './Mainphoto'

export default function Home() {
  return (
    <div>
      <Navbarmain></Navbarmain>
      <Mainphoto></Mainphoto>
      <Services></Services>
      <Otherservices></Otherservices>
      <Food></Food>
      <Aboutus></Aboutus>
      <Carousel></Carousel>
      <Footer></Footer>
      
    </div>
  )
}
