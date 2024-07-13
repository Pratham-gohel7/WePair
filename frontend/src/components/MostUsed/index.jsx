import React from 'react'
import {Mob} from "../../assets/images/index"

const index = () => {
  return (
    <div>
        <div className='flex justify-between items-center mx-2 mt-10 bg-[#2F3C7E] text-[#FBEAEB] py-10 px-6 md:justify-around'>
            <div className='mx-2'>
                <h2 className='text-2xl font-semibold'>Tech Gadgets</h2>
                <p>Get your day to day technical gadgets fixed buy a highly professional technicians.</p>
                <button className='bg-slate-900 py-[6px] px-3 rounded-md text-md font-semibold my-5'>Fix Now</button>
            </div>
            <img src={Mob} alt="" className='w-[200px] rounded-xl md:w-[35%]' />
        </div>

        <div className='flex justify-between items-center mx-2 bg-[#101820] text-[#FEE715] py-10 px-6 md:justify-around'>
            <img src={Mob} alt="" className='w-[200px] rounded-xl md:w-[35%]' />
            <div className='mx-8'>
                <h2 className='text-2xl font-semibold'>Home Appliances</h2>
                <p>Get your home appliances like Air conditioners, Washing machines etc. fixed by professional technicians.</p>
                <button className='bg-slate-700 text-slate-200 py-[6px] px-3 rounded-md text-md font-semibold my-5'>Fix Now</button>
            </div>
        </div>

        <div className='flex justify-between items-center mx-2 bg-[#31473A] text-[#EDF4F2] py-10 px-6 md:justify-around'>
            <div className='mx-2'>
                <h2 className='text-2xl font-semibold'>Mobile</h2>
                <p>Get your smartphone fixed by professional technicians.</p>
                <button className='bg-slate-800 py-[6px] px-3 rounded-md text-md font-semibold my-5'>Fix Now</button>
            </div>
            <img src={Mob} alt="" className='w-[200px] rounded-xl md:w-[35%]' />
        </div>        

    </div>
  )
}

export default index