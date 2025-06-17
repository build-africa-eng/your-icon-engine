// src/matchers/dockerMatchers.ts
import { UtilityRule } from '../types';

export const dockerMatchers: UtilityRule[] = [
  { match: /^nginx$/, icon: 'brandnginx', source: 'tabler' },
  { match: /^redis$/, icon: 'brandredis', source: 'tabler' },
  { match: /^postgres/, icon: 'brandpostgresql', source: 'tabler' },
  { match: /^mysql$/, icon: 'brandmysql', source: 'tabler' },
  { match: /^node$/, icon: 'BrandNodejs', source: 'tabler' },
  { match: /^docker$/, icon: 'brandbocker', source: 'tabler' },
];