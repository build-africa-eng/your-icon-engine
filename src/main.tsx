
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// This is the final line needed to fix the build.
import './icons/library';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);