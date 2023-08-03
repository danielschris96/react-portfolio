import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const renderSection = () => {
    switch (currentSection) {
      case 'About Me':
        return <About setCurrentSection={setCurrentSection} />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About setCurrentSection={setCurrentSection} />;
    }
  }

  return (
    <div className="app-wrapper">
      <div className="content">
        <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
}

export default App;