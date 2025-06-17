// src/icons/adapters.ts
import React from 'react';
import { iconEngine } from '@core/engine';
import { IconSource } from '@utils/types';

const pascalCaseCache = new Map<string, string>();
function toPascalCase(str: string): string {
  if (pascalCaseCache.has(str)) return pascalCaseCache.get(str)!;
  const camelCase = str.replace(/[-_]([a-z])/g, g => g[1].toUpperCase());
  const pascal = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  pascalCaseCache.set(str, pascal);
  return pascal;
}

const fallbackIcons: Record<IconSource, string> = {
  lucide: 'HelpCircle',
  heroicons: 'QuestionMarkCircleIcon',
  tabler: 'IconHelp',
};

export interface IconLibraryAdapter {
  name: IconSource;
  getIcon: (name: string) => React.ElementType;
}

export const lucideAdapter: IconLibraryAdapter = {
  name: 'lucide',
  getIcon: (name) => {
    const Lib = iconEngine.getLibraries().lucide;
    const iconName = toPascalCase(name);
    const fallback = fallbackIcons.lucide;
    return (Lib?.[iconName] || Lib?.[fallback]) ?? (() => null);
  },
};

export const heroiconsAdapter: IconLibraryAdapter = {
  name: 'heroicons',
  getIcon: (name) => {
    const Lib = iconEngine.getLibraries().heroicons;
    const iconName = `${toPascalCase(name)}Icon`;
    const fallback = fallbackIcons.heroicons;
    return (Lib?.[iconName] || Lib?.[fallback]) ?? (() => null);
  },
};

export const tablerAdapter: IconLibraryAdapter = {
  name: 'tabler',
  getIcon: (name) => {
    const Lib = iconEngine.getLibraries().tabler;
    const iconName = `Icon${toPascalCase(name)}`;
    const fallback = fallbackIcons.tabler;
    return (Lib?.[iconName] || Lib?.[fallback]) ?? (() => null);
  },
};

export const iconAdapters = new Map<IconSource, IconLibraryAdapter>([
  [lucideAdapter.name, lucideAdapter],
  [heroiconsAdapter.name, heroiconsAdapter],
  [tablerAdapter.name, tablerAdapter],
]);