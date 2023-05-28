import React, { useState } from 'react';
import Header from './components/Header';
// import Navigation from './components/Navigation';
// import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const renderSection = () => {
    switch (currentSection) {
      case 'AboutMe':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentSection('AboutMe')}>About Me</button>
        <button onClick={() => setCurrentSection('Portfolio')}>Portfolio</button>
        <button onClick={() => setCurrentSection('Contact')}>Contact</button>
        <button onClick={() => setCurrentSection('Resume')}>Resume</button>
      </nav>
      {renderSection()}
    </div>
  );
}

export default App;
