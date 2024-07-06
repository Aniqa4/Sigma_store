import React from 'react'
import PageBanner from '../../components/PageBanner'

function Checkout() {
  return (
    <div>
      <PageBanner pageName={'Checkout'} />
      <div className='md:max-w-[65%] md:mx-auto mx-3 py-20 flex gap-5'>
        <div className='w-[60%] p-5 border bg-white'>
          <h2 className='pb-5 border-b text-2xl font-semibold'>Billing Details</h2>
          <form className='grid grid-cols-1 gap-5 py-5'>
            <div className=' grid grid-cols-2 gap-5'>
              <div className='grid gap-1'>
                <label>First Name*</label>
                <input type="text" required="required" name="namme" className='border p-3' />
              </div>
              <div className='grid gap-1'>
                <label>Last name *</label>
                <input type="text" required="required" name="lnamme" className='border p-3' />
              </div>
            </div>
            <div className='grid gap-1'>
              <label>Company name (Optional) </label>
              <input type="text" name="companyname" className='border p-3' />
            </div>
            <div className='grid gap-1'>
              <label>Email * </label>
              <input type="email" name="email" className='border p-3' />
            </div>
            <div className='grid gap-1'>
              <label>Phone * </label>
              <input type="text" name="phone" className='border p-3' />
            </div>
            <div>
              <div className='grid gap-1'>
                <label>Country * </label>
                <select name="country" className='border p-3'>
                  <option value="0">United Kingdom</option>
                  <option value="1">China</option>
                  <option value="2">United Arab Emirates</option>
                  <option value="3">Germany</option>
                  <option value="4">France</option>
                  <option value="5">Japan</option>
                  <option value="6">Bangladesh</option>
                  <option value="7">India</option>
                  <option value="8">London</option>
                  <option value="9">Afghanistan</option>
                </select>
                {/*  <div >
                  <span >United Kingdom</span>
                  <ul className="list">
                    <li data-value="0" className="option selected focus">United Kingdom</li>
                    <li data-value="1" className="option">China</li>
                    <li data-value="2" className="option">United Arab Emirates</li>
                    <li data-value="3" className="option">Germany</li>
                    <li data-value="4" className="option">France</li>
                    <li data-value="5" className="option">Japan</li>
                    <li data-value="6" className="option">Bangladesh</li>
                    <li data-value="7" className="option">India</li>
                    <li data-value="8" className="option">London</li>
                    <li data-value="9" className="option">Afghanistan</li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className='grid gap-3'>
              <label>Zip * </label>
              <input name="zip" className='border p-3' />
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" name="" id="" required />
              <label>Ship to a different address?</label>
            </div>
            <div className='grid'>
              <label>Order notes (Optional) </label>
              <textarea name="ordernote" cols={5} rows={5} className='border p-3'></textarea>
            </div>
          </form>
        </div>
        <div className='w-[30%]'>
          <div className='p-5 border bg-white'>
            <h2 className='pb-5 border-b text-2xl font-semibold'>Checkout summary</h2>
            <ul className='py-5 text-[#666] grid grid-cols-1 gap-5 font-semibold'>
              <li className='flex justify-between pb-2 border-b border-dashed'>Subtotal <span>$530.00</span></li>
              <li className='flex justify-between pb-2 border-b border-dashed'>Shipping <span>$530.00</span></li>
              <li className='flex justify-between pb-2 border-b border-dashed'>Coupon <span>$0.00</span></li>
              <li className='flex justify-between pb-2 border-b border-dashed'>Total <span>$530.00</span></li>
              <li className='flex justify-between'><b>Payable Total</b><span><b>$530.00</b></span></li>
            </ul>
          </div>
          <div className='p-5 border bg-white mt-5'>
            <h2 className='pb-5 border-b text-2xl font-semibold'>Payment Method</h2>
            <form action="" className='py-5 grid grid-cols-1 gap-3'>
              <div className='flex gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Direct bank transfer </label>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Cash on delivery </label>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Check payments </label>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">PayPal </label>
              </div>
            </form>
            <button
              className=' uppercase text-white bg-[#7BAE00] px-10 py-3
            transition-all duration-500 hover:bg-[#0B2B3C]'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout