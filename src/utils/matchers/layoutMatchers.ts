import { UtilityRule } from '../types';

export const layoutMatchers: UtilityRule[] = [
  { match: /^flex/, icon: 'layout', source: 'lucide' },
  { match: /^grid/, icon: 'layout-grid', source: 'lucide' },
  { match: /^items-/, icon: 'align-box-center-middle', source: 'tabler' },
  { match: /^justify-/, icon: 'align-box-center-middle', source: 'tabler' },
];