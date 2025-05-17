import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif',
      background: '#f0f2f5',
      padding: '20px',
      boxSizing: 'border-box',
      textAlign: 'center'
    }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          color: '#1c3d72',
          fontSize: 'clamp(2em, 5vw, 3.5em)',
          margin: '0 0 10px 0',
          fontWeight: 'bold'
        }}>
          Higher Ed Management Course
        </h1>
        <p style={{ 
          color: '#334155',
          fontSize: 'clamp(1em, 2.5vw, 1.3em)',
          maxWidth: '700px'
        }}>
          Navigating the Future of Education Leadership & Innovation
        </p>
      </header>

      <main style={{ 
        background: '#ffffff', 
        padding: 'clamp(20px, 4vw, 40px)',
        borderRadius: '12px', 
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        maxWidth: '650px',
        width: '90%'
      }}>
        <h2 style={{ 
          color: '#1e40af',
          fontSize: 'clamp(1.5em, 4vw, 2.2em)', 
          marginBottom: '25px' 
        }}>
          Welcome Aboard!
        </h2>
        <p style={{ 
          color: '#475569',
          fontSize: 'clamp(0.9em, 2vw, 1.1em)', 
          lineHeight: '1.7',
          marginBottom: '15px'
        }}>
          This site is undergoing a fresh rebuild to provide an enriched and streamlined learning experience.
          We're starting with this foundational homepage.
        </p>
        <p style={{ 
          color: '#475569', 
          fontSize: 'clamp(0.9em, 2vw, 1.1em)', 
          lineHeight: '1.7' 
        }}>
          Please check back soon for exciting developments, course modules, and resources!
        </p>
      </main>

      <footer style={{ marginTop: '60px', color: '#64748b', fontSize: '0.9em' }}>
        <p>&copy; 2025 maoude. All rights reserved.</p>
        <p>Project Restart - Version 2.0</p>
      </footer>
    </div>
  );
};

export default HomePage;
