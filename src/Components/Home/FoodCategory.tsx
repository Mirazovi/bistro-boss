'use client'
import Image from 'next/image'
import React from 'react'


import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

const FoodCategory = () => {
    const data = [
        {
            src:'/slide1.jpg'
        },
        {
            src:'/slide2.jpg'
        },
        {
            src:'/slide3.jpg'
        },
        {
            src:'/slide4.jpg'
        },
        {
            src:'/slide5.jpg'
        },
    ]
  return (
    <div className='my-20'>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
                delay:2000
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
            >
                {
                    data.map((item,idx) => <SwiperSlide key={idx}><div className='w-full h-[500px] mb-10'>
                            <Image className='w-full h-full object-cover' width={400} height={400} src={item.src} alt='image'/>
                        </div></SwiperSlide>)
                }
            </Swiper>
    </div>
  )
}

export default FoodCategory