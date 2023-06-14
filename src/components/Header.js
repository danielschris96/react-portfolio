import React from 'react';
import './Header.css';

function Header(props) {
  return (
      <header>
          <nav>
              <h1>Chris Daniels</h1>
              <ul>
                  <li onClick={() => props.setCurrentSection("About Me")}>About Me</li>
                  <li onClick={() => props.setCurrentSection("Portfolio")}>Portfolio</li>
                  <li onClick={() => props.setCurrentSection("Contact")}>Contact</li>
                  <li onClick={() => props.setCurrentSection("Resume")}>Resume</li>
              </ul>
          </nav>
      </header>
  );
}

export default Header;