import React from "react";
import "./LandingPage.scss";
import wafflesBeach from "../../assets/waffles-beach.jpg";
import wafflesSmiling from "../../assets/waffles-smiling.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="intro-section">
        <div className="intro-main-div">
          <img
            src={wafflesBeach}
            className="intro-main-img"
            alt="waffles at the beach!"
          />
        </div>

        <div className="intro-secondary-div">
          <div className="intro-CTA-div">
            <h2 className="intro-headline">
              welcome to <br />
              the waffs shop
            </h2>
            <button className="button-accent">shop my merch</button>
          </div>
          <img
            src={wafflesSmiling}
            className="intro-secondary-img"
            alt="waffles smiling"
          />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
