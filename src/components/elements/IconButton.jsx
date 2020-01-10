import React from "react";

const IconButton = props => {
  return (
    <button className={props.className} {...props}>
      <div className={props.child_classname ? props.child_classname : ""}>
        {props.children}
      </div>
    </button>
  );
};

export default IconButton;
