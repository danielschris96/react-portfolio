import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about-wrapper'>
          <div className='text-wrapper'>
          <img src="/react-portfolio/portfolio.PNG" alt="placeholder" className='headshot' />
        <h2 className='about-title'>Hey there!</h2>
          </div>
          <p className='about-text'>
  <strong>I'm Chris Daniels</strong>, a dedicated Full Stack Web Developer with a background in biochemistry. I bring a unique blend of analytical thinking and creative coding skills to the table.

  <br /><br />

  <h3>Experience:</h3>
  <ul>
    <li>Completed a Full Stack Web Development Boot Camp at UC Berkeley Extension, gaining hands-on experience in HTML5, CSS, JavaScript, and various frameworks and tools like Bootstrap, jQuery, and Git.</li>
    <li>As a Teaching Assistant and Learning Assistant at Gonzaga University, I honed my communication and teaching abilities while guiding students in chemistry and biology courses.</li>
    <li>Contributed to a peptide library project as a Research Assistant, gaining proficiency in laboratory techniques.</li>
  </ul>

  <h3>Volunteer Work:</h3>
  <ul>
    <li>Volunteered at Camp Oasis, supporting campers with Crohn's disease or ulcerative colitis.</li>
    <li>Provided care in the Pediatric Emergency Department at Sacred Heart Medical Center.</li>
  </ul>

  <br />

  I'm thrilled to bring my diverse background and Full Stack Web Development skills to your team. Let's connect and discuss how I can contribute to your success.
</p>
      </section>  
  );  
}

export default About;