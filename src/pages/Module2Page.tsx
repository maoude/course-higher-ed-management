// src/pages/Module2Page.tsx
import React from 'react';

const Module2Page: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <header className="page-header">
        <h1>Module 2: Governance Structures and Stakeholders in Higher Education</h1>
      </header>

      <div className="content-section animate-on-scroll">
        <p><strong>Duration:</strong> 1 Week (2 Sessions)</p>
        <h3>Overall Module Learning Outcomes</h3>
        <p>Upon completing this module, students will be able to:</p>
        <ul>
            <li>Compare and contrast different models of higher education governance (e.g., shared governance, corporate models).</li>
            <li>Describe the functions and responsibilities of governing boards, institutional leaders (presidents/chancellors), and faculty senates.</li>
            <li>Analyze the influence of various internal and external stakeholders on institutional governance.</li>
            <li>Explain the principles of academic freedom and tenure and their role in governance.</li>
            <li>Evaluate the challenges and complexities of ensuring accountability in higher education governance.</li>
        </ul>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Session 1: Governance Models, Boards, and Leadership Roles</h3>
        <p><strong>Topics Covered:</strong></p>
        <ul>
            <li>Theories and Models of Higher Education Governance.</li>
            <li>Governing Boards: Role, responsibilities, and composition.</li>
            <li>The University Presidency: Leadership roles, powers, and challenges.</li>
            <li>Faculty Governance: Senates, committees, unions, and shared decision-making.</li>
            <li>Academic Freedom and Tenure: Foundations and contemporary issues.</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <a href="#/module/2/session/1/slides" className="font-semibold animated-underline">
            View Session 1 Slides
            <span className="module-link-icon" aria-hidden="true"> 📰</span>
          </a>
          <span style={{ margin: '0 1rem' }}>|</span>
          <a href="#/module/2/session/1/lecture" className="font-semibold animated-underline">
            View Session 1 Lecture Notes
            <span className="module-link-icon" aria-hidden="true"> 📝</span>
          </a>
        </p>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Session 2: Stakeholder Influence, Accountability, and Case Introduction</h3>
        <p><strong>Topics Covered:</strong></p>
        <ul>
            <li>Student Involvement in Governance: Roles, impact, and limitations.</li>
            <li>External Influences: Accreditation, government, donors, alumni.</li>
            <li>Accountability in Higher Education: To whom and for what?</li>
            <li>Introduction to Case Study 2: "Navigating a Governance Crisis."</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <a href="#/module/2/session/2/slides" className="font-semibold animated-underline">
            View Session 2 Slides
            <span className="module-link-icon" aria-hidden="true"> 📰</span>
          </a>
          <span style={{ margin: '0 1rem' }}>|</span>
          <a href="#/module/2/session/2/lecture" className="font-semibold animated-underline">
            View Session 2 Lecture Notes
            <span className="module-link-icon" aria-hidden="true"> 📝</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Module2Page;