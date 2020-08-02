import React, { FC } from "react";
import "./About.scss";

const AboutContent: FC = () => {
  const realCopy1: string = `Henlo! I am a 3 year-old sassy, female forever-pup who lives in Los Angeles. 
  I enjoy splooting, heccin' at the beach, and eating anything edible (& sometimes inedible). 
  My life may sound relaxing, but it is not without facing dangers such as the vacuum, introoders, and printers. 
  Luckily,  I can easily keep everyone safe from these evil things by barking as loud as possible. Thanks to my efforts, no human has ever been injured.`;

  const realCopy2: string = `When I am not napping, I am hard at work as the chief corgi officer of a multi-bajillion dollar company I founded. 
  My hired staff includes mahm and dad. Mahm is the chief marketing officer and responsible for handling all my social media. 
  Dad, my intern and assistant, is responsible for several butler-like services such as feeding me dinner and picking up my poop.`;

  return (
    <>
      <div className="about-div-headline">
        <h2 className="about-headline">it me, waffles</h2>
      </div>
      <div className="about-div-copy">
        <p className="about-copy">{realCopy1.toLowerCase()}</p>
        <p className="about-copy">{realCopy2.toLowerCase()}</p>
      </div>
    </>
  );
};

export default AboutContent;
