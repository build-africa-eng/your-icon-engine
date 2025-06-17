import React from 'react';
import { iconEngine } from '@core/engine';
import { UtilityRule } from '@utils/types';

interface UtilityCardProps {
  utility: string;
  showDebug?: boolean;
}

export const UtilityIcon: React.FC<UtilityIconProps> = ({ utility, showDebug }) => {
  const matched: UtilityRule | null = iconEngine.getMatchedIcon(utility);

  const source = matched?.source ?? 'lucide';
  const iconName = matched?.icon ?? 'help-circle';
  const fallbackUsed = matched === null;

  return (
    <div className="flex flex-col gap-2 p-3 bg-gray-600/50 rounded-lg border border-medium-gray hover:bg-amber-400/10 transition-colors duration-200">
      <code className="text-sm font-mono text-cyan-300 bg-gray-500 px-2 py-1 rounded">
        {utility}
      </code>

      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-xs">ICON</span>
        <UtilityIcon utility={utility} className="w-5 h-5 text-custom-teal" />
      </div>

      {showDebug && (
        <div className="text-xs mt-2 text-gray-400 space-y-1">
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
    </div>
  );
};