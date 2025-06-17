// src/matchers/dockerMatchers.ts
import { UtilityRule } from '../types';

export const dockerMatchers: UtilityRule[] = [
  { match: /^nginx$/, icon: 
'Brand-Nginx', source: 'tabler' },
  { match: /^redis$/, icon: 'Brand-Redis', source: 'tabler' },
  { match: /^postgres/, icon: 'Brand-Postgresql', source: 'tabler' },
  { match: /^mysql$/, icon: 'BrandMysql', source: 'tabler' },
  { match: /^node$/, icon: 
'BrandNodejs', source: 'tabler' },
  { match: /^docker$/, icon: 'BrandDocker', source: 'tabler' },
];