import React from 'react'
import ProductCard from '../../../components/ProductCard'

function HeroSection() {
    return (
        <div className=' container mx-auto'>
            <div className='grid grid-cols-4 gap-5'>
                <ProductCard />
            </div>
        </div>
    )
}

export default HeroSection