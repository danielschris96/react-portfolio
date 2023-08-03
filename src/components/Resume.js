import React from 'react';
import './Resume.css';

const Resume = () => (
  <section className='resume-wrapper'>
    <div className='resume-link-wrapper'>
      <a href="/react-portfolio/resume1.pdf" className="resume-link" download>
        <h2 className='download'>Download My Resume</h2>
      </a>
    </div>
    <div className="resume-content">
      <div className="contact-info">
        <h3><strong>Contact Information</strong></h3>
        <p><strong>Name:</strong> Christopher Daniels</p>
        <p><strong>Phone:</strong> (360) 731-3065</p>
        <p><strong>Email:</strong> danielschris96@gmail.com</p>
      </div>
      <div className="education">
        <h3><strong>Education</strong></h3>
        <ul>
          <li>UC Berkeley Extension, Boot Camp - <em>Full Stack Web Development</em>, March - June 2023</li>
          <li>Gonzaga University, Spokane, Washington - <em>Bachelor of Science, Biochemistry, Cum Laude</em>, Graduated May 2018</li>
        </ul>
      </div>
      <div className="experience">
        <h3><strong>Employment History</strong></h3>
        <ul>
          <li>SSA Marine, Seattle, Washington - <em>Utility Mechanic</em>, June 2018 - January 2023</li>
          <li>Gonzaga University, Spokane, Washington - <em>Teaching Assistant, Research Assistant, Learning Assistant</em>, January 2016 - May 2018</li>
          <li>K & C Landscape Services, Indianola, Washington - <em>Co-owner</em>, February 2015 - January 2017</li>
          <li>Port Madison Enterprises, Kingston, Washington - <em>Outside Services</em>, July 2012 - June 2015</li>
        </ul>
      </div>
      <div className="volunteer">
        <h3><strong>Volunteer Experience</strong></h3>
        <ul>
          <li>Camp Oasis, Longbranch, Washington - <em>Camp Counselor</em>, June 2017, June 2018</li>
          <li>Sacred Heart Medical Center, Spokane, Washington - <em>Pediatric Emergency Department</em>, November 2016 - August 2017</li>
          <li>Gonzaga University, Spokane, Washington - <em>Science in Action</em>, September 2016 - December 2016</li>
          <li>Harrison Medical Center, Poulsbo, Washington - <em>Harrison Hematology & Oncology</em>, May 2015 - August 2015</li>
        </ul>
      </div>
      <div className="skills">
        <h3><strong>Professional Skills</strong></h3>
        <ul>
          <li>Problem-Solving</li>
          <li>Full Stack Web Development (Pseudocode, HTML5, CSS, JavaScript, etc)</li>
          <li>Command Line</li>
          <li>Developer Tools (Elements, Console, Network, Sources, Application, etc)</li>
          <li>Bootstrap, jQuery, AJAX, Git, GitHub</li>
          <li>Server Side API, Third Party API, REST API</li>
          <li>Node.js, Express.js, Heroku</li>
          <li>Object-oriented Programming (OOP), TDD, Unit Testing with JEST</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Resume;