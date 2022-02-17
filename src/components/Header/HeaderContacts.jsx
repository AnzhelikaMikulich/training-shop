import React from 'react';
import HeaderAdress from './HeaderAdress';
import HeaderSotial from './HeaderSotial';


const HeaderContacts = () => {
  return (
    
      <div className="contacts">
        <div className="container header-contacts">
        <HeaderAdress></HeaderAdress>
        <HeaderSotial></HeaderSotial>
        </div>
      </div>
    
  );
};

export default HeaderContacts;