
import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starFieldRef.current) return;
    
    const starField = starFieldRef.current;
    const starCount = 100;
    
    // Clear any existing stars
    starField.innerHTML = '';
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;
      star.style.animationDuration = `${Math.random() * 4 + 2}s`;
      star.classList.add('animate-pulse-slow');
      
      starField.appendChild(star);
    }
  }, []);

  return <div ref={starFieldRef} className="star-field" />;
};

export default StarField;
