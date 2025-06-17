// src/matchers/styleMatchers.ts
import { UtilityRule } from '../types';

export const styleMatchers: UtilityRule[] = [
  { match: /^text-/, icon: 'Typography', source: 'tabler' },
  { match: /^font-/, icon: 'TypographySmall', source: 'tabler' },
  { match: /^tracking-/, icon: 'LetterSpacing', source: 'tabler' },
  { match: /^leading-/, icon: 'LineHeight', source: 'tabler' },

  { match: /^bg-/, icon: 'ColorSwatch', source: 'tabler' },
  { match: /^from-/, icon: 'Gradient', source: 'tabler' },
  { match: /^via-/, icon: 'Gradient', source: 'tabler' },
  { match: /^to-/, icon: 'Gradient', source: 'tabler' },

  { match: /^opacity-/, icon: 'Opacity', source: 'tabler' },
  { match: /^shadow/, icon: 'Shadow', source: 'tabler' },
  { match: /^blur/, icon: 'Blur', source: 'tabler' },

  { match: /^underline/, icon: 'Underline', source: 'tabler' },
  { match: /^line-through/, icon: 'Strikethrough', source: 'tabler' },
  { match: /^italic/, icon: 'Italic', source: 'tabler' },
  { match: /^uppercase/, icon: 'LetterCaseUpper', source: 'tabler' },
  { match: /^lowercase/, icon: 'LetterCaseLower', source: 'tabler' },
  { match: /^capitalize/, icon: 'LetterCaseCapitalize', source: 'tabler' },
];