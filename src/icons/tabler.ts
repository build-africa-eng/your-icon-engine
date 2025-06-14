// src/icons/tabler.ts
import * as Tabler from '@tabler/icons-react';

export function getTablerIcon(name: string): React.ElementType {
  const toPascalCase = (str: string) =>
    str.replace(/(^\w|-\w)/g, (g) => g.replace('-', '').toUpperCase());
  return Tabler[`Icon${toPascalCase(name)}` as keyof typeof Tabler] || Tabler.IconHelp;
}