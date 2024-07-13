import React, { useState, useEffect, useCallback } from 'react';
import LogoDark from "../../assets/logonewhite.png"
import LogoLight from "../../assets/logonew.png"
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import ThemeBtn from '../ThemeBtn';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [Logo, setLogo] = useState(LogoLight)
  const [icon, setIcon] = useState(<MdDarkMode />)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  
  useEffect(() => {
    if(isDarkMode){
      setIcon(<MdDarkMode />)
      setLogo(LogoLight)        
    }
    else{
      setIcon(<MdDarkMode />)
      setLogo(LogoDark)
    }
}, [setIsDarkMode, setLogo])

  return (
    <header className="dark:text-slate-100 p-1 flex justify-between items-center">
      <div className="logo">
        <img src={Logo} alt="Company Logo" className="h-10" />
      </div>
      {/* <div  */}
      <nav className={`navbar hidden ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:items-center">
          <li className="m-2 md:mx-4"><a href="#home">Home</a></li>
          <li className="m-2 md:mx-4"><a href="#services">Services</a></li>
          <li className="m-2 md:mx-4"><a href="#about">About</a></li>
          <li className="m-2 md:mx-4"><a href="#contact">Contact</a></li>
        </ul>
        
      </nav>
      <nav className={`navbar bg-rose-300 ${isMenuOpen ? 'block' : 'hidden'} md:hidden fixed top-12 right-0 h-full w-full flex flex-col items-center  p-8 transform ${isMenuOpen ? 'translate-y-0 duration-1000' : 'translate-y-1 duration-1000'} transition-transform md:relative md:translate-x-0 md:flex md:items-center md:w-auto md:bg-transparent md:p-0`}>
        <ul className="flex flex-col md:flex-row md:items-center">  
          <li className="m-2 md:mx-4"><a href="#home">Home</a></li>
          <li className="m-2 md:mx-4"><a href="#services">Services</a></li>
          <li className="m-2 md:mx-4"><a href="#about">About</a></li>
          <li className="m-2 md:mx-4"><a href="#contact">Contact</a></li>
        </ul>
        <div className="actions flex items-center">
          <button className="login-button bg-blue-500 text-white rounded-xl px-4 py-2 m-2">
            Login
          </button>
          <button
            className="dark-mode-toggle dark:text-slate-100 px-4 py-2 m-2 text-2xl"
            onClick={toggleDarkMode}
          >
          {icon}      
          </button>
          {/* <ThemeBtn/> */}
        </div>
      </nav>
      
      <div className="actions hidden md:flex md:items-center">
        <button className="login-button bg-blue-500 text-white rounded-xl px-4 py-2 m-2">
          Login
        </button>
        <button
          className="dark-mode-toggle dark:text-slate-100 px-4 py-2 m-2 text-2xl"
          onClick={toggleDarkMode}
        >
        {icon}      
        </button>
        {/* <ThemeBtn/> */}
      </div>
      <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6 dark:text-slate-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
    </header>
  );
};

export default Header;
