// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SyllabusPage from './pages/SyllabusPage';
import Module1Page from './pages/Module1Page';
import Module1Session1SlidesPage from './pages/Module1Session1SlidesPage'; // Import slides page
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

const App: React.FC = () => {
  return (
    <> {/* Using a Fragment as the Router will be in main.tsx */}
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Navigation />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}> {/* Wrapper for main content area */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/module/1" element={<Module1Page />} />
          <Route path="/module/1/session/1/slides" element={<Module1Session1SlidesPage />} /> {/* Route for slides */}
        </Routes>
      </div>
      <footer style={{
        backgroundColor: '#1c3d72', // Deep blue
        color: '#e0e7ff', // Light blueish text
        padding: '1.5rem',
        textAlign: 'center',
        marginTop: 'auto' // Pushes footer to bottom if content is short
      }}>
        <p>© 2025 maoude. All rights reserved. Higher Ed Management Course.</p>
      </footer>
    </>
  );
};

export default App;
