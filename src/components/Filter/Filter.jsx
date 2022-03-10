import React from "react";
import { useMemo } from "react";
import "./Filter.css";
import { PRODUCTS } from "../../constants/data";

const Filter = ({ productType }) => {
  let filterArr = [
    {
      id: "filters-color",
      title: "color",
    },
    {
      id: "filters-size",
      title: "size",
    },
    {
      id: "filters-brand",
      title: "brand",
    },
    {
      id: "filters-prise",
      title: "price",
    },
  ];
  let findAllColors = () => [
    ...new Set(
      PRODUCTS[productType]
        .map(({ images }) => images.map(({ color }) => color))
        .flat()
        .sort()
    ),
  ];
  let finsAllSise = () => [
    ...new Set(PRODUCTS[productType].map((item) => item.sizes).flat(Infinity)),
  ];
  let findAllBrands = () => [
    ...new Set(
      PRODUCTS[productType]
        .map((item) => item.brand)
        .flat(Infinity)
        .sort()
    ),
  ];
  let findAllPrice =()=>['0-100$','100-300$','300-500$','500-1000$','>1000$']
  
  let allColors = useMemo(()=>findAllColors(),[productType]);
  let allSise = useMemo(()=>finsAllSise(), [productType]);
  let allBrands = useMemo(()=>findAllBrands(), [productType]);
  let allPrice = useMemo(()=>findAllPrice(), []);
  return (
    <section className="filter" data-test-id={`filters-${productType}`}>
          <div className="filter-item">
            <h3 className="filter-item-title">{filterArr[0].title}</h3>
            <div className="filter-item-content" data-test-id={filterArr[0].id}>
              {allColors.map((color) => {
                return (
                  <div className="filter-item-content-item" key={color}>
                    <input
                      id={color}
                      type="checkbox"
                      value={color}
                      data-test-id={`filter-${filterArr[0].title}-${color}`}
                    />
                    <label htmlFor={color}>{color}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filter-item">
            <h3 className="filter-item-title">{filterArr[1].title}</h3>
            <div className="filter-item-content" data-test-id={filterArr[1].id}>
            {allSise.map((size) => {
                return (
                  <div className="filter-item-content-item" key={size}>
                    <input
                      id={size}
                      type="checkbox"
                      value={size}
                      data-test-id={`filter-${filterArr[1].title}-${size}`}
                    />
                    <label htmlFor={size}>{size}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filter-item">
            <h3 className="filter-item-title">{filterArr[2].title}</h3>
            <div className="filter-item-content" data-test-id={filterArr[2].id}>
              {allBrands.map((brand) => {
                return (
                  <div className="filter-item-content-item" key={brand}>
                    <input
                      id={brand}
                      type="checkbox"
                      value={brand}
                      data-test-id={`filter-${filterArr[2].title}-${brand}`}
                    />
                    <label htmlFor={brand}>{brand}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filter-item">
            <h3 className="filter-item-title">{filterArr[3].title}</h3>
            <div className="filter-item-content" data-test-id={filterArr[3].id}>
              {allPrice.map((price) => {
                return (
                  <div className="filter-item-content-item" key={price}>
                    <input
                      id={price}
                      type="checkbox"
                      value={price}
                      data-test-id={`filter-${filterArr[3].title}-${price}`}
                    />
                    <label htmlFor={price}>{price}</label>
                  </div>
                );
              })}
            </div>
          </div>
    </section>
  );
};

export default Filter;
