import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Navigation, FreeMode, Thumbs } from "swiper";
import "./ProductSlider.css";

const ProductSlider = ({ product }) => {
  const [smollSlider, setSmollSlider] = useState(null);
  const [mainSlider, setMainSlider] = useState(null);

  return (
    <div className="slider-product-page" data-test-id="product-slider">
      <div className="slider-smoll">
        <div className="arrow-slider">
          <div
            className="arrow-slider-prew"
            onClick={() => {
              mainSlider.slideNext();
            }}
          ></div>
          <div
            className="arrow-slider-next"
            onClick={() => {
              mainSlider.slidePrev();
            }}
          ></div>
        </div>
        <Swiper
          onSwiper={setSmollSlider}
          modules={[Navigation, FreeMode, Thumbs]}
          navigation={{
            prevEl: ".arrow-slider-prew",
            nextEl: ".arrow-slider-next",
          }}
          direction={"vertical"}
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={1}
          freeMode={true}
          watchSlidesProgress={true}
          className="slider-galerry"
        >
          {product.images.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img
                  className="slider-galerry-item"
                  src={`https://training.cleverland.by/shop${item.url}`}
                  alt="wear"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setMainSlider}
        className="slider-main"
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: smollSlider }}
      >
        {product.images.map((item) => {
          return (
            <SwiperSlide className="slider-block" key={item.id}>
              <img
                className="slider-img"
                src={`https://training.cleverland.by/shop${item.url}`}
                alt="wear"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
