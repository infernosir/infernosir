import React from 'react'
import Navbar from './Navbarmain'
import Dogs from './Dogs'
import Otherservices from './Otherservices'
import Aboutus from './Aboutus'
import Footer from './Footer'
import Food from './Food'
import Carousel from './Carousel'

export default function Doggallery() {
  return (
    <div>
      <Navbar></Navbar>
      <Dogs></Dogs>
      <Food></Food>
      <Otherservices></Otherservices>
      <Aboutus></Aboutus>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  )
}
