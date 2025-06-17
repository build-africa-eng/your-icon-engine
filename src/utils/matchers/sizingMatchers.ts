// src/matchers/sizingMatchers.ts
import { UtilityRule } from '../types';

export const sizingMatchers: UtilityRule[] = [
  { match: /^w-/, icon: 'ArrowsHorizontal', source: 'tabler' }, // width
  { match: /^h-/, icon: 'ArrowsVertical', source: 'tabler' },   // height
  { match: /^min-w-/, icon: 'ArrowBarToRight', source: 'tabler' },
  { match: /^min-h-/, icon: 'ArrowBarToDown', source: 'tabler' },
  { match: /^max-w-/, icon: 'ArrowBarRight', source: 'tabler' },
  { match: /^max-h-/, icon: 'ArrowBarDown', source: 'tabler' },
  { match: /^aspect-/, icon: 'AspectRatio', source: 'tabler' },
];