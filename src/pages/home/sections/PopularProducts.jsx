import React from 'react'
import ProductCard from '../../../components/ProductCard'
import { HiArrowLongRight } from "react-icons/hi2";

function PopularProducts() {
    return (
        <div className='my-5'>
            <div className='md:flex justify-between items-center py-5'>
                <h1 className=' text-2xl font-bold pb-5 md:pb-0'>Popular Products</h1>
                <button
                    className=' uppercase font-semibold text-white bg-[#7BAE00] px-5 py-4 flex items-center gap-2
                    transition-all duration-500 hover:bg-[#0B2B3C]'>View all
                    <span className=' font-bold'><HiArrowLongRight /></span>
                </button>
            </div>
            <div className='grid md:grid-cols-4 gap-5 py-5'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default PopularProducts