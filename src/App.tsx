// src/App.tsx
import React from 'react';
import { UtilityIcon } from './components/UtilityIcon';

const utilities = [
  'bg-blue-500', // lucide:Palette
  'text-red-500', // lucide:Type
  'text-center', // heroicons:AdjustmentsHorizontal
  'docker-node-service', // lucide:Server
  'docker-mysql-db', // lucide:Database
  'alert-danger', // lucide:AlertCircle
  'an-unmatched-utility', // lucide:HelpCircle
];

const App = () => (
  <div className="bg-gray-900 text-white min-h-screen p-8 font-sans">
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Utility Icon Engine
        </h1>
        <p className="mt-4 text-lg text-gray-400">Dynamically rendering icons from Lucide and Heroicons.</p>
      </header>
      <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl">
        <div className="p-6">
          <ul className="space-y-4">
            {utilities.map((utility) => (
              <li
                key={utility}
                className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors duration-200"
              >
                <code className="text-sm font-mono text-cyan-400 bg-gray-800 px-2 py-1 rounded">
                  {utility}
                </code>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-xs">RENDERED ICON</span>
                  <div className="text-pink-400">
                    <UtilityIcon utility={utility} className="w-6 h-6" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="text-center mt-12 text-gray-500">
        <p>Built with React, Lucide, Heroicons, and a custom matching engine.</p>
      </footer>
    </div>
  </div>
);

export default App;