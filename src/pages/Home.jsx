import React from 'react';
import Hero from "../components/home/Hero"
import Accreditation from "../components/home/Accreditation"
import Slider from "../components/home/Slider"
import Instructor from "../components/home/Instructor"

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Accreditation />
      <Instructor/>
    </div>
  )
}

export default Home