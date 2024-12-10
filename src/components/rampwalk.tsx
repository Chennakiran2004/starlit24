import React from 'react';
import './rampwalk.css';

const RampWalk = () => {
  return (
    <div className="rampwalk-app">
      <header className="rampwalk-header">
        <div className="rampwalk-back-button-container">
          <a href="/Home" className="rampwalk-back-button">
            <img src='/back-arrow.svg' alt='Back' />
          </a>
        </div>
        <h1>Ramp Walk for Freshers Event</h1>
      </header>

      <div className="rampwalk-container">
        <h2 className="rampwalk-section-title">Event Overview</h2>
        <ul className="rampwalk-list">
          <li className="rampwalk-list-item">Ramp Walk competition for Freshers featuring Men’s, Women’s, and Couples' categories.</li>
        </ul>

        <h2 className="rampwalk-section-title">Registration</h2>
        <ul className="rampwalk-list">
          <li className="rampwalk-list-item"><strong style={{marginRight:"7px"}}>Open:</strong> Google Form registration opens on December 6 for 24 hours.</li>
          <li className="rampwalk-list-item"><strong style={{marginRight:"7px"}}>Close:</strong> Registration closes after 24 hours.</li>
        </ul>

        <h2 className="rampwalk-section-title">Categories</h2>
        <ul className="rampwalk-list">
          <li className="rampwalk-list-item">Men’s Ramp Walk</li>
          <li className="rampwalk-list-item">Women’s Ramp Walk</li>
          <li className="rampwalk-list-item">Couples’ Ramp Walk</li>
        </ul>

        <h2 className="rampwalk-section-title">Evaluation</h2>
        <ul className="rampwalk-list">
          <li className="rampwalk-list-item">Points based on dress style, with synchronization for couples.</li>
        </ul>

        <h2 className="rampwalk-section-title">Dress Code</h2>
        <ul className="rampwalk-list">
          <li className="rampwalk-list-item">Outfits from Tollywood movies (2010-2024).</li>
        </ul>

        <h2 className="rampwalk-section-title">Rules</h2>
        <ul className="rampwalk-list">
          <li className="rampwalk-list-item"><strong style={{marginRight:"7px"}}>Registration:</strong> No late entries after 24 hours.</li>
          <li className="rampwalk-list-item"><strong style={{marginRight:"7px"}}>Punctuality:</strong> Latecomers won’t be allowed to participate.</li>
          <li className="rampwalk-list-item"><strong style={{marginRight:"7px"}}>Winner Selection:</strong> Voting during the event.</li>
          <li className="rampwalk-list-item"><strong style={{marginRight:"7px"}}>Stage Directions:</strong> Follow organizer instructions for smooth proceedings.</li>
        </ul>
      </div>
    </div>
  );
};

export default RampWalk;
