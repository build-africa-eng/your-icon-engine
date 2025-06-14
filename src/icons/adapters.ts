// src/icons/adapters.ts
import React from 'react';
import { IconSource } from '@utils/types';

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

const fallbackIcon = () => React.createElement('span', null, '?');

const globalLucide = (typeof window !== 'undefined' && (window as any).Lucide) || undefined;
const globalHeroicons = (typeof window !== 'undefined' && (window as any).Heroicons) || undefined;
const globalTabler = (typeof window !== 'undefined' && (window as any).Tabler) || undefined;

export const lucideAdapter: IconLibraryAdapter = {
  name: 'lucide',
  getIcon: (name) => {
    const iconName = toPascalCase(name);
    const fallback = globalLucide?.HelpCircle;
    if (globalLucide?.[iconName]) return globalLucide[iconName];
    return fallback || fallbackIcon;
  },
};

export const heroiconsAdapter: IconLibraryAdapter = {
  name: 'heroicons',
  getIcon: (name) => {
    const iconName = `${toPascalCase(name)}Icon`;
    const fallback = globalHeroicons?.QuestionMarkCircleIcon;
    if (globalHeroicons?.[iconName]) return globalHeroicons[iconName];
    return fallback || fallbackIcon;
  },
};

export const tablerAdapter: IconLibraryAdapter = {
  name: 'tabler',
  getIcon: (name) => {
    const iconName = `Icon${toPascalCase(name)}`;
    const fallback = globalTabler?.IconHelp;
    if (globalTabler?.[iconName]) return globalTabler[iconName];
    return fallback || fallbackIcon;
  },
};

export const iconAdapters = new Map<IconSource, IconLibraryAdapter>([
  [lucideAdapter.name, lucideAdapter],
  [heroiconsAdapter.name, heroiconsAdapter],
  [tablerAdapter.name, tablerAdapter],
]);