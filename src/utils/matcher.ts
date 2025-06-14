// src/utils/matcher.ts
export type IconSource = 'lucide' | 'heroicons' | 'tabler';

export interface UtilityRule {
  match: string | RegExp;
  icon: string;
  source: IconSource;
}

export const utilityIconMap: UtilityRule[] = [
  { match: /^bg-/, icon: 'palette', source: 'lucide' },
  { match: /^text-/, icon: 'type', source: 'lucide' },
  { match: /^border-/, icon: 'square', source: 'lucide' },
  { match: /^flex/, icon: 'move', source: 'tabler' }, // Tabler example
  { match: /^grid/, icon: 'grid', source: 'lucide' },
  { match: /^p-/, icon: 'rectangle', source: 'tabler' }, // Tabler example
  { match: /^m-/, icon: 'rectangleVertical', source: 'tabler' }, // Tabler example
  { match: /^w-/, icon: 'resizeHorizontal', source: 'tabler' }, // Tabler example
  { match: /^h-/, icon: 'resizeVertical', source: 'tabler' }, // Tabler example
  { match: /^rounded-/, icon: 'circle', source: 'tabler' }, // Tabler example
  { match: /^shadow-/, icon: 'layers', source: 'lucide' },
  { match: /^items-/, icon: 'alignBoxCenterMiddle', source: 'tabler' }, // Tabler example
  { match: /^justify-/, icon: 'alignBoxCenterMiddle', source: 'tabler' }, // Tabler example
  { match: 'alert-danger', icon: 'alertCircle', source: 'lucide' },
  { match: /^docker-node/, icon: 'server', source: 'lucide' },
  { match: /^docker-mysql/, icon: 'database', source: 'lucide' },
  { match: /^text-center$/, icon: 'adjustmentsHorizontal', source: 'heroicons' },
];

export function getMatchedIcon(utility: string): UtilityRule | null {
  for (const rule of utilityIconMap) {
    if (typeof rule.match === 'string' && rule.match === utility) return rule;
    if (rule.match instanceof RegExp && rule.match.test(utility)) return rule;
  }
  return null;
}