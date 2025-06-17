// src/matchers/dockerMatchers.ts
import { UtilityRule } from '../types';

export const dockerMatchers: UtilityRule[] = [
  { match: /^nginx$/, icon: 
'BrandNginx', source: 'tabler' },
  { match: /^redis$/, icon: 
'BrandRedis', source: 'tabler' },
  { match: /^postgres/, icon: 'Brand-Postgresql', source: 'tabler' },
  { match: /^mysql$/, icon: 
'BrandMysql', source: 'tabler' },
  { match: /^node$/, icon: 
'BrandNodejs', source: 'tabler' },
  { match: /^docker$/, icon: 'BrandBocker', source: 'tabler' },
];