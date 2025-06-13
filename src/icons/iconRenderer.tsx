// src/components/IconRenderer.tsx
import React from 'react';
import { getLucideIcon } from '../icons/lucide';
import { getHeroIcon } from '../icons/heroicons';
import { IconSource } from '../utils/match';

interface IconRendererProps {
  icon: string;
  source: IconSource;
  className?: string;
}

export function IconRenderer({ icon, source, className = 'w-5 h-5' }: IconRendererProps) {
  const DefaultIcon = getLucideIcon('HelpCircle');
  switch (source) {
    case 'lucide':
      const LucideIcon = getLucideIcon(icon);
      return <LucideIcon className={className} />;
    case 'heroicons':
      const HeroIcon = getHeroIcon(icon);
      return <HeroIcon className={className} />;
    default:
      return <DefaultIcon className={className} />;
  }
}