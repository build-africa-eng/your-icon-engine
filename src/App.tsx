// src/App.tsx
import React from 'react';
import { UtilityIcon } from './components/UtilityIcon';

const utilities = [
  'bg-blue-500',
  'text-red-500',
  'text-center',
  'docker-node-service',
  'docker-mysql-db',
  'alert-danger',
  'an-unmatched-utility',
];

const App = () => (
  <div className="bg-gray-800 text-gray-200 min-h-screen p-6 font-sans">
    <div className="max-w-5xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-600">
          Utility Icon Engine
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-400">Dynamically rendering icons from Lucide and Heroicons.</p>
      </header>
      <div className="bg-gray-700 border border-gray-600 rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {utilities.map((utility) => (
            <div
              key={utility}
              className="flex items-center justify-between p-4 bg-gray-600/50 rounded-lg border border-gray-500 hover:bg-gray-500 transition-colors duration-200"
            >
              <code className="text-sm font-mono text-cyan-300 bg-gray-500 px-2 py-1 rounded">
                {utility}
              </code>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-xs">RENDERED ICON</span>
                <div className="text-teal-400">
                  <UtilityIcon utility={utility} className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-center mt-10 text-gray-500">
        <p>Built with React, Lucide, Heroicons, and a custom matching engine.</p>
      </footer>
    </div>
  </div>
);

export default App;