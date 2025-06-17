// src/matchers/dockerMatchers.ts
import { UtilityRule } from '../types';

export const dockerMatchers: UtilityRule[] = [
  { match: /^nginx$/, icon: 'BrandNginx', source: 'tabler' },
  { match: /^redis$/, icon: 'BrandRedis', source: 'tabler' },
  { match: /^postgres/, icon: 'BrandPostgresql', source: 'tabler' },
  { match: /^mysql$/, icon: 'BrandMysql', source: 'tabler' },
  { match: /^node$/, icon: 'BrandNodejs', source: 'tabler' },
  { match: /^docker$/, icon: 'BrandDocker', source: 'tabler' }, // <- was 'BrandBocker' (typo)
];