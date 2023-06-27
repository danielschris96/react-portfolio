import React, { useState } from 'react';
import './Header.css';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    props.setCurrentSection('AboutMe');
  };

  const handleLinkClick = (section) => {
    props.setCurrentSection(section);
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
  <li onClick={() => handleLinkClick('About Me')}>About</li>
  <li onClick={() => handleLinkClick('Portfolio')}>Portfolio</li>
  <li onClick={() => handleLinkClick('Contact')}>Contact</li>
  <li onClick={() => handleLinkClick('Resume')}>Resume</li>
</ul>
{isOpen && (
  <ul className={`mobile-nav-list ${isOpen ? 'open' : ''}`}>
  <li onClick={() => handleLinkClick('About Me')}>About</li>
  <li onClick={() => handleLinkClick('Portfolio')}>Portfolio</li>
  <li onClick={() => handleLinkClick('Contact')}>Contact</li>
  <li onClick={() => handleLinkClick('Resume')}>Resume</li>
</ul>
)}
      </nav>
    </header>
  );
}
export default Header;