import React from 'react';
import './airhocky.css';

const AirHockeyRules = () => {
  return (
    <div className="airhockeycon">
      <div className="content">
        <header>
          <h1 className="title">Air Hockey Rules</h1>
        </header>
        <section className="section">
          <h2 className="section-title">Objective</h2>
          <p>Score points by hitting the puck into the opponent’s goal while defending your own.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Game Setup</h2>
          <p><strong>Players:</strong> Typically 1-on-1.</p>
          <p><strong>Equipment:</strong> 
            <ul>
              <li>Table: Low-friction air hockey table with goals.</li>
              <li>Puck: Object to be hit.</li>
              <li>Mallets: Used by players to hit the puck.</li>
            </ul>
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Starting the Game</h2>
          <p>The game begins with a face-off at the center of the table. The puck is hit to start play.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Scoring</h2>
          <p>A point is scored when the puck crosses into the opponent’s goal.</p>
          <p>First to reach 11 points wins.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Gameplay Rules</h2>
          <p><strong>Use the mallet:</strong> Strike and defend the puck.</p>
          <p><strong>No touching:</strong> Players must not use their hands to touch the puck.</p>
          <p><strong>No overhanging:</strong> The mallet must not block the puck by covering the goal.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Fouls</h2>
          <p><strong>Puck Out of Bounds:</strong> Hitting the puck off the table results in a foul.</p>
          <p><strong>High Shots:</strong> Excessively high shots may result in a penalty.</p>
          <p><strong>Interference:</strong> No touching or obstructing the opponent’s mallet or goal.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Winning</h2>
          <p>The game ends when one player reaches the pre-set score.</p>
          <p>In case of a tie, a tiebreaker round can be played.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Optional Rules</h2>
          <p><strong>Timed Games:</strong> The player with the most goals within a set time wins.</p>
          <p><strong>Speed Rule:</strong> The puck must maintain movement; stalling may result in a penalty.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Enjoy the game and play fair!</h2>
        </section>
      </div>
    </div>
  );
};

export default AirHockeyRules;
