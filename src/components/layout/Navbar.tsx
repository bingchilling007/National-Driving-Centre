'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/courses',
    label: 'Courses',
    children: [
      { href: '/courses#hgv', label: 'HGV Training (LGV)' },
      { href: '/courses#pcv', label: 'PCV Bus & Minibus' },
      { href: '/courses#cpc', label: 'Driver CPC' },
    ],
  },
  { href: '/about', label: 'About Us' },
  { href: '/fleet', label: 'Our Fleet' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <span className={styles.topBarText}>
            🇬🇧 DVSA Approved Test Centre · South London
          </span>
          <a href="tel:02086884666" className={styles.topBarPhone}>
            <Phone size={13} strokeWidth={2.5} />
            020 8688 4666
          </a>
        </div>
      </div>

      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>NDC</div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>National Driving Centre</span>
              <span className={styles.logoSub}>Est. 1974 · DVSA Approved</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={styles.navItem}
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={styles.navLink}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </Link>
                {link.children && openDropdown === link.href && (
                  <div className={styles.dropdown}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className={styles.dropdownItem}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="tel:02086884666" className={`btn btn-primary btn-sm ${styles.navCta}`}>
            <Phone size={15} />
            Book Free Assessment
          </a>

          {/* Mobile toggle */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className={styles.mobileSubLinks}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="tel:02086884666"
            className="btn btn-primary"
            style={{ margin: '1rem 1.5rem' }}
          >
            <Phone size={16} />
            020 8688 4666 — Book Now
          </a>
        </div>
      </nav>
    </>
  );
}
