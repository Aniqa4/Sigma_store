import React from 'react'
import { TiMail } from "react-icons/ti";
import { VscLocation } from "react-icons/vsc";
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

function Navbar() {
  return (
    <div>
      <div className='bg-[#262626] px-5 py-3 flex justify-between'>
        <p className='text-2xl font-semibold text-white'>evanto
          <span className='text-[#6f9a37] font-normal'>market</span></p>
        <button className='text-white px-5 py-1 bg-[#6f9a37] rounded text-sm'>Buy now</button>
      </div>
      <div className=' py-2 bg-[#0B2B3C] border-t border-black'>
        <div className='container mx-auto flex justify-between text-white'>
          <div className='flex gap-5'>
            <p className='flex items-center'>
              <span className='text-[#6f9a37] text-xl'><TiMail /></span>info12@example.com</p>
            <p className=' flex items-center'>
              <span className='text-[#6f9a37] text-xl'  ><VscLocation /></span>California, TX 70240</p>
          </div>
          <div className='flex items-center gap-5'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaVimeoV />
            <p className='ps-5 flex items-center gap-1'>English
            <span className=' text-[#6f9a37] text-sm '><FaArrowDownLong /></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar