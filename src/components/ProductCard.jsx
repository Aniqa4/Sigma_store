import React from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import '../styles/cardStyle.css'
import { Link } from 'react-router-dom';

function ProductCard() {
    return (
        <Link to={'/product-details'}>
            <div className='bg-[#FFFFFF] p-5 border hover:border-[#7BAE00] relative rotate-image  add-to-cart-effect'>
                <div className='grid gap-5'>
                    <div className='relative'>
                        <img src="/product.png" alt="" />
                        <div className='add-to-cart'>
                            <div className='flex justify-center'>
                                <p className='hover:bg-[#7BAE00] bg-white font-semibold shadow-lg px-10 py-2 '
                                    style={{ boxShadow: '50px 0 10px rgba(0, 0, 0, 0.1)' }}>Add to Cart</p>
                            </div>
                        </div>
                    </div>
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
                <div className=' absolute top-0 left-0'>
                    <p className='bg-[#7BAE00] font-bold text-white uppercase px-5 py-1'>Sale</p>
                </div>
                <div className=' absolute top-3 right-3'>
                    <p className='bg-[#7BAE00] font-bold text-white text-xl uppercase p-3 rounded-full'><MdFavoriteBorder /></p>
                </div>
                <div className=' absolute top-16 right-3 view-button'>
                    <p className='bg-[#7BAE00] font-bold text-white text-xl uppercase p-3 rounded-full'><FaRegEye /></p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard