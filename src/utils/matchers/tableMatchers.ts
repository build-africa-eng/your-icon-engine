// src/matchers/tableMatchers.ts
import { UtilityRule } from '../types';

export const tableMatchers: UtilityRule[] = [
  {
    match: /^table$/, // table
    icon: 'Table', // Lucide
    source: 'lucide',
  },
  {
    match: /^table-(auto|fixed)$/, // table-auto, table-fixed
    icon: 'AlignHorizontalSpaceBetween', // Lucide
    source: 'lucide',
  },
  {
    match: /^border-collapse$/, // border-collapse
    icon: 'Columns', // Lucide
    source: 'lucide',
  },
  {
    match: /^border-separate$/, // border-separate
    icon: 'Columns3', // Lucide
    source: 'lucide',
  },
  {
    match: /^caption-(top|bottom)$/, // caption-top
    icon: 'AlignVerticalSpaceAround', // Lucide
    source: 'lucide',
  },
];