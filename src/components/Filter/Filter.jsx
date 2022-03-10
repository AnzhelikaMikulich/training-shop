import React from "react";
import { useState} from "react";
import "./Filter.css";
import { PRODUCTS } from "../../constants/data";
import "../../pages/style/clothesstyle.css";
import filter from "../../assets/image/pages/filter.png";
import close from "../../assets/image/pages/close.png";
import list from "../../assets/image/pages/list.png";
import table from "../../assets/image/pages/table.png";
import classNames from "classnames";
import PageAsortment from "../PageAsortment/PageAsortment";

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
  let findAllPrice = () => [
    "0-100$",
    "100-300$",
    "300-500$",
    "500-1000$",
    ">1000$",
  ];

  let setColor = new Set();
  let setSizes = new Set();
  let setBrand = new Set();

  function createArrFilter(card) {
    for (let i = card.images.length; i > 0; i--) {
      card.images.map((item) => setColor.add(item.color));
    }
    for (let i = card.sizes.length; i > 0; i--) {
      setSizes.add(card.sizes[i - 1]);
    }
    setBrand.add(card.brand);
  }

  PRODUCTS[productType].map((card) => {
    return createArrFilter(card);
  });

  const [isFilterClose, toggleFilter] = useState(true);
  const clickFilter = () => {
    toggleFilter(!isFilterClose);
  };

  //  add input checked
  let [setFinalColors, setSetFinalColor] = useState(new Set());
  let [setFinalSize, setSetFinalSize] = useState(new Set());
  let [setFinalBrands, setSetFinalBrands] = useState(new Set());
  let [setFinalPrice, setSetFinalPrice] = useState(new Set());

  const onChangeColorInput = (e) => {
    if (e.target.checked) {
      setSetFinalColor(setFinalColors.add(e.target.id));
    }
    if (!e.target.checked) {
      setFinalColors.delete(e.target.id);
      setSetFinalColor(setFinalColors);
    }
    setFinalAsortment(
      PRODUCTS[productType]
        .filter((color) => setFinalColors.size === 0 || isThereColor(color))
        .filter((size) => setFinalSize.size === 0 || isThereSize(size))
        .filter((brand) => setFinalBrands.size === 0 || isThereBrand(brand))
        .filter((price) => setFinalPrice.size === 0 || isTherePrice(price))
    );
    
  };
  const onChangeSizeInput = (e) => {
    if (e.target.checked) {
      setSetFinalSize(setFinalSize.add(e.target.id));
    }
    if (!e.target.checked) {
      setFinalSize.delete(e.target.id);
      setSetFinalSize(setFinalSize);
    }
    setFinalAsortment(
      PRODUCTS[productType]
        .filter((color) => setFinalColors.size === 0 || isThereColor(color))
        .filter((size) => setFinalSize.size === 0 || isThereSize(size))
        .filter((brand) => setFinalBrands.size === 0 || isThereBrand(brand))
        .filter((price) => setFinalPrice.size === 0 || isTherePrice(price))
    );
    
  };
  const onChangeBrandInput = (e) => {
    if (e.target.checked) {
      setSetFinalBrands(setFinalBrands.add(e.target.id));
    }
    if (!e.target.checked) {
      setFinalBrands.delete(e.target.id);
      setSetFinalBrands(setFinalBrands);
    }
    setFinalAsortment(
      PRODUCTS[productType]
        .filter((color) => setFinalColors.size === 0 || isThereColor(color))
        .filter((size) => setFinalSize.size === 0 || isThereSize(size))
        .filter((brand) => setFinalBrands.size === 0 || isThereBrand(brand))
        .filter((price) => setFinalPrice.size === 0 || isTherePrice(price))
    );
    
  };
  const onChangePriceInput = (e) => {
    if (e.target.checked) {
      setSetFinalPrice(setFinalPrice.add(e.target.id));
    }
    if (!e.target.checked) {
      setFinalPrice.delete(e.target.id);
      setSetFinalPrice(setFinalPrice);
    }
    setFinalAsortment(
      PRODUCTS[productType]
        .filter((color) => setFinalColors.size === 0 || isThereColor(color))
        .filter((size) => setFinalSize.size === 0 || isThereSize(size))
        .filter((brand) => setFinalBrands.size === 0 || isThereBrand(brand))
        .filter((price) => setFinalPrice.size === 0 || isTherePrice(price))
    );
    
  };

  //compare
  let isThereColor = (item) => {
    for (let i = item.images.length; i > 0; i--) {
      if (
        item.images.some(function (step) {
          return setFinalColors.has(step.color);
        })
      ) {
        return true;
      }
    }
  };
  let isThereSize = (item) => {
    for (let i = item.sizes.length; i > 0; i--) {
      if (setFinalSize.has(item.sizes[i - 1])) {
        return true;
      }
    }
  };
  let isThereBrand = (item) => {
    if (setFinalBrands.has(item.brand)) {
      return true;
    }
  };
  let isTherePrice = (item) => {
    let cost = Math.round(
      item.price + parseInt(item.discount ?? 0) * (item.price / 100)
    );
    if (setFinalPrice.has("0-100$")) {
      if (cost >= 0 && cost <= 100) {
        return true;
      }
    }
    if (setFinalPrice.has("100-300$")) {
      if (cost >= 100 && cost <= 300) {
        return true;
      }
    }
    if (setFinalPrice.has("300-500$")) {
      if (cost >= 300 && cost <= 500) {
        return true;
      }
    }
    if (setFinalPrice.has("500-1000$")) {
      if (cost >= 500 && cost <= 1000) {
        return true;
      }
    }
    if (setFinalPrice.has(">1000$")) {
      if (cost >= 1000) {
        return true;
      }
    }
  };

  const [finalAssortment, setFinalAsortment] = useState(PRODUCTS[productType]);

  return (
    <div>
      <section className="filter-block">
        <button
          className="filter-button "
          data-test-id="filter-button"
          onClick={clickFilter}
        >
          <div className="page-btn">
            <img src={isFilterClose ? filter : close} alt="filter" />
          </div>
          <p>FILTER</p>
        </button>
        <div className="filter-position">
          <button className="page-btn">
            <img src={list} alt="table" />
          </button>
          <button className="page-btn">
            <img src={table} alt="table" />
          </button>
        </div>
      </section>
      <section
        className={classNames("filter", { "filter-none": isFilterClose })}
        data-test-id={`filters-${productType}`}
      >
        <div className="filter-item">
          <h3 className="filter-item-title">{filterArr[0].title}</h3>
          <div className="filter-item-content" data-test-id={filterArr[0].id}>
            {findAllColors().map((color) => {
              return (
                <div className="filter-item-content-item" key={color}>
                  <input
                    onChange={onChangeColorInput}
                    checked={setFinalColors.has(color)}
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
            {finsAllSise().map((size) => {
              return (
                <div className="filter-item-content-item" key={size}>
                  <input
                    onChange={onChangeSizeInput}
                    checked={setFinalSize.has(size)}
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
            {findAllBrands().map((brand) => {
              return (
                <div className="filter-item-content-item" key={brand}>
                  <input
                    onChange={onChangeBrandInput}
                    checked={setFinalBrands.has(brand)}
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
            {findAllPrice().map((price) => {
              return (
                <div className="filter-item-content-item" key={price}>
                  <input
                    onChange={onChangePriceInput}
                    checked={setFinalPrice.has(price)}
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
      <PageAsortment
        productsArr={finalAssortment}
        productType={productType}
      ></PageAsortment>
    </div>
  );
};

export default Filter;
