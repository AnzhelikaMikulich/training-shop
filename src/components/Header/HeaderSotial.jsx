import React from 'react';
import { ReactComponent as Facebook } from '../../assets/image/icons/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/image/icons/twitter.svg';
import { ReactComponent as Instagramm } from '../../assets/image/icons/instagramm.svg';
import { ReactComponent as Pinterest } from '../../assets/image/icons/pinterest.svg';
const HeaderSotial = () => {
  return (
    <div class="contacts-sotial">
            <ul class="sotial-links">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener">
                  <Facebook></Facebook>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noopener">
                  <Twitter></Twitter>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener">
                  <Instagramm></Instagramm>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener" >
                 <Pinterest></Pinterest>
                </a>
              </li>
            </ul>
          </div>
  );
};

export default HeaderSotial;