import { UtilityRule } from '../types';
import { layoutMatchers } from './layoutMatchers';
import { spacingMatchers } from './spacingMatchers';
import { styleMatchers } from './styleMatchers';
import { borderMatchers } from './borderMatchers';
import { positioningMatchers } from './positioningMatchers';
import { sizingMatchers } from './sizingMatchers';
import { dockerMatchers } from './dockerMatchers';
import { customMatchers } from './customMatchers';
import { animation matchers } from './animationMatchers';
import { interactivityMatchers } from './interactivityMatchers';

export const allUtilityIconMap: UtilityRule[] = [
  ...customMatchers,
  ...dockerMatchers,
  ...layoutMatchers,
  ...spacingMatchers,
  ...styleMatchers,
  ...borderMatchers,
  ...positioningMatchers,
  ...sizingMatchers,
  ...animationMatchers,
  ...interactivityMatchers,
];