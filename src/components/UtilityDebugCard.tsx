// src/components/UtilityDebugCard.tsx
import React from 'react';
import { UtilityIcon } from './UtilityIcon';
import { iconEngine } from '@core/engine';

interface UtilityDebugCardProps {
  utility: string;
}

export const UtilityDebugCard: React.FC<UtilityDebugCardProps> = ({ utility }) => {
  const matched = iconEngine.getMatchedIcon(utility);
  const debug = iconEngine.getDebugInfo(utility);

  return (
    <div className="flex flex-col gap-2 p-3 bg-gray-600/50 rounded-lg border border-medium-gray hover:bg-amber-400/10 transition-colors duration-200">
      <code className="text-sm font-mono text-cyan-300 bg-gray-500 px-2 py-1 rounded">
        {utility}
      </code>

      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-xs">ICON</span>
        <UtilityIcon utility={utility} className="w-5 h-5 text-custom-teal" />
      </div>

      <div className="text-xs text-gray-400 bg-gray-700 rounded p-2 mt-1">
        {matched ? (
          <>
            <div><strong>Matched Rule:</strong> <code>{String(matched.match)}</code></div>
            <div><strong>Icon:</strong> <code>{matched.icon}</code></div>
            <div><strong>Source:</strong> <code>{matched.source}</code></div>
            {matched.variant && <div><strong>Variant:</strong> {matched.variant}</div>}
          </>
        ) : (
          <>
            <div><strong>No Match Found</strong></div>
            <div className="text-red-300">{debug?.message}</div>
            {debug?.engineState && (
              <details className="mt-2">
                <summary className="cursor-pointer text-custom-teal">Engine State</summary>
                <pre className="whitespace-pre-wrap text-gray-300 mt-1">
                  {JSON.stringify(debug.engineState, null, 2)}
                </pre>
              </details>
            )}
          </>
        )}
      </div>
    </div>
  );
};