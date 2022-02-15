import React from 'react';

const Banner = () => {
  return (
    <section class="banner-prevue">
          <div class="banner-block-one">
            <img src="./assets/image/banner/banner.jpg" alt="banner" />
            <div class="banner-title">
              <div class="banner-title-arrov">
                <img src="./assets/image/banner/arrov-prev.png" alt="prev" />
              </div>
              <div class="banner-title-block">
                <h5 class="banner-title-title">Banner</h5>
                <p class="banner-title-text">your Title text</p>
              </div>
              <div class="banner-title-arrov">
                <img src="./assets/image/banner/arrow-next.png" alt="next" />
              </div>
            </div>
          </div>
          <div class="banner-block-two">
            <div class="banner-block-two-top">
              <div class="banner-block-item">
                <img src="./assets/image/banner/banner1.jpg" alt="baner" />
                <div class="banner-block-item-title">
                  <p class="banner-block-item-title-description">Women</p>
                </div>
              </div>
              <div class="banner-block-item">
                <img src="./assets/image/banner/banner2.jpg" alt="baner" />
                <div class="banner-block-item-title">
                  <p class="banner-block-item-title-description">Men</p>
                </div>
              </div>
            </div>
            <div class="banner-block-two-bottom">
              <div class="banner-block-item">
                <img src="./assets/image/banner/banner3.jpg" alt="baner" />
                <div class="banner-block-item-title">
                  <p class="banner-block-item-title-description">
                    Accessories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Banner;