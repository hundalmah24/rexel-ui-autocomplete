import React from 'react';
import Card from '../elements/Card';
import superToolsIcon from '../../assets/img/super-tool-day.png';
import locationIcon from '../../assets/img/ic_location_b.png';
import HelpIcon from '../../assets/img/ic_helpcenter.png';
import uPlattIcon from '../../assets/img/ic_platt-u.png';

const HelpCards = props => {
  return (
    <div className="row">
      <div className="col col-mob-s-6 col-tab-3 flex-grow px-8 my-8">
        <Card
          className="h-100 bg-secondary shadow"
          description="DataComm"
          image={superToolsIcon}
          imageClass="py-44  bg-image bg-size-auto"
          textClass="py-24 text-center text-dark font-large font-weight-bold"
        />
      </div>
      <div className="col col-mob-s-6 col-tab-3 flex-grow px-8 my-8">
        <Card
          className="h-100 bg-secondary shadow"
          description="DataComm"
          image={locationIcon}
          imageClass="py-44  bg-image bg-size-auto"
          textClass="py-24 text-center text-dark font-large font-weight-bold"
        />
      </div>
      <div className="col col-mob-s-6 col-tab-3 flex-grow px-8 my-8">
        <Card
          className="h-100 bg-secondary shadow"
          description="DataComm"
          image={HelpIcon}
          imageClass="py-44  bg-image bg-size-auto"
          textClass="py-24 text-center text-dark font-large font-weight-bold"
        />
      </div>
      <div className="col col-mob-s-6 col-tab-3 flex-grow px-8 my-8">
        <Card
          className="h-100 bg-secondary shadow"
          description="DataComm"
          image={uPlattIcon}
          imageClass="py-44  bg-image bg-size-auto"
          textClass="py-24 text-center text-dark font-large font-weight-bold"
        />
      </div>
    </div>
  );
};

export default HelpCards;
