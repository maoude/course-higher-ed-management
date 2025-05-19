// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SyllabusPage from './pages/SyllabusPage';
import Module1Page from './pages/Module1Page';
import Module1Session1SlidesPage from './pages/Module1Session1SlidesPage';
import Module1Session2SlidesPage from './pages/Module1Session2SlidesPage'; // Import Session 2 slides page
import ScrollToTop from './components/ScrollToTop';
import { useScrollAnimation } from './hooks/useScrollAnimation'; // Import the scroll animation hook

const App: React.FC = () => {
  useScrollAnimation(); // Call the hook to enable scroll animations

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/module/1" element={<Module1Page />} />
          <Route path="/module/1/session/1/slides" element={<Module1Session1SlidesPage />} />
          <Route path="/module/1/session/2/slides" element={<Module1Session2SlidesPage />} /> {/* Route for Session 2 slides */}
        </Routes>
      </div>
      <footer style={{
        backgroundColor: 'var(--clr-accent)', // Use CSS Variable
        color: 'var(--clr-text-on-dark)',   // Use CSS Variable
        padding: '1.5rem',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <p>© 2025 maoude. All rights reserved. Higher Ed Management Course.</p>
      </footer>
    </>
  );
};

export default App;