// src/matchers/positioningMatchers.ts
import { UtilityRule } from '../types';

export const positioningMatchers: UtilityRule[] = [
  { match: /^static$/, icon: 'LayoutDistributeVertical', source: 'tabler' },
  { match: /^fixed$/, icon: 'Pin', source: 'tabler' },
  { match: /^absolute$/, icon: 'Anchor', source: 'tabler' },
  { match: /^relative$/, icon: 'Transform', source: 'tabler' },
  { match: /^sticky$/, icon: 'GripVertical', source: 'tabler' },
  { match: /^top-/, icon: 'ArrowBigUpLine', source: 'tabler' },
  { match: /^bottom-/, icon: 'ArrowBigDownLine', source: 'tabler' },
  { match: /^left-/, icon: 'ArrowBigLeftLine', source: 'tabler' },
  { match: /^right-/, icon: 'ArrowBigRightLine', source: 'tabler' },
  { match: /^inset-/, icon: 'Focus2', source: 'tabler' },
  { match: /^z-/, icon: 'Stack', source: 'tabler' },
];