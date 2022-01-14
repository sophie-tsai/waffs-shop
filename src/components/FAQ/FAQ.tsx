import React from 'react';
import SplitSection from '../layout/SplitSection';
import './FAQ.scss';
import wafflesMeditate from '../../assets/compressed/waffles-meditate.jpg';
import FAQContent from './FAQContent';
import cn from 'classnames';

const FAQ = ({ paddingLarge }: { paddingLarge: boolean }) => {
  return (
    <div className={cn('faq-page', { 'padding-lg': paddingLarge })}>
      <SplitSection
        page="faq"
        img={wafflesMeditate}
        imgAlt="Waffles on the beach with stones"
        childComp={<FAQContent />}
      />
    </div>
  );
};

export default FAQ;
