import React from 'react'
import { FaStar } from "react-icons/fa";
import '../styles/cardStyle.css'

function ProductCard() {
    return (
        <div className='bg-[#FFFFFF] mx-auto p-5 border hover:border-[#7BAE00] rotate-image'>
            <img src="/product.png" alt=""/>
            <div className='text-center grid gap-3'>
                <div className='flex justify-center'>
                    <p className='flex gap-1 text-[#FC0]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                </div>
                <p className=' font-semibold'>Product Name</p>
                <p className='flex items-center mx-auto'>
                    <span className='text-[#7BAE00] font-extrabold text-xl'>$200</span>&nbsp;
                    <span className=' line-through'>$210</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard