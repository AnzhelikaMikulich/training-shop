import React from "react";
import { PARTICULARS } from "../../../constants/particulars";

const Categories = ({ activeItem, setActiveItem,type }) => {
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
            data-test-id={`clothes-${type}-${item.particularName}`}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
