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
            I'm Chris Daniels, a dedicated Full Stack Web Developer with a background in biochemistry. I bring a unique blend of analytical thinking and creative coding skills to the table.

            I completed a Full Stack Web Development Boot Camp at UC Berkeley Extension, where I gained hands-on experience in HTML5, CSS, JavaScript, and various frameworks and tools like Bootstrap, jQuery, and Git.

            During my time as a Teaching Assistant and Learning Assistant at Gonzaga University, I honed my communication and teaching abilities while guiding students in chemistry and biology courses.

            With a passion for problem-solving and a detail-oriented mindset, I contributed to a peptide library project as a Research Assistant, gaining proficiency in laboratory techniques.

            Beyond my professional journey, I've volunteered at Camp Oasis, supporting campers with Crohn's disease or ulcerative colitis, and at Sacred Heart Medical Center, providing care in the Pediatric Emergency Department.

            I'm thrilled to bring my diverse background and Full Stack Web Development skills to your team. Let's connect and discuss how I can contribute to your success.
          </p>
      </section>  
  );  
}

export default About;