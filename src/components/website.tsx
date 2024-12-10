import React from 'react';
import './website.css';

const WebsiteAboutSection = () => {
  return (
    <div className="website-app">
      <header className="website-header">
        <div className="website-back-button-container">
          <a href="/Home" className="website-back-button">
            <img src='/back-arrow.svg' alt='Back' />
          </a>
        </div>
        <h1>Web Integration</h1>
      </header>

      <div className="website-container">
        <h2 className="website-section-title">Introduction</h2>
        <ul className="website-list">
          <li className="website-list-item">
            We are dedicated to creating dynamic and innovative web solutions for the section.
          </li>
        </ul>

        <h2 className="website-section-title">Mission</h2>
        <ul className="website-list">
          <li className="website-list-item">
            Our mission is to enhance user experience and provide seamless navigation across all our web applications.
          </li>
        </ul>

        <h2 className="website-section-title">Design & Layout</h2>
        <ul className="website-list">
          <li className="website-list-item">
            We focus on responsive design and a consistent layout, ensuring that all content is easily accessible across devices.
          </li>
        </ul>

        <h2 className="website-section-title">Functionality</h2>
        <ul className="website-list">
          <li className="website-list-item">
            Interactive features such as sliders, modals, and smooth navigation are incorporated for an engaging experience.
          </li>
        </ul>

        <h2 className="website-section-title">Performance</h2>
        <ul className="website-list">
          <li className="website-list-item">
            Optimization for fast load times and smooth performance is a top priority in all our projects.
          </li>
        </ul>

        <h2 className="website-section-title">Content & Accessibility</h2>
        <ul className="website-list">
          <li className="website-list-item">
            Clear and concise content with WCAG-compliant accessibility features, including alt text and keyboard navigation.
          </li>
        </ul>

        <a href="/Home" className="website-back-button">Back</a>
      </div>
    </div>
  );
};

export default WebsiteAboutSection;
