import React from "react";
import "./quizzotopia1.css";

const Quizzotopia = () => {
  return (
    <div className="form-container">
      <header className="form-header">
        <h1>🌟 GEN AI Video Submission Form 🌟</h1>
        <p>Unleash Your Creativity with Artificial Intelligence!</p>
      </header>

      {/* <section className="guidelines">
        <h2>📌 Guidelines</h2>
        <ul>
          <li>🎥 <strong>Video Topic:</strong> Create an innovative video using AI tools.</li>
          <li>⏳ <strong>Timeline:</strong>
            <ul>
              <li><strong>Start Date:</strong> 3rd December 2024</li>
              <li><strong>Submission Deadline:</strong> 6th December 2024 by 7:00 PM</li>
            </ul>
          </li>
          <li>🏆 <strong>Selection Criteria:</strong>
            <ul>
              <li><strong>Visual Appeal:</strong> Creativity and aesthetic quality of the video.</li>
              <li><strong>Impactful Content:</strong> Relevance and strength of the message.</li>
              <li><strong>Video Length:</strong> Must not exceed [specific length].</li>
              <li><strong>Innovative Approach:</strong> Use unique ideas and AI tools to enhance storytelling.</li>
            </ul>
          </li>
        </ul>
      </section> */}

      
      <footer className="declaration">
        <h3>📝 Declaration</h3>
        <p>
          By submitting this form, I/we confirm:  
          ✅ The video is an original creation of our class.  
          ✅ All content adheres to the guidelines provided.
        </p>
      </footer>
    </div>
  );
};

export default Quizzotopia;
