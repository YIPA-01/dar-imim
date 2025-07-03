import React, { useEffect, useRef } from 'react';

const Rooms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger animation when section is 30% visible
      if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3) {
        section.classList.add('scattered');
      } else {
        section.classList.remove('scattered');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="rooms-noma" ref={sectionRef}>
      <div className="rooms-hero-section">
        <div className="rooms-large-image shared-sanctuary"></div>
        <div className="rooms-title-overlay">
          <h2 className="section-title-large">SURF & EXPERIENCE</h2>
        </div>
      </div>
      
      <div className="rooms-content-section">
        <div className="rooms-grid-noma">
          <div className="room-editorial-card scatter-item-1">
            <div className="room-image-large ocean-suite"></div>
            <div className="room-text-minimal">
              <h3>Ocean View Suite</h3>
              <p>Floor-to-ceiling windows frame the Atlantic</p>
            </div>
          </div>
          
          <div className="room-editorial-card scatter-item-2">
            <div className="room-image-large courtyard-room"></div>
            <div className="room-text-minimal">
              <h3>Courtyard Room</h3>
              <p>Centered around peaceful gardens</p>
            </div>
          </div>
          
          <div className="room-editorial-card scatter-item-3">
            <div className="room-image-large shared-sanctuary"></div>
            <div className="room-text-minimal">
              <h3>Shared Sanctuary</h3>
              <p>Community-focused spaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms; 