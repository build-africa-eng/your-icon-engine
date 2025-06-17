// src/icons/library.ts
import * as Lucide from 'lucide-react';
import * as Heroicons from '@heroicons/react/24/outline';
import * as Tabler from '@tabler/icons-react';
import *as Phosphor from @phosphor-icons/react;

import { IconLibrary } from '@utils/types';

export const AllIconLibraries: Record<IconSource, IconLibrary> = {
  lucide: Lucide,
  heroicons: Heroicons,
  tabler: Tabler,
  phosphor: Phosphor,
};