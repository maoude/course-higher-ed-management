// src/pages/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container" style={{
      paddingTop: '2rem',
      paddingBottom: '2rem',
      textAlign: 'center'
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
          margin: '0 auto'
        }}>
          Navigating the Future of Education Leadership & Innovation
        </p>
      </header>

      <main>
        <div className="card">
          <h2 style={{
            fontSize: 'clamp(1.6em, 4.5vw, 2.4em)',
            marginBottom: '25px'
          }}>
            Welcome Aboard!
          </h2>
          <p style={{
            fontSize: 'clamp(1em, 2.5vw, 1.15em)',
            lineHeight: '1.75',
            marginBottom: '20px'
          }}>
            This site is undergoing a fresh rebuild to provide an enriched and streamlined learning experience.
            Explore the course content and resources.
          </p>
          <p style={{
            fontSize: 'clamp(1em, 2.5vw, 1.15em)',
            lineHeight: '1.75'
          }}>
            Please check back soon for exciting developments, course modules, and resources!
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;