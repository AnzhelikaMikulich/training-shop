import React from "react";
import Score from "../../ProductPage/Score";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../../constants/data";

const MenAsortment = () => {
  return (
    <div className="womens-block-asortment">
      {PRODUCTS.men.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/men/${item.id}`}
            className="cards-item"
            data-test-id={`clothes-card-men`}
          >
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
                <Score></Score>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MenAsortment;
