// src/icons/adapters.ts
import React from 'react';
import * as Lucide from 'lucide-react';
import * as Heroicons from '@heroicons/react/24/outline';
import * as Tabler from '@tabler/icons-react';
import { IconSource } from '../utils/types';

// --- Type Definitions ---
type IconMap = { [key: string]: React.ElementType };

// --- Icon Maps ---
// By importing everything with `* as ...` and spreading it into a new object,
// we create a static dependency that Vite's bundler can see. This prevents
// the icons from being tree-shaken in the production build.

const lucideIconMap: IconMap = { ...Lucide };
const heroiconsMap: IconMap = { ...Heroicons };
const tablerMap: IconMap = { ...Tabler };

// Helper to convert kebab-case or snake_case to PascalCase.
const pascalCaseCache = new Map<string, string>();
function toPascalCase(str: string): string {
  if (pascalCaseCache.has(str)) return pascalCaseCache.get(str)!;
  const pascal = str
    .replace(/[-_]([a-z])/g, g => g[1].toUpperCase())
    .replace(/(^\w|-\w)/g, g => g.replace(/^-/, '').toUpperCase());
  pascalCaseCache.set(str, pascal);
  return pascal;
}

// Defines the contract for any icon library adapter
export interface IconLibraryAdapter {
  name: IconSource;
  getIcon: (name: string) => React.ElementType;
}

// --- Adapter Implementations ---

export const lucideAdapter: IconLibraryAdapter = {
  name: 'lucide',
  getIcon: (name) => {
    const iconName = toPascalCase(name);
    // Look up the icon in our map instead of the dynamic module import
    return lucideIconMap[iconName] || lucideIconMap.HelpCircle;
  },
};

export const heroiconsAdapter: IconLibraryAdapter = {
  name: 'heroicons',
  getIcon: (name) => {
    const iconName = `${toPascalCase(name)}Icon`;
    return heroiconsMap[iconName] || heroiconsMap.QuestionMarkCircleIcon;
  },
};

export const tablerAdapter: IconLibraryAdapter = {
  name: 'tabler',
  getIcon: (name) => {
    const iconName = `Icon${toPascalCase(name)}`;
    return tablerMap[iconName] || tablerMap.IconHelp;
  },
};

// A central map to hold all registered adapters for easy lookup
export const iconAdapters = new Map<IconSource, IconLibraryAdapter>([
  [lucideAdapter.name, lucideAdapter],
  [heroiconsAdapter.name, heroiconsAdapter],
  [tablerAdapter.name, tablerAdapter],
]);
