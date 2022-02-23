import React from 'react';

const HeaderAdress = () => {
  return (
    <div className="contacts-links">
            <div className="contacts-block">
              <a href="tel:+375291002030" className="header-phone" target="_blank" rel="noreferrer noopener">
                +375 29 100 20 30
              </a>
            </div>
            <div className="contacts-block">
              <a href="https://goo.gl/maps/dJtf9kFjZdC3hAE99" className="header-addres" target="_blank" rel="noreferrer noopener">
                Belarus, Gomel, Lange 17
              </a>
            </div>
            <div className="contacts-block">
              <p className="header-time">All week 24/7</p>
            </div>
          </div>
  );
};

export default HeaderAdress;