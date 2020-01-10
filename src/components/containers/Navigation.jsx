import React from "react";
import NavSearchBar from "../elements/NavSearchBar";
import SearchIcon from "../../assets/ic/white/ic_search.png";
import ShoppingCart from "../../assets/ic/white/ic_shopping_cart.png";
import Person from "../../assets/ic/white/ic_person.png";
import Menu from "../../assets/ic/white/ic_menu.png";
import logo from "../../assets/img/logo.png";


const Navigation = () => {
  return (
    <>
      <div className="col d-mob-s-flex px-0">
        <a
          href="#"
          className="p-8 d-mob-s-inline-flex align-items-mob-s-center"
        >
          <img src={logo} alt="rexel ui" />
        </a>
        <ul className="nav-menu ml-auto my-0">
          <li>
            <button className="nav-icon p-0 justify-content-mob-s-center d-mob-s-inline-flex">
              <img src={SearchIcon} alt="search" />
            </button>
          </li>
          <li>
            <button className="nav-icon p-0 justify-content-mob-s-center d-mob-s-inline-flex">
              <img src={ShoppingCart} alt="search" />
            </button>
          </li>
          <li>
            <button className="nav-icon p-0 justify-content-mob-s-center d-mob-s-inline-flex">
              <img src={Person} alt="search" />
            </button>
          </li>
          <li>
            <button className="nav-icon p-0 justify-content-mob-s-center d-mob-s-inline-flex">
              <img src={Menu} alt="search" />
            </button>
          </li>
        </ul>
      </div>
      <NavSearchBar   />
    </>
  );
};

export default Navigation;
