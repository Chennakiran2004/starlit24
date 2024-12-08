import React from 'react';
import './fooseball.css';

const FoosballRules = () => {
  return (
    <div className="foosball-app">
      <header className="foosball-header">
        <div className="foosball-back-button-container">
          <a href="/Home" className="foosball-back-button">
            <img src='/back-arrow.svg' alt='Back' />
          </a>
        </div>
        <h1>Foosball Game Rules</h1>
      </header>

      <div className="foosball-container">
        <h2 className="foosball-section-title">Objective</h2>
        <ul className="foosball-list">
          <li className="foosball-list-item">Score by getting the ball into the opponent's goal.</li>
        </ul>

        <h2 className="foosball-section-title">Setup</h2>
        <ul className="foosball-list">
          <li className="foosball-list-item">2v2 game, played on a table with rods and figures.</li>
        </ul>

        <h2 className="foosball-section-title">Gameplay</h2>
        <ul className="foosball-list">
          <li className="foosball-list-item"><strong style={{marginRight:"9px"}}>Serve:</strong> Start by releasing the ball at the center.</li>
          <li className="foosball-list-item"><strong style={{marginRight:"9px"}}>Scoring:</strong> Goal when the ball enters the opponent’s goal.</li>
          <li className="foosball-list-item"><strong style={{marginRight:"9px"}}>No Spinning:</strong> Rods can't spin more than 360°.</li>
          <li className="foosball-list-item"><strong style={{marginRight:"9px"}}>Possession:</strong> Control only your side of the rods.</li>
          <li className="foosball-list-item"><strong style={{marginRight:"9px"}}>Winning:</strong> First to 5 or 10 goals wins.</li>
        </ul>

        <h2 className="foosball-section-title">Fouls</h2>
        <ul className="foosball-list">
          <li className="foosball-list-item">Excessive spinning, table jarring, or interfering with opponent’s rods.</li>
        </ul>

        <h2 className="foosball-section-title">Winning</h2>
        <ul className="foosball-list">
          <li className="foosball-list-item">The team with the most goals wins the game.</li>
        </ul>

        <h2 className="foosball-section-title">Tips</h2>
        <ul className="foosball-list">
          <li className="foosball-list-item">Aim precisely and strategize to block opponents' rods for better control.</li>
        </ul>
      </div>
    </div>
  );
};

export default FoosballRules;
