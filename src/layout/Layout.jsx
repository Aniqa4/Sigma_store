import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className='text-[#0B2B3C]'>
            <Navbar />
            <div className='bg-[#F2F3F9]'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout