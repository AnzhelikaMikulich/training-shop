import React from "react";
import Score from "../ProductPage/Score";
import { Link } from "react-router-dom";


const PageAsortment = ({productsArr,productType}) => {
  return (
    <div>
      <div className="womens-block-asortment">
        {productsArr.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/${productType}/${item.id}`}
              className="cards-item"
              data-test-id={`clothes-card-${productType}`}
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
                        : item.price
                    }`}
                    <span
                      className={
                        item.discount != null
                          ? "asortment-description-discount"
                          : "asortment-description-discount-none"
                      }
                    > {`$ ${
                      item.discount != null
                        ? (item.price +
                        (item.price / 100) *
                          parseInt(item.discount.match(/\d+/), 10))
                      .toFixed(2)
                        : item.price
                    }`}
                      
                    </span>
                  </p>
                  <Score countStar={+item.rating}></Score>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PageAsortment;
