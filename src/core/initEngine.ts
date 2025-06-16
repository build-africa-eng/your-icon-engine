import { iconEngine } from './engine';
import { standardUtilityIconMap } from '@utils/matcher';
import { customUtilityIconMap } from '@utils/customMatcher';

let isEngineInitialized = false;

export const initializeIconEngine = () => {
  if (!isEngineInitialized) {
    iconEngine.registerRules(standardUtilityIconMap);
    iconEngine.registerRules(customUtilityIconMap);
    isEngineInitialized = true;
    console.log('Icon Engine initialized with', iconEngine.getRuleCount(), 'rules.');
  }
};

export const resetIconEngine = () => {
  iconEngine.clearRules();
  isEngineInitialized = false;
  console.log('Icon Engine reset.');
};