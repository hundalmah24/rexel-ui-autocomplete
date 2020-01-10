import React from "react";

import getStartedImage from "../../assets/img/platt-plus.png";
import dealImage from "../../assets/panel/deal.png";
import RecentImage1 from "../../assets/recent/11.png";

const DealsBanner = props => {
  return (
    <div className="row">
      <div className="col px-mob-s-8 order-mob-s-2 order-tab-1">
        <div className="bg-secondary shadow border-1">
          <div className="row mx-0">
            <div className="col col-tab-6 flex-grow px-8">
              <div className="h-100 d-mob-s-flex flex-mob-s-column justify-content-mob-s-center py-24">
                <div className="text-center">
                  <img src={getStartedImage} alt="getstarted" />
                </div>
              </div>
            </div>
            <div className="col col-tab-6 flex-grow px-8">
              <div className="h-100 d-mob-s-flex flex-mob-s-column justify-content-mob-s-center py-24">
                <div className="text-center">
                  <p className="font-large font-weight-bold my-mob-s-0">
                    Get Started Today
                  </p>
                  <p className="font-large font-weight-bold my-mob-s-0">
                    Become a <span className="text-primary">Platt Plus </span>{" "}
                    Member.
                  </p>
                </div>
                <div className="row mx-0">
                  <div className="col col-tab-8 move-left-mob-0 move-left-tab-3">
                    <button className="bg-light w-100 text-dark border-mob-s-none px-24 py-12 my-24 border-radius-rounded">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-tab-6 flex-grow px-8 my-8 order-mob-s-1">
        <div className="d-mob-s-flex justify-content-mob-s-center bg-primary py-4 shadow">
          <img src={dealImage} className="responsive  mx-auto" alt="" />
        </div>
      </div>
      <div className="col col-tab-6 flex-grow px-8 my-8 order-mob-s-3">
        <div className="bg-secondary shadow">
          <div className="row mx-0">
            <div className="col">
              <div className="d-mob-s-flex justify-content-mob-s-space-between py-16">
                <span className="text-dark">Recently Viewed</span>
                <span>
                  <a href="#" className="text-primary">
                    View All
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="row mx-0 mt-mob-s-4">
            <div className="col col-mob-s-3 flex-grow">
              <img src={RecentImage1} className="responsive py-16" alt="" />
            </div>
            <div className="col col-mob-s-3 flex-grow">
              <img src={RecentImage1} className="responsive py-16" alt="" />
            </div>
            <div className="col col-mob-s-3 flex-grow">
              <img src={RecentImage1} className="responsive py-16" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsBanner;
