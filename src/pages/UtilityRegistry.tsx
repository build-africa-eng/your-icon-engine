// src/pages/UtilityRegistry.tsx
import React from 'react';
import { iconEngine } from '@core/engine';
import { IconRenderer } from '@icons/IconRenderer';
import { UtilityRule } from '@utils/types';

export const UtilityRegistry = () => {
  const allRules: UtilityRule[] = iconEngine['rules']; // direct access (or expose a getter if preferred)

  return (
    <div className="min-h-screen p-10 bg-dark-gray text-light-gray">
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-custom-teal to-custom-purple bg-clip-text">
        Registered Utility Icons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allRules.map((rule, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded shadow hover:bg-amber-300/10 transition">
            <code className="block font-mono text-cyan-300 mb-2">{rule.match.toString()}</code>
            <div className="flex items-center justify-between text-sm text-gray-300">
              <div>
                <div><span className="font-bold">Icon:</span> {rule.icon}</div>
                <div><span className="font-bold">Source:</span> {rule.source}</div>
              </div>
              <IconRenderer icon={rule.icon} source={rule.source} className="w-6 h-6 text-custom-teal" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};