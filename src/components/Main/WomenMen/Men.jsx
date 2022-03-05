import React from 'react';

import MenAsortment from './MenAsortment';
import { PARTICULARS } from '../../../constants/particulars';
const Men = () => {
  return (
    <section className="womens-block clothes" data-test-id='clothes-men'>
          <div className="womens-block-header">
            <h2 className="womens-block-title">MEN’S</h2>
            <ul className="womens-block-nav">
            {PARTICULARS.map((item) => {
          return (
           
              <li key={item.id}
              
              className="womens-block-nav-title womens-block-nav-active"
              data-test-id={`clothes-men-${item.name}`}>{item.text}</li>
            
          );
        })}
            </ul>
          </div>
          <MenAsortment></MenAsortment>
          <h3 className="womens-block-all">See All</h3>
        </section>
  );
};

export default Men;