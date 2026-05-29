import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.png';

import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content reveal">
          <span className="terminal-text">&gt; ~/portfolio_</span>
          <h1 className="hero-title">
            {personal.name.split(' ')[0]} <br />
            <span className="italic">{personal.name.split(' ')[1]}</span>
          </h1>
          <h2 className="hero-subtitle">{personal.titles.join(' & ')}</h2>
          
          <div className="hero-description">
            <p>Clean architecture. Modern technologies.</p>
            <p>Scalable solutions.</p>
          </div>

          <div className="hero-meta">
            <span className="dot"></span>
            <span>{personal.coordinates}</span>
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work →</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="image-wrapper">
            <div className="corner tl"></div>
            <div className="corner tr"></div>
            <div className="corner bl"></div>
            <div className="corner br"></div>
            <img src={profileImg} alt="Menura Thalewela" className="profile-img" />
            <div className="binary-overlay">01110000 01101011 01101011</div>
          </div>
          <div className="scroll-indicator">
            <span className="scroll-text">SCROLL</span>
            <div className="scroll-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
