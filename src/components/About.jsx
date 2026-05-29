import React from 'react';
import './About.css';

import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-title-wrapper reveal">
          <h2 className="about-title">
            Crafting <br />
            Digital <br />
            <span className="italic">Excellence.</span>
          </h2>
          <div className="accent-line"></div>
        </div>

        <div className="about-content reveal">
          {personal.bio.map((paragraph, index) => (
            <p key={index} className="about-text">{paragraph}</p>
          ))}

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
