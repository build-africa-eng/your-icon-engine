// src/utils/types.ts
export type IconSource = 'lucide' | 'heroicons' | 'tabler';

export interface UtilityRule {
  match: string | RegExp;
  icon: string;
  source: IconSource;
  // Future-proofing: you could add optional variants like 'solid' | 'outline'
  variant?: string;
}