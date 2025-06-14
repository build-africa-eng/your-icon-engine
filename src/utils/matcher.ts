// src/utils/matcher.ts
import { UtilityRule } from './types';

// Standard utility rules, now just a data array
export const standardUtilityIconMap: UtilityRule[] = [
  { match: /^bg-/, icon: 'palette', source: 'lucide' },
  { match: /^text-/, icon: 'type', source: 'lucide' },
  { match: /^border-/, icon: 'square', source: 'lucide' },
  { match: /^flex/, icon: 'move', source: 'tabler' },
  { match: /^grid/, icon: 'grid', source: 'lucide' },
  { match: /^p-/, icon: 'rectangle', source: 'tabler' },
  { match: /^m-/, icon: 'rectangleVertical', source: 'tabler' },
  { match: /^w-/, icon: 'resizeHorizontal', source: 'tabler' },
  { match: /^h-/, icon: 'resizeVertical', source: 'tabler' },
  { match: /^rounded-/, icon: 'circle', source: 'tabler' },
  { match: /^shadow-/, icon: 'layers', source: 'lucide' },
  { match: /^items-/, icon: 'alignBoxCenterMiddle', source: 'tabler' },
  { match: /^justify-/, icon: 'alignBoxCenterMiddle', source: 'tabler' },
  { match: 'alert-danger', icon: 'alertCircle', source: 'lucide' },
  { match: /^docker-node/, icon: 'server', source: 'lucide' },
  { match: /^docker-mysql/, icon: 'database', source: 'lucide' },
  { match: /^text-center$/, icon: 'adjustmentsHorizontal', source: 'heroicons' },
];