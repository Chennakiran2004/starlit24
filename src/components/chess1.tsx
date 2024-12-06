import React from 'react';
import './chess.css';

const ChessCompetitionRules = () => {
  return (
    <div className="containerFreeFire">
      <div className="content">
      <img style={{ width: '48vw' }} src="https://e1.pxfuel.com/desktop-wallpaper/775/699/desktop-wallpaper-chess-black-and-white-chess.jpg" alt="Free Fire Rules" />
      <div>
        <header>
          <h1 className="title">Chess Competition Rules</h1>
        </header>
        <section className="section">
          <h2 className="section-title">Tournament Format</h2>
          <h3>Preliminary Rounds (Round of 14):</h3>
          <p><strong>Mode:</strong> Online matches on Chess.com, within the council premises and council devices.</p>
          <p><strong>Format:</strong> Knockout style.</p>
          <p><strong>Winners:</strong> Winners of the 7 matches will advance to the next round.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Intermediate Rounds</h2>
          <p>Among the 7 qualified teams, one team will be directly sent to the semi-finals based on criteria like time constraint. If time is the same, the team with the highest accuracy wins.</p>
          <p>The remaining 6 teams will play 3 matches on traditional Chess.com to decide 3 winners.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Semifinals</h2>
          <p>The 3 winners from the intermediate round, along with the player already in the semi-finals, will compete in 2 matches on traditional chess boards.</p>
          <p>The winners of these matches will advance to the final round.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Finals</h2>
          <p>The 2 finalists will play the championship match on traditional chess boards.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Platform Guidelines for Online Matches</h2>
          <p><strong>Platform:</strong> Chess.com (participants must have an account).</p>
          <p><strong>Supervision:</strong> Matches will be monitored to ensure fair play.</p>
          <p><strong>Time Control:</strong> Each player will have 15 minutes with no increment.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Tiebreakers</h2>
          <p>In case of a draw, we will arrange a 2-minute (Bullet) match.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Gameplay Rules for Traditional Matches</h2>
          <p>Equipment will be provided such as boards, timers.</p>
          <p>Matches will be conducted offline.</p>
          <p><strong>Time Control:</strong> 10 minutes per player for traditional matches.</p>
          <p>In traditional matches, you will have free time.</p>
        </section>
        <section className="section">
          <h2 className="section-title">General Rules</h2>
          <p><strong>Eligibility:</strong> Only registered players are allowed to participate.</p>
          <p>Online matches will be supervised for any unfair practices, and traditional matches will follow standard chess rules.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Arbiter Role</h2>
          <p>Disputes during online or traditional matches will be resolved by the arbiter, whose decisions are final.</p>
        </section>
      </div>
    </div>
    </div>
  );
};

export default ChessCompetitionRules;
