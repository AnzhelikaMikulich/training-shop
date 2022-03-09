import React from "react";
import "./Filter.css";

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
  return (
    <section className="filter" data-test-id={`filters-${productType}`}>
      {filterArr.map((filter,index)=>{
        return( <div className="filter-item" key={index}>
        <h3 className="filter-item-title">{filter.title}</h3>
        <div className="filter-item-content" data-test-id={filter.id}>
          {}
          <div className="filter-item-content-item">
            <input id="color" type="checkbox" value="size" data-test-id = {`filter-${filter.title}-size`}/>
            <label htmlFor="color">Size</label>
          </div>
          <div className="filter-item-content-item">
            <input id="color1" type="checkbox" value="size" />
            <label htmlFor="color1">Size</label>
          </div>
          <div className="filter-item-content-item">
            <input id="color2" type="checkbox" value="size" />
            <label htmlFor="color2">Size</label>
          </div>
          <div className="filter-item-content-item">
            <input id="color3" type="checkbox" value="size" />
            <label htmlFor="color3">Size</label>
          </div>
        </div>
      </div>)
       
      })}
      
    
    </section>
  );
};

export default Filter;
