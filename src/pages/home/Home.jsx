import React from 'react'
import HeroSection from './sections/HeroSection'
import Features from './sections/Features'
import Banner2 from './sections/Banner2'
import PopularProducts from './sections/PopularProducts'
import DealsHotOfTheDay from './sections/DealsHotOfTheDay'
import ShopNow from './sections/ShopNow'
import HotDeals from './sections/HotDeals'
import FeaturedProducts from './sections/FeaturedProducts'
import MakeACall from './sections/MakeACall'
import BlogsAndNews from './sections/BlogsAndNews'
import Reviews from './sections/Reviews'

function Home() {
  return (
    <div>
      <div className='lg:max-w-[65%] lg:mx-auto mx-3'>
        <HeroSection />
        <Features />
        <Banner2 />
        <PopularProducts />
        {/* <DealsHotOfTheDay /> */}
        {/* <ShopNow /> */}
        <HotDeals />
        <FeaturedProducts />
      </div>
      <MakeACall />
      <div className='lg:max-w-[65%] lg:mx-auto mx-3'>
         <BlogsAndNews />
        <Reviews/>
      </div>
    </div>
  )
}

export default Home