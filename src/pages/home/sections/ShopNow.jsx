import React from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function ShopNow() {
    return (
        <div className='my-10 relative'>
            <img src="/banner2.jpg" alt="" className='w-full rounded-3xl' />
            <div className=' absolute left-1/2 top-0 bottom-0 right-0 flex items-center justify-end rounded-3xl text-white'>
                <div className='pe-20 grid gap-3'>
                    <h4 className='text-2xl font-semibold'>Summer Sale</h4>
                    <h2 className='text-7xl font-extrabold'><span className=' text-[#B1F40D]'>39%</span> OFF</h2>
                    <p className=' text-[#b5b5b5] text-2xl'>Free on all your order, Free Shipping and 30 days mony back guarantee</p>
                    <div>
                        <Link to={'/shop'}>
                            <button className=' bg-[#7BAE00] font-semibold px-7 py-3 rounded-full flex items-center gap-3'>SHOP NOW<HiArrowSmallRight /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopNow