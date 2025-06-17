// src/components/UtilityCard.tsx
import React, { useState } from 'react';
import { iconEngine } from '@core/engine';
import { UtilityRule } from '@utils/types';
import { UtilityIcon } from './UtilityIcon';

interface UtilityCardProps {
  utility: string;
}

export const UtilityCard: React.FC<UtilityCardProps> = ({ utility }) => {
  const [debug, setDebug] = useState(false);

  const matched: UtilityRule | null = iconEngine.getMatchedIcon(utility);

  const source = matched?.source ?? 'lucide';
  const iconName = matched?.icon ?? 'help-circle';
  const fallbackUsed = matched === null;

  return (
    <div className="p-4 rounded-lg border border-medium-gray bg-gray-700/40 hover:bg-amber-400/20 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <code className="text-sm font-mono text-cyan-300 bg-gray-600 px-2 py-1 rounded">
          {utility}
        </code>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-xs">ICON</span>
          <UtilityIcon utility={utility} className="w-5 h-5 text-custom-teal" />
        </div>
      </div>

      {debug && (
        <div className="mt-3 text-xs text-gray-400 space-y-1">
          <div>
            <span className="font-semibold text-gray-300">Matched:</span>{' '}
            {matched?.match?.toString() ?? 'No match (fallback)'}
          </div>
          <div>
            <span className="font-semibold text-gray-300">Icon:</span> {iconName}
          </div>
          <div>
            <span className="font-semibold text-gray-300">Source:</span> {source}
          </div>
          <div>
            <span className="font-semibold text-gray-300">Fallback used:</span>{' '}
            {fallbackUsed ? 'Yes' : 'No'}
          </div>
        </div>
      )}

      <button
        onClick={() => setDebug((prev) => !prev)}
        className="mt-3 text-amber-300 text-xs underline hover:text-amber-200"
      >
        {debug ? 'Hide Debug Info' : 'Show Debug Info'}
      </button>
    </div>
  );
};