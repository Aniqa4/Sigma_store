import React from 'react'

function FeatureCard({ icon, title, description }) {
    return (
        <div className='flex gap-2 items-center'>
            <div className='rounded-full bg-[#d9d9d9] 
            transition-all duration-500 hover:bg-[#7bae00] hover:text-white 
            p-3 flex justify-center items-center'>
                <span className='text-3xl rounded-full '>{icon}</span>
            </div>
            <div className=''>
                <h3 className=' font-semibold'>{title}</h3>
                <p className=' text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard