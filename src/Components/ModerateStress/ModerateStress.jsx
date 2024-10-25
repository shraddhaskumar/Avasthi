import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ModerateStress.css'; // Import your CSS

const ModerateStress = () => {
  const [points, setPoints] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');
  const activitiesRef = useRef(null); // Create a ref for the activities section
  const navigate = useNavigate(); // Initialize useNavigate

  const activities = [
    { 
      name: "Practice mindfulness or meditation for 10 minutes.",
      video: "https://www.youtube.com/embed/lNpuUk55kuI" // Mindfulness meditation video
    },
    { 
      name: "Engage in physical activity, such as walking or yoga.",
      video: "https://www.youtube.com/embed/wObWzXUMi8s" // Yoga session video
    },
    { 
      name: "Connect with friends or family for a supportive conversation.",
      video: "https://www.youtube.com/embed/H6SwrMylhgo" // Communication tips video
    },
    { 
      name: "Try a creative activity like drawing or coloring to express yourself.",
      video: "https://www.youtube.com/embed/AHi6A5C5kYo" // Adult coloring tutorial
    },
  ];

  const handleButtonClick = (video) => {
    setVideoUrl(video);
    setPoints(prevPoints => prevPoints + 10); // Award 10 points for each activity
  };


  // Effect to handle redirection when points reach 40
  useEffect(() => {
    if (points >= 40) {
      setPoints(0); // Reset points if needed
      setVideoUrl(''); // Clear the video URL if needed
      navigate('/questionnaire'); // Redirect to the questionnaire section
    }
  }, [points, navigate]);

  return (
    <div className="moderate-stress-container">
      <br/><br/><br/><br/>
      <h1>Your Category: Moderate Stress</h1>
      <p>Follow the below activities that will help you manage you moderate stress:</p>
      <h2>Points: {points}</h2> {/* Display points */}


      {/* Activities Section */}
      <div ref={activitiesRef} className="activity-buttons">
        {activities.map((activity, index) => (
          <button key={index} onClick={() => handleButtonClick(activity.video)}>
            {activity.name}
          </button>
        ))}
      </div>

      {videoUrl && (
        <div className="video-container">
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default ModerateStress;
