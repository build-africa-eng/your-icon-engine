// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeIconEngine } from '@core/initEngine'; // Import the initializer

// === THE FIX ===
// Initialize the engine synchronously before the app ever renders.
// This ensures all rules and libraries are loaded and ready from the start.
initializeIconEngine();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);