import React from "react";
import {Mobile, AC, Washing_Machine, Tv, Computer} from "../../assets/icons/index.js" 
import { AC_img1, AC_img2, PC_img1, Mobile_img1, TV_img1, Mobile_img, IC, CPU} from "../../assets/images/index.js";


const Hero = () => {
  return (
    <div className="w-full dark:text-white flex flex-col md:flex-row justify-between mt-4 md:justify-center md:items-center">
      <div className="md:w-[50%] md:m-4">
        <div className="sm:inline-block flex flex-col justify-center items-center">
          <h2 className="text-2xl m-auto text-center font-semibold md:text-3xl md:inline-block md:ml-5 md:items-center md:text-center md:font-semibold ">
            Repairing Services at Door Step
          </h2>
          <div className="w-[90%] h-auto border-[1px] border-slate-200 dark:border-slate-800 shadow-xl mt-5 p-5 rounded-lg">
            <div>
              <h2 className="ml-5 font-semibold text-slate text-slate-600 dark:text-slate-400">What You Are Looking For?</h2>
            </div>
            <div className="flex flex-wrap my-5">
              <div className="flex flex-wrap my-5">
                <div className="mx-1 text-center">
                  <div className="w-[100px] h-[60px] flex flex-col border-0 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 justify-center items-center">
                    <img src={Computer} alt="" className="w-[50px] h-[50px]"/>
                  </div>
                  <p className="text-xs md:text-sm font-sans text-slate-600 dark:text-slate-300">PC Repairing</p>
                </div>
                <div className="mx-1 text-center">
                  <div className="w-[90px] h-[60px] flex flex-col border-0 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 justify-center items-center">
                    <img src={AC} alt="" className="w-[50px] h-[50px]"/>
                  </div>
                  <p className="text-xs md:text-sm font-sans text-slate-600 dark:text-slate-300">AC Repairing</p>
                </div>
                <div className="mx-1 text-center">
                  <div className="w-[90px] h-[60px] flex flex-col border-0 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 justify-center items-center">
                    <img src={Tv} alt="" className="w-[50px] h-[50px]"/>
                  </div>
                  <p className="text-xs md:text-sm font-sans text-slate-600 dark:text-slate-300">Tv Repairing</p>
                </div>
              </div>
              <div>
                <div className="flex mt-5 text-center">
                  <div className="mx-1">
                    <div className="w-[130px] h-[90px] flex flex-col border-0 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 justify-center items-center">
                      <img src={Washing_Machine} alt="" className="w-[80px] h-[80px]"/>
                    </div>
                    <p className="w-[80%] text-sm font-sans text-slate-600 dark:text-slate-300 text-center ">Washing Machine Repairing</p>
                  </div>
                  <div className="mx-1">
                    <div className="w-[130px] h-[90px] flex flex-col border-0 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 justify-center items-center">
                      <img src={Mobile} alt="" className="w-[80px] h-[80px]"/>
                    </div>
                    <p className="text-sm font-sans text-slate-600 dark:text-slate-300">Mobile Repairing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:w-[50%] md:flex md:flex-wrap md:gap-4 md:mt-5 md:justify-evenly">
        <img
          src={IC}
          alt="car1"
          className="w-[50%] flex justify-center items-center rounded-xl bg-accent-dark bg-cover"
        />
        <div className="w-[40%] flex flex-col items-center gap-5">
          <img
            src={TV_img1}
            alt="car1"
            className="w-[100%] flex justify-center items-center rounded-xl "
          />
          <img
            src={Mobile_img1}
            alt="car1"
            className="w-[100%] h-[100%] flex justify-center items-center rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
