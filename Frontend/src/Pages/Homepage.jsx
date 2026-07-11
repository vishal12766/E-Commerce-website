import React from 'react'
import Navbar from '../Components/navbar'
import Content from '../Components/heroImg'
import Slide from '../Components/slide'
import HeroImg from '../Components/heroImg'
import Slide2 from '../Components/slide2'
import Slide3 from '../Components/slide3'
import Slide4 from '../Components/slide4'
import Footer from '../Components/footer'

const Homepage = () => {
  return (
    <div>
      <HeroImg/>
      <Slide/>
      <Slide2/>
      <Slide3/>
      <Slide4/>
    </div>
  )
}

export default Homepage