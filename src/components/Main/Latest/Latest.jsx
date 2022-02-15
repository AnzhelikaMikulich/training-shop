import React from 'react';

const Latest = () => {
  return (
    <div class="latest-block container">
        <div class="latest-block-title">
          <div class="womens-block-header">
            <h2 class="womens-block-title">LATEST FROM BLOG</h2>
            <ul class="womens-block-nav">
              <li>
                <a class="womens-block-nav-title womens-block-nav-active" href="#section">SEE ALL</a>
              </li>

            </ul>
          </div>

        </div>
        <div class="latest-block-content">
          <div class="latest-block-content-item">
            <img src="./assets/image/latest/latest1.jpg" alt="latest"/>
            <div class="latest-block-content-title">
              <h3 class="latest-title">The Easiest Way to Break</h3>
              <p class="latest-text">But I must explain to you how all this mistaken idea of denouncing pleas and
                praising pain was bor</p>
            </div>
          </div>
          <div class="latest-block-content-item">
            <img src="./assets/image/latest/latest2.jpg" alt="latest"/>
            <div class="latest-block-content-title">
              <h3 class="latest-title">Wedding Season</h3>
              <p class="latest-text">But I must explain to you how all this mistaken idea of denouncing pleas and
                praising pain was bor</p>
            </div>
          </div>
          <div class="latest-block-content-item">
            <img src="./assets/image/latest/latest3.jpg" alt="latest"/>
            <div class="latest-block-content-title">
              <h3 class="latest-title">Recent Favorites On Repeat</h3>
              <p class="latest-text">But I must explain to you how all this mistaken idea of denouncing pleas and
                praising pain was bor</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Latest;