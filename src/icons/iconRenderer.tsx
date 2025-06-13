// src/icons/IconRenderer.tsx
import React, { Suspense, lazy } from 'react';
const getLucideIcon = lazy(() => import('./lucide').then((mod) => ({ default: mod.getLucideIcon })));
const getHeroIcon = lazy(() => import('./heroicons').then((mod) => ({ default: mod.getHeroIcon })));
import { IconSource } from '../utils/matcher';

interface IconRendererProps {
  icon: string;
  source: IconSource;
  className?: string;
}

export function IconRenderer({ icon, source, className = 'w-5 h-5' }: IconRendererProps) {
  const DefaultIcon = getLucideIcon ? () => <getLucideIcon icon="HelpCircle" /> : null;
  return (
    <Suspense fallback={<div className={className} />}>
      {source === 'lucide' && getLucideIcon ? <getLucideIcon icon={icon} /> : null}
      {source === 'heroicons' && getHeroIcon ? <getHeroIcon icon={icon} /> : null}
      {!getLucideIcon && !getHeroIcon && DefaultIcon ? <DefaultIcon /> : null}
    </Suspense>
  );
}