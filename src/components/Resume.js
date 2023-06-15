import React from 'react';
import './Resume.css';

const Resume = () => (
  <section className='resume-wrapper'>
    <a href="/react-portfolio/resume.pdf" className="resume-link" download>
      <h2 className='download'>Download My Resume</h2>
    </a>
    <div className="resume-content">
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  </section>
);

export default Resume;