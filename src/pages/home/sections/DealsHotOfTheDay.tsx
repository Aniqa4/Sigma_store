import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function DealsHotOfTheDay() {
    return (
        <div className=' p-4 bg-white border'>
            <div className='flex items-end justify-between pb-1 border-b'>
                <p className=' font-bold text-xl pb-2'>Deals Hot Of The Day</p>
                <div className='flex items-end gap-3 text-xl'>
                    <p className=' rotate-180'><HiArrowLongRight /></p>
                    <p><HiArrowLongRight /></p>
                </div>
            </div>
            <div className='md:flex gap-10 p-5'>
                <img src="/product.png" alt="" />
                <div className='grid gap-5'>
                    <div className='flex gap-3'>
                        <div className=' bg-[#191919] w-16 h-16 flex items-center justify-center'>
                            <div>
                                <p className=' text-white font-bold text-xl'>-507</p>
                                <p className='text-[#7bae00] font-semibold text-sm text-center'>DAYS</p>
                            </div>
                        </div>
                        <div className=' bg-[#191919] w-16 h-16 flex items-center justify-center'>
                            <div>
                                <p className=' text-white font-bold text-xl'>-507</p>
                                <p className='text-[#7bae00] font-semibold text-sm text-center'>HOURS</p>
                            </div>
                        </div>
                        <div className=' bg-[#191919] w-16 h-16 flex items-center justify-center'>
                            <div>
                                <p className=' text-white font-bold text-xl'>-507</p>
                                <p className='text-[#7bae00] font-semibold text-sm text-center'>MINUTE</p>
                            </div>
                        </div>
                        <div className=' bg-[#191919] w-16 h-16 flex items-center justify-center'>
                            <div>
                                <p className=' text-white font-bold text-xl'>-507</p>
                                <p className='text-[#7bae00] font-semibold text-sm text-center'>SEC</p>
                            </div>
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 gap-3'>
                        <p className='text-xl font-bold'>Goodday Fresh Pasteur Milk 2 Liter </p>
                        <p className='flex items-baseline'>
                            <span className='text-[#7BAE00] font-extrabold text-3xl'>$200</span>&nbsp;
                            <span className=' line-through'>$210</span>
                        </p>
                        <div className='flex'>
                            <p className='flex items-center gap-1 text-[#FC0] text-xl'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                <span className='text-[#7bae00] text-xs'>( 25 Reviews )</span></p>
                        </div>
                        <p className=' text-[#666]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quos quis voluptatibus eaque aliquam accusamus dolores quisquam repellat repudiandae corrupti.
                            Perferendis corporis minus ex et repellat iusto consequatur culpa eum excepturi.
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <form className='flex items-center'>
                            <label className=' p-2 bg-[#7BAE00] border border-[#7BAE00] text-center text-white'>
                                <FaMinus />
                            </label>
                            <input type="text" name="" defaultValue={1} className=' p-1 w-10 border border-[#7BAE00] text-center' />
                            <label className=' p-2 bg-[#7BAE00] border border-[#7BAE00] text-center text-white'>
                                <FaPlus />
                            </label>
                        </form>
                        <button className='flex items-center gap-2 text-xs font-semibold bg-[#7BAE00] px-5 text-white 
                        transition-all duration-500 hover:bg-[#0B2B3C]'>
                            <FaShoppingCart />ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealsHotOfTheDay