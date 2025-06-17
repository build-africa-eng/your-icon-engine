// src/core/engine.ts
import { UtilityRule } from '@utils/types';

class IconEngine {
  private rules: UtilityRule[] = [];
  // Add a property to hold the icon libraries
  private iconLibraries: Record<string, any> = {};

  // Add a new method to register the libraries
  public registerLibraries(libs: Record<string, any>): void {
    this.iconLibraries = libs;
  }

  // Add a getter to allow adapters to access the libraries
  public getLibraries(): Record<string, any> {
    return this.iconLibraries;
  }

  public registerRules(newRules: UtilityRule[]): void {
    if (!Array.isArray(newRules)) {
      throw new Error('Rules must be provided as an array');
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
}

export const iconEngine = new IconEngine();