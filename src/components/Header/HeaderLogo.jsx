import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/CleverShopLogo.png'
const HeaderLogo = () => {
  return (
    <Link to='/' className="header-nav-logo header-logo" data-test-id='header-logo-link'>
                            <img src={logo} alt="logo"/>
                        </Link>
    
      
         
  );
};

export default HeaderLogo;