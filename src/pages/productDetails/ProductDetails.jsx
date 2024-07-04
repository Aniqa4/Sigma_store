import React from 'react'
import { Link } from 'react-router-dom'
import { BsDot } from "react-icons/bs";
import ProductCard from '../../components/ProductCard';
import SectionTitle from '../../components/SectionTitle';

function ProductDetails() {
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
            <div className='md:max-w-[65%] md:mx-auto mx-3 py-20 flex gap-5'>
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