import React from 'react';
import './debate.css';

const DebateSubmissionForm = () => {
  return (
    <div className="debate-app">
      <header className="debate-header">
        <div className="debate-back-button-container">
          <a href="/Home" className="debate-back-button">
            <img src='/back-arrow.svg' alt='Back'/>
          </a>
        </div>
        <h1>Inter-Section Debate Competition Guidelines</h1>
      </header>

      <div className="debate-container">
        <h2 className="debate-section-title">Event Overview</h2>
        <ul className="debate-list">
          <li className="debate-list-item">The competition will feature 14 sections, each represented by a team of 3 members.</li>
          <li className="debate-list-item">The event consists of two rounds: Preliminary and Final Round.</li>
        </ul>

        <h2 className="debate-section-title">Event Date & Venue</h2>
        <ul className="debate-list">
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Date:</strong> 10th December 2024</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Venue:</strong> Hall-1, Kapil Kavuri Hub</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Time:</strong> 5:00 PM</li>
        </ul>

        <h2 className="debate-section-title">Rules & Format</h2>
        <ul className="debate-list">
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Team Structure:</strong> Each team consists of 3 members: One lead speaker and two supporting speakers.</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Rounds:</strong> Preliminary Round and Final Round with a surprise motion.</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Time Limits:</strong> Lead speaker – 3 minutes, Supporting speakers – 2 minutes each.</li>
        </ul>

        <h2 className="debate-section-title">Evaluation Criteria</h2>
        <ul className="debate-list">
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Clarity of Arguments:</strong> Articulation and logical structure of arguments.</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Content Quality:</strong> Depth of research, evidence, and relevance.</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Persuasiveness:</strong> Ability to convince the audience with rhetorical techniques.</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Rebuttals:</strong> Strength of counterarguments and ability to defend the stance.</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Adherence to Time:</strong> Effective time management without going over the limit.</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Team Coordination:</strong> Balanced participation and seamless transitions between speakers.</li>
          <li className="debate-list-item"><strong style={{marginRight:"5px"}}>Presentation Style:</strong> Confidence, voice modulation, and body language.</li>
        </ul>
      </div>
    </div>
  );
};

export default DebateSubmissionForm;
