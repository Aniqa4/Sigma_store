import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import ProductCard from '../../components/ProductCard';
import { BiSolidRectangle } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MiniProductCart from '../../components/MiniProductCart';
import PageBanner from '../../components/PageBanner';

function Shop() {
  return (
    <div>
      <PageBanner pageName={'Shop'}/>
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
              <select name="" id="" className=' px-5 py-3 outline-none border-2 bg-[#F2F3F9] w-56'>
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
          <form action="" className='bg-white border py-5 pe-7 mb-5 grid'>
            <label htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className=' font-semibold text-xl'>Search</span></label>
            <input type="text" placeholder='Search Here...' className='border ms-9 mt-3 px-5 py-3' />
          </form>
          <div className='bg-white border py-5 pe-7 mb-5'>
            <p htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className='font-semibold text-xl'>Categories</span></p>
            <ul className='ms-9'>
              <li className='flex items-center border-b border-dashed py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>  Fruits &amp; Vegetable
              </li>
              <li className='flex items-center border-b border-dashed py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>  Fruits &amp; Vegetable
              </li>
              <li className='flex items-center border-b border-dashed py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>  Fruits &amp; Vegetable
              </li>
              <li className='flex items-center border-b border-dashed py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>  Fruits &amp; Vegetable
              </li>
              <li className='flex items-center border-b border-dashed py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>  Fruits &amp; Vegetable
              </li>
              <li className='flex items-center py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>  Fruits &amp; Vegetable
              </li>
            </ul>
          </div>
          <div className='bg-white border py-5 pe-7 mb-5'>
            <p htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className='font-semibold text-xl'>Popular products</span></p>
            <div className='ms-9 grid gap-5 pt-5'>
              <MiniProductCart />
              <MiniProductCart />
              <MiniProductCart />
              <MiniProductCart />
              <MiniProductCart />
            </div>
          </div>
          <div className='bg-white border py-5 pe-7 mb-5'>
            <p htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className='font-semibold text-xl'>Tags</span></p>
            <div className='ms-9 uppercase mt-5 flex gap-5 flex-wrap w-80'>
              <p className=' bg-[#5e2ced0a] font-semibold px-5 py-2 border'>Pasta</p>
              <p className=' bg-[#5e2ced0a] font-semibold px-5 py-2 border'>Organic</p>
              <p className=' bg-[#5e2ced0a] font-semibold px-5 py-2 border'>EGE</p>
              <p className=' bg-[#5e2ced0a] font-semibold px-5 py-2 border'>Rice</p>
              <p className=' bg-[#5e2ced0a] font-semibold px-5 py-2 border'>food</p>
              <p className=' bg-[#5e2ced0a] font-semibold px-5 py-2 border'>fish</p>
              <p className=' bg-[#5e2ced0a] font-semibold px-5 py-2 border'>coffee</p>
              <p className=' bg-[#5e2ced0a] font-semibold px-5 py-2 border'>juice</p>
            </div>
          </div>
          <div className='bg-white border py-5 pe-7 mb-5'>
            <p htmlFor="" className='flex gap-5 items-center justify-start'><BiSolidRectangle />
              <span className='font-semibold text-xl'>Archives</span></p>
            <ul className='ms-9'>
              <li className='flex items-center border-b border-dashed py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>   September 2021
              </li>
              <li className='flex items-center border-b border-dashed py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>   September 2021
              </li>
              <li className='flex items-center border-b border-dashed py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>   September 2021
              </li>
              <li className='flex items-center py-3'>
                <span className=' font-bold text-xl'><MdOutlineKeyboardDoubleArrowRight /></span>   September 2021
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Shop