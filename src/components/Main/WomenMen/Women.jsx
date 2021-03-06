import React from "react";
import Categories from "./Categories";
import { PARTICULARS } from "../../../constants/particulars";
import { PRODUCTS } from "../../../constants/data";
import { Link } from "react-router-dom";
import Score from "../../ProductPage/Score";

const Women = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  let activeParticulars = PARTICULARS[activeItem].particularName
  return (
    <section className="womens-block clothes" data-test-id="clothes-women">
      <div className="womens-block-header">
        <h2 className="womens-block-title">WOMEN’S</h2>
        <Categories type='women' activeItem= {activeItem} setActiveItem = {setActiveItem} ></Categories>
      </div>
      <div className="womens-block-asortment">
        {PRODUCTS.women.map((item) => {
          return (item.particulars[activeParticulars]?<Link
            key={item.id}
            to={`/women/${item.id}`}
            className="cards-item"
            data-test-id={`clothes-card-women`}
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
                  >
                    {`$ ${
                    item.discount != null
                      ? (
                        item.price +
                        (item.price / 100) *
                          parseInt(item.discount.match(/\d+/), 10)
                      ).toFixed(2)
                      : item.price
                  }`}
                  </span>
                </p>
                <Score countStar={+item.rating}></Score>
              </div>
            </div>
          </Link>:'')
         
         
        })}
      </div>
      
      <Link to={`/women`}><h3 className="womens-block-all">See All</h3></Link>
    </section>
  );
};

export default Women;
