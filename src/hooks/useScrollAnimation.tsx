// src/hooks/useScrollAnimation.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollAnimation = () => {
  const location = useLocation(); // Get current location

  useEffect(() => {
    // Delay slightly to ensure new page elements are in the DOM after route change
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');

      if (revealElements.length === 0) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1, // Trigger when 10% of the element is visible
        }
      );

      revealElements.forEach(el => observer.observe(el));

      // Cleanup function for this effect instance
      return () => {
        revealElements.forEach(el => {
          // Check if element still exists before trying to unobserve
          // This might be overly cautious if elements are simply hidden/shown
          // but good if elements are truly removed from DOM on route change
          if (document.body.contains(el)) {
             observer.unobserve(el);
          }
        });
        observer.disconnect();
      };
    }, 50); // Small delay (e.g., 50ms) to allow DOM updates

    return () => clearTimeout(timer); // Clear timeout if component unmounts or location changes before timeout

  }, [location.pathname]); // Re-run the effect when the pathname changes
};
