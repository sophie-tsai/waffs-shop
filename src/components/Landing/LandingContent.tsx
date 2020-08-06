import React, { FC } from "react";
import { Link } from "react-router-dom";
import wafflesSmiling from "../../assets/compressed/waffles-smiling.jpg";

const LandingContent: FC = () => {
  return (
    <>
      <div className="intro-div-header">
        <h2 className="intro-headline">
          welcome to <br />
          the waffs shop
        </h2>
      </div>
      <div className="intro-div-button">
        <Link to="/shop" className="intro-button-accent-link">
          <button className="intro-button-accent">shop my merch</button>
        </Link>
      </div>
      <div className="intro-div-img">
        <img
          src={wafflesSmiling}
          className="intro-secondary-img"
          alt="waffles smiling"
        />
      </div>
    </>
  );
};

export default LandingContent;
