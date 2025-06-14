// src/icons/IconRenderer.tsx
import React from 'react';
import { iconAdapters, lucideAdapter } from './adapters';
import { IconSource } from '../utils/types';

interface IconRendererProps {
  icon: string;
  source: IconSource;
  className?: string;
}

export function IconRenderer({ icon, source, className = 'w-5 h-5' }: IconRendererProps) {
  // Get the correct adapter from the map, defaulting to Lucide
  const adapter = iconAdapters.get(source) || lucideAdapter;

  // Ask the adapter for the component
  const IconComponent = adapter.getIcon(icon);

  return <IconComponent className={className} />;
}