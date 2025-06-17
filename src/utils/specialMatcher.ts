// src/utils/iconRules/specialMatcher.ts
import { UtilityRule } from './types';

export const specialUtilityIconMap: UtilityRule[] = [
  { match: /^alert-danger$/, icon: 'alert-triangle', source: 'lucide' },
  { match: /^alert-warning$/, icon: 'alert-octagon', source: 'lucide' },
  { match: /^alert-success$/, icon: 'check-circle', source: 'lucide' },
];