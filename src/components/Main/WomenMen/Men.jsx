import React from 'react';

import MenAsortment from './MenAsortment';

const Men = () => {
  return (
    <section className="womens-block clothes" data-test-id='clothes-men'>
          <div className="womens-block-header">
            <h2 className="womens-block-title">MEN’S</h2>
            <ul className="womens-block-nav">
              <li>
                <a className="womens-block-nav-title womens-block-nav-active" href="#section">NEW ARRIVALS</a>
              </li>
              <li><a className="womens-block-nav-title" href="#section">SPECIALS</a></li>
              <li>
                <a className="womens-block-nav-title" href="#section">BESTSELLERS</a>
              </li>
              <li>
                <a className="womens-block-nav-title" href="#section">MOST VIEWED</a>
              </li>

              <li>
                <a className="womens-block-nav-title" href="#section">FEATURED PRODUCTS</a>
              </li>
            </ul>
          </div>
          <MenAsortment></MenAsortment>
          <h3 className="womens-block-all">See All</h3>
        </section>
  );
};

export default Men;