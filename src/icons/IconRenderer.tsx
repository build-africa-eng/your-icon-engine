import React from 'react';
import { iconAdapters, lucideAdapter } from './adapters';
import { IconSource } from '@utils/types';

interface IconRendererProps {
  icon: string;
  source: IconSource;
  className?: string;
}

export function IconRenderer({ icon, source, className = 'w-5 h-5' }: IconRendererProps) {
  const adapter = iconAdapters.get(source) || lucideAdapter;
  const IconComponent = adapter.getIcon(icon);
  return <IconComponent className={className} />;
}