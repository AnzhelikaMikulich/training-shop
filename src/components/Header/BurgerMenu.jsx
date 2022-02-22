import React from 'react';
import { navItems } from './NavItems';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  return (
    <nav className="burger-nav">
            <ul className="nav-burger">
              {navItems.map((item)=>{
          return (<Link key={item.id} to={`/${item.path}`} className="nav-menu menu-item" data-test-id={`menu-link-${item.path}`}>
                 <li >{item.title}</li>
             </Link>)
        })}
              
            </ul>
          </nav>
  );
};

export default BurgerMenu;