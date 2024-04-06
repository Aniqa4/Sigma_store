import React from 'react'
import HeroSection from './sections/HeroSection'
import Features from './sections/Features'
import Banner2 from './sections/Banner2'

function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Banner2 />
      <HeroSection />
    </div>
  )
}

export default Home