import { UtilityRule } from '../types';

export const positioningMatchers: UtilityRule[] = [
  {
    match: /^static$/,
    icon: 'layout', // General layout symbol
    source: 'tabler',
  },
  {
    match: /^fixed$/,
    icon: 'pin',
    source: 'lucide',
  },
  {
    match: /^absolute$/,
    icon: 'crosshair',
    source: 'lucide',
  },
  {
    match: /^relative$/,
    icon: 'vector', // Relative positioning
    source: 'tabler',
  },
  {
    match: /^sticky$/,
    icon: 'magnet',
    source: 'lucide',
  },
  {
    match: /^inset-/,
    icon: 'move', // Represents offset positioning
    source: 'tabler',
  },
  {
    match: /^top-/,
    icon: 'arrow-big-up-line',
    source: 'tabler',
  },
  {
    match: /^right-/,
    icon: 'arrow-big-right-line',
    source: 'tabler',
  },
  {
    match: /^bottom-/,
    icon: 'arrow-big-down-line',
    source: 'tabler',
  },
  {
    match: /^left-/,
    icon: 'arrow-big-left-line',
    source: 'tabler',
  },
  {
    match: /^z-/,
    icon: 'stack',
    source: 'tabler',
  },
];