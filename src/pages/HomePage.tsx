// src/pages/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container" style={{
      paddingTop: '2rem',
      paddingBottom: '2rem',
      textAlign: 'center' // Center align top-level text elements if not overridden
    }}>
      <header style={{ marginBottom: '40px', maxWidth: '750px', margin: '0 auto 40px auto' }}>
        <h1 style={{
          fontSize: 'clamp(2.2em, 6vw, 3.8em)',
          margin: '0 0 15px 0',
          lineHeight: '1.2'
        }}>
          Higher Ed Management Course
        </h1>
        <p style={{
          fontSize: 'clamp(1.1em, 3vw, 1.4em)',
          maxWidth: '700px',
          margin: '0 auto' // Center the paragraph
        }}>
          Navigating the Future of Education Leadership & Innovation
        </p>
      </header>

      <main>
        <div className="card"> {/* Welcome card */}
          <h2 style={{
            fontSize: 'clamp(1.6em, 4.5vw, 2.4em)',
            marginBottom: '25px'
          }}>
            Welcome Aboard!
          </h2>
          <p style={{
            fontSize: 'clamp(1em, 2.5vw, 1.15em)',
            lineHeight: '1.75',
            marginBottom: '20px',
            textAlign: 'left' // Align text left within the card
          }}>
            This site is undergoing a fresh rebuild to provide an enriched and streamlined learning experience.
            Explore the course content and resources.
          </p>
          <p style={{
            fontSize: 'clamp(1em, 2.5vw, 1.15em)',
            lineHeight: '1.75',
            textAlign: 'left' // Align text left within the card
          }}>
            Please check back soon for exciting developments, course modules, and resources!
          </p>
        </div>

        {/* Meet Your Instructor Section */}
        <section className="instructor-section card" style={{ textAlign: 'left', marginTop: '3rem' }}>
          <h2>Meet Your Instructor</h2>
          <h3>Dr. Mohamad Aoude</h3>
          <p>
            Welcome! I'm Dr. Mohamad Aoude, Associate Professor and strategic advisor with over two decades of experience in higher education leadership, academic quality assurance, and technology integration. I hold a Ph.D. in Telecommunications from Telecom ParisTech, and a Master’s in International Relations from RUDN University. My career spans roles as department chair, accreditation consultant, curriculum developer, and university professor across Lebanon, France, and the Middle East.
          </p>
          <p>
            I’ve led multiple institutional accreditation efforts (CTI, ABET, EVALAG), managed academic departments, and trained hundreds of professionals in leadership, innovation, and strategic planning. My passion lies in helping institutions and individuals navigate the evolving landscape of higher education with agility, foresight, and innovation.
          </p>
          <p>
            I’m excited to guide you through this journey in <strong>Higher Ed Management: Navigating the Future of Education Leadership & Innovation</strong> — and to help you develop the skills to lead, adapt, and thrive in today’s dynamic academic world.
          </p>
          <p>
            Let’s get started!
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;