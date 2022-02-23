import React from "react";
import { navItems } from "./NavItems";
import { Link } from "react-router-dom";

const BurgerMenu = ({ active, setActive }) => {

  function toggleScroll() {
    setActive(false);
    if (setActive(false)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <nav
      className="burger-nav"
      onClick={() => toggleScroll()}
      
    >
      <ul className={active ? "nav-burger nav-burger-active" : "nav-burger"}  data-test-id='burger-menu'>
        {navItems.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/${item.path}`}
              className="nav-menu menu-item"
              data-test-id={`menu-link-${item.path}`}
              onClick={() => toggleScroll()}
            >
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default BurgerMenu;
