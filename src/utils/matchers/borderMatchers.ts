// src/matchers/borderMatchers.ts
import { UtilityRule } from '../types';

export const borderMatchers: UtilityRule[] = [
  { match: /^border$/, icon: 'BorderAll', source: 'tabler' },
  { match: /^border-[trblxy]/, icon: 'BorderSides', source: 'tabler' },
  { match: /^border-(solid|dashed|dotted|none)/, icon: 'BorderStyle', source: 'tabler' },
  { match: /^rounded/, icon: 'BorderRadius', source: 'tabler' },
  { match: /^divide-/, icon: 'BorderHorizontal', source: 'tabler' },
  { match: /^ring/, icon: 'CircleDashed', source: 'tabler' },
  { match: /^outline/, icon: 'SquareDashed', source: 'tabler' },
];