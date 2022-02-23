import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const HeaderBurger = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  function toggleScroll() {
    setBurgerActive(!burgerActive);
    if(!burgerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <div>
      <div data-test-id='burger-menu-btn'>
        <button
          onClick={() => toggleScroll()}
          className={burgerActive ? "burger-btn active-bnt" : "burger-btn"}
        >
          <span></span>
        </button>
      </div>
      <BurgerMenu
        active={burgerActive}
        setActive={setBurgerActive}
      ></BurgerMenu>
    </div>
  );
};

export default HeaderBurger;
