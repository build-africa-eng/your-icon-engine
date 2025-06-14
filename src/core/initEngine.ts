// src/core/initEngine.ts

import { iconEngine } from './engine';
import { standardUtilityIconMap } from '../utils/matcher';
import { customUtilityIconMap } from '../utils/customMatcher';

let isEngineInitialized = false;

/**
 * Initializes the icon engine by registering rule sets.
 * Designed to be called once during app startup.
 */
export const initializeIconEngine = () => {
  if (!isEngineInitialized) {
    console.log("Initializing Icon Engine...");
    iconEngine.registerRules(standardUtilityIconMap);
    iconEngine.registerRules(customUtilityIconMap);
    isEngineInitialized = true;
    console.log("Icon Engine initialized successfully.");
  } else {
    console.log("Icon Engine already initialized.");
  }
};

/**
 * Resets the engine, clearing all registered rules.
 * Useful for testing or hot reloads.
 */
export const resetIconEngine = () => {
  iconEngine.clearRules();
  isEngineInitialized = false;
  console.log("Icon Engine reset.");
};