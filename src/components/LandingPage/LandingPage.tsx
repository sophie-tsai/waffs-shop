import React from "react";
import "./LandingPage.scss";
import wafflesBeach from "../../assets/waffles-beach.jpg";
import wafflesSmiling from "../../assets/waffles-smiling.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="split-section">
        <div className="split-main-div">
          <img
            src={wafflesBeach}
            className="main-img-intro"
            alt="waffles at the beach!"
          />
        </div>

        <div className="split-secondary-div">
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
        </div>
      </section>

      <hr className="theme-horizontal-bar" />
    </div>
  );
}

export default LandingPage;
