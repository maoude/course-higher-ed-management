// src/pages/Module1Session1LecturePage.tsx
import React from 'react';
import { module1Session1Lecture } from '../data/Module1Session1LectureData';

const Module1Session1LecturePage: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="content-section animate-on-scroll">
        <header className="page-header">
          <h1>{module1Session1Lecture.title}</h1>
        </header>
        <div
          className="lecture-content"
          dangerouslySetInnerHTML={{ __html: module1Session1Lecture.content }}
        />
        <div style={{ textAlign: 'center', padding: '20px 0', marginTop: '2rem', borderTop: '1px solid var(--border-default)' }}>
          <a href="#/module/1" className="button">Back to Module 1 Overview</a>
        </div>
      </div>
    </div>
  );
};

export default Module1Session1LecturePage;