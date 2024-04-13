import React from 'react'

function NavbarButton({ icon, quantity }) {
    return (
        <div className=' bg-[#FFFFFF] w-[45px] h-[45px] flex justify-center items-center 
        transition-all duration-500 hover:text-white hover:bg-[#7BAE00]'
            style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <p className='flex items-center text-xl relative'>{icon}
                <span className=' absolute font-semibold -top-3 -right-2 text-base'>{quantity}</span>
            </p>
        </div>
    )
}

export default NavbarButton