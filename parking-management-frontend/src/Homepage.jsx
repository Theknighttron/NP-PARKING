import React from 'react';
import LandingPage from './LandingPage';
import Features from './Features';
import Stats from './Stats';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';

const Homepage = () => {
  return (
    <div>
        <LandingPage />
        <Features />
        <Stats />
        <Contact />
        <About />
        <Footer />
    </div>
  )
}

export default Homepage;