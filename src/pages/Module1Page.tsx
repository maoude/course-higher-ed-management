// src/pages/Module1Page.tsx
import React from 'react';
import { Link } from 'react-router-dom'; 

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
          <li>Differentiate between various types of higher education institutions (e.g., public, private, research, liberal arts, community colleges) and their distinct missions.</li>
          <li>Identify the core functions and societal responsibilities of contemporary colleges and universities.</li>
          <li>Explain fundamental organizational theories and how they apply to the unique context of higher education institutions.</li>
          <li>Recognize the key internal and external environmental factors influencing higher education management.</li>
        </ul>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Session 1: The Landscape and Legacy of Higher Education</h3>
        <p><strong>Topics Covered:</strong></p>
        <ul>
          <li>Historical Perspectives on Higher Education (Global and U.S. focus).</li>
          <li>The Evolving Role of Higher Education in Society (Economic, Social, Cultural contributions and expectations).</li>
          <li>The American Higher Education System: An Overview of its structure, scale, and diversity.</li>
          <li>Types of Institutions and Their Missions (e.g., Public Research Universities, Private Liberal Arts Colleges, Community Colleges, For-Profit Institutions, Minority-Serving Institutions).</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/module/1/session/1/slides" className="font-semibold animated-underline">
            View Session 1 Lecture Slides
            <span className="module-link-icon" aria-hidden="true"> 📰</span> 
          </Link>
        </p>
        <p><strong>Learning Activities & Exercises (to be completed between Session 1 and Session 2):</strong></p>
        <ol>
          <li><strong>Reading Assignment:</strong> Access and read provided articles/book excerpts detailing the history of higher education, its evolving societal functions, and the diverse landscape of U.S. institutions. (Specific readings to be listed in the Learning Management System - LMS).</li>
          <li><strong>Interactive Timeline & Profile Exploration:</strong> Engage with a curated interactive online timeline highlighting key milestones in higher education history. Additionally, review detailed web-based profiles or short video spotlights of 2-3 distinct types of higher education institutions, noting their mission statements and primary characteristics.</li>
          <li><strong>Discussion Forum 1 - Initial Post:</strong> "Based on the Session 1 topics and your exploration, select one historical development OR one specific type of higher education institution. Discuss its significance and lasting impact on the contemporary higher education landscape. For institutional types, compare and contrast its mission with another type (approx. 300-350 words)." (Post due before Session 2).</li>
        </ol>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Session 2: Organizing for Success - Theories, Players, and Challenges</h3>
        <p><strong>Topics Covered:</strong></p>
        <ul>
          <li>Introduction to Organizational Theory and its application to Higher Education Institutions (e.g., Bureaucracy, Collegium, Political Systems, Organized Anarchy, Institutional Theory).</li>
          <li>The Academic Profession: Roles, responsibilities, and evolving nature of faculty.</li>
          <li>Key Internal and External Stakeholders and Environmental Factors influencing higher education management.</li>
          <li>Introduction to Case Study 1: "Understanding Institutional Identity and Mission."</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/module/1/session/2/slides" className="font-semibold animated-underline">
            View Session 2 Lecture Slides
            <span className="module-link-icon" aria-hidden="true"> 📰</span> 
          </Link>
        </p>
        <p><strong>Learning Activities & Exercises (to be completed after Session 2):</strong></p>
        <ol>
          <li><strong>Reading Assignment:</strong> Review materials on fundamental organizational theories as applied to university settings, and the roles of various stakeholders. (Specific readings in LMS).</li>
          <li><strong>Mini-Lecture Video (Asynchronous):</strong> Watch a recorded lecture (15-20 minutes) by the instructor explaining how different organizational theories provide lenses for understanding university structures and decision-making processes.</li>
          <li><strong>Activity - Theory/Stakeholder Application:</strong> "Select one organizational theory discussed. Think of a higher education institution you are familiar with. In a short written reflection (approx. 200-250 words), describe specific examples of how elements of this chosen theory are visible OR identify two key stakeholders for that institution and describe their primary interests and potential influence." (Submit via LMS assignment tool).</li>
          <li><strong>Discussion Forum 1 - Peer Responses:</strong> Respond to at least two classmates’ initial posts in Discussion Forum 1, offering further insights or respectfully challenging their perspectives.</li>
          <li><strong>Case Study 1 - Initial Analysis:</strong> Access and carefully read the full Case Study 1 document ("Understanding Institutional Identity and Mission"), which will present a scenario of a specific higher education institution, its history, mission, characteristics, and a current challenge related to its identity. Review the guiding questions and rubric. Begin your individual analysis.</li>
        </ol>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Case Study 1: Understanding Institutional Identity and Mission</h3>
        <ul>
          <li><strong>Structure & Content (as previously detailed, adapted for weekly submission):</strong>
            <ul>
              <li>The case study will be a 2-4 page narrative describing a fictional higher education institution (e.g., "Midvale State University").</li>
              <li><strong>Content will include:</strong> Founding History & Original Mission, Current Institutional Type & Profile, Stated Mission & Values, Organizational Characteristics, The Challenge/Dilemma.</li>
            </ul>
          </li>
          <li><strong>Administration & Guiding Questions for Analysis (as previously detailed):</strong>
            <ul>
              <li>Guiding Questions will prompt students to analyze the institution's mission, characteristics, conduct a SWOT, articulate the dilemma, and propose strategic considerations.</li>
            </ul>
          </li>
          <li><strong>Submission:</strong> A written analysis (target length: 1000-1500 words) to be submitted electronically via the LMS by the end of the week (e.g., Sunday evening, before the next module begins).</li>
          <li><strong>Grading:</strong> A detailed rubric will assess the application of Module 1 concepts, analytical depth, clarity, and professionalism.</li>
        </ul>
      </div>
    </div>
  );
};

export default Module1Page;
