import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="hero-noma">
      <div className="hero-image-container">
        <div className="hero-main-image"></div>
      </div>
      <div className="hero-text-overlay">
        <div className="hero-statement">
          <h1 className="hero-main-title">WHERE THE ATLANTIC</h1>
          <h1 className="hero-sub-title">meets <em>intentional living</em></h1>
        </div>
        <div className="hero-subtitle-container">
          <p className="hero-description">
            Surf culture, community <em>serenity</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 