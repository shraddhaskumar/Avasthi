import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const { score, category } = location.state || { score: 0, category: '' };
    
    const handleNavigate = () => {
      if (category === 'Moderate Stress') {
        navigate('/moderate-stress'); 
      } else if (category === 'Low Stress') {
        navigate('/low-stress'); 
      } else {
        navigate('/high-stress'); 
      }
    };
  
    return (
      <div className="results-container">
        <h1>Your Results</h1>
        <p>Your total score is: {score}</p>
        <p>Stress Category: {category}</p>
        <button onClick={handleNavigate}>
          Go to {category} Page
        </button>
      </div>
    );
  };
  

export default Results;
