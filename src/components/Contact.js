import React from 'react';
import './Contact.css';

function Contact() {
    return (
      <section className='contact-section'>
          <div className='contact-form-container'>
              <h2>Contact Me</h2>
              <form className='contact-form'>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                  <input type="submit" value="Submit" />
              </form>
          </div>
          <div className='contact-info'>
              <h2>My Info</h2>
              <ul>
                  <li><a href="mailto:danielschris96@gmail.com">danielschris96@gmail.com</a></li>
                  <li><a href="tel:3607313065">(360) 731-3065</a></li>
                  <li><a href='https://www.linkedin.com/in/christopher-daniels-01317726b/'>LinkedIn</a></li>
                  <li><a href='https://github.com/danielschris96'>Github</a></li>
              </ul>
          </div>
      </section>
    );
  }

export default Contact;