import React from 'react';
import './carroms.css';

const CarromsCompetitionRules = () => {
  return (
    <div className="carroms-app">
      <header className="carroms-header">
        <div className="carroms-back-button-container">
          <a href="/Home" className="carroms-back-button">
            <img src='/back-arrow.svg' alt='Back' className='backbuttonCon' style={{ height: "20px" }} />
          </a>
        </div>
        <h1>Carrom Competition Rules</h1>
      </header>

      <div className="carroms-container">
        <h2 className="carroms-section-title">Objective</h2>
        <ul className="carroms-list">
          <li className="carroms-list-item">Score the highest points by pocketing carrom men and the queen.</li>
        </ul>

        <h2 className="carroms-section-title">Scoring</h2>
        <ul className="carroms-list">
          <li className="carroms-list-item"><strong>White Carrom Man:</strong> 2 points</li>
          <li className="carroms-list-item"><strong>Black Carrom Man:</strong> 1 point</li>
          <li className="carroms-list-item"><strong>Red Coin (Queen):</strong> 5 points (must be claimed correctly)</li>
        </ul>

        <h2 className="carroms-section-title">Game Basics</h2>
        <ul className="carroms-list">
          <li className="carroms-list-item"><strong>Players:</strong> Doubles (two teams, partners opposite each other)</li>
          <li className="carroms-list-item"><strong>Turns:</strong> Use striker to pocket carrom men.</li>
          <li className="carroms-list-item"><strong>Red Coin:</strong> Pocket it, then immediately follow with a carrom man to claim. If not, the queen returns to the center.</li>
          <li className="carroms-list-item"><strong>Fouls:</strong> Pocketing striker or opponent’s carrom men, or failing to strike any carrom men.</li>
          <li className="carroms-list-item"><strong>Penalty:</strong> A pocketed carrom man is returned to the center.</li>
        </ul>

        <h2 className="carroms-section-title">Winning</h2>
        <ul className="carroms-list">
          <li className="carroms-list-item">The team with the most points when all carrom men and the queen are pocketed wins.</li>
        </ul>

        <h2 className="carroms-section-title">Tips</h2>
        <ul className="carroms-list">
          <li className="carroms-list-item">Aim precisely, strategize, and block opponents to secure the queen for maximum points.</li>
        </ul>
      </div>
    </div>
  );
};

export default CarromsCompetitionRules;
