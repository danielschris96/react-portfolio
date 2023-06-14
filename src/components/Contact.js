import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setMessage('Email sent successfully!');
      })
      .catch((error) => {
        console.error(error.text);
        setMessage('Failed to send email. Please try again later.');
      });

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <section className='contact-section'>
      <div className='contact-form-container'>
        <h2>Contact Me</h2>
        <form className='contact-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' required />
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' required />
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' required></textarea>
          <input type='submit' value='Submit' />
          {message && <p className='message'>{message}</p>}
        </form>
      </div>
      <div className='contact-info'>
        <h2>My Info</h2>
        <ul>
          <li>
            <a href='mailto:danielschris96@gmail.com'>danielschris96@gmail.com</a>
          </li>
          <li>
            <a href='tel:3607313065'>(360) 731-3065</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/christopher-daniels-01317726b/'>LinkedIn</a>
          </li>
          <li>
            <a href='https://github.com/danielschris96'>Github</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;