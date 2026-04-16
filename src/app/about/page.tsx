import type { Metadata } from 'next';
import Image from 'next/image';
import { Shield, Users, MapPin, Clock, Award, Heart, Check } from 'lucide-react';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us — 50+ Years of HGV & Bus Driver Training',
  description:
    'Learn about the National Driving Centre — a family-run HGV and bus driver training company in Croydon, South London. DVSA approved since 2014, 50+ years established.',
};

const milestones = [
  { year: '1974', desc: 'National Driving Centre founded in South London.' },
  { year: '1990s', desc: 'Expanded fleet and training facilities to meet growing demand.' },
  { year: '2000s', desc: 'Became the go-to HGV training company for London businesses.' },
  { year: '2014', desc: 'Authorised as a Government Approved DVSA Test Centre — the only one in London.' },
  { year: 'Today', desc: '10,000+ drivers trained. 1,100+ five-star reviews. Still family run.' },
];

const team = [
  {
    name: 'David Reynolds',
    role: 'Chief Driving Instructor',
    experience: '35 years',
    quals: ['NRI Qualified', 'DVSA Examiner Liaison', 'HGV Class 1'],
    bio: "David has been teaching professional drivers since 1989. His patient, methodical approach has helped thousands of people pass their HGV tests and build lasting careers in transport.",
    img: '/images/instructor-chief.png',
  },
  {
    name: 'Michael Garland',
    role: 'Senior HGV & PCV Instructor',
    experience: '22 years',
    quals: ['NRI Qualified', 'HGV Class 1 C+E', 'PCV Cat D'],
    bio: "Michael trained as a lorry driver in the forces before joining NDC. He specialises in taking nervous candidates and giving them the confidence and skills to pass first time.",
    img: '/images/instructor-hgv.png',
  },
];

const facilityFeatures = [
  'Purpose-built training and manoeuvring yard',
  'Modern classroom with professional learning aids',
  'Complimentary tea, coffee & refreshments for students',
  'Ample free, secure on-site parking',
  'Comfortable student rest area',
  'On all major bus, train and tram routes',
  'Walking distance from East Croydon station',
  'DVSA-approved test routes directly from the site',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__label">About NDC</span>
          <h1 className="page-hero__title">South London's Original Driver Training Centre</h1>
          <p className="page-hero__sub">
            A family business built on honesty, expertise, and genuine care for every student.
            Helping people into driving careers since 1974.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">50 Years of Getting It Right</h2>
              <div className="divider" />
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--grey-700)', marginBottom: '1.25rem' }}>
                The National Driving Centre has been helping drivers get their HGV and bus licences in
                London and the South East for over 50 years. What started as a small driving school
                has grown into one of the UK's most trusted commercial vehicle training operations.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--grey-700)', marginBottom: '1.25rem' }}>
                We're proudly family-run, and that matters. You won't be passed off to a broker or
                a call centre. When you ring us, you'll speak to someone who knows driving training
                inside out. Our instructors are directly employed — not subcontracted — and they've
                been with us for years. That stability and loyalty translates into exceptional training.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--grey-700)' }}>
                In October 2014 we became London's only Government-Approved DVSA driving test centre
                for commercial vehicles. &ldquo;Test where you train&rdquo; isn't just a tagline — it's
                our defining advantage. Familiar surroundings mean less nerves and better results.
              </p>
            </div>
            <div className={styles.metrics}>
              {[
                { val: '50+', label: 'Years established' },
                { val: '10,000+', label: 'Drivers trained' },
                { val: '1,100+', label: 'Five-star reviews' },
                { val: '75%', label: 'Repeat & referral business' },
              ].map((m) => (
                <div key={m.label} className={styles.metricCard}>
                  <div className={styles.metricVal}>{m.val}</div>
                  <div className={styles.metricLabel}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Our History</span>
            <h2 className="section-title light">50 Years of Milestones</h2>
            <div className="divider centered" />
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={styles.milestone}>
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneLine}>
                  <div className={styles.milestoneDot} />
                  {i < milestones.length - 1 && <div className={styles.milestoneTrack} />}
                </div>
                <div className={styles.milestoneDesc}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DVSA Section */}
      <section className={`section ${styles.dvsaSection}`}>
        <div className="container">
          <div className={styles.dvsaGrid}>
            <div>
              <span className="section-label">DVSA Approved</span>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                London's Only Government-Approved DVSA Test Centre
              </h2>
              <p style={{ color: 'var(--grey-700)', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                In October 2014, the National Driving Centre was authorised by the DVSA as a
                Government-Approved driving test centre for LGV and PCV vehicles. We're the only
                commercial vehicle test centre of this kind in London.
              </p>
              <p style={{ color: 'var(--grey-700)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Our test centre complies fully with all DVSA procedures and standards. Our
                delegated DVSA examiners conduct tests on the very same routes you train on.
              </p>
              <div className={styles.dvsaBadges}>
                <div className={styles.dvsaBadge}>
                  <Shield size={22} />
                  DVSA Government Approved
                </div>
                <div className={styles.dvsaBadge}>
                  <Award size={22} />
                  LGV & PCV Test Centre
                </div>
                <div className={styles.dvsaBadge}>
                  <Check size={22} />
                  Since October 2014
                </div>
              </div>
            </div>
            <div className={styles.dvsaHighlight}>
              <div className={styles.quoteBlock}>
                <div className={styles.quoteText}>"Test where you train"</div>
                <p className={styles.quoteSub}>
                  You train on our site for 4–7 days, get comfortable, then take your DVSA test on the
                  same roads. No last-minute unfamiliar routes. No extra pressure. Just your best performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Our Instructors</span>
            <h2 className="section-title">Meet the Team</h2>
            <div className="divider centered" />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              All our instructors are directly employed, NRI-qualified, and have decades of
              real-world commercial driving experience.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamImgWrap}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className={styles.teamImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.teamInfo}>
                  <div className={styles.experienceBadge}>
                    <Clock size={13} />
                    {member.experience} experience
                  </div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <div className={styles.teamRole}>{member.role}</div>
                  <p className={styles.teamBio}>{member.bio}</p>
                  <div className={styles.teamQuals}>
                    {member.quals.map((q) => (
                      <span key={q} className={styles.qual}>{q}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className={`section ${styles.facilitySection}`}>
        <div className="container">
          <div className={styles.facilityGrid}>
            <div>
              <span className="section-label">Our Centre</span>
              <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                Purpose-Built Training Facility
              </h2>
              <p style={{ color: 'var(--grey-700)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Based at the old Territorial Army Barracks on Mitcham Road in Croydon, our training
                centre has ample space, excellent facilities, and is well-connected by public transport.
                Unlike some so-called training companies that meet students in car parks — we have a
                proper home.
              </p>
              <ul className="checklist">
                {facilityFeatures.map((f) => (
                  <li key={f}>
                    <span className="check-icon"><Check size={11} /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.contactBox}>
              <h3>Find Us</h3>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>Territorial Army Barracks<br />Mitcham Rd, Croydon CR0 3RU</span>
              </div>
              <div className={styles.contactItem}>
                <Clock size={18} />
                <span>Monday – Friday: 07:00 – 17:00</span>
              </div>
              <div className={styles.contactItem}>
                <Heart size={18} />
                <span>Free parking on site</span>
              </div>
              <a href="tel:02086884666" className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
                Call 020 8688 4666
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
