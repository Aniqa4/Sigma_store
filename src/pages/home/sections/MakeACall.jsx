import React from 'react'
import { HiMiniPhone } from "react-icons/hi2";

function MakeACall() {
    return (
        <div className='bg-[#7BAE00] py-8'>
            <div className='max-w-[65%] mx-auto flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-white'>Get A Free Service Or Make A Call</h2>
                <button className='flex items-center gap-2 bg-white text-[#7BAE00] px-5 py-3 font-semibold text-xl
                 transition-all duration-500 hover:bg-[#7BAE00] hover:border hover:text-white'>
                    <HiMiniPhone />Make a call
                </button>
            </div>
        </div>
    )
}

export default MakeACall