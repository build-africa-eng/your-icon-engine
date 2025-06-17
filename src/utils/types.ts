// src/utils/types.ts
export type IconSource = 'lucide' | 'heroicons' | 'tabler';

export interface UtilityRule {
  match: string | RegExp;
  icon: string;
  source: IconSource;
  variant?: string;
}

export interface IconLibrary {
  [key: string]: React.ElementType;
}