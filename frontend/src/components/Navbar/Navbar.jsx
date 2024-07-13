import React, { useEffect, useState } from "react";
import DarkLogo from "../../assets/logoDark.png";
import LightLogo from "../../assets/logoLight.png";
import NewLogo from "../../assets/logonew.png";
import NewLogo1 from "../../assets/logonewhite.png";
import ThemeBtn from "../ThemeBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    //     <nav className="bg-gray-800 p-4">
    //     <div className="flex items-center justify-between">
    //         <div className="text-white text-xl">My Website</div>

    //     </div>
    // </nav>
    <div className="shadow-md bg-slate-100 dark:bg-slate-800 dark:text-white">
      <div className=" py-1">
        <div className="container flex justify-between items-center ">
          <div>
            <a href="#">
              <img
                src={NewLogo}
                alt="Logo"
                className="w-15 h-12 md:w-20 dark:fill-white dark:hidden"
              />
            </a>
            <a href="#">
              <img
                src={NewLogo1}
                alt="Logo"
                className="w-15 h-12 md:w-20 dark:fill-white hidden dark:block"
              />
            </a>
          </div>
          {/* searchbar */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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
          <div
            className={`absolute top-12 p-6 right-0 w-[100%] h-[100%] bg-gray-900 justify-center items-center bg-opacity-100 text-slate-200 transition-transform transform ${isOpen ? 'translate-x-0' : 'hidden'} md:transform-none md:absolute md:flex md:bg-transparent md:h-auto`}
          >
            {/* <div>
                <div className="group">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-[100px] md:w-[200px] rounded-lg px-2 group-hover:w-[300px] transition-all duration-300 border border-gray-300 focus:outline-none focus:border-b focus:border-primary dark:text-black"
                />
                </div>
            </div>
            <button className="w-[70px] bg-blue-400 text-white uppercase text-[12px] font-bold py-1 rounded-lg md:w-[90px] md:py-2 hover:bg-[#947574] ">
                Login
            </button>
            <div>
                <ThemeBtn />
            </div>*/}

            <nav>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact Us</li>
                {/* <li></li> */}
              </ul>
            </nav>
            </div> 

        </div>
            
          </div>

      <div></div>
    </div>
  );
};

export default Navbar;
