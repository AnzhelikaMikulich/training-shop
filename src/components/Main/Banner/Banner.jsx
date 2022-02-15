import React from 'react';

import banner from '../../../assets/image/banner/banner.jpg'
import arrovprev from '../../../assets/image/banner/arrov-prev.png'
import arrovnext from '../../../assets/image/banner/arrow-next.png'
import banner1 from '../../../assets/image/banner/banner1.jpg'
import banner2 from '../../../assets/image/banner/banner2.jpg'
import banner3 from '../../../assets/image/banner/banner3.jpg'

const Banner = () => {
  return (
    <section class="banner-prevue">
          <div class="banner-block-one">
            <img src={banner} alt="banner" />
            <div class="banner-title">
              <div class="banner-title-arrov">
                <img src={arrovprev} alt="prev" />
              </div>
              <div class="banner-title-block">
                <h5 class="banner-title-title">Banner</h5>
                <p class="banner-title-text">your Title text</p>
              </div>
              <div class="banner-title-arrov">
                <img src={arrovnext} alt="next" />
              </div>
            </div>
          </div>
          <div class="banner-block-two">
            <div class="banner-block-two-top">
              <div class="banner-block-item">
                <img src={banner1} alt="baner" />
                <div class="banner-block-item-title">
                  <p class="banner-block-item-title-description">Women</p>
                </div>
              </div>
              <div class="banner-block-item">
                <img src={banner2} alt="baner" />
                <div class="banner-block-item-title">
                  <p class="banner-block-item-title-description">Men</p>
                </div>
              </div>
            </div>
            <div class="banner-block-two-bottom">
              <div class="banner-block-item">
                <img src={banner3} alt="baner" />
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