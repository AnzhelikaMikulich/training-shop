import React from 'react';

const LoockBook = () => {
  return (
    <section class="special-offers">
          <div class="banner-block-one">
            <img src="./assets/image/specialoffers/loockbook.jpg" alt="banner" />
            <div class="banner-title">
              <div class="banner-title-block">
                <h5 class="banner-title-title">New Season</h5>
                <p class="banner-title-text">lookbook collection</p>
              </div>
            </div>
          </div>
          <div class="banner-block-one">
            <img src="./assets/image/specialoffers/sale.jpg" alt="banner" />
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