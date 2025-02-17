import React from 'react'
import { FaStar } from "react-icons/fa";

function Reviews() {
    return (
        <div className='pb-10'>
            <h2 className='text-2xl font-bold'>Our Awesome Testimonial</h2>
            <div className='grid lg:grid-cols-2 gap-5 py-5'>
                <div className=' border p-10 bg-white'>
                    <div>
                        <div className='flex justify-between items-start'>
                            <div className='flex items-center gap-3'>
                                <img src="/author.jpg" alt="" className=' rounded-full w-16' />
                                <div>
                                    <p className=' text-xl font-semibold'>Al-Mahmud</p>
                                    <p className='flex gap-1 text-[#FC0]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                </div>
                            </div>
                            <img src="/qoute.png" alt="" className=' opacity-40' />
                        </div>
                    </div>
                    <p className=' pt-10 text-[#666] text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est reiciendis animi consequatur a odit,
                        suscipit accusantium eos laborum numquam et porro labore quasi dolores impedit in explicabo cum repellendus omnis.</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews