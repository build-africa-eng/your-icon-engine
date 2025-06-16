// This file's only purpose is to be imported for its side effects.
// It imports the icon libraries so that Vite's build process knows
// they are being used and does not remove them via tree-shaking.

import * as Lucide from 'lucide-react';
import * as Heroicons from '@heroicons/react/24/outline';
import * as Tabler from '@tabler/icons-react';

if (false) {
  // This block is removed by minifiers, but the imports are preserved.
  console.log(Lucide, Heroicons, Tabler);
}