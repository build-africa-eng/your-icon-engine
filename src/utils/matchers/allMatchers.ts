// src/utils/allMatchers.ts
import { UtilityRule } from '../types';
import { standardUtilityIconMap } from './matcher';
import { customUtilityIconMap } from './customMatcher';
import { specialUtilityIconMap } from './specialMatcher';

export const allUtilityIconMap: UtilityRule[] = [
  ...specialUtilityIconMap,       // Optional or rare rules first
  ...customUtilityIconMap,        // Project-specific rules next
  ...standardUtilityIconMap,      // General-purpose rules last
];
