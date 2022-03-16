import React from 'react';
import { useState } from 'react';
import search from '../../assets/image/icons/lupa.png'
import earth from '../../assets/image/icons/planet.png'
import human from '../../assets/image/icons/person.png'
import basket from '../../assets/image/icons/card.png'
import ShoppingCard from '../ShoppingCard/ShoppingCard';

const HeaderUseful = () => {
  const [cardActive, setCardActive] = useState(false);

  function toggleCard() {
    setCardActive(!cardActive);
    if ((!cardActive)) {
      document.body.style.overflow = "hidden";
      document.body.style.margin = "0 16px 0 0";
   
    } else {
      document.body.style.overflow = "";
      document.body.style.margin = " 0 0px 0 0";
      
   
    }
  }
  return (
    <div className="header-ui">
            <ul className="header-ui-menu">
              <li>
                <a className="icons-search" href="#section"><img src={search} alt="search" /></a>
              </li>
              <li>
                <a className="icons-earth" href="#section"><img src={earth} alt="earth" /></a>
              </li>
              <li>
                <a className="icons-human" href="#section"><img src={human} alt="human" /></a>
              </li>
              <li onClick={()=>toggleCard()}>
                <div className="icons-basket">
                  <img src={basket} alt="basket" />
                </div>
                <div className="bascet-counter">2</div>
              </li>
            </ul>
            <ShoppingCard active={cardActive}
        setActive={setCardActive}></ShoppingCard>
          </div>
          
  );
};

export default HeaderUseful;