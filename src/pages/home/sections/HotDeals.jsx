import React from 'react'
import MiniProductCart from '../../../components/MiniProductCart'
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function HotDeals() {
    return (
        <div className='grid md:grid-cols-4 gap-10'>
            <div className=' p-5 bg-white border transition-all duration-500 hover:border-[#7BAE00]'>
                <h1 className='border-b pb-2 font-semibold text-xl'>Hot Deals</h1>
                <div className='py-2 grid gap-2'>
                    <MiniProductCart />
                    <MiniProductCart />
                    <MiniProductCart />
                    <MiniProductCart />
                </div>
            </div>
            <div className=' p-5 bg-white border transition-all duration-500 hover:border-[#7BAE00]'>
                <h1 className='border-b pb-2 font-semibold text-xl'>Fresh Red Seedless</h1>
                <div className='py-2 grid gap-2'>
                    <MiniProductCart />
                    <MiniProductCart />
                    <MiniProductCart />
                    <MiniProductCart />
                </div>
            </div>
            <div className=' p-5 bg-white border transition-all duration-500 hover:border-[#7BAE00]'>
                <h1 className='border-b pb-2 font-semibold text-xl'>Best Seller</h1>
                <div className='py-2 grid gap-2'>
                    <MiniProductCart />
                    <MiniProductCart />
                    <MiniProductCart />
                    <MiniProductCart />
                </div>
            </div>
            <div className=' p-5 bg-slate-500 gap-5 text-white'>
                <h4 className=' text-xl font-bold pb-3'>85% FAT FREE</h4>
                <h2 className=' text-2xl font-bold pb-3'>Low-Fat Meet</h2>
                <p className=' text-xl font-bold pb-5'>Started ad <span className='text-[#7BAE00]'>$79.99</span></p>
                <div>
                    <Link to={'/shop'}>
                        <button
                            className=' bg-white text-[#7BAE00] font-semibold px-7 py-3 rounded-full flex items-center gap-3
                                transition-all duration-500 hover:bg-[#7BAE00] hover:text-white'>
                            SHOP NOW<HiArrowSmallRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HotDeals