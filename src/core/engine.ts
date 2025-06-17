// src/core/engine.ts
import { UtilityRule } from '@utils/types';

class IconEngine {
  private rules: UtilityRule[] = [];
  private iconLibraries: Record<string, any> = {};

  public registerLibraries(libs: Record<string, any>): void {
    this.iconLibraries = libs;
  }

  public getLibraries(): Record<string, any> {
    return this.iconLibraries;
  }

  public registerRules(newRules: UtilityRule[]): void {
    for (const rule of newRules) {
      if (this.rules.some(r => r.match.toString() === rule.match.toString())) {
        console.warn('Duplicate or overlapping rule detected:', rule.match);
      }
    }
    this.rules.push(...newRules);
  }

  public getMatchedIcon(utility: string): UtilityRule | null {
    return this.rules.find(rule =>
      typeof rule.match === 'string'
        ? rule.match === utility
        : rule.match.test(utility)
    ) || null;
  }

  public clearRules(): void {
    this.rules = [];
  }

  public getRuleCount(): number {
    return this.rules.length;
  }

  public getRules(): UtilityRule[] {
    return this.rules;
  }
}

export const iconEngine = new IconEngine();