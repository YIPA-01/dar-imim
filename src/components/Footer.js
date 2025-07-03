import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Dar Imim</h3>
            <p>A boutique surf hostel where the Atlantic meets intentional living.</p>
          </div>
          <div className="footer-contact">
            <h4>Visit Us</h4>
            <address>
              Rue de la Plage<br />
              Taghazout 80022<br />
              Morocco
            </address>
            <p>
              <a href="tel:+212123456789">+212 123 456 789</a><br />
              <a href="mailto:hello@darimim.com">hello@darimim.com</a>
            </p>
          </div>
          <div className="footer-links">
            <h4>Experience</h4>
            <ul>
              <li><a href="#rooms">Accommodations</a></li>
              <li><a href="#experience">Surf Lessons</a></li>
              <li><a href="#experience">Yoga Sessions</a></li>
              <li><a href="#about">Our Philosophy</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Dar Imim. Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 