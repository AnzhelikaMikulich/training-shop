import React from "react";
import star from "../../../assets/image/women/star.png";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../../constants/data";

const WomenAsortment = () => {
  return (
    <div>
      <div className="womens-block-asortment">
        {PRODUCTS.women.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/women/${item.id}`}
              className="cards-item"
              data-test-id={`clothes-card-women`}
            >
              <div className="womens-block-asortment-item">
                <div>
                  <img
                    src={`https://training.cleverland.by/shop${item.images[0].url}`}
                    alt="asortment-img"
                    className="asortment-img"
                  />
                </div>
                <p className="asortment-title">{item.name}</p>
                <div className="asortment-description">
                  <p className="asortment-description-price">{`$ ${item.price}`}</p>
                  <div className="asortment-description-score">
                    <img src={star} alt="score" />
                    <img src={star} alt="score" />
                    <img src={star} alt="score" />
                    <img src={star} alt="score" />
                    <img src={star} alt="score" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WomenAsortment;
