// src/utils/customMatcher.ts
import { IconSource, UtilityRule } from './matcher'; // Import types from main match

// Custom utility rules for non-standard, project-specific cases
export const customUtilityIconMap: UtilityRule[] = [
  { match: /^play-action$/, icon: 'playerPlay', source: 'tabler' }, // Non-standard play action
  { match: /^world-map$/, icon: 'world', source: 'tabler' },       // Non-standard world map
  { match: /^clock-time$/, icon: 'clock', source: 'tabler' },      // Non-standard clock time
  // Add more non-standard rules here as needed
];

// Optional: Custom matching function for non-standard utilities
export function getCustomMatchedIcon(utility: string): UtilityRule | null {
  return customUtilityIconMap.find(rule =>
    typeof rule.match === 'string' ? rule.match === utility : rule.match.test(utility)
  ) || null;
}