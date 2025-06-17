// src/matchers/interactivityMatchers.ts
import { UtilityRule } from '../types';

export const interactivityMatchers: UtilityRule[] = [
  {
    match: /^cursor-/,
    icon: 'MousePointer', // Lucide
    source: 'lucide',
  },
  {
    match: /^select-/,
    icon: 'Mouse', // Lucide (representing text selection)
    source: 'lucide',
  },
  {
    match: /^pointer-events-/,
    icon: 'Pointer', // Lucide
    source: 'lucide',
  },
  {
    match: /^touch-/,
    icon: 'Touchpad', // Tabler
    source: 'tabler',
  },
  {
    match: /^resize/,
    icon: 'Resize', // Tabler
    source: 'tabler',
  },
  {
    match: /^scroll-/,
    icon: 'ScrollText', // Tabler
    source: 'tabler',
  },
  {
    match: /^overscroll-/,
    icon: 'ArrowsMoveVertical', // Tabler
    source: 'tabler',
  },
];