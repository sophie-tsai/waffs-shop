import React from 'react';
import './Banner.scss';

function Banner() {
  const charityInfo =
    '100% of the proceeds will be donated to the WHO to help fight covid-19.';

  return (
    <div>
      <div className="banner-div">
        <p className="banner-text">{charityInfo}</p>
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
