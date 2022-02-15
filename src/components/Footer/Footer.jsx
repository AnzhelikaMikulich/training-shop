import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer class="footer ">
      <div class="container">
      <div class="womens-block-header">
        <h2 class="womens-block-title">Categories</h2>
        <ul class="womens-block-nav">
          <li>
            <a class="womens-block-nav-title " href="#section">Men
            </a>
          </li>
          <li><a class="womens-block-nav-title" href="#section">Women</a></li>
          <li>
            <a class="womens-block-nav-title" href="#section">Accessories</a>
          </li>
          <li>
            <a class="womens-block-nav-title" href="#section">Beauty</a>
          </li>
        </ul>
      </div>
      <div class="womens-block-header">
        <h2 class="womens-block-title">Infomation</h2>
        <ul class="womens-block-nav">
          <li><a class="womens-block-nav-title" href="#section">About Us</a></li>
          <li>
            <a class="womens-block-nav-title" href="#section"> Contact Us</a>
          </li>
          <li>
            <a class="womens-block-nav-title" href="#section">Blog</a>
          </li>

          <li>
            <a class="womens-block-nav-title" href="#section">FAQs</a>
          </li>
        </ul>
      </div>
      <div class="womens-block-header">
        <h2 class="womens-block-title">Useful links</h2>
        <ul class="womens-block-nav">
          <li>
            <a class="womens-block-nav-title " href="#">Terms & Conditions
            </a>
          </li>
          <li><a class="womens-block-nav-title" href="#">Returns & Exchanges</a></li>
          <li>
            <a class="womens-block-nav-title" href="#">Shipping & Delivery</a>
          </li>
          <li>
            <a class="womens-block-nav-title" href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div class="womens-block-header">
        <h2 class="womens-block-title">CONTACT US</h2>
        <ul class="womens-block-nav">
          <li><a href="tel:+375291002030" class="header-phone womens-block-nav-title footer-data">
              +375 29 100 20 30
            </a></li>
          <li>
            <a href="https://goo.gl/maps/dJtf9kFjZdC3hAE99" class="header-addres womens-block-nav-title footer-data">
              Belarus, Gomel, Lange 17
            </a>
          </li>
          <li>
            <a href="#" class="header-time womens-block-nav-title footer-data">All week 24/7</a>
          </li>
          <li>
            <a class="header-mail womens-block-nav-title footer-data" href="mailto:info@clevertec.ru">info@clevertec.ru</a>
          </li>
        </ul>
      </div></div>
      <div class="contacts-footer">
        <div class="container contacts-footer-block">
          <p class="contacts-footer-block-item">
            Copyright © 2032 all rights reserved
          </p>
          <div class="contacts-footer-block-icons">
            <img src="./assets/image/footer/icon5.png" alt="pay"/>
            <img src="./assets/image/footer/icon6.png" alt="pay"/>
            <img src="./assets/image/footer/icon8.png" alt="pay"/>
            <img src="./assets/image/footer/icon7.png" alt="pay"/>
            <img src="./assets/image/footer/icon9.png" alt="pay"/>
            <img src="./assets/image/footer/icon10.png" alt="pay"/>
            <img src="./assets/image/footer/icon11.png" alt="pay"/>
          </div>
          <p class="contacts-footer-block-item">
            Clevertec.ru/training
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;