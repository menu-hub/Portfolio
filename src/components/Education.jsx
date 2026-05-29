import React from 'react';
import './Education.css';

import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education: educationData, courses } = portfolioData;

  return (
    <section id="education" className="education">
      <div className="container education-container">
        <h2 className="section-title reveal">Education</h2>
        <div className="accent-line reveal"></div>

        <div className="education-grid">
          <div className="education-list reveal">
            {educationData.map((edu, index) => (
              <div key={index} className="education-card glass">
                <span className="edu-year">{edu.year}</span>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">
                  <span className="dash">—</span> {edu.institution}
                </p>
              </div>
            ))}
          </div>

          <div className="courses-section reveal">
            <h4 className="courses-title">Key Courses</h4>
            <div className="courses-cloud">
              {courses.map((course, index) => (
                <span key={index} className="course-tag glass">{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
