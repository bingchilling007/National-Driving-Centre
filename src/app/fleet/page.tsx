import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './fleet.module.css';

export const metadata: Metadata = {
  title: 'Our Training Fleet — HGV Lorries, Buses & Minibuses',
  description:
    'View the NDC training fleet — articulated lorries (Class 1), rigid HGVs, 7.5t trucks, full-size buses and minibuses. All modern, well-maintained DVSA-approved training vehicles.',
};

const vehicles = [
  {
    id: 'artic',
    cat: 'Cat C+E',
    licence: 'HGV Class 1 (Artic)',
    title: 'Articulated Lorry',
    img: '/images/fleet-artic.png',
    weight: '44,000 kg GVW',
    seats: 'Standard cab configuration',
    desc: 'Our Class 1 articulated training lorry is a modern, well-maintained unit used for Cat C+E training. Get comfortable on the same vehicle you\'ll take your DVSA test in.',
    specs: ['44 tonne GVW', '5-speed gearbox + crawler', 'Air-braked trailer', 'Air suspension'],
    courseLink: '/courses#ce',
  },
  {
    id: 'rigid',
    cat: 'Cat C',
    licence: 'HGV Class 2 (Rigid)',
    title: 'Rigid HGV Lorry',
    img: '/images/fleet-rigid.png',
    weight: '18,000 kg GVW',
    seats: 'Standard cab',
    desc: 'A full-size rigid HGV used for Category C Class 2 training. Fitted with L-plates, dual controls where required, and all modern safety systems.',
    specs: ['18 tonne GVW', 'Manual gearbox', 'Air disc brakes', 'Rear-view camera'],
    courseLink: '/courses#c',
  },
  {
    id: '75t',
    cat: 'Cat C1',
    licence: 'HGV 7.5 Tonne',
    title: '7.5 Tonne Box Truck',
    img: '/images/fleet-75t.png',
    weight: '7,500 kg GVW',
    seats: '2-seat cab',
    desc: 'Perfect for Cat C1 training — typically used by paramedics, ambulance drivers and specialist delivery operators. Modern, clean and well-equipped.',
    specs: ['7.5 tonne GVW', 'Manual transmission', 'Reversing sensors', 'Fully equipped cab'],
    courseLink: '/courses#c1',
  },
  {
    id: 'bus',
    cat: 'Cat D',
    licence: 'PCV Bus Driver',
    title: 'Full-Size Passenger Bus',
    img: '/images/fleet-bus.png',
    weight: '18,000 kg GVW',
    seats: '50+ passenger capacity',
    desc: 'Our PCV Category D bus is a full-size single-decker used for bus driver training. Identical to the vehicles used in day-to-day public transport operations.',
    specs: ['50+ seats', 'Automatic gearbox option', 'Kneeling suspension', 'Accessibility ramp'],
    courseLink: '/courses#d',
  },
  {
    id: 'minibus',
    cat: 'Cat D1',
    licence: 'PCV Minibus',
    title: 'Minibus (16 seats)',
    img: '/images/fleet-minibus.png',
    weight: '5,000 kg GVW',
    seats: '16 passenger seats',
    desc: 'Our Category D1 minibus is the ideal training vehicle for community transport operators, school run drivers and private hire operators.',
    specs: ['16 seats + driver', 'Manual gearbox', 'Accessibility features', 'Dual controls'],
    courseLink: '/courses#d1',
  },
];

export default function FleetPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__label">Our Training Fleet</span>
          <h1 className="page-hero__title">Modern, Well-Maintained Training Vehicles</h1>
          <p className="page-hero__sub">
            Train on the same vehicles you'll be tested in. Our full fleet covers every
            licence category — from 7.5 tonne trucks to full-size articulated lorries and passenger buses.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {vehicles.map((v) => (
              <div key={v.id} className={styles.vehicleCard} id={v.id}>
                <div className={styles.imgWrap}>
                  <Image
                    src={v.img}
                    alt={v.title}
                    fill
                    className={styles.vehicleImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.catBadge}>{v.cat}</div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.licence}>{v.licence}</div>
                  <h2 className={styles.vehicleTitle}>{v.title}</h2>
                  <p className={styles.vehicleDesc}>{v.desc}</p>

                  <div className={styles.specs}>
                    {v.specs.map((s) => (
                      <div key={s} className={styles.specItem}>
                        <span className={styles.specDot} />
                        {s}
                      </div>
                    ))}
                  </div>

                  <div className={styles.cardActions}>
                    <Link href={v.courseLink} className="btn btn-primary btn-sm">
                      View Course <ArrowRight size={15} />
                    </Link>
                    <a href="tel:02086884666" className="btn btn-outline-navy btn-sm">
                      <Phone size={15} /> Book Assessment
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.note}>
            <h3>All our vehicles are:</h3>
            <div className={styles.noteGrid}>
              {[
                'Regularly maintained and fully road-legal',
                'Fitted with dual controls where required',
                'Configured exactly as DVSA test vehicles',
                'Modern and comfortable to train in',
              ].map((n) => (
                <div key={n} className={styles.noteItem}>
                  <span>✓</span>
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
