import React from 'react';
import SplitSection from '../layout/SplitSection';
import wafflesUnamused from '../../assets/compressed/waffles-unamused.jpg';
import ContactContent from './ContactContent';
import cn from 'classnames';
import './Contact.scss';

function Contact({ paddingLarge }: { paddingLarge: boolean }) {
  return (
    <div className={cn('contact-page', { 'padding-lg': paddingLarge })}>
      <SplitSection
        img={wafflesUnamused}
        page="contact"
        imgAlt="waffles' funny, unamused face"
        childComp={<ContactContent />}
      />
    </div>
  );
}

export default Contact;
