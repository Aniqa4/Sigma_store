import React from 'react'
import { BsDot } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import ProductCard from '../../components/ProductCard';
import { BiSolidRectangle } from "react-icons/bi";

function Shop() {
  return (
    <div>
      {/* -----------------banner------------- */}
      <div className='relative'>
        <img src="/shop.jpg" alt="" className='w-full' />
        <div className=' bg-[#000000bf] absolute top-0 left-0 bottom-0 right-0 '>
          <div className='max-w-[65%] mx-auto text-white flex items-center h-full '>
            <div className='flex justify-between items-center w-full'>
              <p className=' text-4xl font-bold'>Shop</p>
              <div className='flex gap-2 items-center font-semibold'>
                <Link to={'/'}>Home</Link>
                <span className=' text-xl'><BsDot /></span>
                <p className='text-[#ccc]'>Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------Main------------- */}
      <div className='md:max-w-[65%] md:mx-auto mx-3 py-20 flex gap-5'>
        {/** --------------left side------------- */}
        <aside>
          <div className='flex justify-between items-center'>
            <div className=' text-[#555] flex items-center gap-5'>
              <div className=' text-[26px]'>
                <CgMenuGridR />
              </div>
              <div className='text-2xl'>
                <TfiMenuAlt />
              </div>
            </div>
            <div><span>Showing 1–12 of 18 results</span></div>
            <form action="">
              <select name="" id="" className=' px-5 py-3 outline-none border-2 bg-[#F2F3F9]'>
                <option value="">Default Sorting</option>
              </select>
            </form>
          </div>
          <div>
            <div className='grid md:grid-cols-3 gap-5 py-5'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </aside>
        {/** --------------right side------------- */}
        <aside className=' flex-col'>
          <form action="" className='bg-white border py-5 pe-7 mb-5'>
            <label htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className=' font-semibold text-xl'>Search</span></label>
            <input type="text" placeholder='Search Here...' className='border ms-9 mt-3 px-5 py-3' />
          </form>
          <div className='bg-white border py-5 pe-7 mb-5'>
            <p htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className='font-semibold text-xl'>Categories</span></p>
            <div className='ms-9'>

            </div>
          </div>
          <div className='bg-white border py-5 pe-7 mb-5'>
            <p htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className='font-semibold text-xl'>Popular products</span></p>
            <div className='ms-9'>

            </div>
          </div>
          <div className='bg-white border py-5 pe-7 mb-5'>
            <p htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className='font-semibold text-xl'>Tags</span></p>
            <div className='ms-9'>

            </div>
          </div>
          <div className='bg-white border py-5 pe-7 mb-5'>
            <p htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className='font-semibold text-xl'>Archives</span></p>
            <div className='ms-9'>

            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Shop