import React from 'react';

import woman from '../../../assets/image/subscribe/woman.png';
import man from '../../../assets/image/subscribe/men.png'

const Form = () => {
  return (
    <div class="subscribe-form-block">
        <div class="container subscribe-form">
          <img src={woman} alt="woman"/>
          <img src={man} alt="men"/>
          <div class="banner-title">
            <div class="banner-title-block subscribe-form-content">
              <h5 class="banner-title-title">Special Offer</h5>
              <p class="banner-title-text">
                Subscribe
              <p class="banner-title-text">And <span class="sale-text">Get 10% Off</span></p>
              </p>
              <form action="#" class="subscribe-form_form">
                <div class="subscribe-form_form-input">
                  <input required placeholder="Enter your email" class="input" type="email" />
                </div>
                <div class="subscribe-form_form-button">
                  <button type="submit" class="main__block__form_btn">
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