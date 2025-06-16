// src/icons/adapters.ts
import React from 'react';
// Import our library file as a single, all-encompassing namespace
import * as AllIcons from './library';
import { IconSource } from '../utils/types';

// --- Type Definitions ---
type IconMap = { [key: string]: React.ElementType };

// --- Icon Maps ---
// We now access each icon set through the `AllIcons` namespace.
const lucideIconMap: IconMap = { ...AllIcons.Lucide };
const heroiconsMap: IconMap = { ...AllIcons.Heroicons };
const tablerMap: IconMap = { ...AllIcons.Tabler };


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
  getIcon: (name:string) => React.ElementType;
}

// --- Adapter Implementations ---

export const lucideAdapter: IconLibraryAdapter = {
  name: 'lucide',
  getIcon: (name) => {
    const iconName = toPascalCase(name);
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
]