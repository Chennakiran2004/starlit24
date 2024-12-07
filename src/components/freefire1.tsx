import React from 'react';
import './freefire1.css';

const FreeFireClashSquadRules = () => {
  return (
    <div className="freefire-app">
      <header className="freefire-header">
        <div className="ramp-back-button-container">
        <a href="/Home" className="ramp-back-button"> 
        <img src='/back-arrow.svg' alt='Back'/>
         </a>
        <h1>Free Fire Clash Squad Rules</h1>
         
        
      </div>
      </header>

      

      <div className="freefire-container">
        <h2 className="freefire-section-title">Objective</h2>
        <ul className="freefire-list">
          <li className="freefire-list-item">Eliminate the opposing team.</li>
        </ul>

        <h2 className="freefire-section-title">Teams and Setup</h2>
        <ul className="freefire-list">
          <li className="freefire-list-item">2 teams of 4 players.</li>
          <li className="freefire-list-item">Each round starts with random weapons; players can buy gear using earned money.</li>
        </ul>

        <h2 className="freefire-section-title">Winning a Round</h2>
        <ul className="freefire-list">
          <li className="freefire-list-item">Eliminate all enemies or complete the round's objective.</li>
        </ul>

        <h2 className="freefire-section-title">Economy System</h2>
        <ul className="freefire-list">
          <li className="freefire-list-item">Earn money through kills and surviving rounds; use it for weapons, armor, and utilities.</li>
        </ul>

        <h2 className="freefire-section-title">Key Gameplay Rules</h2>
        <ul className="freefire-list">
          <li className="freefire-list-item">No breaking the gloowall.</li>
          <li className="freefire-list-item">No grenades, flashbangs, or smoke grenades.</li>
          <li className="freefire-list-item">No character skills or gun attributes.</li>
          <li className="freefire-list-item">Unlimited ammo allowed.</li>
          <li className="freefire-list-item">Pet skills and loadouts allowed.</li>
          <li className="freefire-list-item">Teams caught in malpractice will be disqualified.</li>
        </ul>

        <h2 className="freefire-section-title">Tips for Success</h2>
        <ul className="freefire-list">
          <li className="freefire-list-item">Communicate with your team.</li>
          <li className="freefire-list-item">Adapt to random loadouts.</li>
          <li className="freefire-list-item">Manage resources wisely.</li>
        </ul>
      </div>
    </div>
  );
};

export default FreeFireClashSquadRules;