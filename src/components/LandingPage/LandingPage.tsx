import React, { FC } from "react";
import "./LandingPage.scss";
import wafflesBeach from "../../assets/waffles-beach.jpg";
import SplitSection from "../layout/SplitSection";
import LandingContent from "./LandingContent";
import InstaFeed from "./InstaFeed/InstaFeed";

const LandingPage: FC = () => {
  return (
    <div className="landing-page">
      <SplitSection
        img={wafflesBeach}
        page="intro"
        imgAlt="waffles at the beach!"
        childComp={<LandingContent />}
      />
      <InstaFeed />
    </div>
  );
};

export default LandingPage;
