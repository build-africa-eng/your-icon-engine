// src/matchers/flexboxMatchers.ts
import { UtilityRule } from '../types';

export const flexboxMatchers: UtilityRule[] = [
  {
    match: /^flex(-|$)/,
    icon: 'LayoutGrid', // Lucide
    source: 'lucide',
  },
  {
    match: /^flex-(row|col)/,
    icon: 'LayoutList', // Lucide (for direction)
    source: 'lucide',
  },
  {
    match: /^items-/,
    icon: 'AlignVerticalCenter', // Tabler
    source: 'tabler',
  },
  {
    match: /^justify-/,
    icon: 'AlignHorizontalCenter', // Tabler
    source: 'tabler',
  },
  {
    match: /^gap-/,
    icon: 'LayoutGridAdd', // Tabler
    source: 'tabler',
  },
  {
    match: /^order-/,
    icon: 'ListNumbers', // Lucide
    source: 'lucide',
  },
  {
    match: /^grow/,
    icon: 'Maximize2', // Lucide
    source: 'lucide',
  },
  {
    match: /^shrink/,
    icon: 'Minimize2', // Lucide
    source: 'lucide',
  },
  {
    match: /^basis-/,
    icon: 'Divide', // Lucide
    source: 'lucide',
  },
];