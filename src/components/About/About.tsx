import React, { FC } from "react";
import "./About.scss";
import wafflesRocks from "../../assets/compressed/waffles-rocks.jpg";
import SplitSection from "../layout/SplitSection";
import AboutContent from "./AboutContent";

const About: FC = () => {
  return (
    <div className="about-page">
      <SplitSection
        img={wafflesRocks}
        page="about"
        imgAlt="waffles on rocks!"
        childComp={<AboutContent />}
      />
    </div>
  );
};

export default About;
