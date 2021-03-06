import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import search from "../../assets/image/icons/lupa.png";
import earth from "../../assets/image/icons/planet.png";
import human from "../../assets/image/icons/person.png";
import basket from "../../assets/image/icons/card.png";
import ShoppingCard from "../ShoppingCard/ShoppingCard";


const HeaderUseful = () => {
  const [cardActive, setCardActive] = useState(false);
  const order = useSelector((state) => state.order);
  function toggleCard() {
    setCardActive(!cardActive);
    if (!cardActive) {
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
          <a className="icons-search" href="#section">
            <img className="header-ui-menu-img" src={search} alt="search" />
          </a>
        </li>
        <li>
          <a className="icons-earth" href="#section">
            <img className="header-ui-menu-img" src={earth} alt="earth" />
          </a>
        </li>
        <li>
          <a className="icons-human" href="#section">
            <img className="header-ui-menu-img" src={human} alt="human" />
          </a>
        </li>
        <li onClick={() => toggleCard()} data-test-id='cart-button'>
          <div className="icons-basket">
            <img className="header-ui-menu-img" src={basket} alt="basket" />
          </div>
        {order.length>0?<div className="bascet-counter">{order.length}</div>:''}
        </li>
      </ul>
      <ShoppingCard
        active={cardActive}
        setActive={setCardActive}
      ></ShoppingCard>
    </div>
  );
};

export default HeaderUseful;
