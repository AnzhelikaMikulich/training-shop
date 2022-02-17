import React from 'react';

import star from '../../../assets/image/women/star.png'
import wearwoman1 from '../../../assets/image/women/wear1.jpg'
const WomenItem = () => {
  return (
    <div>
      <div className="womens-block-asortment-item">
              <div>
                <img src={wearwoman1} alt="asortment-img" className="asortment-img" />
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
            </div>
    </div>
  );
};

export default WomenItem;