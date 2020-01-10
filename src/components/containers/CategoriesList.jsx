import React from "react";

import allCategoriesIcon from "../../assets/ic/black/ic_categories.png";
import forwardArrow from "../../assets/ic/black/ic_arrow_forward.png";
import catalogIcon from "../../assets/ic/black/ic_playlist_add_check.png";
import listIcon from "../../assets/ic/black/ic_list.png";
import PIMIcon from "../../assets/ic/black/ic_check_circle.png";
import accountIcon from "../../assets/ic/black/ic_person.png";
import branchIcon from "../../assets/ic/black/ic_place.png";

import liveHelpIconActive from "../../assets/ic/green/ic_chat - active.png";

const CategoriesList = props => {
  return (
    <div>
      <div className="p-8 py-24 font-large d-mob-s-flex align-items-mob-s-baseline justify-content-tab-center">
        <div className="mr-4 d-mob-s-inline-flex">
          <img src={allCategoriesIcon} alt="all-categories" />
        </div>
        Shop all categories
        <div className="d-mob-s-inline-flex d-tab-none ml-auto">
          <img src={forwardArrow} alt="Forward" />
        </div>
      </div>
      <ul className="list list-mob-horizontal list-tab-vertical row mx-0 my-0">
        <li className="p-8 py-12 col col-tab-4 flex-grow border-mob-s-1 border-tab-1  border-light border-x-mob-s-none border-mob-s-bottom-none">
          <a
            href="#"
            className="d-mob-s-flex align-items-mob-s-center text-dark  justify-content-tab-center"
          >
            <div className="mr-4 d-mob-s-inline-flex">
              <img src={catalogIcon} alt="my-catalog" />
            </div>
            My Catalog
            <div className="d-mob-s-inline-flex d-tab-none ml-auto">
              <img src={forwardArrow} alt="Forward" />
            </div>
          </a>
        </li>

        <li className="p-8 py-12 col col-tab-4 flex-grow border-mob-s-1 border-tab-1  border-light border-x-mob-s-none border-mob-s-bottom-none">
          <a
            href="#"
            className="d-mob-s-flex align-items-mob-s-center text-dark  justify-content-tab-center"
          >
            <div className="mr-4 d-mob-s-inline-flex">
              <img src={listIcon} alt="my-list" />
            </div>
            My List
            <div className="d-mob-s-inline-flex d-tab-none ml-auto">
              <img src={forwardArrow} alt="Forward" />
            </div>
          </a>
        </li>

        <li className="p-8 py-12 col col-tab-4 flex-grow border-mob-s-1 border-tab-1  border-light border-x-mob-s-none border-mob-s-bottom-none">
          <a
            href="#"
            className="d-mob-s-flex align-items-mob-s-center text-dark  justify-content-tab-center"
          >
            <div className="mr-4 d-mob-s-inline-flex">
              <img src={liveHelpIconActive} alt="livehelp" />
            </div>
            Live Help
            <div className="d-mob-s-inline-flex d-tab-none ml-auto">
              <img src={forwardArrow} alt="Forward" />
            </div>
          </a>
        </li>

        <li className="p-8 py-12 col col-tab-4 flex-grow border-mob-s-1 border-tab-1  border-light border-x-mob-s-none border-mob-s-bottom-none">
          <a
            href="#"
            className="d-mob-s-flex align-items-mob-s-center text-dark  justify-content-tab-center"
          >
            <div className="d-mob-s-inline-flex mr-4">
              <img src={PIMIcon} alt="PIM" />
            </div>
            PIM
            <div className="d-mob-s-inline-flex d-tab-none ml-auto">
              <img src={forwardArrow} alt="Forward" />
            </div>
          </a>
        </li>

        <li className="p-8 py-12 col col-tab-4 flex-grow border-mob-s-1 border-tab-1  border-light border-x-mob-s-none border-mob-s-bottom-none">
          <a
            href="#"
            className="d-mob-s-flex align-items-mob-s-center text-dark  justify-content-tab-center"
          >
            <div className="mr-4 d-mob-s-inline-flex">
              <img src={accountIcon} alt="account" />
            </div>
            Account
            <div className="d-mob-s-inline-flex d-tab-none ml-auto">
              <img src={forwardArrow} alt="Forward" />
            </div>
          </a>
        </li>

        <li className="p-8 py-12 col col-tab-4 flex-grow border-mob-s-1 border-tab-1  border-light border-x-mob-s-none border-mob-s-bottom-none">
          <a
            href="#"
            className="d-mob-s-flex align-items-mob-s-center text-dark justify-content-tab-center"
          >
            <div className="mr-4 d-mob-s-inline-flex">
              <img src={branchIcon} alt="branch locations" />
            </div>
            Branch Locations
            <div className="d-mob-s-inline-flex d-tab-none ml-auto">
              <img src={forwardArrow} alt="Forward" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesList;
