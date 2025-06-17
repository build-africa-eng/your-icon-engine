// src/matchers/gridMatchers.ts
import { UtilityRule } from '../types';

export const gridMatchers: UtilityRule[] = [
  {
    match: /^grid(-|$)/,
    icon: 'LayoutGrid', // Lucide
    source: 'lucide',
  },
  {
    match: /^grid-cols-/,
    icon: 'Columns3', // Lucide
    source: 'lucide',
  },
  {
    match: /^grid-rows-/,
    icon: 'Rows3', // Lucide
    source: 'lucide',
  },
  {
    match: /^gap(-[xy])?-/,
    icon: 'LayoutGridAdd', // Tabler
    source: 'tabler',
  },
  {
    match: /^col-(start|end)/,
    icon: 'ColumnInsertLeft', // Tabler
    source: 'tabler',
  },
  {
    match: /^row-(start|end)/,
    icon: 'RowInsertBottom', // Tabler
    source: 'tabler',
  },
  {
    match: /^auto-(cols|rows|flow)/,
    icon: 'LayoutNavbar', // Tabler
    source: 'tabler',
  },
  {
    match: /^place-(items|content|self)/,
    icon: 'AlignBoxCenterMiddle', // Tabler
    source: 'tabler',
  },
];