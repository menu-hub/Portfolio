import React from 'react';
import './Footer.css';

import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-cta reveal">
          <h2 className="footer-title">Let's build something <br /> <span className="italic">extraordinary</span> together.</h2>
          <a href={`mailto:${personal.email}`} className="btn btn-primary">Send a Message</a>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p className="copyright">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
            <div className="footer-socials">
              <a href={personal.linkedin}>LinkedIn</a>
              <a href={personal.github}>GitHub</a>
              <a href={personal.twitter}>Twitter</a>
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
