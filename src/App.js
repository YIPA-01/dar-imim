import React, { useState, useEffect } from 'react';
import './App.css';

// Import all components
import {
  CustomCursor,
  Navigation,
  Hero,
  About,
  Rooms,
  Experience,
  DesignEthos,
  Testimonials,
  Footer
} from './components';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Rooms />
      <Experience />
      <DesignEthos />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
