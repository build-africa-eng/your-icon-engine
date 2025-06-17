// src/core/initEngine.ts
import { iconEngine } from './engine';
import { standardUtilityIconMap } from '@utils/matcher';
import { customUtilityIconMap } from '@utils/customMatcher';
import { AllIconLibraries } from '@icons/library'; // Import the new object

let isEngineInitialized = false;

export const initializeIconEngine = () => {
  if (!isEngineInitialized) {
    // 1. Register the actual icon library modules with the engine.
    iconEngine.registerLibraries(AllIconLibraries);

    // 2. Register the rules as before.
    iconEngine.registerRules(standardUtilityIconMap);
    iconEngine.registerRules(customUtilityIconMap);
    
    isEngineInitialized = true;
    console.log('Icon Engine initialized with', iconEngine.getRuleCount(), 'rules.');
  }
};

// The reset function does not need to change.
export const resetIconEngine = () => {
  iconEngine.clearRules();
  isEngineInitialized = false;
  console.log('Icon Engine reset.');
};