// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SyllabusPage from './pages/SyllabusPage';
// Import ModulePage later when you create it
// import ModulePage from './pages/ModulePage';

const App: React.FC = () => {
  return (
    <> {/* Using a Fragment as the Router will be in main.tsx */}
      <Navigation />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}> {/* Wrapper for main content area */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          {/* Example for ModulePage when you add it:
          <Route path="/modules/:moduleId" element={<ModulePage />} />
          */}
        </Routes>
      </div>
      <footer style={{
        backgroundColor: '#1c3d72', // Deep blue
        color: '#e0e7ff', // Light blueish text
        padding: '1.5rem',
        textAlign: 'center',
        marginTop: 'auto' // Pushes footer to bottom if content is short
      }}>
        <p>&copy; 2025 maoude. All rights reserved. Higher Ed Management Course.</p>
      </footer>
    </>
  );
};

export default App;
