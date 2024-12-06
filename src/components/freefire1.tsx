import React from 'react';
import './freefire1.css';

const FreeFireRules = () => {
  return (
    <div className="container">
      <div className="content">
        <header>
          <h1 className="title">Free Fire Clash Squad Rules</h1>
        </header>
        <section className="section">
          <h2 className="section-title">Objective</h2>
          <p>Eliminate the opposing team.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Teams and Setup</h2>
          <p><strong>Teams:</strong> Two teams of 4 players each.</p>
          <p><strong>Rounds:</strong> Each round starts with random weapons. Players can buy gear using earned money.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Winning a Round</h2>
          <p>Eliminate all players on the opposing team or complete the objective (e.g., using the given weapons).</p>
        </section>
        <section className="section">
          <h2 className="section-title">Economy System</h2>
          <p>Earn money through kills and surviving rounds. Use it to buy weapons, armor, and utilities.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Key Gameplay Rules</h2>
          <p>Breaking the glowwall’s is strictly prohibited.</p>
          <p>Grenade’s, flashbangs, smokegrenades should not be used.</p>
          <p>Character skills and gun attributes are not allowed.</p>
          <p>Unlimited ammo will be provided.</p>
          <p>Pet skills and loadouts are allowed.</p>
          <p>If in case of malpractices, the corresponding teams will be disqualified.</p>
        </section>
        <section className="section">
          <h2 className="section-title">Tips for Success</h2>
          <p>Communicate with your team to coordinate strategies.</p>
          <p>Adapt to random weapon loadouts.</p>
          <p>Manage resources wisely for the best chance of victory.</p>
          <p>Enjoy the fast-paced action and strategic gameplay!</p>
        </section>
      </div>
    </div>
  );
};

export default FreeFireRules;
