import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart } from "../redux/actions/actions";
import { removeItemFromCart } from "../redux/actions/actions";
import "./style/clothesstyle.css";
import "./style/productstyle.css";
import ProductSlider from "../components/Sliders/ProductSlider/ProductSlider";
import RelatedSlider from "../components/Sliders/RelatedSlider/RelatedSlider";
import Score from "../components/ProductPage/Score";
import FormFooter from "../components/Main/Form/FormFooter";
import PaySystem from "../components/ProductPage/PaySystem";
import arrovNext from ".././assets/image/pages/arrov.png";
import shipping from ".././assets/image/banner/shipping.png";
import return1 from ".././assets/image/banner/return.png";
import send from ".././assets/image/productpage/send.png";
import heart from ".././assets/image/productpage/heart.png";
import scales from ".././assets/image/productpage/scales.png";

const ProductPage = ({ type, product }) => {
  const [activeIdColor, setActiveIdColor] = useState(product.images[0].id);
  const [activeColor, setActiveColor] = useState(product.images[0].color);
  const [activeSize, setActiveSize] = useState(product.sizes[0]);
  
  useEffect(() => {
    function defaultSelect() {
      setActiveColor(product.images[0].color);
      setActiveSize(product.sizes[0]);
      setActiveIdColor(product.images[0].id);
    }
    defaultSelect();
  }, [product.id,product.sizes,product.images]);

  let uniqueColors = new Set(product.images.map(({ color }) => color));

  let workBlock = [
    { image: shipping, text: "Shipping & Delivery" },
    { image: return1, text: "Returns & Exchanges" },
    { image: send, text: "Ask a question" },
  ];
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const isProductInCart = order.filter(
    (item) => item.color === activeColor && item.size === activeSize,
  ).length;

  return (
    <div className="page-product" data-test-id={`product-page-${type}`}>
      <main className="main">
        <div className="womens-block-header header-page">
          <div className="container womens-block-header-content">
            <div className="womens-block-header-interface">
              <div className="header-path">
                <Link to={`/`}>
                  <span>Home</span>
                </Link>
                <img src={arrovNext} alt="arrow" />
                <Link to={`/${product.category}`}>
                  <span>{product.category}</span>
                </Link>
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
                <Score countStar={+product.reviews.length}></Score>
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
            <ProductSlider product={product}></ProductSlider>
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
                <div className="price-model">
                  <p className="asortment-description-price">
                    {`$ ${
                      product.discount === null
                        ? product.price
                        : product.price
                    }`}
                    <span
                      className={
                        product.discount != null
                          ? "asortment-description-discount"
                          : "asortment-description-discount-none"
                      }
                    >
                     {`$ ${
                      product.discount != null
                        ? (
                          product.price +
                          (product.price / 100) *
                            parseInt(product.discount.match(/\d+/), 10)
                        ).toFixed(2)
                        : product.price
                    }`}
                    </span>
                  </p>
                </div>
                <button onClick={() => {
              isProductInCart
                ? dispatch(removeItemFromCart(product.id, activeColor, activeSize))
                : dispatch(addItemToCart(
                      product.id,
                      product.name,
                      product.price,
                      product.images,
                      activeColor,
                      activeSize,
                      product.discount,
                    ),
                  );
            }} className="card-add" data-test-id='add-cart-button'>{isProductInCart ? 'remove to card' : 'add to card'}</button>
                <div className="price-icon-heard">
                  <img src={heart} alt="heart" />
                </div>
                <div className="price-icon-scales">
                  <img src={scales} alt="scales" />
                </div>
              </div>
              <hr />
              <div className="delivery-work description-product-page__shipping">
                {workBlock.map((item, index) => {
                  return (
                    <div className="work-block" key={index}>
                      <div className="work-block-img">
                        <img src={item.image} alt="work-block" />
                      </div>
                      <div className="work-block-description">
                        <p className="work-block-text">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
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
                  {[...uniqueColors]
                    .map((item) =>
                      product.images.find(({ color }) => color === item)
                    )
                    .map(({ color, id }) => {
                      return (
                        <span key={id} className="no-accent">
                          {color}
                        </span>
                      );
                    })}
                </p>
                <p className="model-description-acсent">
                  Size:
                  {product.sizes.map((item, id) => {
                    return (
                      <span className="no-accent" key={id}>
                        {item}
                      </span>
                    );
                  })}
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
                    <Score countStar={+product.reviews.length}></Score>
                    <div className="score-counter">
                      {product.reviews.length
                        ? `${product.reviews.length}Reviews`
                        : `No Reviews`}
                    </div>
                  </div>
                  <p>Write a review</p>
                </div>
                {product.reviews.map((item) => {
                  return (
                    <div className="reviews-item" key={item.id}>
                      <div className="reviews-item-stars">
                        <p className="review-name">{item.name}</p>
                        <Score countStar={+item.rating}></Score>
                      </div>
                      <div>{item.text}</div>
                    </div>
                  );
                })}
              </div>
              <hr />
            </div>
          </div>
          <RelatedSlider type={type} product={product}></RelatedSlider>
        </div>
        <FormFooter></FormFooter>
      </main>
    </div>
  );
};

export default ProductPage;
