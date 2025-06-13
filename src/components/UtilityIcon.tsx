// src/components/UtilityIcon.tsx
import React from 'react';
import { IconRenderer } from '../icons/iconRenderer';
import { getMatchedIcon } from '../utils/matcher';

interface UtilityIconProps {
  utility: string;
  className?: string;
}

export function UtilityIcon({ utility, className = 'w-5 h-5' }: UtilityIconProps) {
  const matched = getMatchedIcon(utility);
  if (!matched) return <IconRenderer icon="HelpCircle" source="lucide" className={className} />;
  return <IconRenderer icon={matched.icon} source={matched.source} className={className} />;
}