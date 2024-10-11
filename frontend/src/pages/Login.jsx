import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock, ArrowRight, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = ("");
  const [password, setPassword] = ("");
  const loading = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div className='flex flex-col justify-center text-white py-12 sm:px-6 lg:px-8'>
        <motion.div
        className='sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        >
            <h2 className='mt-6 text-center text-3xl text-gray-800 font-extrabold'>Login</h2>
        </motion.div>

        <motion.div
        className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                <form action="" onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-300'>
                            Email
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <Mail className='h-5 w-5 text-gray-400'/>
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
								 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
                                placeholder='Email'
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-300'>
                            Password
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                <Lock className='h-5 w-5 text-gray-400'/>
                            </div>
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
								 placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'
                                placeholder='***********'
                            />
                        </div>
                    </div>
                    <button
							type='submit'
							className='w-full flex justify-center py-2 px-4 border border-transparent 
							rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600
							 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2
							  focus:ring-emerald-500 transition duration-150 ease-in-out disabled:opacity-50'
							disabled={loading}
						>
							{loading ? (
								<>
									<Loader className='mr-2 h-5 w-5 animate-spin' aria-hidden='true' />
									Loading...
								</>
							) : (
								<>
									<LogIn className='mr-2 h-5 w-5' aria-hidden='true' />
									Login
								</>
							)}
						</button>
                </form>
                <p className='mt-8 text-center text-sm text-gray-400'>
						Don't have an account?{" "}
						<Link to='/signup' className='font-medium text-emerald-400 hover:text-emerald-300'>
							Sign Up <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
            </div>
        </motion.div>
    </div>
  )
}

export default Login