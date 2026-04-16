'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, Phone, ArrowRight, Clock, Truck, Bus, GraduationCap, Wrench } from 'lucide-react';
import styles from './courses.module.css';

type TabId = 'hgv' | 'pcv' | 'cpc' | 'hiab';

const tabs: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: 'hgv', label: 'HGV Training', icon: Truck },
  { id: 'pcv', label: 'PCV Bus & Minibus', icon: Bus },
  { id: 'cpc', label: 'Driver CPC', icon: GraduationCap },
  { id: 'hiab', label: 'HIAB Lorry Loader', icon: Wrench },
];

const hgvCourses = [
  {
    id: 'ce',
    cat: 'Cat C+E',
    title: 'HGV Class 1 — Articulated Lorry',
    tag: 'Most Popular',
    price: '£3,645',
    priceNote: 'inc. VAT (Car → C+E full package)',
    altPrice: '£1,995',
    altPriceNote: 'if you already hold Cat C',
    duration: '5 days',
    desc: 'The top HGV qualification. Drive articulated lorries (artics) — the largest vehicles on UK roads. Combines Cat C training with the C+E trailer test.',
    includes: [
      'D2/D4 form assistance',
      'Theory test preparation materials',
      'All practical training sessions',
      'DVSA driving test fee',
      'Driver CPC qualification',
      'Free driving assessment',
    ],
    requirements: [
      'Must hold a full car (Cat B) licence',
      'Pass D2/D4 medical',
      'Hold LGV provisional entitlement',
      'Pass HGV theory tests',
    ],
    jobs: ['Supermarket deliveries', 'General haulage', 'Tanker driving', 'Container logistics'],
  },
  {
    id: 'c',
    cat: 'Cat C',
    title: 'HGV Class 2 — Rigid Lorry',
    tag: 'Great Entry Point',
    price: '£2,495',
    priceNote: 'inc. VAT, all-inclusive',
    duration: '5 days',
    desc: 'Drive rigid lorries over 3.5 tonnes. A great first step into professional HGV driving, and a stepping stone to the Class 1 artic qualification.',
    includes: [
      'D2/D4 form assistance',
      'Theory test preparation',
      'All practical training',
      'DVSA driving test fee',
      'Driver CPC qualification',
      'Free driving assessment',
    ],
    requirements: [
      'Full car (Cat B) licence',
      'Pass D2/D4 medical',
      'LGV provisional entitlement',
      'Pass HGV theory tests',
    ],
    jobs: ['Skip lorry driver', 'Tipper driver', 'Flatbed deliveries', 'Building supplies'],
  },
  {
    id: 'c1',
    cat: 'Cat C1',
    title: 'HGV 7.5 Tonne Lorry',
    tag: 'Quick to Qualify',
    price: '£1,695',
    priceNote: 'inc. VAT, all-inclusive',
    duration: '4 days',
    desc: 'Drive 7.5 tonne vehicles — perfect for ambulance driving, specialist deliveries and local logistics. Shorter training period.',
    includes: [
      'D2/D4 form assistance',
      'Theory test preparation',
      'All practical training',
      'DVSA driving test fee',
      'Driver CPC qualification',
      'Free driving assessment',
    ],
    requirements: ['Full car licence (Cat B)', 'D2/D4 medical', 'LGV C1 provisional'],
    jobs: ['Paramedic/ambulance', '7.5t furniture delivery', 'Specialist courier', 'Local distribution'],
  },
];

const pcvCourses = [
  {
    id: 'd',
    cat: 'Cat D',
    title: 'PCV Bus Driver',
    tag: 'High Demand',
    price: '£2,995',
    priceNote: 'inc. VAT, all-inclusive',
    duration: '7 days',
    desc: 'Become a professional bus driver — one of the most in-demand careers in the UK right now. Covers full-size single and double-deck buses.',
    includes: [
      'D2/D4 form assistance',
      'Theory test preparation',
      'All practical training',
      'DVSA driving test fee',
      'Driver CPC qualification',
      'Free driving assessment',
    ],
    requirements: ['Full car licence', 'D2/D4 medical', 'PCV provisional', 'Must be 21+'],
    jobs: ['London bus driver', 'National Express', 'School transport', 'Coach holidays'],
  },
  {
    id: 'd1',
    cat: 'Cat D1',
    title: 'PCV Minibus Driver',
    tag: 'Affordable',
    price: '£1,895',
    priceNote: 'inc. VAT, all-inclusive',
    duration: '4 days',
    desc: 'Drive minibuses with up to 16 passenger seats for hire or reward. Perfect for community transport, school runs and special needs services.',
    includes: [
      'D2/D4 form assistance',
      'Theory test preparation',
      'All practical training',
      'DVSA driving test fee',
      'Driver CPC (if required)',
      'Free driving assessment',
    ],
    requirements: ['Full car licence', 'D2/D4 medical', 'D1 provisional entitlement'],
    jobs: ['School transport', 'Social care transport', 'Airport shuttle', 'Community minibus'],
  },
];

const cpcCourses = [
  {
    id: 'cpc-initial',
    cat: 'Driver CPC',
    title: 'Initial CPC — Included in All Courses',
    tag: 'Always Included',
    price: 'Included',
    priceNote: 'in all NDC HGV and PCV courses',
    duration: 'Completed during training',
    desc: 'The Driver Certificate of Professional Competence (CPC) is the mandatory professional qualification for all HGV and PCV drivers working commercially. At NDC, it\'s always included in your course price.',
    includes: [
      'Part 1: Theory & Hazard Perception',
      'Part 2: Case Studies test',
      'Part 3: Off-road exercises',
      'Part 4: On-road driving test',
      'DCPC card issued after completion',
    ],
    requirements: [],
    jobs: [],
  },
  {
    id: 'cpc-periodic',
    cat: 'Driver CPC',
    title: 'Periodic CPC — 35 Hours Every 5 Years',
    tag: 'Required to Work',
    price: 'From £250',
    priceNote: 'per module, call for packages',
    duration: '7 hours per module',
    desc: 'If you already hold a CPC and need to renew it, we offer periodic training modules. Complete 5 modules (35 hours) over 5 years to keep your DCPC card valid and your career on the road.',
    includes: [
      'Flexible module scheduling',
      'Government-approved curriculum',
      'Certificate issued per module',
      'DCPC card renewal support',
    ],
    requirements: ['Existing DCPC card', 'Due for renewal'],
    jobs: [],
  },
];

const hiabCourses = [
  {
    id: 'hiab-refresher',
    cat: 'HIAB',
    title: 'HIAB Refresher Training',
    tag: 'Experienced Operators',
    price: 'Call for price',
    priceNote: 'tailored to you',
    duration: '1 day',
    desc: 'A one-day refresher course for experienced lorry loader operators who want to maintain competency and refresh their skills.',
    includes: ['Practical hands-on training', 'Safe slinging & loading', 'Current legal requirements', 'Completion certificate'],
    requirements: ['Previous HIAB experience required'],
    jobs: [],
  },
  {
    id: 'hiab-novice',
    cat: 'HIAB',
    title: 'HIAB Novice Course',
    tag: 'From Zero',
    price: 'Call for price',
    priceNote: 'tailored to you',
    duration: '2 days',
    desc: 'Two-day training for complete novices. Go from no experience to fully qualified lorry loader operator with a nationally recognised certificate.',
    includes: ['Full introduction to HIAB', 'Safe loading principles', 'Slinging & rigging', 'CPCS or NPORS certification'],
    requirements: ['Valid HGV licence recommended'],
    jobs: [],
  },
];

const courseMap: Record<TabId, typeof hgvCourses> = {
  hgv: hgvCourses,
  pcv: pcvCourses as typeof hgvCourses,
  cpc: cpcCourses as typeof hgvCourses,
  hiab: hiabCourses as typeof hgvCourses,
};

function CourseCard({ course }: { course: typeof hgvCourses[0] }) {
  return (
    <div className={styles.courseCard} id={course.id}>
      <div className={styles.courseCardHeader}>
        <div>
          <span className={styles.courseCat}>{course.cat}</span>
          <h3 className={styles.courseTitle}>{course.title}</h3>
        </div>
        <span className={styles.courseTag}>{course.tag}</span>
      </div>

      <p className={styles.courseDesc}>{course.desc}</p>

      <div className={styles.courseMeta}>
        <div className={styles.coursePrice}>
          <div className={styles.priceLabel}>All-Inclusive Price</div>
          <div className={styles.priceValue}>{course.price}</div>
          <div className={styles.priceNote}>{course.priceNote}</div>
          {course.altPrice && (
            <div className={styles.altPrice}>{course.altPrice} <span>{course.altPriceNote}</span></div>
          )}
        </div>
        <div className={styles.courseDuration}>
          <Clock size={18} />
          <div>
            <div className={styles.priceLabel}>Duration</div>
            <div className={styles.durationValue}>{course.duration}</div>
          </div>
        </div>
      </div>

      <div className={styles.courseDetails}>
        <div>
          <h4 className={styles.detailTitle}>What's Included</h4>
          <ul className="checklist">
            {course.includes.map((item) => (
              <li key={item}>
                <span className="check-icon"><Check size={11} /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {course.requirements.length > 0 && (
          <div>
            <h4 className={styles.detailTitle}>Requirements</h4>
            <ul className="checklist">
              {course.requirements.map((req) => (
                <li key={req}>
                  <span className="check-icon"><Check size={11} /></span>
                  {req}
                </li>
              ))}
            </ul>
            {course.jobs.length > 0 && (
              <>
                <h4 className={styles.detailTitle} style={{ marginTop: '1.25rem' }}>Career Opportunities</h4>
                <div className={styles.jobTags}>
                  {course.jobs.map((job) => (
                    <span key={job} className={styles.jobTag}>{job}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className={styles.cardActions}>
        <a href="tel:02086884666" className="btn btn-primary">
          <Phone size={16} />
          Book Free Assessment
        </a>
        <Link href="/contact" className="btn btn-outline-navy">
          Send Enquiry <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default function CoursesContent() {
  const [activeTab, setActiveTab] = useState<TabId>('hgv');
  const courses = courseMap[activeTab];

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__label">Training Courses</span>
          <h1 className="page-hero__title">HGV & PCV Training Courses</h1>
          <p className="page-hero__sub">
            Transparent, all-inclusive prices. No hidden fees. No brokers.
            South London's most trusted driver training centre since 1974.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className={styles.tabs} role="tablist">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  id={`tab-${tab.id}`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* All Inclusive banner */}
          <div className={styles.allIncBanner}>
            <span>✓</span>
            <strong>All prices are all-inclusive</strong> — theory tests, CPC qualification,
            DVSA driving test and all training is included. No hidden extras. Ever.
          </div>

          {/* Course Cards */}
          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Finance note */}
          <div className={styles.financeNote}>
            <h3>Finance Available</h3>
            <p>
              Spread the cost of your training with our flexible finance options.
              Call us on <a href="tel:02086884666">020 8688 4666</a> to discuss what works for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
