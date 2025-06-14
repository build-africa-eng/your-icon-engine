// src/core/engine.ts
import { UtilityRule } from '../utils/types';

class IconEngine {
  private rules: UtilityRule[] = [];

  /**
   * Registers one or more rule sets with the engine.
   * @param newRules - An array of UtilityRule objects.
   * @throws Error if newRules is invalid (e.g., null or not an array).
   */
  public registerRules(newRules: UtilityRule[]): void {
    if (!Array.isArray(newRules)) {
      throw new Error('Rules must be provided as an array');
    }
    this.rules.push(...newRules);
  }

  /**
   * Finds the first rule that matches the given utility string.
   * @param utility - The utility string (e.g., 'bg-blue-500').
   * @returns A matching UtilityRule or null if no match is found.
   */
  public getMatchedIcon(utility: string): UtilityRule | null {
    return this.rules.find(rule =>
      typeof rule.match === 'string'
        ? rule.match === utility
        : rule.match.test(utility)
    ) || null;
  }

  /**
   * Clears all registered rules.
   * Useful for testing, hot reloading, or engine re-initialization.
   */
  public clearRules(): void {
    this.rules = [];
  }
}

// Export a singleton instance of the engine
export const iconEngine = new IconEngine();