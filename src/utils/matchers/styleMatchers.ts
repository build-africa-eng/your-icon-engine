// src/matchers/styleMatchers.ts
import { UtilityRule } from '../types';

export const styleMatchers: UtilityRule[] = [
  { match: /^bg-/, icon: 'Palette', source: 'tabler' },
  { match: /^text-/, icon: 'Typography', source: 'tabler' },
  { match: /^font-/, icon: 'LetterCase', source: 'tabler' },
  { match: /^italic$/, icon: 'Italic', source: 'tabler' },
  { match: /^not-italic$/, icon: 'ItalicOff', source: 'tabler' },
  { match: /^underline$/, icon: 'Underline', source: 'tabler' },
  { match: /^line-through$/, icon: 'Strikethrough', source: 'tabler' },
  { match: /^no-underline$/, icon: 'UnderlineOff', source: 'tabler' },
  { match: /^shadow/, icon: 'Shadow', source: 'tabler' },
  { match: /^opacity-/, icon: 'Droplet', source: 'tabler' },
];