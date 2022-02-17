import React from 'react';
import HeaderContacts from './HeaderContacts';
import HeaderMenu from './HeaderMenu';
const Header = () => {
  return (
      <header className="header" data-test-id='header'>
      <HeaderContacts></HeaderContacts>
      <HeaderMenu></HeaderMenu>
    </header>
    
  );
};

export default Header;