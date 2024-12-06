import React from 'react';
import './tabletennis.css';

const TableTennisRules = () => {
  return (
    <div className="tabelcon">
      <div className="content">
        <header>
          <h1 className="title">Table Tennis Rules</h1>
        </header>
        <section className="section">
          <h2 className="section-title">Objective</h2>
          <p>Score points by hitting the ball over the net so that it bounces on the opponent's side without them returning it.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Setup</h2>
          <p><strong>Players:</strong> Doubles (2v2).</p>
          <p><strong>Table:</strong> Divided by a net, with each side having a paddle and ball.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Gameplay</h2>
          <p><strong>Serve:</strong> The ball must bounce on your side first and then the opponent's.</p>
          <p><strong>Rally:</strong> Players hit the ball back and forth until one fails to return it or hits it out of bounds.</p>
          <p><strong>Scoring:</strong> Points are earned when the opponent misses the return, hits it outside the table, or fails to serve properly.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Winning</h2>
          <p>First to 11 points wins a game. A match is usually best of 5 or 7 games.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Fouls</h2>
          <p>Double hitting, serving out of turn, or letting the ball hit the body.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Tips</h2>
          <p>Focus on consistency and placement.</p>
          <p>Practice different spins for better control.</p>
          <p>Play with precision and have fun!</p>
        </section>
      </div>
    </div>
  );
};

export default TableTennisRules;
