import React from 'react'
import Slider from "react-slick"

const Testimonials = () => {
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
                breakpoint: 10000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1
                  
                }
            },
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                
                  
                }
            },
        ]
    }
  return (
    
    <div className="bg-gray-100 dark:bg-slate-900 dark:text-white py-12">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
            <p className='text-center'>What our customers says!!</p>
        </div>
        <div>
            <Slider {...settings}>

            </Slider>
        </div>
    </div>
  )
}

export default Testimonials