import { UtilityRule } from '../types';

export const layoutMatchers: UtilityRule[] = [
  {
    match: /^grid$|^inline-grid$/,
    icon: 'grid',
    source: 'lucide',
  },
  {
    match: /^block$|^inline-block$/,
    icon: 'square',
    source: 'lucide',
  },
  {
    match: /^inline$/,
    icon: 'text-align-justified',
    source: 'tabler',
  },
  {
    match: /^hidden$|^visible$/,
    icon: 'eye',
    source: 'lucide',
  },
  {
    match: /^contents$/,
    icon: 'CodeBlock',
    source: 'iconoir',
  },
  {
    match: /^table$|^table-(row|cell|column)$/,
    icon: 'table',
    source: 'lucide',
  },
  {
    match: /^float-|^clear-/,
    icon: 'send-to-back',
    source: 'lucide',
  },
  {
    match: /^isolate|^isolation-/,
    icon: 'scan-eye',
    source: 'tabler',
  },
  {
    match: /^z-/,
    icon: 'stack',
    source: 'tabler',
  }
];