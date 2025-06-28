import React from 'react'
import Hero from '../components/Hero'
import GridLayout from '../components/GridLayout'
import BuildSection from '../components/BuildSection'
import Specs1 from '../components/Specs1'
import Specs2 from '../components/Specs2'
import Specs3 from '../components/Specs3'

const Home = () => {
  return (
    <div>
      <Hero />
      <GridLayout />
      <BuildSection />
      <Specs1 />
      <Specs2 />
      <Specs3 />
    </div>
  )
}

export default Home
