import React from 'react';

import './ShoppingCard.css'
import item from '../../assets/image/productpage/slider1.png'

const ShoppingCard = ({ active, setActive }) => {
  function toggleCard() {
    setActive(false);
    if (setActive(false)) {
      document.body.style.overflow = "hidden";
      document.body.style.margin = "0 16px 0 0";
   
    } else {
      document.body.style.overflow = "";
      document.body.style.margin = "0 0px 0 0";
   
    }
  }
  
  return (
    <div className={active ? "popup-shopping-card popup-shopping-card-active" : "popup-shopping-card"} >

    <div className="popap-shopping-card-body">
      <div className="popap-shopping-card-content">
        <div className="shoping-card-header">
          <h2 className="shoping-card-title">Shopping Cart</h2><div onClick={() => toggleCard()} className="popap-shopping-card-close shopping-card-close-popap"></div>
        </div>
        <nav className="shoping-card-nav">
          <p className="nav-shopping-active">Item in Cart</p><span>/</span><p>Delivery Info</p><span>/</span><p>Payment</p>
        </nav>
        <div className="shoping-card-item-container">
          <div className="shoping-card-item">
            <div className="shoping-card-item-img"><img src={item} alt="img"/></div>
            <div className="shoping-card-item-description">
              <p className="shoping-card-item-name">Women's tracksuit Q109</p>
              <p className="shoping-card-item-color"><span>Blue</span>,<span >S</span></p>
              <div className="shoping-card-item-count" ><div className="shoping-card-item-counter"><button className='item-counter-decrease item-counter-card'></button><span>1</span><button className='item-counter-increase item-counter-card'></button> </div> <p className="shoping-card-item-price">$54.00</p></div>
            </div>
            <div className="shoping-card-item-delete"></div>
          </div>
          
        </div>
        <div className="shoping-card-total-price">
          <p className="shoping-card-total-price-title">Total</p>
          <p className="shoping-card-total">$433.99</p>
        </div>
        <button className="shoping-card-btn further-btn">Further</button>
        <button className="shoping-card-btn viewcart-btn">View Cart</button>
      </div>
    </div>
  </div>
  );
};

export default ShoppingCard;