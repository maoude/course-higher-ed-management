// src/pages/Module1Session2LecturePage.tsx
import React from 'react';
import { module1Session2Lecture } from '../data/Module1Session2LectureData';

const Module1Session2LecturePage: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="content-section animate-on-scroll">
        <header className="page-header">
          <h1>{module1Session2Lecture.title}</h1>
        </header>
        <div
          className="lecture-content"
          dangerouslySetInnerHTML={{ __html: module1Session2Lecture.content }}
        />
        <div style={{ textAlign: 'center', padding: '20px 0', marginTop: '2rem', borderTop: '1px solid var(--border-default)' }}>
          <a href="#/module/1" className="button">Back to Module 1 Overview</a>
        </div>
      </div>
    </div>
  );
};

export default Module1Session2LecturePage;