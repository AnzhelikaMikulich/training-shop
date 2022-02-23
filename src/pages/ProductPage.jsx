import React from 'react';
import './style/clothesstyle.css';
import './style/productstyle.css';
import RelatedSlider from '../components/Sliders/RelatedSlider/RelatedSlider';
import FormFooter from '../components/Main/Form/FormFooter';
import arrovNext from '.././assets/image/pages/arrov.png'
import star from '.././assets/image/women/star.png'
import wear from '.././assets/image/productpage/wear.png'
import slider1 from '.././assets/image/productpage/slider1.png'
import slider2 from '.././assets/image/productpage/slider2.png'
import slider3 from '.././assets/image/productpage/slider3.png'
import model1 from '.././assets/image/productpage/model1.png'
import model2 from '.././assets/image/productpage/model2.png'
import model3 from '.././assets/image/productpage/model3.png'
import model4 from '.././assets/image/productpage/model4.png'
import pay1 from '.././assets/image/productpage/pay1.png'
import pay2 from '.././assets/image/productpage/pay2.png'
import pay3 from '.././assets/image/productpage/pay3.png'
import pay4 from '.././assets/image/productpage/pay4.png'
import pay5 from '.././assets/image/productpage/pay5.png'
import pay6 from '.././assets/image/productpage/pay6.png'
import pay7 from '.././assets/image/productpage/pay6.png'
import shipping from '.././assets/image/banner/shipping.png'
import return1 from '.././assets/image/banner/return.png'
import send from '.././assets/image/productpage/send.png'
import heart from '.././assets/image/productpage/heart.png'
import scales from '.././assets/image/productpage/scales.png'

const ProductPage = (props) => {
  return (
    <div className='page-product' data-test-id={`product-page-${props.type}`}>
      <main className="main">
        <div className="womens-block-header header-page">
          <div className="container womens-block-header-content">
            <div className="womens-block-header-interface">
              <div className="header-path">
                <span>Home</span>
                <img src={arrovNext} alt="arrow" />
                <span>Women</span>
                <img src={arrovNext} alt="arrow" />
                <span className="active-nav">Women's tracksuit Q109</span>
              </div>
              <div className="header-share">Share</div>
            </div>
            <h2 className="womens-block-title title-page clouses-title">
              Women's tracksuit Q109
            </h2>
            <div className="womens-block-header-interface">
              <div className="header-path">
                <div className="asortment-description-score">
                  <img src={star} alt="score" />
                  <img src={star}alt="score" />
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                  <img src={star} alt="score" />
                </div>
                <div className="score-counter">2 Reviews</div>
              </div>
              <div className="model-description">
                <p>SKU:<span className="model-description-acсent">777</span></p>
                <p>
                  Availability:<span className="model-description-acсent"
                    >In Stock</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product-page-content">
            <div className="slider-product-page">
              <div className="slider-smoll">
                <div className="arrow-slider">
                  <div className="arrow-slider-prew"></div>
                  <div className="arrow-slider-next"></div>
                </div>
                <div className="slider-galerry">
                  <div>
                    <img
                      className="slider-galerry-item"
                      src={wear}
                      alt="wear"
                    />
                  </div>
                  <div className="opasity-slid">
                    <img
                      className="slider-galerry-item"
                      src={slider1}
                      alt="wear"
                    />
                  </div>
                  <div className="opasity-slid">
                    <img
                      className="slider-galerry-item"
                      src={slider2}
                      alt="wear"
                    />
                  </div>
                  <div className="opasity-slid">
                    <img
                      className="slider-galerry-item"
                      src={slider3}
                      alt="wear"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-main">
                <div className="arrow-slider-prew slider-prew"></div>
                <div className="slider-block">
                  <img
                    className="slider-img"
                    src={wear}
                    alt="wear"
                  />
                </div>
                <div className="arrow-slider-next slider-next"></div>
              </div>
            </div>
            <div className="description-product-page">
              <div className="description-product-page__color">
                <p className="color-model">
                  Color: <span className="model-description-acсent">blue</span>
                </p>
                <div className="choise-models">
                  <div className="choise-models-item">
                    <img
                      src={model1}
                      alt="wear"
                    />
                  </div>
                  <div className="choise-models-item">
                    <img
                      src={model2}
                      alt="wear"
                    />
                  </div>
                  <div className="choise-models-item">
                    <img
                      src={model3}
                      alt="wear"
                    />
                  </div>
                  <div className="choise-models-item">
                    <img
                      src={model4}
                      alt="wear"
                    />
                  </div>
                </div>
              </div>
              <div className="description-product-page__size">
                <p className="size-model">
                  Size: <span className="model-description-acсent">S</span>
                </p>
                <div className="size-models">
                  <div className="size-models-item">XS</div>
                  <div className="size-models-item size-models-item_active">S</div>
                  <div className="size-models-item">M</div>
                  <div className="size-models-item">L</div>
                </div>
                <p className="size-icon">Size guide</p>
              </div>
              <hr />
              <div className="description-product-page__price">
                <div className="price-model">$ 379.99</div>
                <button className="card-add">Add to card</button>
                <div className="price-icon-heard">
                  <img src={heart} alt="heart" />
                </div>
                <div className="price-icon-scales">
                  <img
                    src={scales}
                    alt="scales"
                  />
                </div>
              </div>
              <hr />
              <div className="delivery-work description-product-page__shipping">
                <div className="work-block">
                  <div className="work-block-img">
                    <img
                      src={shipping}
                      alt="work-block"
                    />
                  </div>
                  <div className="work-block-description">
                    <p className="work-block-text">Shipping & Delivery</p>
                  </div>
                </div>
                <div className="work-block">
                  <div className="work-block-img">
                    <img
                      src={return1}
                      alt="work-block"
                    />
                  </div>
                  <div className="work-block-description">
                    <p className="work-block-text">Returns & Exchanges</p>
                  </div>
                </div>
                <div className="work-block">
                  <div className="work-block-img">
                    <img
                      src={send}
                      alt="work-block"
                    />
                  </div>
                  <div className="work-block-description">
                    <p className="work-block-text">Ask a question</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="description-product-page__guaranties">
                <h3 className="guaranties-title">guaranteed safe checkout</h3>
                <div className="contacts-footer-block-icons pay-icons">
                  <div>
                    <img src={pay1} alt="pay" />
                  </div>
                  <div>
                    <img src={pay7} alt="pay" />
                  </div>
                  <div>
                    <img src={pay2} alt="pay" />
                  </div>
                  <div>
                    <img src={pay3} alt="pay" />
                  </div>
                  <div>
                    <img src={pay4} alt="pay" />
                  </div>
                  <div>
                    <img src={pay5} alt="pay" />
                  </div>
                  <div>
                    <img src={pay6} alt="pay" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="description-product-page__description">
                <h3 className="guaranties-title description-title">DESCRIPTION</h3>
              </div>
              <hr />
              <div className="description-product-page__additional">
                <h3 className="guaranties-title">ADDITIONAL INFORMATION</h3>
                <p className="model-description-acсent">
                  Color:<span className="no-accent">Blue, White, Black, Grey</span>
                </p>
                <p className="model-description-acсent">
                  Size:<span className="no-accent">XS, S, M, L</span>
                </p>
                <p className="model-description-acсent">
                  Material:<span className="no-accent"> 100% Polyester</span>
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