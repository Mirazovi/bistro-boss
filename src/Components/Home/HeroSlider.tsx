
'use client'
import Image from 'next/image'
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
const data = [
    {
        src: '/01.jpg'
    },
    {
        src: '/02.jpg'
    },
    {
        src: '/03.png'
    },
    {
        src: '/04.jpg'
    },
    {
        src: '/05.png'
    },
    {
        src: '/06.png'
    },
]
const HeroSlider = () => {
    return (
        <div>
            <Swiper
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
                delay:2000
            }}
            loop={true}
            modules={[Navigation,Pagination,Autoplay]}
            >

            {
                    data?.map((item, idx) => <SwiperSlide key={idx}><div className='w-full h-[600px] mb-10'>
                        <Image className='w-full h-full object-cover' width={1400} height={2000} src={item?.src} alt='img' />
                    </div></SwiperSlide>)
                }
                
            </Swiper>
        </div>
    )
}

export default HeroSlider