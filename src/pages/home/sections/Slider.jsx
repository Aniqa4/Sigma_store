import React, { useEffect, useState } from 'react'  
import { HiArrowLongRight } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

function Slider() {
    const [index, setIndex] = useState(0)
    const images = ['https://i.ibb.co/7tLF8xs/pexels-micheile-12220265.jpg',
        'https://i.ibb.co/GPsykBd/pexels-pixabay-373019.jpg',
        'https://i.ibb.co/vx7nJLj/pexels-jill-wellington-1638660-35625.jpg']

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
            setChanged(true)
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className=' md:w-[75%] relative'>
            <div>
                <img src={images[index]} alt="" className={` w-[100%] h-[488px] rounded-xl`} />
                <div className=' absolute top-1/4 ps-10 text-white md:w-1/2 grid grid-cols-1 gap-7'>
                    <h2 className='text-4xl font-bold'>Fresh Food &amp; Healthly Organic Food</h2>
                    <p className=' text-xl font-semibold'>Free Shipping on all Your Order</p>
                    <div>
                        <button
                            className=' uppercase font-semibold text-white bg-[#7BAE00] px-5 py-4 flex items-center gap-2
                    transition-all duration-500 hover:bg-[#0B2B3C]'>Shop Now
                            <span className=' font-bold'><HiArrowLongRight /></span>
                        </button>
                    </div>
                </div>
                <div className=' absolute bottom-5 ps-10 text-white text-2xl grid grid-cols-3 gap-1'>
                    <div onClick={() => setIndex(0)} className={index === 0 ?
                        ' transition-all duration-500 border rounded-full' :
                        ' border rounded-full border-transparent'}>
                        <GoDotFill />
                    </div>
                    <div onClick={() => setIndex(1)} className={index === 1 ?
                        ' transition-all duration-500 border rounded-full' :
                        ' border rounded-full border-transparent'}>
                        <GoDotFill />
                    </div>
                    <div onClick={() => setIndex(2)} className={index === 2 ?
                        ' transition-all duration-500 border rounded-full' :
                        ' border rounded-full border-transparent'}>
                        <GoDotFill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider