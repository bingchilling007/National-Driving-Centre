import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ExternalLink, Star } from 'lucide-react';

// Simple SVG social icons since lucide-react v1.x doesn't ship Facebook/Youtube
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96C23 15.86 23 12 23 12s0-3.86-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);
import styles from './Footer.module.css';

const courses = [
  { href: '/courses#hgv', label: 'HGV Class 1 (Cat C+E)' },
  { href: '/courses#hgv', label: 'HGV Class 2 (Cat C)' },
  { href: '/courses#hgv', label: 'HGV 7.5 Tonne (Cat C1)' },
  { href: '/courses#pcv', label: 'PCV Bus Driver (Cat D)' },
  { href: '/courses#pcv', label: 'PCV Minibus (Cat D1)' },
  { href: '/courses#cpc', label: 'Driver CPC' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/fleet', label: 'Our Fleet' },
  { href: '/testimonials', label: 'Customer Reviews' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Strip */}
      <div className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <p className={styles.ctaLabel}>Ready to start your driving career?</p>
              <h3 className={styles.ctaTitle}>Book Your Free Assessment Today</h3>
            </div>
            <div className={styles.ctaBtns}>
              <a href="tel:02086884666" className="btn btn-primary btn-lg">
                <Phone size={18} />
                020 8688 4666
              </a>
              <Link href="/contact" className="btn btn-outline-white">
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <div className={styles.logoMark}>NDC</div>
                <div>
                  <div className={styles.logoName}>National Driving Centre</div>
                  <div className={styles.logoSub}>Est. 1974</div>
                </div>
              </div>
              <p className={styles.brandDesc}>
                London's leading HGV & bus driver training company. DVSA Approved, all-inclusive
                prices, 50+ years of experience helping people into driving careers.
              </p>
              <div className={styles.trustRow}>
                <div className={styles.trustBadge}>
                  <Star size={14} fill="currentColor" />
                  <span>4.9 · 1,100+ Reviews</span>
                </div>
                <div className={styles.trustBadge}>
                  <span>✓ DVSA Approved</span>
                </div>
              </div>
              <div className={styles.socials}>
                <a href="https://www.facebook.com/NationalDrivingCentre/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://www.youtube.com/@NationalDrivingCentre" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="YouTube">
                  <YoutubeIcon />
                </a>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className={styles.colTitle}>Training Courses</h4>
              <ul className={styles.linkList}>
                {courses.map((c) => (
                  <li key={c.label}>
                    <Link href={c.href} className={styles.footerLink}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={styles.footerLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li>
                  <Phone size={15} />
                  <a href="tel:02086884666">020 8688 4666</a>
                </li>
                <li>
                  <Mail size={15} />
                  <a href="mailto:info@nationaldrivingcentre.co.uk">info@nationaldrivingcentre.co.uk</a>
                </li>
                <li>
                  <MapPin size={15} />
                  <span>Territorial Army Barracks, Mitcham Rd, Croydon CR0 3RU</span>
                </li>
                <li>
                  <Clock size={15} />
                  <span>Mon–Fri: 07:00–17:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} National Driving Centre Ltd. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/cancellation">Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
