import React from 'react';
import './fooseball.css';

const FoosballRules = () => {
  return (
    <div className="fooseballcon">
      <div className="content">
        <header>
          <h1 className="title">Foosball Rules</h1>
        </header>
        <section className="section">
          <h2 className="section-title">Objective</h2>
          <p>Score by hitting the ball into the opponent's goal.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Setup</h2>
          <p><strong>Players:</strong> Doubles (2v2).</p>
          <p><strong>Table:</strong> Equipped with rods and player figures.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Gameplay</h2>
          <p><strong>Serve:</strong> Start by releasing the ball at the center.</p>
          <p><strong>Scoring:</strong> A goal counts when the ball enters the opponent's goal.</p>
          <p><strong>No Spinning:</strong> Rods cannot spin more than 360°.</p>
          <p><strong>Possession:</strong> Control only your side of the rods.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Winning</h2>
          <p>First to reach 5 or 10 goals wins.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Fouls</h2>
          <p><strong>Excessive spinning</strong> or table jarring.</p>
          <p><strong>Interfering with opponent's rods.</strong></p>
        </section>
        <section className="section">
          <h2 className="section-title">Tips for Success</h2>
          <p>Play fair, stay sharp, and enjoy the game!</p>
        </section>
      </div>
    </div>
  );
};

export default FoosballRules;
