import React, { useEffect } from 'react';
import { UtilityIcon } from '@components/UtilityIcon';
import { initializeIconEngine } from '@core/initEngine';

const utilities = [
  'bg-blue-500', 'text-red-500', 'text-center', 'docker-node-service',
  'docker-mysql-db', 'alert-danger', 'flex', 'p-4', 'play-action',
  'world-map', 'clock-time', 'an-unmatched-utility'
];

const App = () => {
  useEffect(() => {
    // We only need to initialize the engine once when the app loads.
    initializeIconEngine();
  }, []);

  return (
    <div className="bg-dark-gray text-light-gray min-h-screen p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-4.5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-custom-teal to-custom-purple">
            Utility Icon Engine v2
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-400">
            Now featuring a modular, plugin-based architecture.
          </p>
        </header>
        <div className="bg-medium-gray border border-medium-gray rounded-xl shadow-custom-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {utilities.map((utility) => (
              <div
                key={utility}
                className="flex items-center justify-between p-3 bg-gray-600/50 rounded-lg border-medium-gray hover:bg-amber-400/20 transition-colors duration-200"
              >
                <code className="text-sm font-mono text-cyan-300 bg-gray-500 px-2 py-1 rounded">
                  {utility}
                </code>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs">ICON</span>
                  <div className="text-custom-teal">
                    <UtilityIcon utility={utility} className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="text-center mt-16 text-gray-500">
          <p>Built with React and a fully refactored, extensible matching engine.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;