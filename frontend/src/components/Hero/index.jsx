import React from 'react'
import { motion } from 'framer-motion';
import {Mobile_img} from "./../../assets/images/index"

const index = () => {
  return (
    // <div>
    //     <div className='relative w-[95%] h-[90%] flex justify-between m-auto rounded-md bg-blue-500'>
    //         <div>
    //             <h2 className='uppercase'>Get Your</h2>
    //             <h2 className='uppercase'>Electronic gadgets</h2>
    //             <h2 className='uppercase'>Repaired At Home</h2>
    //         </div>
    //         <div>Right</div>
    //     </div>
    // </div>
    // <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('../../assets/images/CPU.jpg')" }}>
    //   <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    //   <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
    //     <h1 className="text-4xl md:text-6xl font-bold mb-4">
    //       Reliable Gadget Repair at Your Doorstep
    //     </h1>
    //     <p className="text-xl md:text-2xl mb-6">
    //       Get your devices fixed by certified technicians without leaving your home.
    //     </p>
    //     <a href="#book" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
    //       Book a Service
    //     </a>
    //     <div className="mt-4 text-lg">
    //       <p>✅ Certified Technicians &nbsp;|&nbsp; ✅ 1000+ Devices Repaired &nbsp;|&nbsp; ✅ Quick & Reliable</p>
    //     </div>
    //   </div>
    // </div>
    // <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('../../assets/images/CPU.jpg')" }}>
    //   <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    //   <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
    //     <motion.h1 
    //       className="text-4xl md:text-6xl font-bold mb-4" 
    //       initial={{ opacity: 0, y: -50 }} 
    //       animate={{ opacity: 1, y: 0 }} 
    //       transition={{ duration: 0.5 }}
    //     >
    //       Reliable Gadget Repair at Your Doorstep
    //     </motion.h1>
    //     <motion.p 
    //       className="text-xl md:text-2xl mb-6" 
    //       initial={{ opacity: 0, y: 50 }} 
    //       animate={{ opacity: 1, y: 0 }} 
    //       transition={{ duration: 0.7 }}
    //     >
    //       Get your devices fixed by certified technicians without leaving your home.
    //     </motion.p>
    //     <motion.a 
    //       href="#book" 
    //       className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105" 
    //       whileHover={{ scale: 1.1 }}
    //     >
    //       Book a Service
    //     </motion.a>
    //     <motion.div 
    //       className="mt-6 text-lg" 
    //       initial={{ opacity: 0 }} 
    //       animate={{ opacity: 1 }} 
    //       transition={{ delay: 0.3, duration: 0.5 }}
    //     >
    //       <p>✅ Certified Technicians &nbsp;|&nbsp; ✅ 1000+ Devices Repaired &nbsp;|&nbsp; ✅ Quick & Reliable</p>
    //     </motion.div>
    //   </div>
    // </div>

    <div className="relative flex items-center justify-center min-h-screen mx-4 rounded-xl">
      <div className="absolute inset-0 rounded-xl"></div>
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-black dark:text-slate-300 text-left">
            <motion.h1 
              className="text-4xl md:text-3xl lg:text-6xl font-bold mb-4" 
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              Electronic Gadgets Repair at Your Doorstep
            </motion.h1>
            <motion.p 
              className="text-xl md:text-xl mb-6" 
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              Get your gadgets fixed by certified technicians without leaving your home.
            </motion.p>
            <motion.a 
              href="#book" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105 inline-block" 
              whileHover={{ scale: 1.1 }}
            >
              Explore Services
            </motion.a>
          </div>
          <motion.div 
            className="flex justify-center" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
          >
            <img src={Mobile_img} alt="Gadget Repair" className="w-full h-auto rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default index