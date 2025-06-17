// src/icons/adapters.ts
import React from 'react';
import { iconEngine } from '@core/engine'; // Get the engine instance
import { IconSource } from '@utils/types';

// NO LONGER IMPORTING * from lucide, heroicons, tabler here

const pascalCaseCache = new Map<string, string>();
function toPascalCase(str: string): string {
  if (pascalCaseCache.has(str)) return pascalCaseCache.get(str)!;
  const camelCase = str.replace(/[-_]([a-z])/g, g => g[1].toUpperCase());
  const pascal = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  pascalCaseCache.set(str, pascal);
  return pascal;
}

export interface IconLibraryAdapter {
  name: IconSource;
  getIcon: (name: string) => React.ElementType;
}

export const lucideAdapter: IconLibraryAdapter = {
  name: 'lucide',
  getIcon: (name) => {
    const Lucide = iconEngine.getLibraries().lucide;
    if (!Lucide) return () => null; // Safety check
    return Lucide[toPascalCase(name) as keyof typeof Lucide] || Lucide.HelpCircle;
  },
};

export const heroiconsAdapter: IconLibraryAdapter = {
  name: 'heroicons',
  getIcon: (name) => {
    const Heroicons = iconEngine.getLibraries().heroicons;
    if (!Heroicons) return () => null; // Safety check
    const iconName = `${toPascalCase(name)}Icon`;
    return Heroicons[iconName as keyof typeof Heroicons] || Heroicons.QuestionMarkCircleIcon;
  },
};

export const tablerAdapter: IconLibraryAdapter = {
  name: 'tabler',
  getIcon: (name) => {
    const Tabler = iconEngine.getLibraries().tabler;
    if (!Tabler) return () => null; // Safety check
    const iconName = `Icon${toPascalCase(name)}`;
    return Tabler[iconName as keyof typeof Tabler] || Tabler.IconHelp;
  },
};

export const iconAdapters = new Map<IconSource, IconLibraryAdapter>([
  [lucideAdapter.name, lucideAdapter],
  [heroiconsAdapter.name, heroiconsAdapter],
  [tablerAdapter.name, tablerAdapter],
]);