// src/pages/AboutPage.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <header className="page-header">
        <h1>About This Course</h1>
      </header>

      <div className="content-section animate-on-scroll">
        <h3>Course: Higher Ed Management</h3>
        <p>
          <strong>Navigating the Future of Education Leadership & Innovation</strong>
        </p>
        <p>
          This course provides a comprehensive introduction to the multifaceted world of managing institutional higher education. It is designed to equip aspiring and current academic leaders, administrators, and policy makers with a foundational understanding of the complex structures, processes, and challenges inherent in contemporary colleges and universities.
        </p>
        <p>
          Through a series of in-depth modules, readings, discussions, and applied case studies, participants will develop the analytical skills and strategic perspectives necessary to navigate the dynamic landscape of higher education and contribute meaningfully to institutional success.
        </p>
      </div>

      <div className="content-section instructor-section animate-on-scroll">
        <h3>About the Instructor</h3>
        <h4>Dr. Mohamad Aoude</h4>
        <p>
          Welcome! I'm Dr. Mohamad Aoude, Associate Professor and strategic advisor with over two decades of experience in higher education leadership, academic quality assurance, and technology integration. I hold a Ph.D. in Telecommunications from Telecom ParisTech, and a Master’s in International Relations from RUDN University. My career spans roles as department chair, accreditation consultant, curriculum developer, and university professor across Lebanon, France, and the Middle East.
        </p>
        <p>
          I’ve led multiple institutional accreditation efforts (CTI, ABET, EVALAG), managed academic departments, and trained hundreds of professionals in leadership, innovation, and strategic planning. My passion lies in helping institutions and individuals navigate the evolving landscape of higher education with agility, foresight, and innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
