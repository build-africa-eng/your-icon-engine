// src/matchers/spacingMatchers.ts
import { UtilityRule } from '../types';

export const spacingMatchers: UtilityRule[] = [
  { match: /^p-/, icon: 'Padding', source: 'tabler' },
  { match: /^pt-/, icon: 'PaddingTop', source: 'tabler' },
  { match: /^pr-/, icon: 'PaddingRight', source: 'tabler' },
  { match: /^pb-/, icon: 'PaddingBottom', source: 'tabler' },
  { match: /^pl-/, icon: 'PaddingLeft', source: 'tabler' },
  { match: /^px-/, icon: 'LayoutColumns', source: 'tabler' },
  { match: /^py-/, icon: 'LayoutRows', source: 'tabler' },

  { match: /^m-/, icon: 'Margin', source: 'tabler' },
  { match: /^mt-/, icon: 'ArrowTop', source: 'tabler' },
  { match: /^mr-/, icon: 'ArrowRight', source: 'tabler' },
  { match: /^mb-/, icon: 'ArrowBottom', source: 'tabler' },
  { match: /^ml-/, icon: 'ArrowLeft', source: 'tabler' },
  { match: /^mx-/, icon: 'LayoutColumns', source: 'tabler' },
  { match: /^my-/, icon: 'LayoutRows', source: 'tabler' },

  { match: /^space-x-/, icon: 'ArrowsHorizontal', source: 'tabler' },
  { match: /^space-y-/, icon: 'ArrowsVertical', source: 'tabler' },
  { match: /^gap-/, icon: 'LayoutGrid', source: 'tabler' },
];