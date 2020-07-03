import React, { FC } from "react";
import "./About.scss";

const AboutContent: FC = () => {
  const aboutCopyP1: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium dapibus ante, eu ultrices mauris egestas eget. 
  Duis facilisis, felis a feugiat euismod, urna nisl luctus quam, at viverra dolor odio accumsan magna. Donec eleifend vulputate finibus. 
  Aliquam a laoreet tellus.`;
  const aboutCopyP2: string = `Vestibulum nunc lorem, volutpat at congue ut, aliquam et augue. Nullam vitae lectus malesuada, pellentesque augue vitae, blandit nibh. 
  Maecenas vel justo eget dui vehicula ornare. Suspendisse potenti. Fusce posuere eros est, vel pharetra risus pharetra et. 
  Integer pulvinar at lorem ut faucibus.`;

  return (
    <>
      <div className="about-div-headline">
        <h2 className="about-headline">about waffles</h2>
      </div>
      <div className="about-div-copy">
        <p className="about-copy">{aboutCopyP1}</p>

        <p className="about-copy">{aboutCopyP2}</p>
      </div>
    </>
  );
};

export default AboutContent;
