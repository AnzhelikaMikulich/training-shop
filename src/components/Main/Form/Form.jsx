import React from 'react';

import woman from '../../../assets/image/subscribe/woman.png';
import man from '../../../assets/image/subscribe/men.png'

const Form = () => {
  return (
    <div className="subscribe-form-block">
        <div className="container subscribe-form">
          <img src={woman} alt="woman"/>
          <img src={man} alt="men"/>
          <div className="banner-title">
            <div className="banner-title-block subscribe-form-content">
              <h5 className="banner-title-title">Special Offer</h5>
              <p className="banner-title-text">
                Subscribe
              <p className="banner-title-text">And <span className="sale-text">Get 10% Off</span></p>
              </p>
              <form action="#" className="subscribe-form_form">
                <div className="subscribe-form_form-input">
                  <input required placeholder="Enter your email" className="input" type="email" />
                </div>
                <div className="subscribe-form_form-button">
                  <button type="submit" className="main__block__form_btn">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
  );
};

export default Form;