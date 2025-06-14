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

  let IconComponent: React.ElementType | undefined;

  switch (source) {
    case 'lucide':
      IconComponent = getLucideIcon(icon);
      break;
    case 'heroicons':
      IconComponent = getHeroIcon(icon);
      break;
    case 'tabler':
      IconComponent = getTablerIcon(icon);
      break;
    default:
      IconComponent = DefaultIcon;
  }

  if (!IconComponent) {
    // Fallback to the default icon if the component is still not found
    IconComponent = DefaultIcon;
  }

  return <IconComponent className={className} />;
}