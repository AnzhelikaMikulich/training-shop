import React from "react";

import MenAsortment from "./MenAsortment";
import Categories from "./Categories";
const Men = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  return (
    <section className="womens-block clothes" data-test-id="clothes-men">
      <div className="womens-block-header">
        <h2 className="womens-block-title">MEN’S</h2>
        <Categories
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        ></Categories>
      </div>
      <MenAsortment
        activeItem={activeItem}
      ></MenAsortment>
      <h3 className="womens-block-all">See All</h3>
    </section>
  );
};

export default Men;
