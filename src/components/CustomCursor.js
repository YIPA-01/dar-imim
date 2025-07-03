import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className="custom-cursor weed-cursor"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`
      }}
    >
      <svg 
        width="28" 
        height="32" 
        viewBox="0 0 28 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cannabis leaf - center leaflet */}
        <path 
          d="M14 2C14 2 16 8 16 14C16 18 15 20 14 20C13 20 12 18 12 14C12 8 14 2 14 2Z" 
          fill="url(#leafGradient)"
          stroke="#1a4d1f"
          strokeWidth="0.3"
        />
        
        {/* Left leaflets */}
        <path 
          d="M12 6C12 6 8 9 6 12C4 15 5 17 6 17C7 17 10 15 12 12C14 9 12 6 12 6Z" 
          fill="url(#leafGradient)"
          stroke="#1a4d1f"
          strokeWidth="0.3"
        />
        
        <path 
          d="M10 8C10 8 6 10 4 13C2 16 3 18 4 18C5 18 8 16 10 13C12 10 10 8 10 8Z" 
          fill="url(#leafGradient)"
          stroke="#1a4d1f"
          strokeWidth="0.3"
        />
        
        {/* Right leaflets */}
        <path 
          d="M16 6C16 6 20 9 22 12C24 15 23 17 22 17C21 17 18 15 16 12C14 9 16 6 16 6Z" 
          fill="url(#leafGradient)"
          stroke="#1a4d1f"
          strokeWidth="0.3"
        />
        
        <path 
          d="M18 8C18 8 22 10 24 13C26 16 25 18 24 18C23 18 20 16 18 13C16 10 18 8 18 8Z" 
          fill="url(#leafGradient)"
          stroke="#1a4d1f"
          strokeWidth="0.3"
        />
        
        {/* Smaller outer leaflets */}
        <path 
          d="M8 10C8 10 4 12 3 14C2 16 3 17 4 17C5 17 7 15 8 13C9 11 8 10 8 10Z" 
          fill="url(#leafGradientLight)"
          stroke="#1a4d1f"
          strokeWidth="0.2"
        />
        
        <path 
          d="M20 10C20 10 24 12 25 14C26 16 25 17 24 17C23 17 21 15 20 13C19 11 20 10 20 10Z" 
          fill="url(#leafGradientLight)"
          stroke="#1a4d1f"
          strokeWidth="0.2"
        />
        
        {/* Stem */}
        <path 
          d="M14 20C14 20 14 26 14 30C14 31 14 32 14 32C14 32 14 31 14 30C14 26 14 20 14 20Z" 
          fill="#2d5a2d"
          stroke="#1a4d1f"
          strokeWidth="0.3"
        />
        
        {/* Leaf veins for detail */}
        <path 
          d="M14 4L14 18" 
          stroke="#1a4d1f"
          strokeWidth="0.2"
          opacity="0.6"
        />
        
        <path 
          d="M12 8L16 12" 
          stroke="#1a4d1f"
          strokeWidth="0.15"
          opacity="0.4"
        />
        
        <path 
          d="M16 8L12 12" 
          stroke="#1a4d1f"
          strokeWidth="0.15"
          opacity="0.4"
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a7c59" />
            <stop offset="30%" stopColor="#2c5530" />
            <stop offset="70%" stopColor="#3d6b3d" />
            <stop offset="100%" stopColor="#1a4d1f" />
          </linearGradient>
          
          <linearGradient id="leafGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5a8c69" />
            <stop offset="50%" stopColor="#4a7c59" />
            <stop offset="100%" stopColor="#2c5530" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CustomCursor; 