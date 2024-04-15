import React from 'react'
import HeroSection from './sections/HeroSection'
import Features from './sections/Features'
import Banner2 from './sections/Banner2'
import PopularProducts from './sections/PopularProducts'
import DealsHotOfTheDay from './sections/DealsHotOfTheDay'
import ShopNow from './sections/ShopNow'
import HotDeals from './sections/HotDeals'
import FeaturedProducts from './sections/FeaturedProducts'

function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Banner2 />
      <PopularProducts />
      <DealsHotOfTheDay />
      <ShopNow />
      <HotDeals />
      <FeaturedProducts />
    </div>
  )
}

export default Home