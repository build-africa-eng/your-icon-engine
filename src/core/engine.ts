// src/core/engine.ts
import { UtilityRule } from '@utils/types';

class IconEngine {
  private rules: UtilityRule[] = [];
  private iconLibraries: Record<string, any> = {};
  private _namespace = 'default';

  public registerLibraries(libs: Record<string, any>): void {
    this.iconLibraries = libs;
  }

  public getLibraries(): Record<string, any> {
    return this.iconLibraries;
  }

  public registerRules(newRules: UtilityRule[], namespace = this._namespace): void {
    if (!Array.isArray(newRules)) {
      throw new Error('Rules must be provided as an array');
    }
    const namespacedRules = newRules.map(rule => ({ ...rule, __namespace: namespace }));
    this.rules.push(...namespacedRules);
  }

  public registerPluginRules(pluginName: string, rules: UtilityRule[]): void {
    this.registerRules(rules, pluginName);
  }

  public getMatchedIcon(utility: string): UtilityRule | null {
    return (
      this.rules.find(rule =>
        typeof rule.match === 'string'
          ? rule.match === utility
          : rule.match.test(utility)
      ) || null
    );
  }

  public getDebugInfo(utility: string): {
    matchedRule: UtilityRule | null;
    source?: string;
    fallback?: string;
  } {
    const rule = this.getMatchedIcon(utility);
    if (!rule) {
      return {
        matchedRule: null,
        fallback: 'HelpCircle',
        source: 'lucide'
      };
    }
    return {
      matchedRule: rule,
      source: rule.source
    };
  }

  public clearRules(): void {
    this.rules = [];
  }

  public getRuleCount(): number {
    return this.rules.length;
  }
}

export const iconEngine = new IconEngine();