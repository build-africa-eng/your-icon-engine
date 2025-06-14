// src/icons/library.ts
import * as Lucide from 'lucide-react';
import * as Heroicons from '@heroicons/react/24/outline';
import * as Tabler from '@tabler/icons-react';

// Explicitly attach to global scope
if (typeof window !== 'undefined') {
  (window as any).Lucide = Lucide;
  (window as any).Heroicons = Heroicons;
  (window as any).Tabler = Tabler;
}

// This is a "side-effect" import. The imports are preserved for bundling.
if (false) {
  console.log(Lucide, Heroicons, Tabler);
}