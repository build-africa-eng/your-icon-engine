import { UtilityRule } from '../types';

export const dockerMatchers: UtilityRule[] = [
  { match: /^docker-node/, icon: 'server', source: 'tabler' },
  { match: /^docker-mysql/, icon: 'database', source: 'tabler' },
  { match: /^docker-nginx/, icon: 'globe', source: 'lucide' },
];