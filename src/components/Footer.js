import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer(props) {
  return (
    <footer className='footer-container'>
      <div className='social-icons'>
        <a href='https://github.com/danielschris96'>
          <FaGithub className='icon' />
        </a>
        <a href='https://www.linkedin.com/in/christopher-daniels-01317726b/'>
          <FaLinkedin className='icon' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;