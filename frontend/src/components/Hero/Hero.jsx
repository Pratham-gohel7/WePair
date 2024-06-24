import React from 'react'
import car1 from "../../assets/car1.jpeg"
import car2 from "../../assets/car2.jpeg"

import { Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
 } from '@material-tailwind/react';

const Hero = () => {
    const imageList = [
        {
            id: 1,
            image: car1,
        },
        {
            id: 2,
            image: car2,
        }
    ]
  return (
    <div className='w-full dark:text-white flex flex-col md:flex-row justify-between mt-4'>
        <div className='md:w-auto'>
            <div className='sm:inline-block flex flex-col justify-center items-center'>
                <h2 className='text-2xl m-auto text-center font-semibold md:text-4xl md:inline-block md:items-center md:text-center md:font-semibold'>Repairing Services at Door Step</h2>
            </div>
            <div className='h-auto w-auto bg-red-200'>
                <div className='border-blue-400 bg-blue-400 m-[10%] text-center'>
                <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          UI/UX Review Check
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
                
        </div>
        <Typography className="font-normal">January 10</Typography>
      </CardFooter>
    </Card>
                </div>
            </div>
        </div>
        <div className='md:w-auto flex flex-wrap gap-4 justify-around'>
            <img src={car1} alt="car1" className='w-[45%] flex justify-center items-center rounded-xl'/>
            <img src={car1} alt="car1" className='w-[45%] flex justify-center items-center rounded-xl'/>
            <img src={car1} alt="car1" className='w-[45%] flex justify-center items-center rounded-xl'/>
            <img src={car1} alt="car1" className='w-[45%] flex justify-center items-center rounded-xl'/>
        </div>
    </div>
  )
}

export default Hero