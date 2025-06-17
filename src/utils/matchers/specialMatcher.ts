// src/utils/iconRules/specialMatcher.ts
import { UtilityRule } from './types';

export const specialUtilityIconMap: UtilityRule[] = [
  // More specific rules come BEFORE general rules.
  { match: /^text-center$/, icon: 'align-center', source: 'lucide' },
  { match: 'alert-danger', icon: 'alert-circle', source: 'lucide' },
  { match: /^docker-node/, icon: 'hard-drive', source: 'lucide' },
{ match: /^docker-mysql/, icon:
'table', source: 'lucide' },
  { match: /^alert-success$/, icon: 'check-circle', source: 'lucide' },
{ match: /^docker-redis/, icon:
'box', source: 'lucide' },
{ match: /^docker-nginx/, icon:
'network', source: 'lucide' },
];
