import React from 'react';
import './../../../pages/style/clothesstyle.css'
import filter from '../../../assets/image/pages/filter.png'
import list from '../../../assets/image/pages/list.png'
import table from '../../../assets/image/pages/table.png'

const FilterBlock = () => {
  return (
    <div>
      <section className="filter-block">
            <div className="filter-button">
              <button className="page-btn">
                <img src={filter} alt="filter" />
              </button>
              <p>FILTER</p>
            </div>
            <div className="filter-position">
              <button className="page-btn">
                <img src={list} alt="table" />
              </button>

              <button className="page-btn">
                <img src={table} alt="table" />
              </button>
            </div>
          </section>
    </div>
  );
};

export default FilterBlock;