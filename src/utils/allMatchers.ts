// src/utils/allMatchers.ts

import { specialUtilityIconMap } from './specialMatcher';
import { customUtilityIconMap } from './customMatcher';
import { standardUtilityIconMap } from './matcher';

export const allUtilityIconRules = [
  ...specialUtilityIconMap,   // highest priority
  ...customUtilityIconMap,    // custom app logic
  ...standardUtilityIconMap   // default/general rules
];