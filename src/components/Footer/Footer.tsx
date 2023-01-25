import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <Link to="/faq" className="footer-link">
          faq
        </Link>
        <Link to="/contact" className="footer-link">
          contact us
        </Link>
      </div>
      <div className="social-links-div">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/corgowaffles"
          className="social-link"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/corgowaffles/"
          className="social-link"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/corgowaffles"
          className="social-link"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/sophie-tsai"
        className="signature"
      >
        created by sophie tsai
      </a>
    </div>
  );
}

export default Footer;
