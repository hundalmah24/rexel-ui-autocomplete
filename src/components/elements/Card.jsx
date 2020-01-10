import React from 'react';

const Card = props => {
  return (
    <div className={props.className}>
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className={props.imageClass}
      ></div>
      <div className={props.textClass}>{props.description}</div>
    </div>
  );
};

export default Card;
