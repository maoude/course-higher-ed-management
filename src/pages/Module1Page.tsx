// src/pages/Module1Page.tsx
import React from 'react';

const Module1Page: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <header className="page-header">
        <h1>Module 1: Foundations of Institutional Higher Education Management</h1>
      </header>

      <div className="content-section animate-on-scroll">
        <p><strong>Duration:</strong> 1 Week (2 Sessions)</p>
        <h3>Overall Module Learning Outcomes</h3>
        <p>Upon completing this module, students will be able to:</p>
        <ul>
          <li>Trace the historical development of higher education institutions in the U.S. and globally.</li>
          <li>Differentiate between various types of higher education institutions and their distinct missions.</li>
          <li>Identify the core functions and societal responsibilities of contemporary colleges and universities.</li>
          <li>Explain fundamental organizational theories and how they apply to the unique context of higher education.</li>
          <li>Recognize the key internal and external environmental factors influencing higher education management.</li>
        </ul>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Session 1: The Landscape and Legacy of Higher Education</h3>
        <p><strong>Topics Covered:</strong></p>
        <ul>
          <li>Historical Perspectives on Higher Education (Global and U.S. focus).</li>
          <li>The Evolving Role of Higher Education in Society.</li>
          <li>The American Higher Education System: An Overview.</li>
          <li>Types of Institutions and Their Missions.</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <a href="#/module/1/session/1/slides" className="font-semibold animated-underline">
            View Session 1 Slides
            <span className="module-link-icon" aria-hidden="true"> 📰</span>
          </a>
          <span style={{ margin: '0 1rem' }}>|</span>
          <a href="#/module/1/session/1/lecture" className="font-semibold animated-underline">
            View Session 1 Lecture Notes
            <span className="module-link-icon" aria-hidden="true"> 📝</span>
          </a>
        </p>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Session 2: Organizing for Success - Theories, Players, and Challenges</h3>
        <p><strong>Topics Covered:</strong></p>
        <ul>
          <li>Introduction to Organizational Theory and its application to Higher Education.</li>
          <li>The Academic Profession: Roles, responsibilities, and evolving nature of faculty.</li>
          <li>Key Internal and External Stakeholders.</li>
          <li>Introduction to Case Study 1: "Understanding Institutional Identity and Mission."</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <a href="#/module/1/session/2/slides" className="font-semibold animated-underline">
            View Session 2 Slides
            <span className="module-link-icon" aria-hidden="true"> 📰</span>
          </a>
          <span style={{ margin: '0 1rem' }}>|</span>
          <a href="#/module/1/session/2/lecture" className="font-semibold animated-underline">
            View Session 2 Lecture Notes
            <span className="module-link-icon" aria-hidden="true"> 📝</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Module1Page;