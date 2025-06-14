// src/utils/customMatcher.ts
import { UtilityRule } from './types'; // Import types from the new types file

// Custom utility rules for non-standard, project-specific cases
export const customUtilityIconMap: UtilityRule[] = [
  { match: /^play-action$/, icon: 'playerPlay', source: 'tabler' },
  { match: /^world-map$/, icon: 'world', source: 'tabler' },
  { match: /^clock-time$/, icon: 'clock', source: 'tabler' },
];

// This optional function can remain if you need it elsewhere,
// but it is not necessary for the main utilityIconMap to work.
export function getCustomMatchedIcon(utility: string): UtilityRule | null {
  return customUtilityIconMap.find(rule =>
    typeof rule.match === 'string' ? rule.match === utility : rule.match.test(utility)
  ) || null;
}
