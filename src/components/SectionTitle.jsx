import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";


function SectionTitle({title}) {
    return (
        <div className='md:flex justify-between items-center py-5'>
            <h1 className=' text-2xl font-bold pb-5 md:pb-0'>{title}</h1>
            <button
                className=' uppercase font-semibold text-white bg-[#7BAE00] px-5 py-4 flex items-center gap-2
        transition-all duration-500 hover:bg-[#0B2B3C]'>View all
                <span className=' font-bold'><HiArrowLongRight /></span>
            </button>
        </div>
    )
}

export default SectionTitle