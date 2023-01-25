import React from 'react';
import wafflesBeach from '../../assets/compressed/waffles-beach.jpg';
import SplitSection from '../layout/SplitSection';
import LandingContent from './LandingContent';

import cn from 'classnames';

import './Landing.scss';

const LandingPage = ({ paddingLarge }: { paddingLarge: boolean }) => {
  return (
    <div className={cn('landing-page', { 'padding-lg': paddingLarge })}>
      <SplitSection
        img={wafflesBeach}
        page="intro"
        imgAlt="waffles at the beach!"
        childComp={<LandingContent />}
      />
    </div>
  );
};

export default LandingPage;
