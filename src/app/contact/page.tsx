'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', course: '', message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your email service here
    setSubmitted(true);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container page-hero__content">
          <span className="page-hero__label">Contact Us</span>
          <h1 className="page-hero__title">Get in Touch — No Obligation</h1>
          <p className="page-hero__sub">
            Call us, send a message, or drop in. We'll give you straight, honest advice
            about the right course for you — and your first assessment is completely free.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.infoSide}>
              <div className={styles.infoCards}>
                <a href="tel:02086884666" className={styles.infoCard}>
                  <div className={styles.infoIcon}><Phone size={22} /></div>
                  <div>
                    <div className={styles.infoLabel}>Call Us</div>
                    <div className={styles.infoValue}>020 8688 4666</div>
                    <div className={styles.infoSub}>Available Mon–Fri, 07:00–17:00</div>
                  </div>
                </a>
                <a href="mailto:info@nationaldrivingcentre.co.uk" className={styles.infoCard}>
                  <div className={styles.infoIcon}><Mail size={22} /></div>
                  <div>
                    <div className={styles.infoLabel}>Email Us</div>
                    <div className={styles.infoValue}>info@nationaldrivingcentre.co.uk</div>
                    <div className={styles.infoSub}>We reply within one business day</div>
                  </div>
                </a>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}><MapPin size={22} /></div>
                  <div>
                    <div className={styles.infoLabel}>Visit Us</div>
                    <div className={styles.infoValue}>Territorial Army Barracks</div>
                    <div className={styles.infoSub}>Mitcham Rd, Croydon CR0 3RU</div>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}><Clock size={22} /></div>
                  <div>
                    <div className={styles.infoLabel}>Opening Hours</div>
                    <div className={styles.hours}>
                      <div><span>Monday – Friday</span><span>07:00 – 17:00</span></div>
                      <div><span>Saturday</span><span>By appointment</span></div>
                      <div><span>Sunday</span><span>Closed</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className={styles.mapWrap}>
                <iframe
                  title="National Driving Centre Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.1574063720407!2d-0.12204!3d51.3913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760623c697eef1%3A0x6f2a6f5b4e5e5b5a!2sMitcham%20Rd%2C%20Croydon%20CR0%203RU!5e0!3m2!1sen!2suk!4v1713278800000!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className={styles.formSide}>
              <div className={styles.formCard}>
                {submitted ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon}><CheckCircle size={48} /></div>
                    <h2>Message Sent!</h2>
                    <p>
                      Thank you for getting in touch. A member of our team will be in
                      contact within one business day. If you need to speak to us urgently,
                      call <a href="tel:02086884666">020 8688 4666</a>.
                    </p>
                    <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className={styles.formTitle}>Send Us a Message</h2>
                    <p className={styles.formSub}>
                      Fill in your details and we'll get back to you. Or just call — we love talking to people.
                    </p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                      <div className={styles.formRow}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-name">Full Name *</label>
                          <input
                            id="contact-name"
                            className="form-input"
                            type="text"
                            required
                            placeholder="Your full name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                          <input
                            id="contact-phone"
                            className="form-input"
                            type="tel"
                            required
                            placeholder="07700 000000"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          className="form-input"
                          type="email"
                          required
                          placeholder="your@email.co.uk"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-course">Course Interested In</label>
                        <select
                          id="contact-course"
                          className="form-select"
                          value={form.course}
                          onChange={(e) => setForm({ ...form, course: e.target.value })}
                        >
                          <option value="">Select a course...</option>
                          <option value="ce">HGV Class 1 (Cat C+E) — from £3,645</option>
                          <option value="c">HGV Class 2 (Cat C) — from £2,495</option>
                          <option value="c1">HGV 7.5T (Cat C1) — from £1,695</option>
                          <option value="d">PCV Bus (Cat D) — from £2,995</option>
                          <option value="d1">PCV Minibus (Cat D1) — from £1,895</option>
                          <option value="cpc">Driver CPC Periodic Training</option>
                          <option value="hiab">HIAB Lorry Loader Training</option>
                          <option value="unsure">Not sure — need advice</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-message">Message</label>
                        <textarea
                          id="contact-message"
                          className="form-textarea"
                          placeholder="Tell us a bit about yourself and what you're looking to achieve..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>
                      <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`} id="contact-submit">
                        <Send size={18} />
                        Send Enquiry
                      </button>
                      <p className={styles.formDisclaimer}>
                        We'll never share your details with third parties. By submitting this form
                        you agree to us contacting you about your enquiry.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
