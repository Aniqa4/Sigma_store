import React from 'react'
import { FaStar } from "react-icons/fa";
import '../styles/miniCardStyle.css'

function MiniProductCart() {
  return (
    <div className='flex gap-2 card-style'>
      <img src="/product.png" alt="" className='w-20 h-20 p-1 border'/>
      <div className='grid gap-1'>
        <p className=' font-semibold text-[#666] product-name'>Product Name</p>
        <div className='flex'>
          <p className='flex gap-1 text-[#FC0]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
        </div>
        <p className='flex items-center'>
          <span className='text-[#7BAE00] font-extrabold text-xl'>$200</span>&nbsp;
          <span className=' line-through'>$210</span>
        </p>
      </div>
    </div>
  )
}

export default MiniProductCart