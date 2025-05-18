// src/pages/Module1Session2SlidesPage.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { module1Session2Slides, Slide } from '../data/Module1Session2SlideData'; // Import Session 2 data

const Module1Session2SlidesPage: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate();

  const totalSlides = module1Session2Slides.length;
  const currentSlide: Slide | undefined = module1Session2Slides[currentSlideIndex];

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPreviousSlide();
      } else if (event.key === 'Escape') {
        navigate('/module/1'); // Navigate back to Module 1 page on Escape
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPreviousSlide, navigate]);

  if (!currentSlide) {
    return <div className="container">Slide data not found for Session 2.</div>;
  }

  return (
    <div className="slideshow-container">
      <div className="slide-content-wrapper">
        <header className="slide-header">
          <h1 className="slide-title">{currentSlide.title}</h1>
          {currentSlide.subtitle && <h2 className="slide-subtitle">{currentSlide.subtitle}</h2>}
        </header>
        <div
          className="slide-actual-content"
          dangerouslySetInnerHTML={{ __html: currentSlide.content }}
        />
      </div>
      <div className="slideshow-controls">
        <button onClick={goToPreviousSlide} disabled={currentSlideIndex === 0}>
          ← Previous
        </button>
        <span className="slide-indicator">
          Slide {currentSlideIndex + 1} of {totalSlides}
        </span>
        <button onClick={goToNextSlide} disabled={currentSlideIndex === totalSlides - 1}>
          Next →
        </button>
      </div>
       <div style={{ textAlign: 'center', padding: '10px', background: '#e9ecef' }}>
        <Link to="/module/1" style={{ fontSize: '0.9rem' }}>Back to Module 1 Overview</Link>
      </div>
    </div>
  );
};

export default Module1Session2SlidesPage;