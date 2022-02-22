import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderUseful from './HeaderUseful';
import HeaderNav from './HeaderNav';
import HeaderBurger from './HeaderBurger';
import BurgerMenu from './BurgerMenu';

const HeaderMenu = () => {
  return (
    
      <div className="navigation blur">
        <div className="container header-menu">
        <HeaderLogo></HeaderLogo>
        <HeaderNav></HeaderNav>
        <HeaderUseful></HeaderUseful>
        <HeaderBurger></HeaderBurger>
        </div>
        <BurgerMenu></BurgerMenu>
      </div>
    
  );
};

export default HeaderMenu;