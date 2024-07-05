import React from 'react'
import { Link } from 'react-router-dom'
import { BsDot } from "react-icons/bs";
import ProductCard from '../../components/ProductCard';
import SectionTitle from '../../components/SectionTitle';
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";    
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function ProductDetails() {
    const sizes = [{ 'size': 'Small' }, { 'size': 'Medium' }, { 'size': 'Large' }, { 'size': 'Extra Large' }]
    return (
        <div>
            {/* -----------------banner------------- */}
            <div className='relative'>
                <img src="/shop.jpg" alt="" className='w-full' />
                <div className=' bg-[#000000bf] absolute top-0 left-0 bottom-0 right-0 '>
                    <div className='max-w-[65%] mx-auto text-white flex items-center h-full '>
                        <div className='flex justify-between items-center w-full'>
                            <p className=' text-4xl font-bold'>Product Details</p>
                            <div className='flex gap-2 items-center font-semibold'>
                                <Link to={'/'}>Home</Link>
                                <span className=' text-xl'><BsDot /></span>
                                <p className='text-[#ccc]'>Product Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------------Main------------- */}
            <div className='md:max-w-[65%] md:mx-auto mx-3 py-20 grid gap-5'>
                <div className=' p-4 bg-white border'>
                    <div className='md:grid grid-cols-2 gap-10 p-5'>
                        <div className='grid grid-cols-1 items-end'>
                            <img src="/product.png" alt="" className='mx-auto my-auto border' />
                            <div className='flex gap-3 overflow-y-auto overflow-hidden'>
                                <img src="/product.png" alt="" className=' border w-36 h-36' />
                                <img src="/product.png" alt="" className=' border w-36 h-36' />
                                <img src="/product.png" alt="" className=' border w-36 h-36' />
                                <img src="/product.png" alt="" className=' border w-36 h-36' />
                                <img src="/product.png" alt="" className=' border w-36 h-36' />
                            </div>
                        </div>
                        <div className='grid gap-7'>
                            <div className=' grid grid-cols-1 gap-3'>
                                <div className='flex'>
                                    <p className='flex items-center gap-1 text-[#FC0] text-xl'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                        <span className='text-[#7bae00] text-xs'>( 25 Reviews )</span></p>
                                </div>
                                <p className='text-2xl font-bold'>Goodday Fresh Pasteur Milk 2 Liter </p>
                                <p className=' text-[#666]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Quos quis voluptatibus eaque aliquam accusamus dolores quisquam repellat repudiandae corrupti.
                                    Perferendis corporis minus ex et repellat iusto consequatur culpa eum excepturi.
                                </p>
                                <p className='flex items-baseline'>
                                    <span className='text-[#7BAE00] font-extrabold text-5xl'>$200</span>&nbsp;
                                    <span className=' line-through text-3xl font-semibold'>$210</span>
                                </p>
                            </div>
                            <div className='border-t border-b py-5'>
                                <p className=' flex gap-3'>
                                    <strong>Categories:</strong>
                                    <span><Link to="#">Cover,</Link></span>
                                    <span><Link to="#">Seat,</Link></span>
                                    <span><Link to="#">Car,</Link></span>
                                    <span><Link to="#">Parts</Link></span>
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className=' font-bold'>Color:</span>
                                <p className=" p-3 bg-red-600 rounded-full"></p>
                                <p className="p-3 bg-green-700 rounded-full"></p>
                                <p className="p-3 bg-blue-700 rounded-full"></p>
                                <p className="p-3 bg-yellow-400 rounded-full"></p>
                                <p className="p-3 bg-orange-400 rounded-full"></p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <span className=' font-bold'>SIZE:</span>
                                {
                                    sizes.map((size, index) =>
                                        <p key={index} className='border-2 border-[#c6c6c6] hover:border-[#7BAE00] 
                                   cursor-pointer delay-300 text-[#666f] rounded px-3 transition-all hover:text-[#7BAE00]'>{size.size}</p>
                                    )
                                }
                            </div>
                            <div className='flex gap-5'>
                                <form className='flex items-center'>
                                    <label className=' px-2 py-5 bg-[#7BAE00] border border-[#7BAE00] text-center text-white'>
                                        <FaMinus />
                                    </label>
                                    <input type="text" name="" defaultValue={1} className=' p-4 w-28 border border-[#7BAE00] text-center' />
                                    <label className=' px-2 py-5 bg-[#7BAE00] border border-[#7BAE00] text-center text-white'>
                                        <FaPlus />
                                    </label>
                                </form>
                                <button className='flex items-center gap-2 font-semibold bg-[#7BAE00] px-5 text-white 
                        transition-all duration-500 hover:bg-[#0B2B3C]'>
                                    <FaShoppingCart />ADD TO CART
                                </button>
                            </div>
                            <div className=' text-xl flex items-center gap-3'>
                                <span><strong>Share :</strong></span>
                                <span className=' p-3 shadow-xl hover:text-white transition-all hover:bg-[#7BAE00] delay-300 rounded-full'><LuFacebook /></span>
                                <span className=' p-3 shadow-xl hover:text-white transition-all hover:bg-[#7BAE00] delay-300 rounded-full'><FaXTwitter /></span>
                                <span className=' p-3 shadow-xl hover:text-white transition-all hover:bg-[#7BAE00] delay-300 rounded-full'><FaPinterestP /></span>
                                <span className=' p-3 shadow-xl hover:text-white transition-all hover:bg-[#7BAE00] delay-300 rounded-full'><FaInstagram /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <SectionTitle title={"Related Products"} />
                    <div className='grid md:grid-cols-4 gap-5 py-5'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails