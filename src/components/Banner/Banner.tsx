import TextLoop from "react-text-loop";
import React, { useContext, useState, useEffect } from "react";
import "./Banner.scss";

import { DiscountContext } from "../../context/DiscountContext";
import { WindowWidthContext } from "../../context/WindowWidthContext";

// TODO CLEAN UP , npm uninstall anything not used
import { isMobile } from "react-device-detect";
import ReactTextRotator from "react-text-rotator";
const ReactRotatingText = require("react-rotating-text");

function Banner() {
  const discounts = useContext(DiscountContext);
  const windowWidth = useContext(WindowWidthContext);

  const charityInfo =
    "100% of the proceeds will be donated to the WHO to help fight covid-19.";

  // DUMMY TEXT
  const charityInfo2 = "100% of the proceeds will be donated";

  const charityInfo3 = "100% of the proceeds will be donated to the WHO to ";

  const charityInfo4 =
    "100% of the proceeds will be donated to the WHO to  100% of the proceeds will be donated to the WHO to ";

  // DUMMY TEXT

  const [bannerCopy, setBannerCopy] = useState<string[]>([charityInfo]);

  useEffect(() => {
    setBannerCopy([
      charityInfo,
      charityInfo2,
      charityInfo3,
      charityInfo4,
      charityInfo4,
      ...discounts,
    ]);
  }, [discounts]);

  return (
    <div>
      {/* Need this check because text loop has a bug where without this it won't loop */}
      <div className="banner-div">
        {bannerCopy.length > 1 ? (
          <TextLoop
            interval={1000}
            mask={true}
            noWrap={false}
            springConfig={{ stiffness: 70, damping: 31 }}
            className="text-loop"
          >
            {getTextLoopChildren(bannerCopy, windowWidth)}
          </TextLoop>
        ) : (
          <p className="banner-text">{charityInfo}</p>
        )}
      </div>

      <div className="banner-div">
        {bannerCopy.length > 1 ? (
          <ReactTextRotator
            content={getContentChildren(bannerCopy)}
            time={5000}
            startDelay={500}
          />
        ) : (
          <p className="banner-text">{charityInfo}</p>
        )}
      </div>
    </div>
  );
}

/**
 * Given the texts to display, returns the jsx children elements that each have the appropriate padding such that
 * all elements take up the same number of lines.
 * @param texts
 */
function getTextLoopChildren(
  texts: string[],
  windowWidth: number
): JSX.Element[] {
  let maxLength = 0;
  for (let text of texts) {
    maxLength = Math.max(maxLength, text.length);
  }

  return texts.map((text) => {
    const diff = maxLength - text.length + getPaddingMultiplier(windowWidth);
    return (
      <p
        className="banner-text"
        style={{ paddingLeft: diff, paddingRight: diff }}
      >
        {text}
      </p>
    );
  });
}

function getContentChildren(texts: string[]): {}[] {
  return texts.map((text) => {
    return {
      text,
      className: "classA",
      animation: "fade",
    };
  });
}

function getPaddingMultiplier(windowWidth: number): number {
  // Bootstrap grid dimensions, xs, small, medium, large, xl
  if (windowWidth < 576) {
    return 0;
  } else if (windowWidth < 768) {
    return 5;
  } else if (windowWidth < 992) {
    return 10;
  } else if (windowWidth < 1200) {
    return 20;
  }
  return 0;
}

export default Banner;
