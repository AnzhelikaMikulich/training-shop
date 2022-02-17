import React from 'react';
import './style/clothesstyle.css';
import FilterBlock from '../components/Main/WomenMen/FilterBlock';
import WomenAsortment from '../components/Main/WomenMen/WomenAsortment';
import FormFooter from '../components/Main/Form/FormFooter';
import arrov from '.././assets/image/pages/arrov.png'
import loader from '.././assets/image/pages/loader.gif'

const ClothesWomen = () => {
  return (
    
      <main className="main products-page" data-test-id='products-page-women'>
        <div className="womens-block-header header-page womens-block-header-two">
          <div className="container womens-block-header-content">
            <div className="womens-block-header-interface">
              <div className="header-path">
                <span>Home</span>
                <img src={arrov} alt="arrow" />
                <span className="active-nav">Women</span>
              </div>
              <div className="header-share">Share</div>
            </div>
            <h2 className="womens-block-title title-page">WOMEN</h2>
          </div>
        </div>
        <div className="container">
          <FilterBlock></FilterBlock>
          <section className="womens-block">
            <WomenAsortment></WomenAsortment>
            <div className="womens-block-loader">
              <img src={loader} alt="loader" />
            </div>
          </section>
        </div>
        <FormFooter></FormFooter>
      </main>
    
  );
};

export default ClothesWomen;