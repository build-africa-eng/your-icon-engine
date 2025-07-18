import React, { useState } from 'react';
import { UtilityIcon } from '@components/UtilityIcon';
import { Link } from 'react-router-dom';

const utilities = [
  'bg-blue-500', 'text-red-500', 'text-center', 'docker-node-service',
  'docker-mysql-db', 'alert-danger', 'flex', 'p-4', 'play-action',
  'world-map', 'clock-time', 'an-unmatched-utility', 'z-10'
];

const Home = () => {
  const [showDebug, setShowDebug] = useState(false);

  return (
    <div className="bg-dark-gray text-light-gray min-h-screen p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-custom-teal to-custom-purple bg-clip-text">
            Utility Icon Engine v2
          </h1>
          <p className="text-gray-400 mt-2">With Debugging & Plugin Support</p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <label className="text-sm text-gray-300 flex items-center gap-2">
              <input
                type="checkbox"
                checked={showDebug}
                onChange={() => setShowDebug((prev) => !prev)}
                className="accent-custom-teal"
              />
              Show Debug Info
            </label>

            <Link
              to="/registry"
              className="text-sm text-custom-teal underline hover:text-custom-purple transition"
            >
              View All Utilities →
            </Link>
          </div>
        </header>

        <div className="bg-medium-gray border border-medium-gray rounded-xl shadow-custom-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {utilities.map((utility) => (
              <UtilityIcon key={utility} utility={utility} showDebug={showDebug} />
            ))}
          </div>
        </div>

        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>Built with a plugin-ready engine and real-time debug inspection.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;