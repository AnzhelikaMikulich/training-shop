import React from 'react';
import search from '../../assets/image/icons/lupa.png'
import earth from '../../assets/image/icons/planet.png'
import human from '../../assets/image/icons/person.png'
import basket from '../../assets/image/icons/card.png'

const HeaderUseful = () => {
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
              <li>
                <a className="icons-basket" href="#section">
                  <img src={basket} alt="basket" />
                </a>
                <div className="bascet-counter">2</div>
              </li>
            </ul>
          </div>
  );
};

export default HeaderUseful;