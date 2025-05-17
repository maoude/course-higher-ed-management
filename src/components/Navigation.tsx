// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav style={{
      backgroundColor: '#1c3d72', // Deep blue
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <li>
          <Link to="/" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={e => e.currentTarget.style.color = '#e0e7ff'}
          onMouseOut={e => e.currentTarget.style.color = '#ffffff'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/syllabus" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={e => e.currentTarget.style.color = '#e0e7ff'}
          onMouseOut={e => e.currentTarget.style.color = '#ffffff'}
          >
            Syllabus
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;