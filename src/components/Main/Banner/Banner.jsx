import React from 'react';

import BannerSlider from '../../Sliders/MainSlider/BannerSlider';
import banner1 from '../../../assets/image/banner/banner1.jpg'
import banner2 from '../../../assets/image/banner/banner2.jpg'
import banner3 from '../../../assets/image/banner/banner3.jpg'

const Banner = () => {
  return (
    <section className="banner-prevue">
          <BannerSlider/>
          <div className="banner-block-two">
            <div className="banner-block-two-top">
              <div className="banner-block-item">
                <img src={banner1} alt="baner" />
                <div className="banner-block-item-title">
                  <p className="banner-block-item-title-description">Women</p>
                </div>
              </div>
              <div className="banner-block-item">
                <img src={banner2} alt="baner" />
                <div className="banner-block-item-title">
                  <p className="banner-block-item-title-description">Men</p>
                </div>
              </div>
            </div>
            <div className="banner-block-two-bottom">
              <div className="banner-block-item">
                <img src={banner3} alt="baner" />
                <div className="banner-block-item-title">
                  <p className="banner-block-item-title-description">
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