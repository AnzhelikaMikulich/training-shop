import React from 'react';
import { Link } from 'react-router-dom';
import './style/clothesstyle.css';
import FilterBlock from '../components/Main/WomenMen/FilterBlock';
import WomenPageAsortment from '../components/ClothesWomenPage/WomenPageAsortment';
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
              <Link to={`/`}>
              <span>Home</span>
             </Link>
                <img src={arrov} alt="arrow" />
                <Link to={`/women`}>
                <span className="active-nav">Women</span>
             </Link>
               
              </div>
              <div className="header-share">Share</div>
            </div>
            <h2 className="womens-block-title title-page">WOMEN</h2>
          </div>
        </div>
        <div className="container">
          <FilterBlock></FilterBlock>
          <section className="womens-block">
            <WomenPageAsortment ></WomenPageAsortment>
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