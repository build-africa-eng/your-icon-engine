// src/core/initEngine.ts
import { iconEngine } from './engine';
import { standardUtilityIconMap } from '@utils/matcher';
import { customUtilityIconMap } from '@utils/customMatcher';

let isEngineInitialized = false;

export const initializeIconEngine = () => {
  if (!isEngineInitialized) {
    console.log('Initializing Icon Engine...');
    try {
      console.log('Standard rules:', standardUtilityIconMap.length);
      console.log('Custom rules:', customUtilityIconMap.length);
      iconEngine.registerRules(standardUtilityIconMap);
      iconEngine.registerRules(customUtilityIconMap);
      isEngineInitialized = true;
      console.log('Icon Engine initialized with', iconEngine.getRuleCount(), 'rules.');
    } catch (error) {
      console.error('Initialization error:', error);
      throw error;
    }
  } else {
    console.log('Icon Engine already initialized with', iconEngine.getRuleCount(), 'rules.');
  }
};

export const resetIconEngine = () => {
  iconEngine.clearRules();
  isEngineInitialized = false;
  console.log('Icon Engine reset.');
};