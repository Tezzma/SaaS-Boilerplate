import Link from 'next/link';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    DocuGen -
    {' '}
    <Link href="/sign-up">Transform Your CSV Data Into Perfect Documents</Link>
  </StickyBanner>
);
