import React from 'react'
import {PC_img1} from "../../assets/images/index.js"
import Slider from "react-slick"

const imgList = [
  {
    id: 1,
    img: PC_img1
  },
  {
    id: 2,
    img: PC_img1
  },
  {
    id: 3,
    img: PC_img1
  },
  {
    id: 4,
    img: PC_img1
  },
  {
    id: 5,
    img: PC_img1
  },
  {
    id: 6,
    img: PC_img1
  },{
    id: 7,
    img: PC_img1
  }
]
const ItemsSlider = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
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

  return (
    <div>
      <div class="border-t-2 dark:border-[#1E293B] border-slate-200 my-12"></div>

      <Slider {...settings} className=''>
      {
        imgList.map((item) => (
          <div className='items-center'>
            <button className='bg-[#01050017] absolute mx-20 my-16 p-2 rounded-2xl text-slate-800 text-sm font-semibold'>Book Now</button>
            <img src={item.img} alt="" className='w-[100%] h-[180px] rounded- px-5 hover:width-[200px]'/>
          </div>
        ))
      }
      
    </Slider>
    </div>
  )
}

export default ItemsSlider