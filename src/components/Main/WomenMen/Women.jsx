import React from "react";
import WomenAsortment from "./WomenAsortment";
import { PARTICULARS } from "../../../constants/particulars";

const Women = () => {
  return (
    <section className="womens-block clothes" data-test-id="clothes-women">
      <div className="womens-block-header">
        <h2 className="womens-block-title">WOMEN’S</h2>
        <ul className="womens-block-nav">
          {PARTICULARS.map((item) => {
            return (
              <li
                key={item.id}
                className="womens-block-nav-title womens-block-nav-active"
                data-test-id={`clothes-women-${item.name}`}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
      <WomenAsortment></WomenAsortment>
      <h3 className="womens-block-all">See All</h3>
    </section>
  );
};

export default Women;
