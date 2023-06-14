// import React from 'react';
// import './Contact.css';
// import emailjs from 'emailjs-com';

// function Contact() {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send email using EmailJS
//     emailjs.sendForm('service_wo9xybh', 'template_3sxj8aa', e.target, 'K3qDQ7DTy5joUlJk9')
//       .then((result) => {
//         console.log(result.text);
//         // Optional: Show a success message or perform any other actions after successful submission
//       })
//       .catch((error) => {
//         console.error(error.text);
//         // Optional: Show an error message or perform any other actions on error
//       });

//     // Reset the form after submission
//     e.target.reset();
//   };

//   return (
//     <section className='contact-section'>
//       <div className='contact-form-container'>
//         <h2>Contact Me</h2>
//         <form className='contact-form' onSubmit={handleSubmit}>
//           <label htmlFor='name'>Name</label>
//           <input type='text' id='name' name='name' required />
//           <label htmlFor='email'>Email</label>
//           <input type='email' id='email' name='email' required />
//           <label htmlFor='message'>Message</label>
//           <textarea id='message' name='message' required></textarea>
//           <input type='submit' value='Submit' />
//         </form>
//       </div>
//       <div className='contact-info'>
//         <h2>My Info</h2>
//         <ul>
//           <li>
//             <a href='mailto:danielschris96@gmail.com'>danielschris96@gmail.com</a>
//           </li>
//           <li>
//             <a href='tel:3607313065'>(360) 731-3065</a>
//           </li>
//           <li>
//             <a href='https://www.linkedin.com/in/christopher-daniels-01317726b/'>LinkedIn</a>
//           </li>
//           <li>
//             <a href='https://github.com/danielschris96'>Github</a>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// }


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wo9xybh', 'template_3sxj8aa', form.current, 'K3qDQ7DTy5joUlJk9')
      .then((result) => {
        console.log(result.text);
        // Optional: Show a success message or perform any other actions after successful submission
      })
      .catch((error) => {
        console.error(error.text);
        // Optional: Show an error message or perform any other actions on error
      });

    // Reset the form after submission
    form.current.reset();
  };

  return (
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='user_name' required />
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' name='user_email' required />
      <label htmlFor='message'>Message</label>
      <textarea id='message' name='message' required></textarea>
      <input type='submit' value='Send' />
    </form>
  );
};

export default Contact;