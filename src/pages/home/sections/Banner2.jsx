import React from 'react'

function Banner2() {
    return (
        <div className='grid grid-cols-2 gap-5 my-5'>
            <div className=' overflow-hidden rounded-xl'>
                <img src="/banner1.jpg" alt="" className=' overflow-hidden w-full transition-all duration-500 hover:scale-110' />
            </div >
            <div className=' overflow-hidden rounded-xl'>
                <img src="/banner2.jpg" alt="" className=' overflow-hidden w-full transition-all duration-500 hover:scale-110' />
            </div >
        </div>
    )
}

export default Banner2