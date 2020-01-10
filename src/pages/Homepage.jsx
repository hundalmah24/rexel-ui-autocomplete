import React, { Component } from "react";
import Navigation from "../components/containers/Navigation";
import CategoriesList from "../components/containers/CategoriesList";
import MobileCategories from "../components/containers/MobileCategories";
import ProductMarkets from "../components/containers/ProductMarkets";
import DealsBanner from "../components/containers/DealsBanner";
import HelpCards from "../components/containers/HelpCards";
import AppStoreBanner from "../components/containers/AppStoreBanner";
import Footer from "../components/containers/Footer";

class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row bg-primary">
          <Navigation className="col" />
        </div>
        <div className="row bg-secondary">
          <div className="col p-tab-0">
            <CategoriesList />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MobileCategories />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ProductMarkets className="d-mob-s-none d-tab-flex"></ProductMarkets>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <DealsBanner />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <HelpCards />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AppStoreBanner />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
