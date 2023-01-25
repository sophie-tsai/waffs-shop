import React, { useContext, useState, useEffect } from 'react';
import './Banner.scss';

import { DiscountContext } from '../../context/DiscountContext';

// import ReactTextRotator from "react-text-rotator";

function Banner() {
  const discounts = useContext(DiscountContext);

  const charityInfo =
    '100% of the proceeds will be donated to the WHO to help fight covid-19.';

  const [bannerCopy, setBannerCopy] = useState<string[]>([charityInfo]);

  useEffect(() => {
    setBannerCopy([charityInfo, ...discounts]);
  }, [discounts]);

  return (
    <div>
      {/* Need this check because text loop has a bug where without this it won't loop */}

      <div className="banner-div">
        {/* {bannerCopy.length > 1 ? (
          <ReactTextRotator
            content={getContentChildren(bannerCopy)}
            time={7000}
            startDelay={0}
          />
        ) : ( */}
        <p className="banner-text">{charityInfo}</p>
        {/* )} */}
      </div>
    </div>
  );
}

function getContentChildren(texts: string[]): {}[] {
  return texts.map((text) => {
    return {
      text,
      className: 'banner-text',
      animation: 'fade',
    };
  });
}

export default Banner;
