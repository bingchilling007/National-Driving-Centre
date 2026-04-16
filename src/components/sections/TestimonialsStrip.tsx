import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './TestimonialsStrip.module.css';

const reviews = [
  { name: 'James W.', course: 'HGV Class 1 (C+E)', rating: 5, text: 'Passed first time! The instructors at NDC are brilliant — patient, professional and really know their stuff. Best investment I ever made.' },
  { name: 'Sarah M.', course: 'PCV Bus (Cat D)', rating: 5, text: 'I was nervous about changing careers at 38 but the team made me feel so welcome. Test where you train is a game-changer — no last minute surprises.' },
  { name: 'Danny B.', course: 'HGV Class 2 (Cat C)', rating: 5, text: "Straight-talking, no hidden costs, and the instructors genuinely care about you passing. I'd recommend NDC to anyone looking to get into lorry driving." },
  { name: 'Priya K.', course: 'PCV Minibus (D1)', rating: 5, text: 'Booked my free assessment, did the course, passed my test — all at the same site in Croydon. Brilliant service from start to finish.' },
  { name: 'Marcus T.', course: 'HGV Class 1 (C+E)', rating: 5, text: 'After being told by another company I needed extra training (and £££ more), NDC assessed me properly and I passed in the standard days. Honest and professional.' },
];

function StarsRow({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  );
}

export default function TestimonialsStrip() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">Customer Reviews</span>
            <h2 className="section-title">What Our Students Say</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Over 1,100 five-star reviews across Google, Trustpilot and Facebook.
            </p>
          </div>
          <div className={styles.headerRight}>
            <div className={styles.aggregate}>
              <StarsRow count={5} />
              <div className={styles.aggregateScore}>4.9 / 5</div>
              <div className={styles.aggregateLabel}>1,100+ Reviews</div>
            </div>
            <Link href="/testimonials" className="btn btn-outline-navy">
              See All Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.scrollRow}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              <StarsRow count={r.rating} />
              <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
              <div className={styles.meta}>
                <div className={styles.avatar}>{r.name.charAt(0)}</div>
                <div>
                  <div className={styles.reviewName}>{r.name}</div>
                  <div className={styles.reviewCourse}>{r.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
