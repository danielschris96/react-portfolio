import React, { useState } from 'react';
import './Header.css';

function Header({ currentSection, setCurrentSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    setCurrentSection('AboutMe');
  };

  const handleLinkClick = (section) => {
    setCurrentSection(section);
    setIsOpen(false);
  };

  return (
    <header>
      <nav>
        <h1 className='logo' onClick={handleLogoClick}>Chris Daniels</h1>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul>
          <li className={currentSection === 'AboutMe' ? 'selected' : ''} onClick={() => handleLinkClick('AboutMe')}>About</li>
          <li className={currentSection === 'Portfolio' ? 'selected' : ''} onClick={() => handleLinkClick('Portfolio')}>Portfolio</li>
          <li className={currentSection === 'Contact' ? 'selected' : ''} onClick={() => handleLinkClick('Contact')}>Contact</li>
          <li className={currentSection === 'Resume' ? 'selected' : ''} onClick={() => handleLinkClick('Resume')}>Resume</li>
        </ul>
        {isOpen && (
          <ul className={`mobile-nav-list ${isOpen ? 'open' : ''}`}>
            <li className={currentSection === 'AboutMe' ? 'selected' : ''} onClick={() => handleLinkClick('AboutMe')}>About</li>
            <li className={currentSection === 'Portfolio' ? 'selected' : ''} onClick={() => handleLinkClick('Portfolio')}>Portfolio</li>
            <li className={currentSection === 'Contact' ? 'selected' : ''} onClick={() => handleLinkClick('Contact')}>Contact</li>
            <li className={currentSection === 'Resume' ? 'selected' : ''} onClick={() => handleLinkClick('Resume')}>Resume</li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;