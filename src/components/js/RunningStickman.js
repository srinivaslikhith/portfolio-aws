// RunningStickman.jsx
import React, { useState } from 'react';
import '../css/RunningStickman.css';

const StickmanInCar = ({ onReachEnd }) => {
  const [isRunning, setIsRunning] = useState(true);
  const [showCloud, setShowCloud] = useState(false);

  const handleDriveEnd = () => {
    setIsRunning(false);
    setShowCloud(true);
    if (onReachEnd) onReachEnd();
  };

  return (
    <div className="car-container">
      <div 
        className={`car-with-stickman ${isRunning ? 'driving' : 'stopped'}`} 
        onAnimationEnd={handleDriveEnd}
      >
        {/* Car SVG */}
        <svg viewBox="0 0 200 120" className="car-svg">
          {/* Car Body */}
          <path d="M20,80 L40,80 L50,60 L150,60 L160,80 L180,80 L180,100 L20,100 Z" 
                fill="#1e90ff" stroke="black" strokeWidth="2" className="car-body"/>
          
          {/* Car Windows */}
          <path d="M60,65 L70,45 L130,45 L140,65" 
                fill="#87ceeb" stroke="black" strokeWidth="2"/>
          
          {/* Wheels */}
          <circle cx="50" cy="100" r="15" fill="black"/>
          <circle cx="150" cy="100" r="15" fill="black"/>
          
          {/* Stickman in car */}
          <g className="stickman-in-car">
            <circle cx="100" cy="55" r="8" fill="none" stroke="black" strokeWidth="2"/>
            <line x1="100" y1="63" x2="100" y2="75" stroke="black" strokeWidth="2"/>
            <line x1="100" y1="65" x2="90" y2="70" stroke="black" strokeWidth="2"/>
            <line x1="100" y1="65" x2="110" y2="70" stroke="black" strokeWidth="2"/>
          </g>
        </svg>
      </div>
      
      {showCloud && (
        <div className="speech-cloud">
          <svg viewBox="0 0 120 100" className="cloud-svg">
            <path 
              d="M10,50 Q20,30 40,30 Q70,30 80,40 Q110,40 110,60 Q110,80 80,80 Q60,80 30,70 Q10,70 10,50"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
          <div className="cloud-text">Take my resume!</div>
        </div>
      )}
    </div>
  );
};

export default StickmanInCar;