import React from 'react';
import './rampwalk.css';

const RampWalkRules = () => {
  return (
    <div className="ramp-app">
      <header className="ramp-header">
        <h1>Ramp Walk Rules</h1>
      </header>

      <div className="ramp-back-button-container">
        <a href="/Home" className="ramp-back-button">Back</a>
      </div>

      <div className="ramp-container">
        <h2 className="ramp-section-title">Event Overview</h2>
        <ul className="ramp-list">
          <li className="ramp-list-item">Ramp Walk as a key attraction for the Freshers Event.</li>
        </ul>

        <h2 className="ramp-section-title">Categories</h2>
        <ul className="ramp-list">
          <li className="ramp-list-item">Men’s Ramp Walk</li>
          <li className="ramp-list-item">Women’s Ramp Walk</li>
          <li className="ramp-list-item">Couples’ Ramp Walk</li>
        </ul>

        <h2 className="ramp-section-title">Registration</h2>
        <ul className="ramp-list">
          <li className="ramp-list-item">Google Form available on December 6 for 24 hours.</li>
          <li className="ramp-list-item">Dress Code: Outfits from Tollywood movies (2010–2024).</li>
        </ul>

        <h2 className="ramp-section-title">Rules</h2>
        <ul className="ramp-list">
          <li className="ramp-list-item">Registration Deadline: 24 hours after form release.</li>
          <li className="ramp-list-item">Punctuality: Latecomers won’t be allowed to participate.</li>
          <li className="ramp-list-item">Winner Selection: Based on voting during the event.</li>
          <li className="ramp-list-item">Stage Directions: Participants must follow instructions for smooth flow.</li>
        </ul>
      </div>
    </div>
  );
};

export default RampWalkRules;