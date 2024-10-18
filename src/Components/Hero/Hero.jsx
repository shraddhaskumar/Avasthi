import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/doctors');
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Welcome to Avasthi,<br/>a happy mind for all!</h1>
        <p>At Avasthi, we are committed to revolutionizing mental healthcare by creating a holistic ecosystem that addresses all aspects of mental wellness.</p>
        <button className="btn" onClick={handleGetStarted}>Get started</button>
      </div>
    </div>
  );
};

export default Hero;
