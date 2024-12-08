import React from 'react';
import './quizzotopia1.css';

const QuizCompetitionDetails = () => {
  return (
    <div className="quiz-app">
      <header className="quiz-header">
        <div className="quiz-back-button-container">
          <a href="/Home" className="quiz-back-button">
            <img src='/back-arrow.svg' alt='Back'/>
          </a>
        </div>
        <h1>Inter-Section Quiz Competition Details</h1>
      </header>

      <div className="quiz-container">
        <h2 className="quiz-section-title">Event Information</h2>
        <ul className="quiz-list">
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Event Name:</strong> Inter-Section Quiz Competition</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Date of Event:</strong> 📅 9-12-24;</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Venue:</strong> 📍 kapil Kavuri hub</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Time:</strong> ⏰ 2:ooPM</li>
        </ul>

        <h2 className="quiz-section-title">Overview</h2>
        <ul className="quiz-list">
          <li className="quiz-list-item">The quiz competition will feature 14 sections, each represented by a team of 5 members.</li>
          <li className="quiz-list-item">The competition will consist of 3 rounds, with 15 questions per round.</li>
          <li className="quiz-list-item">Each question carries 1️⃣ point.</li>
        </ul>

        <h2 className="quiz-section-title">Rules and Format</h2>
        <ul className="quiz-list">
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Teams:</strong> Teams answer questions directly on the platform. Points are awarded for correct answers.</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Live Updates:</strong> Scores are updated live, with rankings displayed throughout the quiz.</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Categories:</strong> Questions will cover a variety of topics, including:</li>
          <li className="quiz-list-item">Technology 💻</li>
          <li className="quiz-list-item">History 📖</li>
          <li className="quiz-list-item">Geography 🌍</li>
          <li className="quiz-list-item">Sports 🏀</li>
        </ul>

        <h2 className="quiz-section-title">Time Limit & Scoring</h2>
        <ul className="quiz-list">
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Time Limit:</strong> A 1-minute time limit will be enforced for each question.</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Scoring:</strong> Each correct answer earns 1️⃣ point.</li>
        </ul>

        <h2 className="quiz-section-title">Code of Conduct</h2>
        <ul className="quiz-list">
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Behavioral Guidelines:</strong> Respect fellow participants and maintain discipline during the competition. 🤝</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Team Conduct:</strong> Team members should refrain from discussing or prompting answers during a question.</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Prohibited Actions:</strong> Any actions that go against the integrity of the quiz will be penalized:</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Answering from Outside Participants:</strong> If anyone from the audience or outside the participating teams shouts an answer 🗣️, the respective team's section will face a score deduction ❌.</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Use of Unauthorized Assistance:</strong> Accessing platforms like Google 🌐 or ChatGPT 🤖 during the quiz:</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>First Offense:</strong> The team will receive a warning ⚠️.</li>
          <li className="quiz-list-item"><strong style={{marginRight:"9px"}}>Repeat Offense:</strong> The team will be disqualified 🛑.</li>
        </ul>

        <h2 className="quiz-section-title">Note for Participants</h2>
        <ul className="quiz-list">
          <li className="quiz-list-item">Be punctual ⏰ and ready for the event.</li>
          <li className="quiz-list-item">Follow the rules and instructions provided by the quizmaster 🎙️.</li>
          <li className="quiz-list-item">Enjoy the competition while upholding the spirit of fair play and learning 🌟.</li>
        </ul>
      </div>
    </div>
  );
};

export default QuizCompetitionDetails;
