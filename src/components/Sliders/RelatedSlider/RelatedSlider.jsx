import React from "react";
import { relatedItems } from "./RelatedItems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Score from "../../ProductPage/Score";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./RelatedSlider.css";
import { PRODUCTS } from "../../../constants/data";
import { Link } from "react-router-dom";

const RelatedSlider = ({ type, product }) => {
  console.log(PRODUCTS[type]);
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
        {PRODUCTS[type]
          .sort(() => Math.random() - 0.5)
          .map((item) => {
            return (
              <SwiperSlide
                className="womens-block-asortment-item"
                key={item.id}
              >
                <Link to={`/${item.category}/${item.id}`}>
                  <div className="womens-block-asortment-item">
                    <div className="womens-block-asortment-img">
                      <div
                        className={
                          item.discount === null
                            ? "womens-block-asortment-discount-none"
                            : "womens-block-asortment-discount"
                        }
                      >
                        {item.discount}
                      </div>
                      <img
                        src={`https://training.cleverland.by/shop${item.images[0].url}`}
                        alt="asortment-img"
                        className="asortment-img"
                      />
                    </div>
                    <p className="asortment-title">{item.name}</p>
                    <div className="asortment-description">
                      <p className="asortment-description-price">
                        {`$ ${
                          item.discount === null
                            ? item.price
                            : (
                                item.price -
                                (item.price / 100) *
                                  parseInt(item.discount.match(/\d+/), 10)
                              ).toFixed(2)
                        }`}
                        <span
                          className={
                            item.discount != null
                              ? "asortment-description-discount"
                              : "asortment-description-discount-none"
                          }
                        >
                          ${item.price}
                        </span>
                      </p>
                      <Score countStar={+item.rating}></Score>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default RelatedSlider;
