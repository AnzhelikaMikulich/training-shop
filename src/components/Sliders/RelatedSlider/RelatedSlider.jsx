import React from "react";
import { relatedItems } from "./RelatedItems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RelatedSlider.css";

import star from "../../../assets/image/women/star.png";

const RelatedSlider = () => {
  return (
    <div className="other-models">
      <h3 className="assortment-title">RELATED PRODUCTS</h3>
      <Swiper
        breakpoints={{
          670: {
            slidesPerView: 2,
          },
          920: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="womens-block-asortment"
        data-test-id="related-slider"
      >
        {relatedItems.map((item) => {
          return (
            <SwiperSlide className="womens-block-asortment-item">
              <div className="womens-block-asortment-item-img" key={item.id}>
                <img
                  src={item.image}
                  alt="asortment-img"
                  className="asortment-img"
                />
              </div>
              <p className="asortment-title">Women's tracksuit Q109</p>
              <div className="asortment-description">
                <p className="asortment-description-price">$ 30.00</p>
                <div className="asortment-description-score">
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RelatedSlider;
