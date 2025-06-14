// src/icons/heroicons.ts
import * as Heroicons from '@heroicons/react/24/outline';

// Define the Heroicons module type for better type inference
type HeroiconType = keyof typeof Heroicons;

// Default icon for unmatched cases
const DEFAULT_ICON = 'QuestionMarkCircleIcon';

// Utility function to convert to PascalCase with caching
const pascalCaseCache = new Map<string, string>();
function toPascalCase(str: string): string {
  if (pascalCaseCache.has(str)) return pascalCaseCache.get(str)!;

  const pascal = str
    .replace(/[-_]([a-z])/g, g => g[1].toUpperCase()) // Handle hyphens and underscores
    .replace(/(^\w|-\w)/g, g => g.replace(/^-/, '').toUpperCase());
  pascalCaseCache.set(str, pascal);
  return pascal;
}

// Function to safely get Heroicon with validation
export function getHeroIcon(name: string): React.ElementType {
  // Append 'Icon' to the name for Heroicons convention
  const iconName = `${toPascalCase(name)}Icon`;

  // Check if the icon exists in Heroicons
  if (iconName in Heroicons) {
    return Heroicons[iconName as HeroiconType];
  }

  // Log warning for debugging (optional, remove in production)
  console.warn(`Heroicon '${name}' not found, falling back to '${DEFAULT_ICON}'`);

  return Heroicons[DEFAULT_ICON as HeroiconType];
}