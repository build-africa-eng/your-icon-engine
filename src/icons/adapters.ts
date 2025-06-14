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

const globalLucide = (typeof window !== 'undefined' && (window as any).Lucide) || undefined;
const globalHeroicons = (typeof window !== 'undefined' && (window as any).Heroicons) || undefined;
const globalTabler = (typeof window !== 'undefined' && (window as any).Tabler) || undefined;

export const lucideAdapter: IconLibraryAdapter = {
  name: 'lucide',
  getIcon: (name) => (globalLucide as any)?.[toPascalCase(name)] || (globalLucide as any)?.HelpCircle || (() => <span>?</span>),
};

export const heroiconsAdapter: IconLibraryAdapter = {
  name: 'heroicons',
  getIcon: (name) => {
    const iconName = `${toPascalCase(name)}Icon`;
    return (globalHeroicons as any)?.[iconName] || (globalHeroicons as any)?.QuestionMarkCircleIcon || (() => <span>?</span>);
  },
};

export const tablerAdapter: IconLibraryAdapter = {
  name: 'tabler',
  getIcon: (name) => {
    const iconName = `Icon${toPascalCase(name)}`;
    return (globalTabler as any)?.[iconName] || (globalTabler as any)?.IconHelp || (() => <span>?</span>);
  },
};

export const iconAdapters = new Map<IconSource, IconLibraryAdapter>([
  [lucideAdapter.name, lucideAdapter],
  [heroiconsAdapter.name, heroiconsAdapter],
  [tablerAdapter.name, tablerAdapter],
]);