// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './output.css'

const App = () => {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
