// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SyllabusPage from './pages/SyllabusPage';
import Module1Page from './pages/Module1Page';
import Module1Session1SlidesPage from './pages/Module1Session1SlidesPage';
import Module1Session2SlidesPage from './pages/Module1Session2SlidesPage';
import Module1Session1LecturePage from './pages/Module1Session1LecturePage';
import Module1Session2LecturePage from './pages/Module1Session2LecturePage';
import Module2Page from './pages/Module2Page';
import Module2Session1SlidesPage from './pages/Module2Session1SlidesPage';
import Module2Session2SlidesPage from './pages/Module2Session2SlidesPage';
import Module2Session1LecturePage from './pages/Module2Session1LecturePage';
import Module2Session2LecturePage from './pages/Module2Session2LecturePage';
import ScrollToTop from './components/ScrollToTop';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const App: React.FC = () => {
  useScrollAnimation();

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          
          {/* Module 1 Routes */}
          <Route path="/module/1" element={<Module1Page />} />
          <Route path="/module/1/session/1/slides" element={<Module1Session1SlidesPage />} />
          <Route path="/module/1/session/1/lecture" element={<Module1Session1LecturePage />} />
          <Route path="/module/1/session/2/slides" element={<Module1Session2SlidesPage />} />
          <Route path="/module/1/session/2/lecture" element={<Module1Session2LecturePage />} /> {/* CORRECTED ROUTE */}
          
          {/* Module 2 Routes */}
          <Route path="/module/2" element={<Module2Page />} />
          <Route path="/module/2/session/1/slides" element={<Module2Session1SlidesPage />} />
          <Route path="/module/2/session/1/lecture" element={<Module2Session1LecturePage />} />
          <Route path="/module/2/session/2/slides" element={<Module2Session2SlidesPage />} />
          <Route path="/module/2/session/2/lecture" element={<Module2Session2LecturePage />} />
        </Routes>
      </div>
      <footer style={{
        backgroundColor: 'var(--clr-accent)',
        color: 'var(--clr-text-on-dark)',
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