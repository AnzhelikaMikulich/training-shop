import React from "react";
import WomenAsortment from "./WomenAsortment";
import Categories from "./Categories";
import { PARTICULARS } from "../../../constants/particulars";

const Women = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  return (
    <section className="womens-block clothes" data-test-id="clothes-women">
      <div className="womens-block-header">
        <h2 className="womens-block-title">WOMEN’S</h2>
        <Categories activeItem= {activeItem} setActiveItem = {setActiveItem} ></Categories>
      </div>
      <WomenAsortment activeItem= {activeItem} ></WomenAsortment>
      <h3 className="womens-block-all">See All</h3>
    </section>
  );
};

export default Women;
