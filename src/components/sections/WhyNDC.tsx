import { ShieldCheck, Tag, MapPin, GraduationCap, Clock, Users } from 'lucide-react';
import styles from './WhyNDC.module.css';

const reasons = [
  {
    icon: Tag,
    title: 'All-Inclusive Pricing',
    body: 'The price you see is the price you pay. Theory tests, CPC qualification, DVSA test — all included. No nasty surprises.',
  },
  {
    icon: ShieldCheck,
    title: 'DVSA Approved Test Centre',
    body: "London's only DVSA-approved test centre. You train here and test here. Familiar surroundings = better results.",
  },
  {
    icon: MapPin,
    title: 'Free Driving Assessment',
    body: 'Before you spend a penny, come in for a free assessment in the vehicle of your choice. No obligation whatsoever.',
  },
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    body: 'All instructors hold qualifications from the National Register of Instructors (NRI) with decades of combined experience.',
  },
  {
    icon: Clock,
    title: '50+ Years Experience',
    body: "Established in 1974. We've helped over 10,000 people build successful careers as professional drivers.",
  },
  {
    icon: Users,
    title: '75% Repeat Business',
    body: 'Companies return to us time and again to train their drivers. Our reputation speaks for itself.',
  },
];

export default function WhyNDC() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">Why Choose NDC</span>
            <h2 className="section-title">The Smarter Way to Get Your Licence</h2>
            <div className="divider" />
            <p className="section-subtitle">
              We do one thing very well — training drivers. No brokers, no middlemen,
              no hidden fees. Just straight-talking experts who want you to pass.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={styles.iconBox}>
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardBody}>{r.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
