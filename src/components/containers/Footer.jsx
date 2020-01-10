import React from "react";
import IconButton from "../elements/IconButton";
import commentIcon from "../../assets/ic/black/ic_comment.png";
const Footer = props => {
  return (
    <div className="row">
      <div className="col px-0">
        <div className="bg-gray py-mob-s-24">
          <div className="text-center text-light">
            <h1> Support Center</h1>
          </div>
          <div className="text-center text-light my-mob-s-16">
            <h1 className="text-secondary my-mob-s-0">800-25-Platt</h1>
            <h2 className="my-mob-s-12 text-secondary font-weight-normal">
              800-257-5288
            </h2>
          </div>
          <div className="text-center">
            <h1 className="text-light mb-mob-s-0">4 a.m. - 12 a.m. (pst)</h1>
            <h1 className="text-light my-mob-s-0">7 Days a week</h1>
          </div>
          <div className="text-center">
            <IconButton
              className="d-mob-s-inline-flex px-mob-s-44 py-mob-s-16 my-mob-s-24 border-radius-rounded border-mob-s-none"
              child_classname="d-mob-s-flex px-mob-s-12"
            >
              <img src={commentIcon} alt="" className="mr-mob-s-12" />
              <span className="font-large">Live Help</span>
            </IconButton>
          </div>
          <ul className="list d-mob-s-flex justify-content-mob-s-space-around">
            <li>
              <a href="#" className="font-large text-light font-weight-bold">
                <h3>Contact us</h3>
              </a>
            </li>
            <li>
              <a href="#" className="font-large text-light font-weight-bold">
                <h3>What's New</h3>
              </a>
            </li>
            <li>
              <a href="#" className="font-large text-light font-weight-bold">
                <h3>FAQ</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
