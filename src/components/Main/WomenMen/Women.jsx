import React from "react";
import WomenAsortment from "./WomenAsortment";
import Categories from "./Categories";

const Women = () => {
  return (
    <section className="womens-block clothes" data-test-id="clothes-women">
      <div className="womens-block-header">
        <h2 className="womens-block-title">WOMEN’S</h2>
        <Categories onClickItem={(item) => console.log(item.name)}></Categories>
      </div>
      <WomenAsortment></WomenAsortment>
      <h3 className="womens-block-all">See All</h3>
    </section>
  );
};

export default Women;
