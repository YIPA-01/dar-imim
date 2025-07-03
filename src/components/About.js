import React from 'react';

const About = () => {
  return (
    <section id="rooms" className="about-noma">
      <div className="about-statement-section">
        <div className="about-statement">
          <h2 className="section-title-large">SIMPLE THE LUXURY</h2>
          <div className="about-description">
            <p className="about-subtitle">Philosophy of intentional design</p>
          </div>
        </div>
      </div>
      
      <div className="about-content-grid">
        <div className="about-text-block">
          <p className="large-paragraph">
            We believe luxury lies not in excess, but in the careful curation of experiences that nourish the soul.
          </p>
          <p className="body-text">
            Here, handcrafted details meet the untamed beauty of Morocco's coast. Each morning begins with the Atlantic's rhythm, each evening closes with shared stories around our communal table.
          </p>
          <p className="body-text">
            Our philosophy draws from the Moroccan concept of <em>baraka</em>—the blessing found in authentic connection, whether to nature, community, or oneself.
          </p>
        </div>
        
        <div className="about-image-block">
          <img src="/image/beds.jpeg" alt="Luxury accommodations at Dar Imim" className="about-hero-image" />
        </div>
      </div>
    </section>
  );
};

export default About; 