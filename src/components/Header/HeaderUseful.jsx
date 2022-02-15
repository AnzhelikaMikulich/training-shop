import React from 'react';
import search from '../../assets/image/icons/lupa.png'
import earth from '../../assets/image/icons/planet.png'
import human from '../../assets/image/icons/person.png'
import basket from '../../assets/image/icons/card.png'

const HeaderUseful = () => {
  return (
    <div class="header-ui">
            <ul class="header-ui-menu">
              <li>
                <a class="icons-search" href="#"><img src={search} alt="search" /></a>
              </li>
              <li>
                <a class="icons-earth" href="#"><img src={earth} alt="earth" /></a>
              </li>
              <li>
                <a class="icons-human" href="#"><img src={human} alt="human" /></a>
              </li>
              <li>
                <a class="icons-basket" href="#">
                  <img src={basket} alt="basket" />
                </a>
                <div class="bascet-counter">2</div>
              </li>
            </ul>
          </div>
  );
};

export default HeaderUseful;