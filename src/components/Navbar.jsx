import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import NavbarButton from './NavbarButton';
import { Link } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import { TiShoppingCart } from "react-icons/ti";

function Navbar() {
  const [showCart, setShowCart] = useState(false)

  return (
    <div>
      {
        showCart && <CartSidebar close={() => setShowCart(false)} />
      }
      <div className='bg-[#FFFFFF] py-3 lg:py-5'>
        <div className='lg:max-w-[65%] mx-auto grid grid-cols-1 gap-3 lg:gap-5 justify-center lg:flex lg:justify-between'>
          <div className='lg:flex lg:gap-28 lg:items-center'>
            <Link to={'/'}>
              <div className='uppercase flex justify-center'>
                <span className='text-5xl'> <TiShoppingCart /></span>
                <div className=' relative'>
                  <p className=' text-xl font-extrabold'>Sigma</p>
                  <p className=' absolute bottom-1 text-sm font-extrabold'>Store</p>
                </div>
              </div>
            </Link>
            <ul className='hidden lg:flex gap-5 font-semibold text-[16px]'>
              <li className='flex items-center'><Link to={'/'}>Home</Link></li>
              <li className='flex items-center'>Page</li>
              <li className='flex items-center'><Link to={'/shop'}>Shop</Link></li>
              <li className='flex items-center'>Blog</li>
              <li className='flex items-center'>Contact Us</li>
            </ul>
          </div>
          <div className='flex justify-center gap-3'>
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