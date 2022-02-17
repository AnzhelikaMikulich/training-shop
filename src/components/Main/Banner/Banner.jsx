import React from 'react';

import banner from '../../../assets/image/banner/banner.jpg'
import arrovprev from '../../../assets/image/banner/arrov-prev.png'
import arrovnext from '../../../assets/image/banner/arrow-next.png'
import banner1 from '../../../assets/image/banner/banner1.jpg'
import banner2 from '../../../assets/image/banner/banner2.jpg'
import banner3 from '../../../assets/image/banner/banner3.jpg'

const Banner = () => {
  return (
    <section className="banner-prevue">
          <div className="banner-block-one">
            <img src={banner} alt="banner" />
            <div className="banner-title">
              <div className="banner-title-arrov">
                <img src={arrovprev} alt="prev" />
              </div>
              <div className="banner-title-block">
                <h5 className="banner-title-title">Banner</h5>
                <p className="banner-title-text">your Title text</p>
              </div>
              <div className="banner-title-arrov">
                <img src={arrovnext} alt="next" />
              </div>
            </div>
          </div>
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