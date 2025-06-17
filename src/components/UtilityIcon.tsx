// src/components/UtilityIcon.tsx
import React from 'react';
import { IconRenderer } from '@icons/IconRenderer';
import { iconEngine } from '@core/engine';

interface UtilityIconProps {
  utility: string;
  className?: string;
  showDebug?: boolean;
}

export function UtilityIcon({ utility, className = 'w-5 h-5', showDebug = false }: UtilityIconProps) {
  const matched = iconEngine.getMatchedIcon(utility);
  const debug = iconEngine.getDebugInfo(utility);

  return (
    <div className="flex items-center gap-2">
      <IconRenderer
        icon={matched?.icon || 'HelpCircle'}
        source={matched?.source || 'lucide'}
        className={className}
      />
      {showDebug && (
        <div className="text-xs text-gray-400">
          {matched ? (
            <>
              <div><strong>Match:</strong> {String(matched.match)}</div>
              <div><strong>Icon:</strong> {matched.icon}</div>
              <div><strong>Source:</strong> {matched.source}</div>
            </>
          ) : (
            <div><strong>Debug:</strong> {debug?.message}</div>
          )}
        </div>
      )}
    </div>
  );
}