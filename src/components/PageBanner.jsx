import React from 'react'
import { Link } from 'react-router-dom'
import { BsDot } from "react-icons/bs";

function PageBanner({ pageName }) {
    return (
        < div className='relative' >
            <img src="/shop.jpg" alt="" className='w-full' />
            <div className=' bg-[#000000bf] absolute top-0 left-0 bottom-0 right-0 '>
                <div className='max-w-[65%] mx-auto text-white flex items-center h-full '>
                    <div className='flex justify-between items-center w-full'>
                        <p className=' text-4xl font-bold'>{pageName}</p>
                        <div className='flex gap-2 items-center font-semibold'>
                            <Link to={'/'}>Home</Link>
                            <span className=' text-xl'><BsDot /></span>
                            <p className='text-[#ccc]'>{pageName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PageBanner