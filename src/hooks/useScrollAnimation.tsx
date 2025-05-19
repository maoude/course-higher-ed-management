// src/hooks/useScrollAnimation.tsx
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.animate-on-scroll');

    if (revealElements.length === 0) {
      return; // No elements to observe
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Optional: stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        // rootMargin: '0px 0px -50px 0px' // Optional: adjust trigger point
      }
    );

    revealElements.forEach(el => observer.observe(el));

    return () => { // Cleanup function
      revealElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once on mount
};
