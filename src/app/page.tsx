import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import CourseTeaser from '@/components/sections/CourseTeaser';
import WhyNDC from '@/components/sections/WhyNDC';
import TestimonialsStrip from '@/components/sections/TestimonialsStrip';
import ProcessSteps from '@/components/sections/ProcessSteps';

export const metadata: Metadata = {
  title: 'National Driving Centre | HGV & Bus Driver Training London',
  description:
    'DVSA Approved HGV, LGV & PCV driver training in South London. All-inclusive prices, 50+ years experience, 1,100+ five-star reviews. Train and test at the same place in Croydon.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CourseTeaser />
      <WhyNDC />
      <ProcessSteps />
      <TestimonialsStrip />
    </>
  );
}
