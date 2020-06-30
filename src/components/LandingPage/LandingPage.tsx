import React from "react";
import "./LandingPage.scss";
import wafflesGriffith from "../../assets/waffles-griffith.jpg";
import wafflesGrass from "../../assets/waffles-grass.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="intro-section">
        <div className="intro-main-div">
          <img
            src={wafflesGriffith}
            className="intro-main-img"
            alt="waffles at griffith observatory"
          />
        </div>
        <div className="intro-secondary-div">
          <h2 className="intro-headline">
            welcome to <br />
            the waffs shop
          </h2>
          <button className="button-accent">shop my merch</button>
          <img
            src={wafflesGrass}
            className="intro-secondary-img"
            alt="waffles laying in the grass smiling"
          />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
