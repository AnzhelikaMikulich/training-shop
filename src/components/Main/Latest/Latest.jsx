import React from 'react';

import latest1 from '../../../assets/image/latest/latest1.jpg';
import latest2 from '../../../assets/image/latest/latest2.jpg';
import latest3 from '../../../assets/image/latest/latest3.jpg'

const Latest = () => {
  return (
    <div className="latest-block container">
        <div className="latest-block-title">
          <div className="womens-block-header">
            <h2 className="womens-block-title">LATEST FROM BLOG</h2>
            <ul className="womens-block-nav">
              <li>
                <a className="womens-block-nav-title womens-block-nav-active" href="#section">SEE ALL</a>
              </li>

            </ul>
          </div>

        </div>
        <div className="latest-block-content">
          <div className="latest-block-content-item">
            <img src={latest1} alt="latest"/>
            <div className="latest-block-content-title">
              <h3 className="latest-title">The Easiest Way to Break</h3>
              <p className="latest-text">But I must explain to you how all this mistaken idea of denouncing pleas and
                praising pain was bor</p>
            </div>
          </div>
          <div className="latest-block-content-item">
            <img src={latest2} alt="latest"/>
            <div className="latest-block-content-title">
              <h3 className="latest-title">Wedding Season</h3>
              <p className="latest-text">But I must explain to you how all this mistaken idea of denouncing pleas and
                praising pain was bor</p>
            </div>
          </div>
          <div className="latest-block-content-item">
            <img src={latest3} alt="latest"/>
            <div className="latest-block-content-title">
              <h3 className="latest-title">Recent Favorites On Repeat</h3>
              <p className="latest-text">But I must explain to you how all this mistaken idea of denouncing pleas and
                praising pain was bor</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Latest;