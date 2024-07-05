import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Cart({ close }) {
    return (
        <div className=' bg-[#0000004c] h-screen z-20 fixed top-0 right-0 left-0 bottom-0'>
            <div className='fixed right-0 bg-white bottom-0 top-0 w-[20%]'>
                <div className='text-xl p-5 border-b-2 uppercase font-semibold flex justify-between items-center'>
                    <h2 >Shopping cart</h2>
                    <span onClick={close}>
                        <RxCross1 />
                    </span>
                </div>
                <div>
                    <div className='p-5 border-b flex gap-3'>
                        <Link to='/product-details'><img src="/product.png" alt="" className='w-20' /></Link>
                        <div className='grid grid-cols-1 justify-between'>
                            <p className=' font-bold'><Link to="/product-details">Purnava Omega 3 Enri  ched Egg</Link></p>
                            <div className='flex items-center justify-between'>
                                <span className=' text-gray-500 font-semibold'>$39 x 2</span>
                                <button className=' bg-gray-300 p-2 rounded-full'><RxCross1 /></button>
                            </div>
                        </div>
                    </div>
                    {/* <p>No items</p> */}
                </div>
                <div className='p-5 grid grid-cols-1 gap-7'>
                    <h4 className='flex justify-between font-semibold text-xl'>SubTotal : <span>$203.00</span></h4>
                    <button
                        className=' uppercase font-semibold text-[#0B2B3C] border border-[#0B2B3C] px-5 py-4
                         transition-all duration-500 hover:bg-[#0B2B3C] hover:text-white'>View Cart
                    </button>
                    <button
                        className=' uppercase font-semibold text-white bg-[#7BAE00] px-5 py-4
                         transition-all duration-500 hover:bg-[#0B2B3C]'>checkout now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart