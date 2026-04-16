import Link from 'next/link';
import { ArrowRight, Truck, Bus, GraduationCap, Check } from 'lucide-react';
import styles from './CourseTeaser.module.css';

const courses = [
  {
    icon: Truck,
    category: 'HGV Training',
    badge: 'Most Popular',
    title: 'Class 1 & Class 2 Lorry',
    description:
      'Get your HGV licence and open the door to thousands of driving jobs across the UK. We train for Cat C (Class 2) and Cat C+E (Class 1 artic).',
    includes: ['Theory test support', 'Practical training', 'DVSA driving test', 'Driver CPC included'],
    priceFrom: '£2,495',
    duration: '5–7 days',
    href: '/courses#hgv',
    accent: 'navy',
  },
  {
    icon: Bus,
    category: 'PCV Training',
    badge: 'Great Career',
    title: 'Bus & Minibus Driving',
    description:
      'Become a professional bus or minibus driver with our PCV training. Category D for full-size bus, Category D1 for minibus operations.',
    includes: ['Theory test support', 'Practical training', 'DVSA driving test', 'Driver CPC included'],
    priceFrom: '£1,895',
    duration: '4–7 days',
    href: '/courses#pcv',
    accent: 'gold',
  },
  {
    icon: GraduationCap,
    category: 'Driver CPC',
    badge: 'Legally Required',
    title: 'Driver CPC Qualification',
    description:
      'The Certificate of Professional Competence is required for all professional HGV and PCV drivers. Always included in our course prices.',
    includes: ['35 hours periodic training', 'DCPC card issued', 'Flexible scheduling', 'Qualified instructors'],
    priceFrom: 'Included',
    duration: 'Included in course',
    href: '/courses#cpc',
    accent: 'navy',
  },
];

export default function CourseTeaser() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">Training Courses</span>
          <h2 className="section-title">All-Inclusive HGV & PCV Courses</h2>
          <div className="divider centered" />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            The price you see is the price you pay. No brokers, no hidden fees — just expert training
            from our directly-employed instructors at our purpose-built South London centre.
          </p>
        </div>

        <div className={styles.grid}>
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div key={course.title} className={`${styles.card} ${styles[`card-${course.accent}`]}`}>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon size={26} />
                  </div>
                  <span className={styles.badgeChip}>{course.badge}</span>
                </div>
                <div className={styles.category}>{course.category}</div>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.cardDesc}>{course.description}</p>

                <ul className={styles.includes}>
                  {course.includes.map((item) => (
                    <li key={item}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <div className={styles.priceRow}>
                    <div>
                      <div className={styles.priceLabel}>From</div>
                      <div className={styles.price}>{course.priceFrom}</div>
                    </div>
                    <div>
                      <div className={styles.priceLabel}>Duration</div>
                      <div className={styles.duration}>{course.duration}</div>
                    </div>
                  </div>
                  <Link href={course.href} className={styles.cardCta}>
                    View Course Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link href="/courses" className="btn btn-navy btn-lg">
            View All Courses & Prices
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
