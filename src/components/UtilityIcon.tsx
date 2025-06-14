// src/components/UtilityIcon.tsx
import React from 'react';
import { IconRenderer } from '../icons/IconRenderer';
import { iconEngine } from '../core/engine';

interface UtilityIconProps {
  utility: string;
  className?: string;
}

export function UtilityIcon({ utility, className = 'w-5 h-5' }: UtilityIconProps) {
  // Use the engine to find the matched rule
  const matched = iconEngine.getMatchedIcon(utility);

  // If no match, render a default help icon
  if (!matched) {
    return <IconRenderer icon="HelpCircle" source="lucide" className={className} />;
  }

  // If a match is found, render the correct icon
  return <IconRenderer icon={matched.icon} source={matched.source} className={className} />;
}