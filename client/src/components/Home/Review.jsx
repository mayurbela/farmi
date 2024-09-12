import React from 'react'
import rev from './review_data'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
  
      };
  return (
    <div className='relative top-[30vh] bg-[#392B58]  h-[80vh]'>
        <div className='h-[10vh] w-[80vw] m-auto top-12 relative flex justify-between '>
        <div className='relative top-3 border-t-4 h-5 w-[350px]  border-slate-300 m-auto '></div>
        <div className='text-[40px] m-auto font-mediumbold head brightness-75 text-white  '><h1> Our Happy Customers</h1> </div>
        <div className=' relative border-t-4 top-3 h-5 w-[350px] border-slate-300 m-auto '></div>

        </div>
     <div className='w-[75vw] m-auto relative top-8'>
      <div className='mt-20' ></div>
      <Slider {...settings}>
         {rev.map((d)=>(
            <div className='brightness-[85%] bg-white h-[400px] w-vw text-black rounded-xl border-4 border-gray-400 shadow-xl'>
                <div className=' h-56 rounded-t-lg bg-[#C06E52] flex justify-center items-center '>
                    <img src= {d.img} alt="" className='h-52 w-52 p-2 rounded-full border-4 border-gray-200  '></img>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-3'>
                    <p className='font-bold text-xl'>{d.name}</p>
                    <p>{d.review}</p>
                </div>
            </div>
         ))

         }
         </Slider>
      </div>
      </div>
  )
}

export default Review
