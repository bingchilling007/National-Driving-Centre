'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, Shield, Star, Award, CheckCircle } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background */}
      <div className={styles.bg}>
        <Image
          src="/images/hero-lorry.png"
          alt="HGV lorry on a UK motorway at dusk"
          fill
          priority
          className={styles.bgImg}
          sizes="100vw"
        />
        <div className={styles.overlay} />
        <div className={styles.overlayGradient} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        {/* Chip */}
        <div className={styles.chip}>
          <Shield size={13} />
          DVSA Government Approved Test Centre · Est. 1974
        </div>

        <h1 className={styles.headline}>
          Launch Your Career as a<br />
          <span className={styles.highlight}>Professional HGV Driver</span>
        </h1>

        <p className={styles.sub}>
          London's most experienced driver training centre. All‑inclusive prices,
          no hidden fees. Train <em>and</em> test at our private DVSA-approved site in Croydon.
        </p>

        {/* Trust badges */}
        <div className={styles.trustBadges}>
          <div className={styles.trustItem}>
            <Star size={15} fill="currentColor" style={{ color: '#fbbf24' }} />
            <span>1,100+ Five-Star Reviews</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <Award size={15} />
            <span>50+ Years Experience</span>
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            <CheckCircle size={15} />
            <span>All-Inclusive Pricing</span>
          </div>
        </div>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="tel:02086884666" className="btn btn-primary btn-lg" id="hero-call-cta">
            <Phone size={18} />
            Book Free Assessment
          </a>
          <Link href="/courses" className="btn btn-outline-white btn-lg" id="hero-courses-cta">
            View All Courses
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Quick course links */}
        <div className={styles.courseLinks}>
          <span className={styles.courseLinksLabel}>Jump to course:</span>
          <Link href="/courses#hgv" className={styles.courseChip}>HGV Class 1 (C+E)</Link>
          <Link href="/courses#hgv" className={styles.courseChip}>HGV Class 2 (C)</Link>
          <Link href="/courses#pcv" className={styles.courseChip}>PCV Bus (D)</Link>
          <Link href="/courses#pcv" className={styles.courseChip}>Minibus (D1)</Link>
          <Link href="/courses#cpc" className={styles.courseChip}>Driver CPC</Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}
