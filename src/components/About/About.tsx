import React from 'react';
import wafflesRocks from '../../assets/compressed/waffles-rocks.jpg';
import SplitSection from '../layout/SplitSection';
import AboutContent from './AboutContent';
import cn from 'classnames';

import './About.scss';

const About = ({ paddingLarge }: { paddingLarge: boolean }) => {
  return (
    <div className={cn('about-page', { 'padding-lg': paddingLarge })}>
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
