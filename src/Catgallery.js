import React from 'react'
import Navbar from './Navbarmain'
import Cats from './Cats'
import Footer from './Footer'
import Otherservices from './Otherservices'
import Aboutus from './Aboutus'
import Food from './Food'
import Carousel from './Carousel'

export default function Catgallery() {
  return (
    <div>
      <Navbar/>
      <Cats/>
      <Food></Food>
      <Otherservices></Otherservices>
      <Aboutus></Aboutus>
      <Carousel></Carousel>

      <Footer/>
    </div>
  )
}
