import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { productItems } from "./ProductItem";
import { useState } from "react";
import { Navigation, Controller } from "swiper";
import "./ProductSlider.css";

const ProductSlider = () => {
  const [smollSlider, setSmollSlider] = useState(null);
  const [mainSlider, setMainSlider] = useState(null);
  
  return (
    <div className="slider-product-page" data-test-id="product-slider">
      <div className="slider-smoll">
        <div className="arrow-slider">
          <div className="arrow-slider-prew"></div>
          <div className="arrow-slider-next"></div>
        </div>
        <Swiper
          modules={[Navigation, Controller]}
          navigation={{
            prevEl: ".arrow-slider-prew",
            nextEl: ".arrow-slider-next",
          }}
          direction={"vertical"}
          slidesPerView={4}
          spaceBetween={30}
          onSwiper={setSmollSlider}
          controller={{ control: mainSlider }}
          className="slider-galerry"
        >
          <SwiperSlide>
            <div>
              <img
                className="slider-galerry-item"
                src={productItems[0].image}
                alt="wear"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="opasity-slid">
              <img
                className="slider-galerry-item"
                src={productItems[1].image}
                alt="wear"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="opasity-slid">
              <img
                className="slider-galerry-item"
                src={productItems[2].image}
                alt="wear"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="opasity-slid">
              <img
                className="slider-galerry-item"
                src={productItems[3].image}
                alt="wear"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        className="slider-main"
        navigation={true}
        modules={[Navigation, Controller]}
        onSwiper={setMainSlider}
        controller={{ control: smollSlider }}
      >
        {productItems.map((item) => {
          return (
            <SwiperSlide className="slider-block" key={item.id}>
              <img className="slider-img" src={item.image} alt="wear" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
