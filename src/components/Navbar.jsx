import React, { useState } from 'react'
import { TiMail } from "react-icons/ti";
import { VscLocation } from "react-icons/vsc";
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { HiMiniPlusSmall } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import NavbarButton from './NavbarButton';
import { Link } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import { TiShoppingCart } from "react-icons/ti";

function Navbar() {
  const [showCart, setShowCart] = useState(false)

  return (
    <div>
      {/*------first layer-----*/}
      {/* <div className='bg-[#262626] px-5 py-3 flex justify-between'>
        <p className='text-2xl font-semibold text-white'>evanto
          <span className='text-[#6f9a37] font-normal'>market</span></p>
        <button className='text-white px-5 py-1 bg-[#6f9a37] rounded text-sm'>Buy now</button>
      </div> */}
      {/*------second layer-----*/}
      {/* <div className=' py-2 bg-[#0B2B3C] border-t border-black'>
        <div className='max-w-[65%] mx-auto flex justify-between text-white'>
          <div className='flex gap-5'>
            <p className='flex items-center'>
              <span className='text-[#7BAE00] text-xl'><TiMail /></span>info12@example.com</p>
            <p className=' flex items-center'>
              <span className='text-[#7BAE00] text-xl'  ><VscLocation /></span>California, TX 70240</p>
          </div>
          <div className='flex items-center gap-5'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaVimeoV />
            <p className='ps-5 flex items-center gap-1'>English
              <span className=' text-[#7BAE00] text-sm '><FaArrowDownLong /></span></p>
          </div>
        </div>
      </div> */}
      {/*------3rd layer-----*/}
      {
        showCart && <CartSidebar close={() => setShowCart(false)} />
      }
      <div className='bg-[#FFFFFF] py-5 md:py-8'>
        <div className='md:max-w-[65%] md:mx-auto grid grid-cols-1 gap-5 justify-center md:flex md:justify-between'>
          <div className='md:flex md:gap-28 md:items-center'>
            <Link to={'/'}>
              <div className='uppercase flex'>
                <span className='text-5xl'> <TiShoppingCart /></span>
                <div className=' relative'>
                  <p className=' text-xl font-extrabold'>Sigma</p>
                  <p className=' absolute bottom-1 text-sm font-extrabold'>Store</p>
                </div>
              </div>
            </Link>
            <ul className='hidden md:flex gap-5 font-semibold text-[16px]'>
              <li className='flex items-center'><Link to={'/'}>Home</Link> <span className='text-xl'><HiMiniPlusSmall /></span></li>
              <li className='flex items-center'>Page <span className='text-xl'><HiMiniPlusSmall /></span></li>
              <li className='flex items-center'><Link to={'/shop'}>Shop</Link> <span className='text-xl'><HiMiniPlusSmall /></span></li>
              <li className='flex items-center'>Blog <span className='text-xl'><HiMiniPlusSmall /></span></li>
              <li className='flex items-center'>Contact Us</li>
            </ul>
          </div>
          <div className='flex gap-3'>
            <div onClick={() => setShowCart(true)}>
              <NavbarButton icon={<BsCart3 />} quantity={2} />
            </div>
            {/*  <NavbarButton icon={<MdFavoriteBorder />} quantity={2} /> */}
            <NavbarButton icon={<IoSearchOutline />} />
            <Link to='/login'><NavbarButton icon={<FaRegUser />} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar