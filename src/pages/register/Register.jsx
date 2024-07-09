import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='flex justify-center py-16'>
            <div className='bg-white w-1/4 px-7 py-10 grid grid-cols-1 gap-5 text-center'>
                <h1 className='text-[26px] font-bold'>Register Account</h1>
                <div className='flex gap-2 justify-between text-white mb-5'>
                    <button className='bg-[#D04237] flex items-center justify-center font-bold gap-2 py-4 text-white w-1/2 rounded'>
                        <span className=' text-2xl'><IoLogoGoogle /></span>Google</button>
                    <button className='bg-[#36528C] flex items-center justify-center w-1/4 rounded'><FaFacebookF /></button>
                    <button className='bg-[#0D8DDC] flex items-center justify-center w-1/4 rounded'><FaTwitter /></button>
                </div>
                <form action="" className='grid grid-cols-1 gap-5'>
                    <div className=' relative'>
                        <label htmlFor="" className=' absolute -top-3 mx-5 bg-white text-sm font-semibold'>Name</label>
                        <input type="text" className='border px-5 py-3 w-full' />
                    </div>
                    <div className=' relative'>
                        <label htmlFor="" className=' absolute -top-3 mx-5 bg-white text-sm font-semibold'>Mail Or Username</label>
                        <input type="text" className='border px-5 py-3 w-full' />
                    </div>
                    <div className=' relative'>
                        <label htmlFor="" className=' absolute -top-3 mx-5 bg-white text-sm font-semibold'>Password</label>
                        <input type="text" className='border px-5 py-3 w-full' />
                    </div>
                    <div className=' relative'>
                        <label htmlFor="" className=' absolute -top-3 mx-5 bg-white text-sm font-semibold'>Confirm Password</label>
                        <input type="text" className='border px-5 py-3 w-full' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className='text-sm font-semibold'>Remember Me</label>
                    </div>
                    <input type="submit" value="REGISTER" className=' uppercase text-white bg-[#7BAE00] px-5 py-3 flex items-center gap-2
                                     transition-all duration-500 hover:bg-[#0B2B3C]'/>
                </form>
                <button>Already have an account? <Link to={'/login'} className=' text-[#0d6efd]'>Sign In</Link></button>
            </div>
        </div>
    )
}

export default Register