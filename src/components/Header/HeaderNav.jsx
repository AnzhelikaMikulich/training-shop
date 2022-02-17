import React from 'react';
import { navItems } from './NavItems';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className="menu" data-test-id="menu">
      <nav className="header-nav">
            <ul className="nav">
              {navItems.map((item)=>{
          return (<Link key={item.id} to={`/${item.path}`} className="nav-menu menu-item" data-test-id={`menu-link-${item.path}`}>
                 <li >{item.title}</li>
             </Link>)
        })}
              
            </ul>
          </nav>
    </div>
     
  );
};

export default HeaderNav;