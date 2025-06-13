// src/utils/matcher.ts
export type IconSource = 'lucide' | 'heroicons';

export interface UtilityRule {
  match: string | RegExp;
  icon: string;
  source: IconSource;
}

export const utilityIconMap: UtilityRule[] = [
  { match: /^bg-/, icon: 'palette', source: 'lucide' }, // lucide:Palette
  { match: /^text-/, icon: 'type', source: 'lucide' }, // lucide:Type
  { match: /^border-/, icon: 'square', source: 'lucide' }, // lucide:Square
  { match: /^flex/, icon: 'move-horizontal', source: 'lucide' }, // lucide:MoveHorizontal
  { match: /^grid/, icon: 'grid', source: 'lucide' }, // lucide:Grid
  { match: /^p-/, icon: 'rectangle-horizontal', source: 'lucide' }, // lucide:RectangleHorizontal
  { match: /^m-/, icon: 'rectangle-vertical', source: 'lucide' }, // lucide:RectangleVertical
  { match: /^w-/, icon: 'stretch-horizontal', source: 'lucide' }, // lucide:StretchHorizontal
  { match: /^h-/, icon: 'stretch-vertical', source: 'lucide' }, // lucide:StretchVertical
  { match: /^rounded-/, icon: 'app-window', source: 'lucide' }, // lucide:AppWindow
  { match: /^shadow-/, icon: 'layers', source: 'lucide' }, // lucide:Layers
  { match: /^items-/, icon: 'align-vertical-justify-center', source: 'lucide' }, // lucide:AlignVerticalJustifyCenter
  { match: /^justify-/, icon: 'align-horizontal-justify-center', source: 'lucide' }, // lucide:AlignHorizontalJustifyCenter
  { match: 'alert-danger', icon: 'alert-circle', source: 'lucide' }, // lucide:AlertCircle
  { match: /^docker-node/, icon: 'server', source: 'lucide' }, // lucide:Server (generic for Node.js)
  { match: /^docker-mysql/, icon: 'database', source: 'lucide' }, // lucide:Database (generic for MySQL)
  { match: /^text-center$/, icon: 'adjustments-horizontal', source: 'heroicons' }, // heroicons:AdjustmentsHorizontal
];

export function getMatchedIcon(utility: string): UtilityRule | null {
  for (const rule of utilityIconMap) {
    if (typeof rule.match === 'string' && rule.match === utility) return rule;
    if (rule.match instanceof RegExp && rule.match.test(utility)) return rule;
  }
  return null;
}