import React, { useState } from 'react'
import DarkLogo from "../../assets/logoDark.png"
import LightLogo from "../../assets/logoLight.png"
import ThemeBtn from '../ThemeBtn'

const Navbar = () => {    
  return (
    <div className='shadow-md bg-white dark:bg-slate-800 dark:text-white'>
        <div className=' py-1'>
            <div className='container flex justify-between items-center '>
                <div>
                    <a href="#">
                        <img src={LightLogo} alt="Logo" 
                        className='w-16 h-12 md:w-20 dark:fill-white'/>
                    </a>
                </div>
                {/* searchbar */}
                <div>
                    <div className='group'>
                        <input 
                        type="text"
                        placeholder='Search'
                        className='w-[200px] md:w-[200px] rounded-lg px-2 group-hover:w-[300px] transition-all duration-300 border border-gray-300 focus:outline-none focus:border-b focus:border-primary dark:text-black'/>
                    </div>
                </div>
                <button className='w-[70px] bg-blue-400 text-white uppercase text-[12px] font-bold py-1 rounded-lg md:w-[90px] md:py-2 hover:bg-[#947574] '>Login</button>
                <div>
                    <ThemeBtn/>
                </div>
            </div>
        </div>

        <div></div>
    </div>
  )
}

export default Navbar