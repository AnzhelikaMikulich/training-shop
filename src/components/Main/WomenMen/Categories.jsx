import React, { useState } from "react";
import { PARTICULARS } from "../../../constants/particulars";

const Categories = ({ onClickItem }) => {
  const [activeItem, setActiveItem] = React.useState(0);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <ul className="womens-block-nav">
      {PARTICULARS.map((item, index) => {
        return (
          <li
            onClick={() => onSelectItem(index)}
            key={item.id}
            className={
              activeItem === index
                ? "womens-block-nav-title womens-block-nav-active"
                : "womens-block-nav-title"
            }
            data-test-id={`clothes-women-${item.particularName}`}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
