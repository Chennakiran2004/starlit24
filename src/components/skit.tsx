// SkitCompetition.js (React Component)
import React from 'react';
import './skit.css';

const SkitCompetition = () => {
  return (
    <div className="skit-app">
      <header className="skit-header">
        <h1>Skit Competition Guidelines</h1>
      </header>

      <div className="ramp-back-button-container">
        <a href="/Home" className="ramp-back-button">Back</a>
      </div>


      <div className="skit-container">
        <h2 className="skit-section-title">Participants</h2>
        <ul className="skit-list">
          <li className="skit-list-item">Each group should consist of 5-6 members.</li>
          <li className="skit-list-item">Only 1 group per class is allowed to participate.</li>
        </ul>

        <h2 className="skit-section-title">Team Name</h2>
        <ul className="skit-list">
          <li className="skit-list-item">Each group must choose and submit a unique team name.</li>
        </ul>

        <h2 className="skit-section-title">Evaluation Criteria</h2>
        <ul className="skit-list">
          <li className="skit-list-item">Emotional Display</li>
          <li className="skit-list-item">Effective portrayal of emotions through dialogue, expressions, and actions.</li>
        </ul>

        <h2 className="skit-section-title">Submission Guidelines</h2>
        <ul className="skit-list">
          <li className="skit-list-item">Submit a video recording of your skit.</li>
          <li className="skit-list-item">Ensure the video is of good quality and captures the performance clearly.</li>
          <li className="skit-list-item">The video should be uploaded before 10th evening as the forms will be closed.</li>
        </ul>

        <h2 className="skit-section-title">Submission Process</h2>
        <ul className="skit-list">
          <li className="skit-list-item">A Google Form link will be shared with all participants.</li>
          <li className="skit-list-item">Fill in all required details and upload your video via the form.</li>
        </ul>

        <h2 className="skit-section-title">Important Notes</h2>
        <ul className="skit-list">
          <li className="skit-list-item">Late submissions will not be accepted.</li>
          <li className="skit-list-item">Ensure originality in your performance. Plagiarism or inappropriate content will lead to disqualification.</li>
        </ul>
        
      </div>
      
    </div>
  );
};

export default SkitCompetition;