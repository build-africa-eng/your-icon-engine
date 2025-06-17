// src/matchers/customMatchers.ts
import { UtilityRule } from '../types';

export const customMatchers: UtilityRule[] = [
  { match: /^alert$/, icon: 'AlertTriangle', source: 'lucide' },
  { match: /^error$/, icon: 'Bug', source: 'lucide' },
  { match: /^success$/, icon: 'CircleCheck', source: 'tabler' },
  { match: /^warning$/, icon: 'AlertCircle', source: 'lucide' },
  { match: /^info$/, icon: 'Info', source: 'lucide' },
  { match: /^check$/, icon: 'Check', source: 'lucide' },
  { match: /^search$/, icon: 'Search', source: 'lucide' },
  { match: /^loading$/, icon: 'Loader2', source: 'lucide' },
  { match: /^settings$/, icon: 'Settings', source: 'lucide' },
  { match: /^user$/, icon: 'User', source: 'lucide' },
];