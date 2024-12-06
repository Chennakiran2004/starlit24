import React from 'react';
import './carroms.css';

const CarromCompetitionRules = () => {
  return (
    <div className="containerFreeFire">
    <div className="content">
    <img style={{ width: '48vw' }} src="https://i.ibb.co/HNWPPX3/istockphoto-484864454-612x612.jpg" alt="Free Fire Rules" />
    <div>
        <header>
          <h1 className="title">Carrom Competition Rules</h1>
        </header>
        <section className="section">
          <h2 className="section-title">Objective</h2>
          <p>Score the highest points by pocketing carrom men (white, black) and the queen.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Scoring System</h2>
          <p><strong>White Carrom Man:</strong> 2 points each.</p>
          <p><strong>Black Carrom Man:</strong> 1 point each.</p>
          <p><strong>Red Coin:</strong> 5 points (must be claimed correctly).</p>
          <p>The team with the highest total points wins.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Game Basics</h2>
          <p><strong>Players:</strong> Doubles (Two teams, with partners sitting opposite each other).</p>
          <p><strong>Turns:</strong> Use the striker to pocket your carrom men.</p>
          <p>The striker must stay within the baseline during shots.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Red Coin Rules</h2>
          <p>Can be pocketed at any time but must be followed immediately by one of your carrom men to claim it.</p>
          <p>If not claimed correctly, the queen is returned to the center.</p>
          <p>The queen cannot be pocketed last.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Fouls</h2>
          <p><strong>Pocketing the striker</strong> or opponent’s carrom men.</p>
          <p><strong>Failing to strike any carrom men.</strong></p>
          <p><strong>Penalty:</strong> One of your pocketed carrom men is placed back at the center.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Winning Criteria</h2>
          <p>The team with the most points after all carrom men and the queen are pocketed wins the game.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Tips for Success</h2>
          <p>Aim with precision to maximize your points.</p>
          <p>Plan strategically to block opponents and secure the queen for maximum score.</p>
          <p>Enjoy the game and aim for victory!</p>
        </section>
      </div>
    </div>
    </div>

  );
};

export default CarromCompetitionRules;
