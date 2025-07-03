import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Three weeks here changed my perspective on travel. The mornings began with the call to prayer mixing with crashing waves, and ended with tagine shared among strangers who became family.",
      author: "Elena K.",
      location: "Barcelona"
    },
    {
      text: "I came for the waves but stayed for the community. Every detail here speaks to intentional living—from the hand-thrown ceramics to the way light filters through the courtyard at sunset.",
      author: "Marcus T.",
      location: "Copenhagen"
    },
    {
      text: "This place strips away the unnecessary and reveals what matters. Simple rooms, extraordinary experiences, and a connection to both the ocean and yourself.",
      author: "Amira S.",
      location: "Casablanca"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-content">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial ${index === currentTestimonial ? 'active' : ''}`}
              >
                <blockquote>"{testimonial.text}"</blockquote>
                <cite>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.location}</span>
                </cite>
              </div>
            ))}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 