// src/matchers/animationMatchers.ts
import { UtilityRule } from '../types';

export const animationMatchers: UtilityRule[] = [
  {
    match: /^animate-/,
    icon: 'Activity', // using Lucide's 'Activity' as animation symbol
    source: 'lucide',
  },
];