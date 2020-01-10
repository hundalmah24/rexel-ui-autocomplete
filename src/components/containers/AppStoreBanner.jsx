import React from 'react';
import AppBanner from '../../assets/panel/app-get-banner.png';
const AppStoreBanner = props => {
  return (
    <div className="row">
      <div className="col px-8">
        <div className="bg-secondary shadow my-8">
          <div
            className="p-tab-100 p-mob-s-44 app-banner"
            style={{ backgroundImage: `url(${AppBanner})` }}
          ></div>
          <div className="p-12">
            <div className="text-center font-weight-bold">
              Shop Better, download the Platt App Today
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
