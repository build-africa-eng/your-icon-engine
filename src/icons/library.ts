// src/icons/library.ts
import * as Lucide from 'lucide-react';
import * as Heroicons from '@heroicons/react/24/outline';
import * as Tabler from '@tabler/icons-react';

// This is a "side-effect" import. It tells Vite/Rollup to keep these modules
// in the bundle. We don't need to export or use them here.
// The objects are now available in the global scope of the bundle for your adapters to find.
if (false) {
  // This block will be removed by minifiers, but the imports will be preserved.
  console.log(Lucide, Heroicons, Tabler);
}