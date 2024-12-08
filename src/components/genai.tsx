import React from 'react';
import './genai.css';
// import { Link } from 'react-router-dom';

const GenAIVideoSubmissionForm = () => {
  return (
    <div className="genai-app">
      <header className="genai-header">
        <div className="genai-back-button-container">
          <a href="/Home" className="genai-back-button">
            <img src='/back-arrow.svg' alt='Back'/>
          </a>
        </div>
        <h1>GEN AI Video Submission Guidelines</h1>
      </header>

      <div className="genai-container">
        <h2 className="genai-section-title">Video Topic</h2>
        <ul className="genai-list">
          <li className="genai-list-item">Each class should create a short film using different AI tools available.</li>
        </ul>

        <h2 className="genai-section-title">Video Creation Timeline</h2>
        <ul className="genai-list">
          <li className="genai-list-item"><strong style={{marginRight:"5px"}} >Start:</strong> 5th December 2024</li>
          <li className="genai-list-item"><strong style={{marginRight:"5px"}}>Submission Deadline:</strong> 9th December 2024 by 7:00 PM</li>
        </ul>

        <h2 className="genai-section-title">Selection Criteria</h2>
        <ul className="genai-list">
          <li className="genai-list-item"><strong style={{marginRight:"5px"}}>Visual Appeal:</strong> Creativity and aesthetic quality of the video.</li>
          <li className="genai-list-item"><strong style={{marginRight:"5px"}}>Impactful Content:</strong> Relevance and strength of the message.</li>
          <li className="genai-list-item"><strong style={{marginRight:"5px"}}>Length of the Video:</strong> The video must not exceed 10 minutes of time length.</li>
          <li className="genai-list-item"><strong style={{marginRight:"5px"}}>Innovative Approach:</strong> Use of unique ideas and AI tools to enhance storytelling.</li>
        </ul>
      </div>
    </div>
  );
};

export default GenAIVideoSubmissionForm;
