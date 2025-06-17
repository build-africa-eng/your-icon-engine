// src/matchers/typographyMatchers.ts
import { UtilityRule } from '../types';

export const typographyMatchers: UtilityRule[] = [
  {
    match: /^text(-|$)/, // Covers text, text-center, text-sm, text-red-500, etc.
    icon: 'Type', // Lucide
    source: 'lucide',
  },
  {
    match: /^font(-|$)/, // font-bold, font-sans
    icon: 'Bold', // Lucide
    source: 'lucide',
  },
  {
    match: /^leading-/, // leading-tight
    icon: 'ArrowDownWideNarrow', // Lucide
    source: 'lucide',
  },
  {
    match: /^tracking-/, // tracking-wide
    icon: 'TextSpacing', // Tabler
    source: 'tabler',
  },
  {
    match: /^line-clamp-/, // line-clamp-3
    icon: 'TextWrapDisabled', // Tabler
    source: 'tabler',
  },
  {
    match: /^truncate$/, // truncate
    icon: 'TextTruncate', // Tabler
    source: 'tabler',
  },
  {
    match: /^whitespace-/, // whitespace-nowrap
    icon: 'TextWrap', // Tabler
    source: 'tabler',
  },
  {
    match: /^break-/, // break-words
    icon: 'TextBreak', // Tabler
    source: 'tabler',
  },
  {
    match: /^text-(left|center|right|justify)/, // text-left, text-center
    icon: 'AlignCenter', // Tabler
    source: 'tabler',
  },
];