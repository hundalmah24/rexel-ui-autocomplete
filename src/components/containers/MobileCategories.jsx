import React from 'react';
import categoriesIcon from '../../assets/ic/green/ic_line_style.png';
import searchIcon from '../../assets/ic/green/ic_search.png';
import scannerIcon from '../../assets/ic/green/ic_scanner.png';

const MobileCategories = props => {
  return (
    <ul className="list d-mob-s-flex justify-content-mob-s-space-between d-tab-none">
      <li className="d-mob-s-inline-flex flex-mob-s-column align-items-mob-s-center">
        <div className="icon-2x d-mob-s-inline-flex align-items-mob-s-center justify-content-mob-s-center bg-secondary border-radius-rounded shadow">
          <img src={categoriesIcon} alt="categories" />
        </div>
        <span className="my-8">Categories</span>
      </li>
      <li className="d-mob-s-inline-flex flex-mob-s-column align-items-mob-s-center">
        <div className="icon-2x d-mob-s-inline-flex align-items-mob-s-center justify-content-mob-s-center bg-secondary border-radius-rounded shadow">
          <img src={searchIcon} alt="search" />
        </div>
        <span className="my-8">Search</span>
      </li>
      <li className="d-mob-s-inline-flex flex-mob-s-column align-items-mob-s-center">
        <div className="icon-2x d-mob-s-inline-flex align-items-mob-s-center justify-content-mob-s-center bg-secondary border-radius-rounded shadow">
          <img src={scannerIcon} alt="scanner" />
        </div>
        <span className="my-8">Scan</span>
      </li>
    </ul>
  );
};

export default MobileCategories;
