import React from 'react';
import banner from "../../../assets/image/banner/banner.jpg";
const BannerSlide = () => {
  return (
    <div>
      <img src={banner} alt="banner" />
          <div className="banner-title">
            <div className="banner-title-block">
              <h5 className="banner-title-title">Banner</h5>
              <p className="banner-title-text">your Title text</p>
            </div>
          </div>
    </div>
  );
};

export default BannerSlide;