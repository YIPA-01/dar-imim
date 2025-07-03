import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-background-overlay"></div>
      <div className="nav-container">
        <div className="logo">
          <img 
            src="/image/dar_imim-removebg-preview.png" 
            alt="Dar Imim Logo" 
            className="logo-image"
          />
          <div className="logo-text">
            <span className="logo-main">Dar Imim</span>
            <span className="logo-subtitle">Surf & Stay</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 