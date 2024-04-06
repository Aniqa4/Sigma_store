import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className='text-[#0B2B3C]'>
            <Navbar />
            <div className='bg-[#F2F3F9]'>
                <div className='bg-[#F2F3F9] max-w-[65%] mx-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout