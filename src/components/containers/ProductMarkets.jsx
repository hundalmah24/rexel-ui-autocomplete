import React from 'react';
import Card from '../elements/Card';
import dataCommIcon from '../../assets/img/datacomm.png';
import hvacIcon from '../../assets/img/hvac.png';
import industrialIcon from '../../assets/img/industrial.png';
import lightingIcon from '../../assets/img/lighting.png';
import energyIcon from '../../assets/img/energy.png';
import utilityIcon from '../../assets/img/utility.png';

const ProductMarkets = props => {
  return (
    <ul className={`row list ${props.className}`}>
      <li className="col col-tab-2 flex-grow px-8">
        <Card
          className="h-100 bg-secondary shadow"
          description="DataComm"
          image={dataCommIcon}
          imageClass="py-44 bg-image"
          textClass="py-24 text-center text-dark font-large font-weight-bold"
        />
      </li>
      <li className="col col-tab-2 flex-grow  px-8">
        <Card
          className="h-100 bg-secondary shadow "
          description="HVAC"
          image={hvacIcon}
          imageClass="py-44 bg-image"
          textClass="py-24 text-center font-large font-weight-bold"
        />
      </li>
      <li className="col col-tab-2 flex-grow  px-8">
        <Card
          className="h-100 bg-secondary shadow "
          description="Industrial"
          image={industrialIcon}
          imageClass="py-44 bg-image"
          textClass="py-24 text-center font-large font-weight-bold"
        />
      </li>
      <li className="col col-tab-2 flex-grow  px-8">
        <Card
          className="h-100 bg-secondary shadow bg-image"
          description="Lighting"
          image={lightingIcon}
          imageClass="py-44"
          textClass="py-24 text-center font-large font-weight-bold"
        />
      </li>
      <li className="col col-tab-2 flex-grow  px-8">
        <Card
          className="h-100 bg-secondary shadow"
          description="Energy Effecient"
          image={energyIcon}
          imageClass="py-44  bg-image"
          textClass="py-24 text-center font-large font-weight-bold"
        />
      </li>
      <li className="col col-tab-2 flex-grow  px-8">
        <Card
          className="h-100 bg-secondary shadow "
          description="Utility"
          image={utilityIcon}
          imageClass="py-44 bg-image"
          textClass="py-24 text-center font-large font-weight-bold"
        />
      </li>
    </ul>
  );
};

export default ProductMarkets;
