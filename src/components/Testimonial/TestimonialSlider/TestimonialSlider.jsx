import React from 'react';
import { Carousel } from "flowbite-react";
import Testimonial from '../Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';


const TestimonialSlider = () => {
    return (
        <>
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
        className="mySwiper h-[75vh] max-w-[80%]"
      >
        <SwiperSlide>
          <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
        <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
        <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
        <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
        <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
        <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
        <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
        <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
        <Testimonial></Testimonial>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default TestimonialSlider;