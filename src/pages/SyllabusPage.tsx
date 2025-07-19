// src/pages/SyllabusPage.tsx
import React from 'react';

const SyllabusPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <header className="page-header">
        <h1>Syllabus: Managing Institutional Higher Education</h1>
      </header>

      <div className="content-section animate-on-scroll">
        <h3>Course Overview</h3>
        <p><strong>Course Title:</strong> Managing Institutional Higher Education</p>
        <p>
          <strong>Course Description:</strong><br />
          This undergraduate course provides a comprehensive introduction to the multifaceted world of managing institutional higher education. It is designed to equip aspiring and current academic leaders, administrators, and policy makers with a foundational understanding of the complex structures, processes, and challenges inherent in contemporary colleges and universities. The curriculum delves into four critical pillars of higher education management: governance, finance, student affairs, and strategic planning. Students will explore the historical context, theoretical underpinnings, and practical applications associated with each of these areas. Emphasis will be placed on how these domains interrelate and influence institutional effectiveness, sustainability, and the overall student experience. Through a series of in-depth modules, readings, discussions, and applied case studies, participants will develop the analytical skills and strategic perspectives necessary to navigate the dynamic landscape of higher education and contribute meaningfully to institutional success. The course will examine the U.S. higher education system primarily, drawing upon established scholarship and best practices to foster a critical understanding of how institutions operate, adapt to change, and strive to fulfill their educational missions in an increasingly complex socio-economic and political environment.
        </p>
        <p>
          <strong>Target Audience:</strong><br />
          This course is tailored for undergraduate students aspiring to careers in university administration, current department heads seeking to broaden their understanding of institutional management, and individuals interested in higher education policy. It is also suitable for professionals in related fields who wish to gain a deeper insight into the operational dynamics of colleges and universities.
        </p>
        <p><strong>Course Level:</strong> Undergraduate</p>
        <p><strong>Course Format:</strong> This is a 10-module online course. Each module will consist of readings, lecture materials (structured around 2 sessions per week), interactive discussions, and a case study assignment designed to apply learned concepts to real-world or simulated higher education scenarios.</p>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Course Learning Objectives</h3>
        <p>Upon successful completion of this course, students will be able to:</p>
        <ul>
          <li>Describe the diverse landscape of higher education institutions, including their various missions, structures, and governance models.</li>
          <li>Analyze the key principles and practices of strategic planning in higher education, including environmental scanning, goal setting, and implementation strategies.</li>
          <li>Understand the fundamentals of financial management in higher education, including revenue sources, budgeting processes, resource allocation models, and financial sustainability challenges.</li>
          <li>Examine the core functions and philosophies of student affairs, including student development theories, the delivery of student support services, and the management of contemporary student issues.</li>
          <li>Evaluate the roles and responsibilities of various stakeholders in higher education governance, including governing boards, administrators, faculty, students, and external bodies.</li>
          <li>Identify and analyze key legal, ethical, and policy issues confronting higher education institutions and their impact on administrative decision-making.</li>
          <li>Apply theoretical concepts of leadership, organizational behavior, and change management to practical challenges in higher education settings.</li>
          <li>Utilize data and assessment strategies to inform decision-making and promote continuous improvement within higher education institutions.</li>
          <li>Develop and articulate solutions to complex problems in higher education management through the analysis of case studies and real-world scenarios.</li>
          <li>Critically assess emerging trends and future challenges in higher education and their implications for institutional management and leadership.</li>
        </ul>
      </div>

      <div className="content-section animate-on-scroll">
        <h3>Course Modules Overview</h3>
        <p>This course is structured into 10 modules. Each module page will provide a detailed plan including topics for two sessions per week, learning activities, and a case study.</p>
        <ul>
          <li>
            <a href="#/module/1" className="animated-underline">
              <strong>Module 1:</strong> Foundations of Institutional Higher Education Management
              <span className="module-link-icon" aria-hidden="true">→</span>
            </a>
          </li>
          <li>
            <a href="#/module/2" className="animated-underline">
              <strong>Module 2:</strong> Governance Structures and Stakeholders in Higher Education
              <span className="module-link-icon" aria-hidden="true">→</span>
            </a>
          </li>
          <li><strong>Module 3:</strong> Strategic Planning in the Institutional Context</li>
          <li><strong>Module 4:</strong> Higher Education Finance and Budgeting</li>
          <li><strong>Module 5:</strong> Resource Allocation and Financial Decision-Making</li>
          <li><strong>Module 6:</strong> Understanding Student Affairs and Student Development</li>
          <li><strong>Module 7:</strong> Legal and Ethical Issues in Higher Education Management</li>
          <li><strong>Module 8:</strong> Leadership, Change Management, and Institutional Culture</li>
          <li><strong>Module 9:</strong> Assessment, Accreditation, and Continuous Improvement</li>
          <li><strong>Module 10:</strong> The Future of Higher Education Management: Trends, Challenges, and Opportunities</li>
        </ul>
      </div>
    </div>
  );
};

export default SyllabusPage;
