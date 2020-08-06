import React, { FC } from "react";
import "./About.scss";
import { aboutData } from "./aboutData";

const aboutKeyGenerator = counter();

const AboutContent: FC = () => {
  const displayAboutCopy = aboutData.map((fact: string) => {
    return (
      <p className="about-copy" key={aboutKeyGenerator()}>
        {fact.toLowerCase()}
      </p>
    );
  });

  return (
    <>
      <div className="about-div-headline">
        <h2 className="about-headline">it me, waffles</h2>
      </div>
      <div className="about-div-copy">{displayAboutCopy}</div>
    </>
  );
};

function counter() {
  let count = 0;
  return () => {
    return count++;
  };
}

export default AboutContent;
