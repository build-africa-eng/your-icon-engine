import { UtilityRule } from './types';

// The corrected and final version of the standard rules.
export const standardUtilityIconMap: UtilityRule[] = [
  // General rules
  { match: /^bg-/, icon: 'palette', source: 'lucide' },
  { match: /^text-/, icon: 'type', source: 'lucide' },
  { match: /^border-/, icon: 'square', source: 'lucide' },
  { match: /^flex/, icon: 'layout', source: 'tabler' }, // This rule was missing
  { match: /^grid/, icon: 'layout-grid', source: 'lucide' },
  { match: /^p-/, icon: 'box-padding', source: 'tabler' },
  { match: /^m-/, icon: 'box-margin', source: 'tabler' },
  { match: /^w-/, icon: 'arrow-autofit-width', source: 'tabler' },
  { match: /^h-/, icon: 'arrow-autofit-height', source: 'tabler' },
  { match: /^rounded-/, icon: 'radius-top-left', source: 'tabler' },
  { match: /^shadow-/, icon: 'layers', source: 'lucide' },
  { match: /^items-/, icon: 'align-box-center-middle', source: 'tabler' },
  { match: /^justify-/, icon: 'align-box-center-middle', source: 'tabler' },
 // ✅ Newly added:
  { match: /^user-profile$/, icon: 'user', source: 'lucide' },
  { match: /^volume-high$/, icon: 'volume-2', source: 'lucide' },
];