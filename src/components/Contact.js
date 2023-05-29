import React from 'react';
import './Contact.css';

function Contact() {
    return (
      <section className='contact-section'>
          <div className='contact-form-container'>
              <h2>Contact</h2>
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
              <h2>Contact Info</h2>
              <ul>
                  <li>Email: danielschris96@gmail.com</li>
                  <li>Phone: (360) 731-3065</li>
                  <li>LinkedIn: <a href='https://www.linkedin.com/in/christopher-daniels-01317726b/'>LinkedIn profile</a></li>
                  <li>Github: <a href='https://github.com/danielschris96'>Github profile</a></li>
              </ul>
          </div>
      </section>
    );
  }

export default Contact;