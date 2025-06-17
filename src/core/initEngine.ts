// src/core/initEngine.ts
import { iconEngine } from './engine';
import { AllIconLibraries } from '@icons/library';
import { allUtilityIconMap } from '@utils/allMatchers'; // ✅ NEW IMPORT

let isEngineInitialized = false;

export const initializeIconEngine = () => {
  if (!isEngineInitialized) {
    iconEngine.registerLibraries(AllIconLibraries);
    iconEngine.registerRules(allUtilityIconMap); // ✅ USE COMBINED RULES

    isEngineInitialized = true;
    console.log('Icon Engine initialized with', iconEngine.getRuleCount(), 'rules.');
  }
};

export const resetIconEngine = () => {
  iconEngine.clearRules();
  isEngineInitialized = false;
  console.log('Icon Engine reset.');
};