import React from 'react';
import sale from '../../../assets/image/specialoffers/sale.jpg'
import loockbook from '../../../assets/image/specialoffers/loockbook.jpg'

const LoockBook = () => {
  return (
    <section className="special-offers">
          <div className="banner-block-one">
            <img src={loockbook} alt="banner" />
            <div className="banner-title">
              <div className="banner-title-block">
                <h5 className="banner-title-title">New Season</h5>
                <p className="banner-title-text">lookbook collection</p>
              </div>
            </div>
          </div>
          <div className="banner-block-one">
            <img src={sale} alt="banner" />
            <div className="banner-title">
              <div className="banner-title-block">
                <h5 className="banner-title-title">Sale</h5>
                <p className="banner-title-text">
                  Get UP to <span className="sale-text">50% off</span>
                </p>
              </div>
            </div>
          </div>
        </section>
  );
};

export default LoockBook;