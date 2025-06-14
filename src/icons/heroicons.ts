// src/icons/heroicons.ts

import * as Heroicons from '@heroicons/react/24/outline';

export function getHeroIcon(name: string): React.ElementType {
  const toPascalCase = (str: string) =>
    str.replace(/(^\w|-\w)/g, (g) => g.replace('-', '').toUpperCase());
  
  // Append 'Icon' to the name for lookup
  const iconName = `${toPascalCase(name)}Icon`;

  return Heroicons[iconName as keyof typeof Heroicons] || Heroicons.QuestionMarkCircleIcon;
}