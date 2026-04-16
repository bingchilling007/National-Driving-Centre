import type { Metadata } from 'next';
import CoursesContent from './CoursesContent';

export const metadata: Metadata = {
  title: 'HGV & PCV Training Courses with Prices',
  description:
    'All-inclusive HGV (Cat C, C+E), PCV (Cat D, D1) and Driver CPC courses in South London. Transparent prices from £1,695. DVSA approved. No hidden fees.',
};

export default function CoursesPage() {
  return <CoursesContent />;
}
