import React, { useEffect, useState } from 'react';
import Navbar from './components/js/Navbar';
import Home from './components/js/Home';
import Intro from './components/js/Intro';
import Projects from './components/js/Projects';
import Contact from './components/js/Contact';
import Footer from './components/js/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 } // 60% visible = active
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} />
      <div className="content">
        <Home />
        <Intro />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
