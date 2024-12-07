import React from 'react';
import './genai.css';

const GenAIVideoSubmissionForm = () => {
  return (
    <div className="genai-app">
      <header className="genai-header">
      <div className="ramp-back-button-container">
        <a href="/Home" className="ramp-back-button"> 
        <img src='/back-arrow.svg' alt='Back'/>
         </a>
        <h1>GEN AI Video Submission Guidelines</h1>
      </div>
      </header>

   

      <div className="genai-container">
        <h2 className="genai-section-title">Video Topic</h2>
        <ul className="genai-list">
          <li className="genai-list-item">Each class should create a short film using different AI tools available.</li>
        </ul>

        <h2 className="genai-section-title">Video Creation Timeline</h2>
        <ul className="genai-list">
          <li className="genai-list-item"><strong>Start:</strong> 5th December 2024</li>
          <li className="genai-list-item"><strong>Submission Deadline:</strong> 9th December 2024 by 7:00 PM</li>
        </ul>

        <h2 className="genai-section-title">Selection Criteria</h2>
        <ul className="genai-list">
          <li className="genai-list-item"><strong>Visual Appeal:</strong> Creativity and aesthetic quality of the video.</li>
          <li className="genai-list-item"><strong>Impactful Content:</strong> Relevance and strength of the message.</li>
          <li className="genai-list-item"><strong>Length of the Video:</strong> The video must not exceed 10 minutes of time length.</li>
          <li className="genai-list-item"><strong>Innovative Approach:</strong> Use of unique ideas and AI tools to enhance storytelling.</li>
        </ul>

      </div>
    </div>
  );
};

export default GenAIVideoSubmissionForm;