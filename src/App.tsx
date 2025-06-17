// src/App.tsx
import React from 'react';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { UtilityRegistry } from '@pages/UtilityRegistry';
import { About } from '@pages/About';
import Home from '@pages/Home'; // assuming you move Home to its own file later

const Navbar = () => (
  <nav className="bg-medium-gray text-gray-300 p-4 shadow-md flex justify-center gap-6 text-sm">
    <Link to="/" className="hover:text-white transition">🏠 Home</Link>
    <Link to="/registry" className="hover:text-white transition">🧩 Registry</Link>
    <Link to="/about" className="hover:text-white transition">ℹ️ About</Link>
  </nav>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registry" element={<UtilityRegistry />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;