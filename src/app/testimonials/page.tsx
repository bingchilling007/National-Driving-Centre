import type { Metadata } from 'next';
import { Star, ExternalLink } from 'lucide-react';
import styles from './testimonials.module.css';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials',
  description:
    'Read genuine reviews from NDC students. Over 1,100 five-star reviews across Google, Trustpilot and Facebook. See why we\'re London\'s most trusted HGV training centre.',
};

const reviews = [
  { name: 'James W.', course: 'HGV Class 1 (C+E)', date: 'March 2026', rating: 5, text: 'Passed first time! The instructors at NDC are absolutely brilliant — patient, professional and really know their stuff. The free assessment was so helpful and gave me real confidence going in. Best investment I\'ve ever made in my career.' },
  { name: 'Sarah M.', course: 'PCV Bus (Cat D)', date: 'February 2026', rating: 5, text: 'I was nervous about a career change at 38 but the team made me feel so welcome right from the start. Testing where you train is a game-changer — by test day the routes felt completely familiar. Can\'t recommend NDC enough.' },
  { name: 'Danny B.', course: 'HGV Class 2 (Cat C)', date: 'January 2026', rating: 5, text: 'Straight-talking, no hidden costs, and the instructors genuinely care about you passing. I\'d had a bad experience with a broker before — NDC is the polar opposite. Honest, professional and very good at what they do.' },
  { name: 'Priya K.', course: 'PCV Minibus (D1)', date: 'March 2026', rating: 5, text: 'I booked my free assessment, did the course, passed my test — all at the same site in Croydon. Brilliant service from start to finish. The free assessment was a great way to understand where I was before spending any money.' },
  { name: 'Marcus T.', course: 'HGV Class 1 (C+E)', date: 'February 2026', rating: 5, text: 'After being told by another company I needed extra training costing hundreds more, NDC assessed me properly and I passed in the standard number of days. Their honesty and expertise saved me a lot of money and stress.' },
  { name: 'Lee H.', course: 'HGV 7.5 Tonne (C1)', date: 'December 2025', rating: 5, text: 'Did my C1 for my paramedic job. The team understood exactly what I needed and tailored the training accordingly. Four days, passed first time. The facilities are excellent and the staff are really welcoming.' },
  { name: 'Tom R.', course: 'HGV Class 1 (C+E)', date: 'January 2026', rating: 5, text: 'I went from a car licence to a Class 1 artic in one all-inclusive package. NDC were upfront about exactly what was included from day one. No surprises, no upsells. Just excellent training and a pass certificate.' },
  { name: 'Karen L.', course: 'PCV Bus (Cat D)', date: 'November 2025', rating: 5, text: 'Became a bus driver at 45 — something I\'d always wanted to do. NDC made it achievable. The instructors are so patient and encouraging. I was nervous about the test but it felt so comfortable being on familiar roads.' },
  { name: 'Christos P.', course: 'HGV Class 2 (Cat C)', date: 'October 2025', rating: 5, text: 'My employer sent me to NDC and it was money very well spent. Clean modern lorries, excellent instructors, great facilities in Croydon. I\'ve already recommended NDC to three colleagues who all booked.' },
  { name: 'Ryan F.', course: 'Driver CPC Periodic', date: 'March 2026', rating: 5, text: 'Came back to NDC for my periodic CPC training. Same high standard as when I did my original licence. Flexible, well-organised, and the trainers really know the industry. Never going anywhere else.' },
  { name: 'Donna S.', course: 'PCV Minibus (D1)', date: 'February 2026', rating: 5, text: 'I drive for a local community transport scheme and needed my D1. NDC understood exactly what the job entails and focused the training accordingly. Fantastic experience and passed first attempt.' },
  { name: 'Ahmed K.', course: 'HGV Class 1 (C+E)', date: 'January 2026', rating: 5, text: 'Three of us from my company trained at NDC in the same week. All three of us passed. That says everything. NDC genuinely prepare you for the real test, not just tick boxes.' },
];

function StarsRow({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} fill="currentColor" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__label">Customer Reviews</span>
          <h1 className="page-hero__title">What Our Students Say About NDC</h1>
          <p className="page-hero__sub">
            Over 1,100 five-star reviews across Google, Trustpilot and Facebook.
            These are real people who came to us, trained hard, and passed their tests.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--grey-50)' }}>
        <div className="container">
          {/* Aggregate score bar */}
          <div className={styles.aggregate}>
            <div className={styles.scoreCol}>
              <div className={styles.scoreBig}>4.9</div>
              <StarsRow count={5} />
              <div className={styles.scoreLabel}>Average Rating</div>
            </div>
            <div className={styles.platforms}>
              {[
                { name: 'Google Reviews', score: '4.9', count: '600+' },
                { name: 'Trustpilot', score: '4.8', count: '300+' },
                { name: 'Facebook', score: '4.9', count: '200+' },
              ].map((p) => (
                <div key={p.name} className={styles.platform}>
                  <div className={styles.platformName}>{p.name}</div>
                  <div className={styles.platformScore}>{p.score}</div>
                  <div className={styles.platformCount}>{p.count} reviews</div>
                </div>
              ))}
            </div>
            <a
              href="https://uk.trustpilot.com/review/www.nationaldrivingcentre.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on Trustpilot
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Reviews grid */}
          <div className={styles.grid}>
            {reviews.map((r) => (
              <div key={r.name + r.date} className={styles.card}>
                <StarsRow count={r.rating} />
                <p className={styles.reviewText}>&ldquo;{r.text}&rdquo;</p>
                <div className={styles.reviewMeta}>
                  <div className={styles.avatar}>{r.name.charAt(0)}</div>
                  <div>
                    <div className={styles.reviewerName}>{r.name}</div>
                    <div className={styles.reviewerDetails}>
                      {r.course} · {r.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
