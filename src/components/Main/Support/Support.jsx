import React from 'react';
import shipping from '../../../assets/image/banner/shipping.png';
import returned from '../../../assets/image/banner/return.png';
import support from '../../../assets/image/banner/support.png'

const Support = () => {
  return (
    <section className="delivery-work">
          <div className="work-block">
            <div className="work-block-img">
              <img src={shipping} alt="work-block" />
            </div>
            <div className="work-block-description">
              <h3 className="work-block-title">FREE SHIPPING</h3>
              <p className="work-block-text">
                On all UA order or order above $100
              </p>
            </div>
          </div>
          <div className="work-block">
            <div className="work-block-img">
              <img src={returned} alt="work-block" />
            </div>
            <div className="work-block-description">
              <h3 className="work-block-title">30 DAYS RETURN</h3>
              <p className="work-block-text">
                Simply return it within 30 days for an exchange
              </p>
            </div>
          </div>
          <div className="work-block">
            <div className="work-block-img">
              <img src={support} alt="work-block" />
            </div>
            <div className="work-block-description">
              <h3 className="work-block-title">SUPPORT 24/7</h3>
              <p className="work-block-text">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </section>
  );
};

export default Support;