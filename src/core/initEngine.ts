// src/core/initEngine.ts

import { iconEngine } from './engine'; import { standardUtilityIconMap } from '../utils/matcher'; import { customUtilityIconMap } from '../utils/customMatcher';

// A flag to ensure registration happens only once across the application's lifecycle. let isEngineInitialized = false;

/**

Initializes the icon engine by registering its rule sets.

This function is designed to be called once during the application's startup phase. */ export const initializeIconEngine = () => { if (!isEngineInitialized) { console.log("Initializing Icon Engine..."); iconEngine.registerRules(standardUtilityIconMap); iconEngine.registerRules(customUtilityIconMap); isEngineInitialized = true; console.log("Icon Engine initialized successfully."); } else { console.log("Icon Engine already initialized."); } };


/**

(Optional) Resets the engine for testing or hot-reloading purposes.

This requires clearRules to be defined in the engine class. */ export const resetIconEngine = () => { if (typeof iconEngine.clearRules === 'function') { iconEngine.clearRules(); isEngineInitialized = false; console.log("Icon Engine has been reset."); } else { console.warn("clearRules() is not implemented in iconEngine."); } };


