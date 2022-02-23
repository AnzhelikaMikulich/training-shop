import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./BannerSlider.css";
import { Navigation } from "swiper";
import BannerSlide from "./BannerSlide";

const BannerSlider = () => {
  return (
    <div className="banner-block-one" data-test-id="main-slider">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
         <BannerSlide></BannerSlide>
        </SwiperSlide>
        <SwiperSlide>
        <BannerSlide></BannerSlide>
        </SwiperSlide>
        <SwiperSlide>
        <BannerSlide></BannerSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
