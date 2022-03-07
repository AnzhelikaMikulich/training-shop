import React from "react";
import { useState } from "react";
import "./style/clothesstyle.css";
import "./style/productstyle.css";
import ProductSlider from "../components/Sliders/ProductSlider/ProductSlider";
import RelatedSlider from "../components/Sliders/RelatedSlider/RelatedSlider";
import FormFooter from "../components/Main/Form/FormFooter";
import PaySystem from "../components/ProductPage/PaySystem";
import arrovNext from ".././assets/image/pages/arrov.png";
import star from ".././assets/image/women/star.png";
import shipping from ".././assets/image/banner/shipping.png";
import return1 from ".././assets/image/banner/return.png";
import send from ".././assets/image/productpage/send.png";
import heart from ".././assets/image/productpage/heart.png";
import scales from ".././assets/image/productpage/scales.png";

const ProductPage = ({ type, product }) => {
  const [activeIdColor, setActiveIdColor] = useState(product.images[0].id);
  const [activeColor, setActiveColor] = useState(product.images[0].color);
  const [activeSize, setActiveSize] = useState(product.sizes[0]);
  let uniqueColors = new Set(product.images.map(({ color }) => color));

  return (
    <div className="page-product" data-test-id={`product-page-${type}`}>
      <main className="main">
        <div className="womens-block-header header-page">
          <div className="container womens-block-header-content">
            <div className="womens-block-header-interface">
              <div className="header-path">
                <span>Home</span>
                <img src={arrovNext} alt="arrow" />
                <span>{product.category}</span>
                <img src={arrovNext} alt="arrow" />
                <span className="active-nav">{product.name}</span>
              </div>
              <div className="header-share">Share</div>
            </div>
            <h2 className="womens-block-title title-page clouses-title">
              {product.name}
            </h2>
            <div className="womens-block-header-interface">
              <div className="header-path">
                <div className="asortment-description-score">
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                </div>
                <div className="score-counter">
                  {product.reviews.length
                    ? `${product.reviews.length}Reviews`
                    : `No Reviews`}
                </div>
              </div>
              <div className="model-description">
                <p>
                  SKU:<span className="model-description-acсent">777</span>
                </p>
                <p>
                  Availability:
                  <span className="model-description-acсent">In Stock</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product-page-content">
            <ProductSlider></ProductSlider>
            <div className="description-product-page">
              <div className="description-product-page__color">
                <p className="color-model">
                  Color:{" "}
                  <span className="model-description-acсent">
                    {activeColor}
                  </span>
                </p>
                <div className="choise-models">
                  {[...uniqueColors]
                    .map((item) =>
                      product.images.find(({ color }) => color === item)
                    )
                    .map(({ id, color, url }) => {
                      return (
                        <div
                          className={
                            activeIdColor === id
                              ? "choise-models-item choise-models-item-border"
                              : "choise-models-item"
                          }
                          key={id}
                          onClick={() => {
                            setActiveIdColor(id);
                            setActiveColor(color);
                          }}
                        >
                          <img
                            src={`https://training.cleverland.by/shop${url}`}
                            alt="wear"
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="description-product-page__size">
                <p className="size-model">
                  Size:{" "}
                  <span className="model-description-acсent">{activeSize}</span>
                </p>
                <div className="size-models">
                  {product.sizes.map((item, id) => {
                    return (
                      <div
                        className={
                          item === activeSize
                            ? "size-models-item size-models-item_active"
                            : "size-models-item"
                        }
                        key={id}
                        onClick={() => setActiveSize(item)}
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
                <p className="size-icon">Size guide</p>
              </div>
              <hr />
              <div className="description-product-page__price">
                <div className="price-model">$ {product.price}</div>
                <button className="card-add">Add to card</button>
                <div className="price-icon-heard">
                  <img src={heart} alt="heart" />
                </div>
                <div className="price-icon-scales">
                  <img src={scales} alt="scales" />
                </div>
              </div>
              <hr />
              <div className="delivery-work description-product-page__shipping">
                <div className="work-block">
                  <div className="work-block-img">
                    <img src={shipping} alt="work-block" />
                  </div>
                  <div className="work-block-description">
                    <p className="work-block-text">Shipping & Delivery</p>
                  </div>
                </div>
                <div className="work-block">
                  <div className="work-block-img">
                    <img src={return1} alt="work-block" />
                  </div>
                  <div className="work-block-description">
                    <p className="work-block-text">Returns & Exchanges</p>
                  </div>
                </div>
                <div className="work-block">
                  <div className="work-block-img">
                    <img src={send} alt="work-block" />
                  </div>
                  <div className="work-block-description">
                    <p className="work-block-text">Ask a question</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="description-product-page__guaranties">
                <h3 className="guaranties-title">guaranteed safe checkout</h3>
                <PaySystem></PaySystem>
              </div>
              <hr />
              <div className="description-product-page__description">
                <h3 className="guaranties-title description-title">
                  DESCRIPTION
                </h3>
              </div>
              <hr />
              <div className="description-product-page__additional">
                <h3 className="guaranties-title">ADDITIONAL INFORMATION</h3>
                <p className="model-description-acсent">
                  Color:
                  <span className="no-accent">Blue, White, Black, Grey</span>
                </p>
                <p className="model-description-acсent">
                  Size:<span className="no-accent">XS, S, M, L</span>
                </p>
                <p className="model-description-acсent">
                  Material:<span className="no-accent">{product.material}</span>
                </p>
              </div>
              <hr />
              <div className="description-product-page__reviews">
                <h3 className="guaranties-title">REVIEWS</h3>
                <div className="reviews-item-stars">
                  <div className="review-description">
                    <div className="asortment-description-score">
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                    </div>
                    <div className="score-counter">2 Reviews</div>
                  </div>
                  <p>Write a review</p>
                </div>
                <div className="reviews-item">
                  <div className="reviews-item-stars">
                    <p className="review-name">Oleh Chabanov</p>
                    <div className="asortment-description-score">
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                    </div>
                  </div>
                  <div>
                    On the other hand, we denounce with righteous indignation
                    and like men who are so beguiled and demoralized by the
                    charms of pleasure of the moment
                  </div>
                </div>
                <div className="reviews-item">
                  <div className="reviews-item-stars">
                    <p className="review-name">ShAmAn design</p>
                    <div className="asortment-description-score">
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                      <img src={star} alt="score" />
                    </div>
                  </div>
                  <div>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <RelatedSlider></RelatedSlider>
        </div>
        <FormFooter></FormFooter>
      </main>
    </div>
  );
};

export default ProductPage;
