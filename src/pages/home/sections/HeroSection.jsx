import React, { useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import Slider from './Slider';

function HeroSection() {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    return (
        <div className=' pt-10 flex gap-7'>
            <div className=' hidden md:block text-[16px] w-[25%] z-10'>
                <h2 className=' bg-[#7BAE00] rounded-t px-5 py-2 text-white uppercase font-semibold'>All categories</h2>
                <div>
                    <div className='bg-white rounded-b h-[450px]'>
                        <div className=' relative'>
                            <div className='py-3 px-5 border-b hover:text-[#7BAE00] transition-all duration-500 flex items-center justify-between'
                                onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                                <a href="#">Vegetables And Fruits </a><MdArrowForwardIos />
                            </div>
                            {
                                open &&
                                <div className=' absolute -right-[240px] top-0 bg-white shadow w-60'>
                                    <ul>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className=' relative'>
                            <div className='py-3 px-5 border-b hover:text-[#7BAE00] transition-all duration-500 flex items-center justify-between'
                                onMouseEnter={() => setOpen2(true)} onMouseLeave={() => setOpen2(false)}>
                                <a href="#">Vegetables And Fruits </a><MdArrowForwardIos />
                            </div>
                            {
                                open2 &&
                                <div className=' absolute -right-[240px] top-0 bg-white shadow w-60'>
                                    <ul>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className=' relative'>
                            <div className='py-3 px-5 border-b hover:text-[#7BAE00] transition-all duration-500 flex items-center justify-between'
                                onMouseEnter={() => setOpen3(true)} onMouseLeave={() => setOpen3(false)}>
                                <a href="#">Vegetables And Fruits </a><MdArrowForwardIos />
                            </div>
                            {
                                open3 &&
                                <div className=' absolute -right-[240px] top-0 bg-white shadow w-60'>
                                    <ul>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                        <li className='py-3 px-5 border-b'>Cross Body</li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className='py-3 px-5 border-b hover:text-[#7BAE00] transition-all duration-500'>
                            <a href="#">Vegetables And Fruits </a>
                        </div>
                        <div className='py-3 px-5 border-b hover:text-[#7BAE00] transition-all duration-500'>
                            <a href="#">Vegetables And Fruits </a>
                        </div>
                        <div className='py-3 px-5 border-b hover:text-[#7BAE00] transition-all duration-500'>
                            <a href="#">Vegetables And Fruits </a>
                        </div>
                        <div className='py-3 px-5 border-b hover:text-[#7BAE00] transition-all duration-500'>
                            <a href="#">Vegetables And Fruits </a>
                        </div>
                    </div>
                </div>
            </div>
            <Slider />
        </div>
    )
}

export default HeroSection