// Components/Questionnaire/Questionnaire.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import for navigation
import './Questionnaire.css'; // Ensure the path is correct

const Questionnaire = () => {
  const navigate = useNavigate(); // Hook to access navigation
  const questions = [
    {
      id: 1,
      question: 'In the last month, how often have you been upset because of something that happened unexpectedly?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 2,
      question: 'In the last month, how often have you felt unable to control the important things in your life?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 3,
      question: 'In the last month, how often have you felt nervous and “stressed”?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 4,
      question: 'In the last month, how often have you felt confident about your ability to handle your personal problems?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 5,
      question: 'In the last month, how often have you felt that things were going your way?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 6,
      question: 'In the last month, how often have you found that you could not cope with all the things you had to do?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 7,
      question: 'In the last month, how often have you been able to control irritations in your life?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 8,
      question: 'In the last month, how often have you felt that you were on top of things?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 9,
      question: 'In the last month, how often have you been angered because of things that were outside of your control?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
    {
      id: 10,
      question: 'In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?',
      options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'],
    },
  ];

  // State to store selected answers for each question
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // Handle selecting an answer for a question
  const handleAnswerChange = (questionId, score) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionId] = score;
    setAnswers(updatedAnswers);
  };

  // Calculate total score
  const calculateTotalScore = () => {
    return answers.reduce((total, score) => (score !== null ? total + score : total), 0);
  };

  // Handle form submission
  const handleSubmit = () => {
    const totalScore = calculateTotalScore();
    
    // Redirect based on score
    if (totalScore <= 13) {
      navigate('/low-stress'); // Redirect to Low Stress page
    } else if (totalScore >= 14 && totalScore <= 26) {
      navigate('/moderate-stress'); // Redirect to Moderate Stress page
    } else {
      navigate('/high-stress'); // Redirect to High Stress page
    }
  };

  return (
    <div className="questionnaire-container">
      <h1>Perceived Stress Scale (PSS) Test</h1>
      {questions.map((q, index) => (
        <div key={q.id} className="question-block">
          <h3>{q.question}</h3>
          {q.options.map((option, optIndex) => (
            <div key={optIndex}>
              <input
                type="radio"
                id={`question-${q.id}-option-${optIndex}`}
                name={`question-${q.id}`}
                value={optIndex}
                checked={answers[index] === optIndex}
                onChange={() => handleAnswerChange(index, optIndex)}
              />
              <label htmlFor={`question-${q.id}-option-${optIndex}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>
        Calculate Total Score
      </button>
    </div>
  );
};

export default Questionnaire;
