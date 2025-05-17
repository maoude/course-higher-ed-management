// D:/dev/higher_edv2/src/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  // Inline styles can be removed if global styles from index.css cover these needs.
  // For example, body background and font-family are set in index.css.
  // The main div here could use a className for more specific styling if needed.
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexGrow: 1, // Make this div take available space
      padding: '20px',
      boxSizing: 'border-box',
      textAlign: 'center'
    }}>
      <header style={{ marginBottom: '40px', maxWidth: '750px' }}>
        <h1 style={{ 
          // color: '#1c3d72', // Set in index.css h1
          fontSize: 'clamp(2.2em, 6vw, 3.8em)', // Slightly larger for impact
          margin: '0 0 15px 0',
          lineHeight: '1.2'
        }}>
          Higher Ed Management Course
        </h1>
        <p style={{ 
          // color: '#334155', // Set in index.css body/p
          fontSize: 'clamp(1.1em, 3vw, 1.4em)',
          maxWidth: '700px',
          margin: '0 auto' // Center the paragraph if it's narrower than header
        }}>
          Navigating the Future of Education Leadership & Innovation
        </p>
      </header>

      <main className="container" style={{ /* maxWidth: '650px', width: '90%' - handled by .container */ }}> 
        {/* Using a card style for the main content block */}
        <div className="card">
          <h2 style={{ 
            // color: '#1e40af', // Set in index.css h2
            fontSize: 'clamp(1.6em, 4.5vw, 2.4em)', 
            marginBottom: '25px' 
          }}>
            Welcome Aboard!
          </h2>
          <p style={{ 
            // color: '#475569', // Set in index.css p
            fontSize: 'clamp(1em, 2.5vw, 1.15em)', 
            lineHeight: '1.75', // Slightly more line height for readability
            marginBottom: '20px'
          }}>
            This site is undergoing a fresh rebuild to provide an enriched and streamlined learning experience.
            We're starting with this foundational homepage.
          </p>
          <p style={{ 
            // color: '#475569', 
            fontSize: 'clamp(1em, 2.5vw, 1.15em)', 
            lineHeight: '1.75' 
          }}>
            Please check back soon for exciting developments, course modules, and resources!
          </p>
        </div>
      </main>

      <footer style={{ marginTop: 'auto', paddingTop: '40px', paddingBottom: '20px', color: '#6c757d', fontSize: '0.9em', width: '100%' }}>
        <p>&copy; 2025 maoude. All rights reserved.</p>
        <p>Project Restart - Version 2.0</p>
      </footer>
    </div>
  );
};

export default HomePage;