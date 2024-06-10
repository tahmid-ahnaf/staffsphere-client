import React from 'react';
import { Carousel } from "flowbite-react";
import Testimonial from '../Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const TestimonialSlider = ({sliderData}) => {

   console.log(sliderData);
    return (
        <div className='mb-8'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-screen max-w-[80%]"
      >
      {
        sliderData.map((slider)=>(
          <SwiperSlide key={slider.id}>
          <Testimonial slider={slider}></Testimonial>
        </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
    );
};

export default TestimonialSlider;