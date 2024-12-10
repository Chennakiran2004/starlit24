import React from 'react';
import './openmic.css';

const OpenMicEventGuidelines = () => {
  return (
    <div className="openmic-app">
      <header className="openmic-header">
        <div className="openmic-back-button-container">
          <a href="/Home" className="openmic-back-button">
            <img src='/back-arrow.svg' alt='Back'/>
          </a>
        </div>
        <h1>Open Mic Event Guidelines</h1>
      </header>

      <div className="openmic-container">
        <h2 className="openmic-section-title">Event Details</h2>
        <ul className="openmic-list">
          <li className="openmic-list-item"><strong style={{marginRight:"5px"}} >Date:</strong> 09/12/2024</li>
          <li className="openmic-list-item"><strong style={{marginRight:"5px"}} >Time:</strong> 5:00 PM to 7:00 PM</li>
          <li className="openmic-list-item"><strong style={{marginRight:"5px"}} >Venue:</strong> NIAT Campus</li>
        </ul>

        <h2 className="openmic-section-title">Guidelines for Participants</h2>

        <h3 className="openmic-subsection-title">General Guidelines</h3>
        <ul className="openmic-list">
          <li className="openmic-list-item"><strong style={{marginRight:"5px"}} >Sign-Up:</strong> Performers must sign up in advance or at the event (limited spots available). Sign-ups are on a first-come, first-served basis.</li>
          <li className="openmic-list-item"><strong style={{marginRight:"5px"}} >Performance Time:</strong> Each performer will have 8 minutes to present, including any setup and takedown.</li>
          <li className="openmic-list-item"><strong style={{marginRight:"5px"}} >Respectful Content:</strong> Performances must be free of discriminatory, offensive, or harmful language. Be mindful of sensitive topics.</li>
          <li className="openmic-list-item"><strong style={{marginRight:"5px"}} >Audience Etiquette:</strong> Respect all performers by listening attentively. Disruptive behavior will not be tolerated.</li>
        </ul>

        <h3 className="openmic-subsection-title">Category-Specific Guidelines</h3>
        
        <h4 className="openmic-subcategory-title">Singing</h4>
        <ul className="openmic-list">
          <li className="openmic-list-item">Perform in any language.</li>
          <li className="openmic-list-item">Backing tracks are allowed (please bring them on a USB or email in advance).</li>
        </ul>

        <h4 className="openmic-subcategory-title">Poetry</h4>
        <ul className="openmic-list">
          <li className="openmic-list-item">Perform in any language.</li>
          <li className="openmic-list-item">Ensure your performance is clear and within the time limit.</li>
          <li className="openmic-list-item">Minimal equipment is needed unless specified during sign-up.</li>
        </ul>

        <h4 className="openmic-subcategory-title">Stand-Up Comedy</h4>
        <ul className="openmic-list">
          <li className="openmic-list-item">Original material only.</li>
          <li className="openmic-list-item">Keep content light-hearted and fun, avoiding offensive jokes or stereotypes.</li>
        </ul>

        <h3 className="openmic-subsection-title">Other Talents</h3>
        <ul className="openmic-list">
          <li className="openmic-list-item">Other talents are encouraged too.</li>
        </ul>

        <h2 className="openmic-section-title">Important Notice</h2>
        <ul className="openmic-list">
          <li className="openmic-list-item">All performers are encouraged to practice their pieces in advance to ensure they fit within the allotted time.</li>
        </ul>
      </div>
    </div>
  );
};

export default OpenMicEventGuidelines;
