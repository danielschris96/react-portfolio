import React from 'react';
import './Contact.css';

function Contact() {
  return (
      <section>
          <h2>Contact</h2>
          <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
              <input type="submit" value="Submit" />
          </form>
      </section>
  );
}

export default Contact;