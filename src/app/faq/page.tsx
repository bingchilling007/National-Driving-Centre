'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import { Plus } from 'lucide-react';
import styles from './faq.module.css';

const faqCategories = [
  {
    title: 'Getting Started',
    items: [
      {
        q: 'How do I start getting my HGV or bus licence?',
        a: 'The first step is to check whether you have the provisional LGV or PCV entitlement on your driving licence. If not, you need to apply to the DVLA using D2 and D4 forms (a medical application). NDC will send you these forms for free — just give us a call or fill in our online form.',
      },
      {
        q: 'What is the D2/D4 form and why do I need it?',
        a: 'The D2 is the provisional driving licence application and the D4 is the medical examination form. You need to pass a medical with a doctor before you can get your LGV/PCV provisional entitlement. NDC will guide you through this process at no extra cost.',
      },
      {
        q: 'How long does the whole process take — from application to licence?',
        a: 'From sending off your D2/D4 forms, through theory tests, practical training and your DVSA test — approximately 8–10 weeks in total. This can vary depending on how quickly the DVLA processes your application and how quickly you prepare for the theory tests.',
      },
      {
        q: 'Do I need any prior lorry or bus driving experience?',
        a: 'No. All you need is a full car driving licence (Category B). We regularly train people with zero commercial vehicle experience. Our free driving assessment helps us understand your starting point and tailor your course length accordingly.',
      },
    ],
  },
  {
    title: 'Licence Categories Explained',
    items: [
      {
        q: "What's the difference between Cat C (Class 2) and Cat C+E (Class 1)?",
        a: "Category C (HGV Class 2) is for rigid lorries — the vehicle in one piece, over 3.5 tonnes. Category C+E (HGV Class 1) allows you to drive articulated lorries — a cab pulling a separate trailer. Class 1 is the highest HGV qualification and the most in-demand. Most people do Cat C first, then progress to C+E.",
      },
      {
        q: 'What is Cat C1 (7.5 tonne) and who needs it?',
        a: "Category C1 covers vehicles between 3.5 and 7.5 tonnes. This is commonly needed by paramedics, ambulance drivers, certain delivery drivers and specialist operators. If you passed your car test before 1997, you may already have C1 on your licence — call us to check.",
      },
      {
        q: 'What is PCV and what is the difference between Category D (bus) and D1 (minibus)?',
        a: "PCV stands for Passenger Carrying Vehicle. Category D covers full-size buses (more than 8 passenger seats) used commercially. Category D1 covers minibuses with 9–16 passenger seats. If you're driving for hire or reward (e.g. school transport, community buses), you need the PCV entitlement — D1 or D.",
      },
      {
        q: 'Can I go straight to HGV Class 1 (C+E) from a car licence?',
        a: "Yes! NDC offers a full 'Car to Class 1' package that takes you all the way from a car (Cat B) licence to a full Class 1 C+E artic qualification. The all-inclusive price is £3,645 and covers everything — medical form assistance, theory preparation, all training and the DVSA test.",
      },
    ],
  },
  {
    title: 'Course Costs & Finance',
    items: [
      {
        q: "How much does HGV training cost?",
        a: "At NDC, courses are all-inclusive. HGV Class 2 (Cat C) starts from £2,495, Class 1 (C+E) all-in from £3,645, 7.5T (C1) from £1,695, PCV Bus (D) from £2,995, and Minibus (D1) from £1,895. All prices include everything — no hidden extras, no CPC on top, no test fees on top.",
      },
      {
        q: "Why are other companies cheaper?",
        a: "Often because they're quoting for training only — not including the CPC qualification, not including test fees, or they're an agency that will pass you to a subcontracted trainer. Always ask: 'Is CPC included? Is the DVSA test fee included? Is this your own vehicle?' With NDC, the answer to all three is yes.",
      },
      {
        q: "Do you offer finance or payment plans?",
        a: "Yes. We offer flexible finance options to help spread the cost of training. Call us on 020 8688 4666 to discuss what works for you. We'd rather help you find a way to train than have you go elsewhere and get a worse deal.",
      },
      {
        q: "Is Driver CPC always included in the price?",
        a: "Yes, always. The Driver CPC (Certificate of Professional Competence) is the mandatory professional qualification for commercial drivers. It is included in every NDC course price. We would never charge for it as an extra — that's not how we do business.",
      },
    ],
  },
  {
    title: 'The Theory Tests',
    items: [
      {
        q: 'What theory tests do I need to pass?',
        a: "You'll need to pass two theory tests: a multiple-choice test covering the Highway Code, loading rules and vehicle safety; and a Hazard Perception test. The pass mark is higher than the car test. NDC provides study materials and guidance to help you prepare.",
      },
      {
        q: 'Can I book my theory tests before starting practical training?',
        a: "Yes — in fact, you'll need your provisional entitlement and theory pass before you can take the DVSA practical test. We recommend getting your theory tests done while waiting for your provisional to come back. NDC will guide you through the timing.",
      },
      {
        q: 'How difficult are the HGV theory tests?',
        a: "They're more detailed than the car theory test but very manageable with the right preparation. Most candidates who study properly pass first time. NDC provides you with recommended study apps and materials. The theory content covers vehicle safety, loads, tachographs, and driving law.",
      },
    ],
  },
  {
    title: 'The DVSA Driving Test',
    items: [
      {
        q: "What happens on my DVSA practical driving test?",
        a: "At NDC you take your test on the same site where you trained. The DVSA examiner will ask you to perform vehicle safety checks ('show me / tell me'), then take you on a driving route covering a range of road conditions. For LGV and PCV tests, there's also an reversing/manoeuvring exercise.",
      },
      {
        q: "What if I fail my test?",
        a: "We'll debrief you, identify the areas to work on, and book a retest. A retest is much less expensive than the full course. Because you test where you train, most candidates pass first time — but if not, it's not the end of the road.",
      },
      {
        q: "Why is 'test where you train' so important?",
        a: "Nerves are one of the biggest factors in test failure. When you test on the same roads, in the same vehicle, at the same centre you trained in — there are far fewer unknowns. That familiarity translates directly into better performance. It's why NDC fought to become a test centre in 2014 and why we're proud to be London's only one.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        className={`${styles.trigger} ${open ? styles.triggerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <Plus size={20} className={`${styles.icon} ${open ? styles.iconOpen : ''}`} />
      </button>
      <div className={`${styles.answer} ${open ? styles.answerOpen : ''}`}>
        <div className={styles.answerBody}>{a}</div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__label">Frequently Asked Questions</span>
          <h1 className="page-hero__title">Everything You Need to Know About HGV & Bus Training</h1>
          <p className="page-hero__sub">
            Common questions about licence categories, costs, theory tests and the DVSA driving test.
            Can't find your answer? Call us on&nbsp;
            <a href="tel:02086884666" style={{ color: 'var(--gold)', fontWeight: 700 }}>020 8688 4666</a>.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.faqGrid}>
            {faqCategories.map((cat) => (
              <div key={cat.title} className={styles.category}>
                <h2 className={styles.catTitle}>{cat.title}</h2>
                <div className={styles.items}>
                  {cat.items.map((item) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <h3>Still have a question?</h3>
            <p>Our team is available Monday to Friday, 07:00–17:00. We're always happy to give
            straight, honest advice — no obligation, no hard sell.</p>
            <div className={styles.ctaBtns}>
              <a href="tel:02086884666" className="btn btn-primary btn-lg">
                Call 020 8688 4666
              </a>
              <a href="/contact" className="btn btn-outline-navy btn-lg">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
