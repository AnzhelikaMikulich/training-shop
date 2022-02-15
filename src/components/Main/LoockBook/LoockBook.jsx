import React from 'react';
import sale from '../../../assets/image/specialoffers/sale.jpg'
import loockbook from '../../../assets/image/specialoffers/loockbook.jpg'

const LoockBook = () => {
  return (
    <section class="special-offers">
          <div class="banner-block-one">
            <img src={loockbook} alt="banner" />
            <div class="banner-title">
              <div class="banner-title-block">
                <h5 class="banner-title-title">New Season</h5>
                <p class="banner-title-text">lookbook collection</p>
              </div>
            </div>
          </div>
          <div class="banner-block-one">
            <img src={sale} alt="banner" />
            <div class="banner-title">
              <div class="banner-title-block">
                <h5 class="banner-title-title">Sale</h5>
                <p class="banner-title-text">
                  Get UP to <span class="sale-text">50% off</span>
                </p>
              </div>
            </div>
          </div>
        </section>
  );
};

export default LoockBook;