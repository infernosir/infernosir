import React from 'react'
import doggallery from './Photos/dogposter.png'
import catgallery from './Photos/catposter.png'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
<div class="services">
  <p id="service"> Thinking of buying a dog or a cat? </p>
  <div class="catdog">
  <Link to='./dogs'><img src={doggallery} alt=""/></Link>
  <Link to='./cats'><img src={catgallery} alt=""/></Link>
    </div>
  </div>
    </div>
  )
}
