// src/icons/lucide.ts
import * as Lucide from 'lucide-react';

export function getLucideIcon(name: string): React.ElementType {
  const toPascalCase = (str: string) =>
    str.replace(/(^\w|-\w)/g, (g) => g.replace('-', '').toUpperCase());
  return Lucide[toPascalCase(name) as keyof typeof Lucide] || Lucide.HelpCircle;
}