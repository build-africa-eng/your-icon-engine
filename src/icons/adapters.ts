// src/icons/adapters.ts
import React from 'react';
import * as Lucide from 'lucide-react';
import * as Heroicons from '@heroicons/react/24/outline';
import * as Tabler from '@tabler/icons-react';
import { IconSource } from '../utils/types';

// Helper to convert kebab-case or snake_case to PascalCase
const pascalCaseCache = new Map<string, string>();
function toPascalCase(str: string): string {
  if (pascalCaseCache.has(str)) return pascalCaseCache.get(str)!;
  const pascal = str
    .replace(/[-_]([a-z])/g, g => g[1].toUpperCase())
    .replace(/(^\w)/g, g => g.toUpperCase());
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
  getIcon: (name) => Lucide[toPascalCase(name) as keyof typeof Lucide] || Lucide.HelpCircle,
};

export const heroiconsAdapter: IconLibraryAdapter = {
  name: 'heroicons',
  getIcon: (name) => {
    const iconName = `${toPascalCase(name)}Icon`;
    return Heroicons[iconName as keyof typeof Heroicons] || Heroicons.QuestionMarkCircleIcon;
  },
};

export const tablerAdapter: IconLibraryAdapter = {
  name: 'tabler',
  getIcon: (name) => {
    const iconName = `Icon${toPascalCase(name)}`;
    return Tabler[iconName as keyof typeof Tabler] || Tabler.IconHelp;
  },
};

// A central map to hold all registered adapters for easy lookup
export const iconAdapters = new Map<IconSource, IconLibraryAdapter>([
  [lucideAdapter.name, lucideAdapter],
  [heroiconsAdapter.name, heroiconsAdapter],
  [tablerAdapter.name, tablerAdapter],
]);