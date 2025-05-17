// D:/dev/higher_edv2/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import the global CSS file
import { HashRouter as Router } from 'react-router-dom'; // Restored Router

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router> {/* Restored Router wrapping App */}
      <App />
    </Router>
  </React.StrictMode>
);