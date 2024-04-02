import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='bg-[#262626] px-5 py-3 flex justify-between'>
        <p className='text-2xl font-semibold text-white'>evanto
          <span className='text-[#6f9a37] font-normal'>market</span></p>
        <button className='text-white px-5 py-1 bg-[#6f9a37] rounded text-sm'>Buy now</button>
      </div>
      <div className='container mx-auto py-3'>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar