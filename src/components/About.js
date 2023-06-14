import React from 'react';
import './About.css';

function About(props) {
  return (
      <section>
          <h2>About Me</h2>
          <img src="/react-portfolio/portfolio.PNG" alt="placeholder" className='headshot' />
          <p className='about-text'>
            My name is Chris Daniels and I love working hard. My dream position is the current opening at your company. My hobbies are the same as yours so we'd probably get along and have stuff to talk about if you hired me. Just give me a chance. Please. I need a good job so I can impress my girlfriend's parents. They call me a deadbeat. Like how am I going to ask for their blessing if I don't have a job? There's so much riding on the line here. Give me a shot and I promise I'll at least do my best. Thanks.
          </p>
      </section>  
  );  
}

export default About;