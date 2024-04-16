import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import '../../../styles/blogsStyle.css'

function BlogsAndNews() {
    return (
        <div className='py-10'>
            <div className='flex justify-between items-center py-5'>
                <h1 className=' text-2xl font-bold'>Latest Blog &amp; News</h1>
                <button
                    className=' uppercase font-semibold text-white bg-[#7BAE00] px-5 py-4 flex items-center gap-2
                    transition-all duration-500 hover:bg-[#0B2B3C]'>View all
                    <span className=' font-bold'><HiArrowLongRight /></span>
                </button>
            </div>
            <div className='grid grid-cols-3 gap-5 py-5'>
                <div className='rotate-blog-image'>
                    <div className=' relative '>
                        <div className=' overflow-hidden'>
                            <img src="/blog.jpg" alt="" className=' blog-image' />
                        </div>
                        <div className=' absolute bottom-0 left-0 flex items-center bg-white px-5 py-2'>
                            <FaCalendarAlt />
                            <p className='font-semibold'> 19 Nov 2021</p>
                        </div>
                    </div>
                    <div className=' bg-white p-5'>
                        <p className='text-xl font-bold'>Vogue Shopping Weekend 2021.</p>
                        <p className=' text-[#666] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, inventore, beatae aperiam perferendis,
                        </p>
                        <div className=' pt-5 flex justify-between items-center'>
                            <div className=' flex items-center gap-3'>
                                <img src="/author.jpg" alt="" className=' rounded-full w-12 border-2 border-[#7bae00]' />
                                <p className=' font-bold'>Sara Taylor</p>
                            </div>
                            <p className=' bg-[#7bae00] p-3 text-white rounded-full
                            transition-all duration-500 hover:bg-[#0B2B3C]'><FaArrowRightLong /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsAndNews