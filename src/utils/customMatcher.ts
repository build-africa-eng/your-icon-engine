// src/utils/customMatcher.ts
import { UtilityRule } from './types';

// Custom rules for project-specific cases
export const customUtilityIconMap: UtilityRule[] = [
  { match: /^play-action$/, icon: 'playerPlay', source: 'tabler' },
  { match: /^world-map$/, icon: 'world', source: 'tabler' },
  { match: /^clock-time$/, icon: 'clock', source: 'tabler' },
];