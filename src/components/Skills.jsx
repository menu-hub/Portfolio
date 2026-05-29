import React from 'react';
import './Skills.css';

import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title reveal">Technical Expertise</h2>
        <div className="accent-line reveal"></div>

        <div className="skills-grid reveal">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="category-line"></div>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
