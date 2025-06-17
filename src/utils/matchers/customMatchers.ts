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
  { match: /^prose/,icon:
'FileText', source: 'lucide' },
  { match: /^sr-only$/,icon: 
'EyeOff', source: 'lucide' },
  {
    match: /^not-sr-only$/,icon: 
'Eye', source: 'lucide' },
  { match: /^visually-hidden$/,
    icon: 'EyeOff', source: 'lucide' },
  { match: /^content-center$/,icon: 'AlignVerticalCenter', source: 'tabler' },
  { match: /^truncate$/, icon: 'Scissors', source: 'lucide' },
  { match: /^overflow-ellipsis$/, icon: 'MoreHorizontal', source: 'lucide' },
  { match: /^placeholder/, icon: 
'Edit', source: 'lucide', },
];