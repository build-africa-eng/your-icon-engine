// src/icons/IconRenderer.tsx
import React from 'react';
import { getLucideIcon } from './lucide';
import { getHeroIcon } from './heroicons';
import { getTablerIcon } from './tabler';
import { IconSource } from '@utils/matcher';

interface IconRendererProps {
  icon: string;
  source: IconSource;
  className?: string;
}

export function IconRenderer({ icon, source, className = 'w-5 h-5' }: IconRendererProps) {
  const DefaultIcon = getLucideIcon('HelpCircle');
  switch (source) {
    case 'lucide':
      return <getLucideIcon icon={icon} className={className} />;
    case 'heroicons':
      return <getHeroIcon icon={icon} className={className} />;
    case 'tabler':
      return <getTablerIcon icon={icon} className={className} />;
    default:
      return <DefaultIcon className={className} />;
  }
}