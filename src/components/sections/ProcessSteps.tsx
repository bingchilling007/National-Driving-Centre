import { FileText, Car, BookOpen, Truck, Award, Briefcase } from 'lucide-react';
import styles from './ProcessSteps.module.css';

const steps = [
  { icon: FileText, num: '01', title: 'Apply for Provisional Licence', body: 'Complete D2 & D4 medical forms and send them with your licence to the DVLA. We send you the forms — for free.' },
  { icon: Car, num: '02', title: 'Free Driving Assessment', body: 'Once your provisional is confirmed, come in for a free assessment in your chosen vehicle. We tailor your course length to your ability.' },
  { icon: BookOpen, num: '03', title: 'Theory Tests', body: 'Prepare for and pass your theory and hazard perception tests. We provide study materials and guidance.' },
  { icon: Truck, num: '04', title: 'Practical Training', body: 'Typically 4–7 days training at our purpose-built Croydon centre with our NRI-qualified instructors.' },
  { icon: Award, num: '05', title: 'DVSA Driving Test', body: 'Take your test right here where you trained. Familiar surroundings give you the best chance of passing first time.' },
  { icon: Briefcase, num: '06', title: 'Start Your New Career', body: 'Licence in hand, you\'re ready to go. We can even help with driver job opportunities across the UK.' },
];

export default function ProcessSteps() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">The Journey</span>
          <h2 className="section-title light">How to Get Your HGV or Bus Licence</h2>
          <div className="divider centered" />
          <p className="section-subtitle light" style={{ margin: '0 auto' }}>
            From applying for your provisional to driving professionally — here's the full process, step by step.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepIcon}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
