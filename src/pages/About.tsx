// src/pages/About.tsx
import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen p-10 bg-dark-gray text-light-gray font-sans">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-custom-teal to-custom-purple bg-clip-text">
          About Utility Icon Engine v2
        </h2>
        <p className="text-gray-300 mb-4">
          This project maps common utility-like strings (such as Tailwind classes, Docker service names,
          or custom actions) to icons using a plugin-ready matching engine.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-custom-teal">Icon Sources</h3>
        <ul className="list-disc list-inside text-gray-400">
          <li>Lucide Icons (lucide-react)</li>
          <li>Tabler Icons</li>
          <li>Heroicons</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-custom-teal">Usage</h3>
        <p className="text-gray-300 mb-2">
          Visit the homepage to test how your utility strings are interpreted visually.
          Use the Registry to explore currently registered icon matchers.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-custom-teal">Contributing</h3>
        <p className="text-gray-300">
          Extend the engine by adding more match rules or plugins. Matching logic is centralized
          in the <code className="bg-gray-700 px-1 py-0.5 rounded text-cyan-300">engine</code> module.
        </p>
      </div>
    </div>
  );
};