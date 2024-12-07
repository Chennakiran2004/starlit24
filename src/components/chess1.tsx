import React from 'react';
import './chess.css';

const ChessCompetitionRules = () => {
  return (
    <div className="chess-app">
      <header className="chess-header">
        <h1>Chess Competition Rules</h1>
      </header>

      <div className="ramp-back-button-container">
        <a href="/Home" className="ramp-back-button">Back</a>
      </div>

      <div className="chess-container">
        <h2 className="chess-section-title">Tournament Format</h2>
        <ul className="chess-list">
          <li className="chess-list-item"><strong>Preliminary Rounds (Round of 14):</strong> Online matches on Chess.com (using council devices). Knockout style. 7 winners advance.</li>
          <li className="chess-list-item"><strong>Intermediate Rounds:</strong> One team will be directly sent to the semi-finals based on time and accuracy. 6 teams will play 3 matches on Chess.com to decide 3 winners.</li>
          <li className="chess-list-item"><strong>Semifinals:</strong> 3 winners and the pre-qualified team compete in 2 traditional chess matches. Winners advance to the finals.</li>
          <li className="chess-list-item"><strong>Finals:</strong> The 2 finalists play the championship match on traditional chess boards.</li>
        </ul>

        <h2 className="chess-section-title">Platform Guidelines (Online Matches)</h2>
        <ul className="chess-list">
          <li className="chess-list-item"><strong>Platform:</strong> Chess.com (account required).</li>
          <li className="chess-list-item"><strong>Supervision:</strong> Matches will be monitored for fair play.</li>
          <li className="chess-list-item"><strong>Time Control:</strong> 15 minutes per player, no increment.</li>
          <li className="chess-list-item"><strong>Tiebreaker:</strong> In case of a draw, a 2-minute Bullet match will be played.</li>
        </ul>

        <h2 className="chess-section-title">Gameplay for Traditional Matches</h2>
        <ul className="chess-list">
          <li className="chess-list-item"><strong>Equipment:</strong> Provided (boards, timers).</li>
          <li className="chess-list-item"><strong>Time Control:</strong> 10 minutes per player.</li>
        </ul>

        <h2 className="chess-section-title">General Rules</h2>
        <ul className="chess-list">
          <li className="chess-list-item"><strong>Eligibility:</strong> Only registered players may participate.</li>
          <li className="chess-list-item"><strong>Supervision:</strong> Online matches monitored for fair play, traditional matches follow standard rules.</li>
          <li className="chess-list-item"><strong>Arbiter Role:</strong> Disputes resolved by the arbiter, whose decision is final.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChessCompetitionRules;