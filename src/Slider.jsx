import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import './Slider.css'
import 'swiper/css/navigation'

const Slider = () => {
    return (
        <Swiper modules={[Navigation]} navigation spaceBetween={30} slidesPerView={1} onSlideChange={() => console.log('slide change')}>
            <SwiperSlide><img src="assets/1.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/3.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/4.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/5.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/1.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/3.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/4.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="assets/5.png" alt="" /></SwiperSlide>
        </Swiper>
    )
}
export default Slider