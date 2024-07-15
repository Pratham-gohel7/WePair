import React from 'react'
import {Mobile_img, Mobile_img1} from "../../assets/images/index"
import {Mobile, Washing_Machine, Tv, AC, Computer} from "../../assets/icons/index"
import { FaArrowRight } from "react-icons/fa";


const services = [
    { id: 1, title: 'Mobile Repairing', description: 'Expert repairs for all mobile Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis minus possimus quae a, atque praesentium illum itaque repudiandae mollitia asperiores? brands', icon: Mobile },
    { id: 2, title: 'Computer Repairing', description: 'Professional computer repair services Lorem lore similique minus quos delectus corporis perspiciatis velit temporibus incidunt cupiditate sequi iure veniam quibusdam sint, praesentium vitae porro neque nesciunt!.', icon: Computer },
    { id: 3, title: 'AC Repairing', description: 'Reliable AC repair at your doorstep Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem minima omnis molestias ut. Accusamus libero perspiciatis officia distinctio necessitatibus?.', icon: AC },
    { id: 4, title: 'Washing Machine Repairing', description: 'Fixing all types of washing machines Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos nulla dolores porro impedit neque perferendis nisi laborum? Itaque, corporis..', icon: Washing_Machine },
    { id: 5, title: 'Oven Repairing', description: 'Oven repair services for all brands Lorem, ipsum dolor soloremque voluptatibus tempore deleniti quidem porro repudiandae aspernatur amet itaque!.', icon: Tv },
    { id: 6, title: 'Oven Repairing', description: 'Oven repair services for all brands Lorem, ipsum dolor soloremque voluptatibus tempore deleniti quidem porro repudiandae aspernatur amet itaque!.', icon: Tv },
    // Add more services as needed
  ];
const index = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 dark:text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className='service-card flex flex-col justify-between items-center gap-8 bg-white dark:bg-[#2F3C7E] dark:text-[#FBEAEB] p-8 rounded-lg shadow-lg text-center hover:border-4 hover:border-sky-500'>
                <div>
                    <img src={service.icon} alt={`${service.title} icon`} className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-[#FBEAEB] text-sm">{service.description}</p>
                </div>
                <div>
                    <button className='px-3 py-2 flex justify-center items-center gap-1 text-white bg-slate-800 rounded-xl '>Explore Now <FaArrowRight /></button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default index