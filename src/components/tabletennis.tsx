import React from 'react';
import './tabletennis.css';

const TableTennisRules = () => {
  return (
    <div className="tabletennis-app">
      <header className="tabletennis-header">
        <div className="ramp-back-button-container">
          <a href="/Home" className="ramp-back-button">
            <img src='/back-arrow.svg' alt='Back'/>
          </a>
        </div>
        <h1>Table Tennis Rules</h1>
      </header>

      <div className="tabletennis-container">
        <h2 className="tabletennis-section-title">Objective</h2>
        <ul className="tabletennis-list">
          <li className="tabletennis-list-item">Score by making the ball bounce on the opponent’s side without them returning it.</li>
        </ul>

        <h2 className="tabletennis-section-title">Setup</h2>
        <ul className="tabletennis-list">
          <li className="tabletennis-list-item">2v2 doubles game, with a net, paddles, and a ball.</li>
        </ul>

        <h2 className="tabletennis-section-title">Gameplay</h2>
        <ul className="tabletennis-list">
          <li className="tabletennis-list-item"><strong style={{marginRight:"7px"}}>Serve:</strong> Ball must bounce on your side first, then the opponent’s.</li>
          <li className="tabletennis-list-item"><strong style={{marginRight:"7px"}}>Rally:</strong> Hit the ball back and forth until one misses or hits it out.</li>
        </ul>

        <h2 className="tabletennis-section-title">Scoring</h2>
        <ul className="tabletennis-list">
          <li className="tabletennis-list-item">Points for missed returns, out-of-bounds shots, or improper serves.</li>
        </ul>

        <h2 className="tabletennis-section-title">Winning</h2>
        <ul className="tabletennis-list">
          <li className="tabletennis-list-item">First to 11 points wins a game, with matches typically best of 5 or 7.</li>
        </ul>

        <h2 className="tabletennis-section-title">Fouls</h2>
        <ul className="tabletennis-list">
          <li className="tabletennis-list-item">Double hitting, serving out of turn, or hitting the ball with the body.</li>
        </ul>

        <h2 className="tabletennis-section-title">Tips</h2>
        <ul className="tabletennis-list">
          <li className="tabletennis-list-item">Focus on consistency, placement, and practicing spins for control.</li>
        </ul>
      </div>
    </div>
  );
};

export default TableTennisRules;
