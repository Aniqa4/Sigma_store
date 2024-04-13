import React from 'react'
import HeroSection from './sections/HeroSection'
import Features from './sections/Features'
import Banner2 from './sections/Banner2'
import PopularProducts from './sections/PopularProducts'
import DealsHotOfTheDay from './sections/DealsHotOfTheDay'

function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Banner2 />
      <PopularProducts/>
      <DealsHotOfTheDay/>
    </div>
  )
}

export default Home