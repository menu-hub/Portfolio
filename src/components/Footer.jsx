import React from 'react';
import './Footer.css';

import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-bottom">
          <div className="footer-info">
            <p className="copyright">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
            <div className="footer-socials">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={personal.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="footer-location">
            <span>{personal.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
