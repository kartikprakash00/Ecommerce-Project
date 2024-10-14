import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

SwiperCore.use([Autoplay]);

const Hero = () => {

    const { navigate } = useContext(ShopContext)

    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero left side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div onClick={() => navigate('/collection')} className='flex items-center gap-2 cursor-pointer hover:text-[#41d8df]'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>

            {/* Hero right side */}
            <div className='w-full sm:w-1/2'>
                <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 4000 }} loop={true}>
                    <SwiperSlide>
                        <img className='w-full h-full sm:h-full md:h-[35vh] lg:h-[50vh]' src={assets.hero_img} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full sm:h-full md:h-[35vh] lg:h-[50vh]' src={assets.hero_img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-full sm:h-full md:h-[35vh] lg:h-[50vh]' src={assets.hero_img3} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default Hero
