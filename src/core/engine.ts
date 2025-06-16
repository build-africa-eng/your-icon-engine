import { UtilityRule } from '@utils/types';

class IconEngine {
  private rules: UtilityRule[] = [];

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