import React from 'react'
import { HiMiniPhone } from "react-icons/hi2";

function MakeACall() {
    return (
        <div className='bg-[#7BAE00] py-8'>
            <div className='max-w-[65%] mx-auto lg:flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-white  pb-5 md:pb-0'>Get A Free Service Or Make A Call</h2>
                <button className='flex items-center gap-2 bg-white text-[#7BAE00] px-5 py-3 font-semibold  uppercase border
                 transition-all duration-500 hover:bg-[#7BAE00] hover:text-white'>
                    <HiMiniPhone />Make a call
                </button>
            </div>
        </div>
    )
}

export default MakeACall