import React from 'react';
import HeaderContacts from './HeaderContacts';
import HeaderMenu from './HeaderMenu';
const Header = () => {
  return (
      <header class="header">
      <HeaderContacts></HeaderContacts>
      <HeaderMenu></HeaderMenu>
    </header>
    
  );
};

export default Header;