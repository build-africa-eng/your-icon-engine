// src/icons/adapters.ts
import React from 'react';
import { IconSource } from '../utils/types';

// Relying on library.ts for global Lucide, Heroicons, Tabler
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
  getIcon: (name) => (Lucide as any)[toPascalCase(name)] || Lucide.HelpCircle,
};

export const heroiconsAdapter: IconLibraryAdapter = {
  name: 'heroicons',
  getIcon: (name) => {
    const iconName = `${toPascalCase(name)}Icon`;
    return (Heroicons as any)[iconName] || Heroicons.QuestionMarkCircleIcon;
  },
};

export const tablerAdapter: IconLibraryAdapter = {
  name: 'tabler',
  getIcon: (name) => {
    const iconName = `Icon${toPascalCase(name)}`;
    return (Tabler as any)[iconName] || Tabler.IconHelp;
  },
};

export const iconAdapters = new Map<IconSource, IconLibraryAdapter>([
  [lucideAdapter.name, lucideAdapter],
  [heroiconsAdapter.name, heroiconsAdapter],
  [tablerAdapter.name, tablerAdapter],
]);