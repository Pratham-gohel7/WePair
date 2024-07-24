import Reac, {Component} from 'react'
import { ScreenReplacement, Mob, WashingMachine, TV_img1 } from '../assets/images'
import ServiceCard from './ServiceCard';
import Slider from 'react-slick';

// const items = [
//     {id: 1, img: ScreenReplacement, heading: "Mobile Screen Replacement"},
//     {id: 2, heading: "Windows Installation"},
//     {id: 3, heading: "Laptop Battery Replacement"},
//     {id: 4, heading: "Air Conditioner Repair"},
// ]

// const services = {
//     popular: [
//       { title: 'Mobile Screen Replacement', description: 'Quick and reliable screen replacement.', icon: ScreenReplacement },
//       { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: ScreenReplacement },
//       { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: ScreenReplacement },
//       { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: ScreenReplacement },
//       // Add more popular services here
//     ],
//     mostUsed: [
//       { title: 'Laptop Hardware Upgrades', description: 'Upgrade your laptop hardware for better performance.', icon: ScreenReplacement },
//       { title: 'Washing Machine Drum Repair', description: 'Fix your washing machine drum issues.', icon: ScreenReplacement },
//       { title: 'Washing Machine Drum Repair', description: 'Fix your washing machine drum issues.', icon: ScreenReplacement },
//       { title: 'Washing Machine Drum Repair', description: 'Fix your washing machine drum issues.', icon: ScreenReplacement },
//       // Add more most used services here
//     ],
//   };

const services = [
  { title: 'Mobile Screen Replacement', description: 'Quick and reliable screen replacement.', icon: ScreenReplacement },
  { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: Mob },
  { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: WashingMachine},
  { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: TV_img1 },
  { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: TV_img1 },
  { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: TV_img1 },
  { title: 'AC Servicing', description: 'Comprehensive AC servicing.', icon: TV_img1 },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className  }
      style={{...style, display: "bloc", right: "12px", width: "12px", height: "100px" }}
      onClick={onClick}
    />
  );
}

const MostUsed = () => {
  const setting = {
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    nextArrow: <SampleNextArrow/>,
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
    };
  return (
    // <div className="bg-gray-100 dark:bg-slate-900 dark:text-white py-12">
    //   <div className="container mx-auto px-6">
    //     <h2 className="text-3xl font-bold text-center mb-8">Most Used Services</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {items.map((item) => (
    //         <div key={item.id} className='service-card flex flex-col justify-between items-center gap-8 bg-white dark:bg-[#2F3C7E] dark:text-[#FBEAEB] p-8 rounded-lg shadow-lg text-center hover:shadow-[0 0 0 2px #d0d0d0]'>
    //             <div>
    //                 <img src={item.img} alt={`${item.heading} icon`} className="absolute w-36 h-16 mx-auto mb-4" />
    //                 <h3 className="text-xl font-semibold mb-2">{item.heading}</h3>
    //                 {/* <p className="text-gray-600 dark:text-[#FBEAEB] text-sm">{service.description}</p> */}
    //             </div>
    //             <div>
    //                 {/* <button className='px-3 py-2 flex justify-center items-center gap-1 text-white bg-slate-800 rounded-xl '>Explore Now <FaArrowRight /></button> */}
    //             </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    // <div className="container mx-auto my-8">
    //   <h2 className="text-3xl font-bold text-center mb-8">Popular Services</h2>
    //   <Slider {...setting}>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //       {services.popular.map((service, index) => (
    //         <ServiceCard key={index} {...service} />
    //       ))}
    //     </div>
    //   </Slider>

    //     <h2 className="text-3xl font-bold text-center my-8">Most Used Services</h2>
    //   <Slider {...setting}>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //       {services.mostUsed.map((service, index) => (
    //         <ServiceCard key={index} {...service} />
    //       ))}
    //     </div>
    //   </Slider>
    // </div>

    <div className="bg-gray-100 dark:bg-slate-900 dark:text-white py-12">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Most Used</h2>
        </div>
        <div className=''>
            
            <Slider {...setting}>
                    {
                        services.map((service, index) => (
                            <div key={index} className='my-6'>
                                <div className='flex flex-col px-6 gap-2 rounded-xl dark:text-black' >
                                    <div className='mb-4'>
                                        <img src={service.icon} alt="img" className='w-full h-32 md:h-44 rounded-lg'/>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-sm font-bold text-black/80 dark:text-slate-300'>{service.title}</h1>
                                        <p className='text-[15px] text-grey-100 dark:text-slate-400'>{service.description}</p>
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

export default MostUsed