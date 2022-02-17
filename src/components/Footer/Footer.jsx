import React from 'react';
import { footerNavItems } from './FooterItem';
import { Link } from "react-router-dom";

import icon5 from '../../assets/image/footer/icon5.png'
import icon6 from '../../assets/image/footer/icon6.png'
import icon7 from '../../assets/image/footer/icon7.png'
import icon8 from '../../assets/image/footer/icon8.png'
import icon9 from '../../assets/image/footer/icon9.png'
import icon10 from '../../assets/image/footer/icon10.png'
import icon11 from '../../assets/image/footer/icon11.png'

const Footer = () => {
  return (
    
      <footer  className="footer" data-test-id='footer'>
      <div className="container">

      {footerNavItems.map((item) => {
      return (
          <div className="womens-block-header">
              <h2 className="footer__nav-title womens-block-title" key={item.id}>{item.title}</h2>
              <ul className="footer-nav-items womens-block-nav">
                  {item.items.map((el) => {
                      return (
                          <Link to={`/${el.path}`} data-test-id={`footer-nav-link-${el.path}`} key={el.id} className="footer-link womens-block-nav">
                              {el.picture ? <img src={el.picture} alt="icon" className="footer-icon" /> : ""}
                              <li className="footer-nav-item">{el.nameItem}</li>
                          </Link>
                      )
                  })}
              </ul>
          </div>
      )
  })}</div>
      <div className="contacts-footer">
        <div className="container contacts-footer-block">
          <p className="contacts-footer-block-item">
            Copyright © 2032 all rights reserved
          </p>
          <div className="contacts-footer-block-icons">
            <img src={icon5} alt="pay"/>
            <img src={icon6} alt="pay"/>
            <img src={icon7}alt="pay"/>
            <img src={icon8} alt="pay"/>
            <img src={icon9} alt="pay"/>
            <img src={icon10} alt="pay"/>
            <img src={icon11} alt="pay"/>
          </div>
          <p className="contacts-footer-block-item">
            Clevertec.ru/training
          </p>
        </div>
      </div>
    </footer>
   
  );
};

export default Footer;