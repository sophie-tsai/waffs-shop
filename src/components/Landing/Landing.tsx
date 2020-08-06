import React, { FC } from "react";
import "./Landing.scss";
import wafflesBeach from "../../assets/compressed/waffles-beach.jpg";
import SplitSection from "../layout/SplitSection";
import LandingContent from "./LandingContent";
import IgFeed from "./InstaFeed/IgFeed";

const LandingPage: FC = () => {
  return (
    <div className="landing-page">
      <SplitSection
        img={wafflesBeach}
        page="intro"
        imgAlt="waffles at the beach!"
        childComp={<LandingContent />}
        extra={<IgFeed />}
      />
    </div>
  );
};

export default LandingPage;
