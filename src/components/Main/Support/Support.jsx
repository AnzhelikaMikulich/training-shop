import React from 'react';
import shipping from '../../../assets/image/banner/shipping.png';
import returned from '../../../assets/image/banner/return.png';
import support from '../../../assets/image/banner/support.png'

const Support = () => {
  return (
    <section class="delivery-work">
          <div class="work-block">
            <div class="work-block-img">
              <img src={shipping} alt="work-block" />
            </div>
            <div class="work-block-description">
              <h3 class="work-block-title">FREE SHIPPING</h3>
              <p class="work-block-text">
                On all UA order or order above $100
              </p>
            </div>
          </div>
          <div class="work-block">
            <div class="work-block-img">
              <img src={returned} alt="work-block" />
            </div>
            <div class="work-block-description">
              <h3 class="work-block-title">30 DAYS RETURN</h3>
              <p class="work-block-text">
                Simply return it within 30 days for an exchange
              </p>
            </div>
          </div>
          <div class="work-block">
            <div class="work-block-img">
              <img src={support} alt="work-block" />
            </div>
            <div class="work-block-description">
              <h3 class="work-block-title">SUPPORT 24/7</h3>
              <p class="work-block-text">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </section>
  );
};

export default Support;