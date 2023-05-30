import React from 'react';
import './About.css';

function About(props) {
  return (
      <section>
          <h2>About Me</h2>
          <img src="../public/portfolio.png" alt="placeholder" />
          <p className='about-text'>
          My name is Chris Daniels and I love working hard. My dream position is the current opening at your company. My hobbies are the same as yours so we'd probably get along and have stuff to talk about if you hired me. Just give me a chance. Please. I need a good job so I can impress my girlfriend's parents. I can't ask them for their blessing in marrying their daughter until I have a solid job that reassures them I will be able to provide for their daughter and their future grandchildren. There's so much riding on the line here. Give me a shot and I promise I'll at least do my best. Thanks.
          </p>
      </section>  
  );  
}

export default About;