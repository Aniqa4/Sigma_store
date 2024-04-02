import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Navbar />
            <div className=' container mx-auto py-10'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout