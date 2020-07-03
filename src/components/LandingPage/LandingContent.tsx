import React, { FC } from "react";
import wafflesSmiling from "../../assets/waffles-smiling.jpg";

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
        <button className="intro-button-accent">shop my merch</button>
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
