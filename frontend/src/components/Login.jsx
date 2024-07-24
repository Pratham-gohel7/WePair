// src/components/LoginPopup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import AOS from "aos";
import ThemeBtn from './ThemeBtn';
import { IoMdClose } from "react-icons/io";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
        <button
          className=" bg-blue-500 text-white rounded-xl px-4 py-2 m-2"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Login
        </button>
      {showModal ? (
        <>
          {/* <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-sm font-bold uppercase">Login To Your Account</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-3xl">
                      <IoIosCloseCircle />
                    </span>
                  </button>
                </div>
                <div className="relative p-2 flex-auto">
                  <form className="rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-left text-black text-sm font-semibold mb-1">
                      Email
                    </label>
                    <input placeholder="Email" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3000" className="shadow appearance-none border-b-2 rounded w-full py-1 px-1 text-black" />
                    <label className="block text-left text-black text-sm font-semibold mb-1">
                      Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      City
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <div className='mt-8 flex justify-between'>
                      <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Submit
                      </button>
                      <div className='flex justify-evenly gap-4 text-2xl'>
                        <button><FcGoogle /></button>
                        <button><FaFacebook /></button>
                        <button><FaApple /></button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex items-center p-6 border-t border-red-500 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div className='flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none backdrop-brightness-50'>
            <div className='dark:bg-slate-800 bg-slate-100 shadow-2xl w-auto h-auto'>
              <div className='flex items-start justify-between m-4 border-b border-solid border-slate-800 dark:border-slate-200'>
                <h2 className='text-lg font-bold p-4 float-start'>Login</h2>
                <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-2xl dark:text-white hover:bg-red-400">
                    <IoMdClose />
                    </span>
                  </button>
              </div>
              
              <form action="#" method="post" className='flex flex-col gap-4 w-[300px] md:w-[400px] p-4'>
                <input placeholder="Email" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3000" className="shadow w-full border-b-2 focus:border-blue-300 rounded-lg py-1 px-1 text-black dark:bg-slate-200" />
                <input placeholder="Password" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3000" className="shadow appearance-none border-b-2 rounded-lg w-full py-1 px-1 text-black dark:bg-slate-200" />
                <div className='flex justify-between'>
                  <input type="button" value="Login" className='bg-blue-600 text-slate-200 hover:bg-blue-500 rounded-lg w-[100px] p-1 font-semibold'/>
                  <p className='text-xs text-blue-500 dark:text-blue-400'>Forgot Password?</p>
                </div>
              </form>
              <p className='mt-2'>or</p>

              <div className='flex gap-4 justify-center items-center mt-4'>
                <a href="#" className='text-3xl'><FcGoogle /></a>
                <a href="#" className='text-3xl text-blue-600'><FaFacebook /></a>
                <a href="#" className='text-3xl'><FaApple/></a>
              </div>

              <div className='flex items-start justify-between m-4 border-t border-solid border-slate-800 dark:border-slate-200'>
              <p className='text-sm my-2'>Don't have an account? <a href="#" className='text-blue-700 dark:text-blue-400'>Sign Up</a></p>
                
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Login;
