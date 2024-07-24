import React from 'react'
import Slider from "react-slick"
import { CgProfile } from "react-icons/cg";
import car from "../../assets/car2.jpeg"

const testimonialsData = [
    {
        id: 1,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    },
    {
        id: 2,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    },
    {
        id: 3,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    },
    {
        id: 4,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    },
    {
        id: 5,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    },
    {
        id: 6,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    },
    {
        id: 7,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    },
    {
        id: 8,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    },
    {
        id: 9,
        img: car,
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsa consectetur sunt voluptas dolor sint aperiam dolores error explicabo adipisci?",
    }
]

const Testimonials = () => {

    const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        reponsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                  
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
            
        ]
    }
  return (
    
    <div className="bg-gray-100 dark:bg-slate-900 dark:text-white py-12">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
            <p className='text-center'>What our customers says!!</p>
        </div>
        <div className=''>
            
            <Slider {...setting}>
                    {
                        testimonialsData.map((data) => (
                            <div key={data.id} className='my-6'>
                                <div className='flex flex-col shadow-lg py-8 px-6 mx-6 gap-4 rounded-xl bg-[#FDF3AA] dark:text-black' >
                                    <div className='mb-4'>
                                        <img src={data.img} alt="img" className='w-20 h-20 rounded-full'/>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 gap-y-4'>
                                        <p className='text-[15px] text-grey-100'>{data.description}</p>
                                        <h1 className='text-xl font-bold text-black/80 dark:text-slate-800'>{data.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                
            </Slider>
        </div>
    </div>
  )
}

export default Testimonials