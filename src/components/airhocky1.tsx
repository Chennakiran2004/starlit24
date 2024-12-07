import React from 'react';
import './airhocky.css';

const AirHockeyRules = () => {
  return (
    <div className="airhockey-app">
      <header className="airhockey-header">
        <h1>Air Hockey Rules</h1>
      </header>

      <div className="airhockey-back-button-container">
        <a href="/Home" className="airhockey-back-button">Back</a>
      </div>

      <div className="airhockey-container">
        <h2 className="airhockey-section-title">Objective</h2>
        <p className="airhockey-paragraph">Score points by hitting the puck into the opponent's goal while defending your own.</p>

        <h2 className="airhockey-section-title">Game Setup</h2>
        <ul className="airhockey-list">
          <li className="airhockey-list-item">Players: 1-on-1</li>
          <li className="airhockey-list-item">Equipment: Air hockey table, puck, mallets</li>
        </ul>

        <h2 className="airhockey-section-title">Starting the Game</h2>
        <p className="airhockey-paragraph">The game starts with a face-off at the center, and the puck is hit to begin play.</p>

        <h2 className="airhockey-section-title">Scoring</h2>
        <ul className="airhockey-list">
          <li className="airhockey-list-item">A point is scored when the puck crosses into the opponent's goal.</li>
          <li className="airhockey-list-item">First to 11 points wins.</li>
        </ul>

        <h2 className="airhockey-section-title">Gameplay Rules</h2>
        <ul className="airhockey-list">
          <li className="airhockey-list-item">Use the mallet to strike and defend the puck.</li>
          <li className="airhockey-list-item">No touching the puck with hands.</li>
          <li className="airhockey-list-item">Mallet must not block the puck from crossing the goal.</li>
        </ul>

        <h2 className="airhockey-section-title">Fouls</h2>
        <ul className="airhockey-list">
          <li className="airhockey-list-item">Puck out of bounds results in a foul.</li>
          <li className="airhockey-list-item">High shots may lead to a penalty.</li>
          <li className="airhockey-list-item">No obstructing the opponent’s mallet or goal.</li>
        </ul>

        <h2 className="airhockey-section-title">Winning</h2>
        <p className="airhockey-paragraph">The first player to reach 11 points wins. In case of a tie, a tiebreaker can be played.</p>

        <h2 className="airhockey-section-title">Optional Rules</h2>
        <ul className="airhockey-list">
          <li className="airhockey-list-item">Timed games: The player with most goals within a set time wins.</li>
          <li className="airhockey-list-item">Speed rule: The puck must keep moving; stalling results in a penalty.</li>
        </ul>
      </div>
    </div>
  );
};

export default AirHockeyRules;