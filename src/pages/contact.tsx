import { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Phone, Send } from 'lucide-react';

const WHATSAPP_CHAT = 'https://wa.me/916361255568?text=Hi%20Pamela%27s%20Couture,%20I%27m%20interested%20in%20your%20collection.%20I%27d%20like%20to%20know%20more%20about%20the%20available%20options%20and%20ordering%20process.%20Thank%20you.';
const WHATSAPP_HELP = 'https://wa.me/916361255568?text=Hi%20Pamela%27s%20Couture,%20I%27d%20like%20some%20help%20choosing%20from%20your%20collection.%20Thank%20you.';
const WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029Vb8NoKLEgGfWbN6pKk1t';
const INSTAGRAM = 'https://www.instagram.com/_pamela_maiti?igsh=MWVuM2Y4MTVtODd6YQ==&igsi=MWVuM2Y4MTVtODd6YQ==&utm_source=ig_contact_invite';
const FACEBOOK = 'https://www.facebook.com/share/18CS4Lk1Ns/?mibextid=wwXIfr';

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type FormState = { name: string; phone: string; email: string; product: string; message: string };
const emptyForm: FormState = { name: '', phone: '', email: '', product: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Pamela's Couture,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProduct / Collection: ${form.product}\n\nMessage:\n${form.message}\n\nThank you.`
    );
    window.open(`https://wa.me/916361255568?text=${msg}`, '_blank');
    setSubmitted(true);
    setForm(emptyForm);
    setTimeout(() => setSubmitted(false), 5000);
  }

  const site = 'https://pfzj1wmq28.preview.c35.airoapp.ai';
  const url = `${site}/contact`;
  const title = "Pamela's Couture | Contact Us";
  const description = "Get in touch with Pamela's Couture. Chat on WhatsApp, email or call us for product enquiries, availability and ordering assistance.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          className="relative py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden pc-bg-charcoal"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, hsl(var(--accent) / 0.10) 0%, transparent 70%)' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="relative max-w-2xl mx-auto"
          >
            <p
              className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-5 pc-text-gold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Get in Touch
            </p>
            <h1
              className="font-semibold mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 1.15 }}
            >
              Let's Connect
            </h1>
            <div className="mx-auto mb-7 bg-accent" style={{ width: '48px', height: '2px' }} />
            <p
              className="text-base leading-relaxed"
              style={{ color: 'hsl(var(--white-soft))', fontFamily: 'var(--font-sans)' }}
            >
              Have a question about a product, size, availability, delivery or ordering? We're here to help you find the perfect fashion and jewellery pieces.
            </p>
          </motion.div>
        </section>

        {/* ── CONTACT CARDS ─────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            {/* Equal-height grid: items-stretch ensures all cards fill the row height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

              {/* ── Card 1: WhatsApp ── */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0 }}
                className="contact-card group"
              >
                {/* Top accent line */}
                <div className="contact-card-topline" />
                {/* Icon */}
                <div className="contact-card-icon">
                  <WhatsAppIcon size={22} />
                </div>
                {/* Heading */}
                <h2 className="contact-card-heading">Chat With Us</h2>
                {/* Divider */}
                <div className="contact-card-divider" />
                {/* Body — flex-1 pushes button to bottom */}
                <p className="contact-card-body flex-1">
                  For product enquiries, availability, ordering assistance and general questions.
                </p>
                {/* CTA */}
                <a
                  href={WHATSAPP_CHAT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn-solid w-full"
                >
                  <WhatsAppIcon size={13} />
                  Chat on WhatsApp
                </a>
                {/* Hover gold border overlay */}
                <div className="contact-card-hover-border" />
              </motion.div>

              {/* ── Card 2: Email ── */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="contact-card group"
              >
                <div className="contact-card-topline" />
                <div className="contact-card-icon">
                  <Mail size={22} />
                </div>
                <h2 className="contact-card-heading">Email Us</h2>
                <div className="contact-card-divider" />
                <p className="contact-card-body flex-1">
                  pamela@pamelaorg.com
                </p>
                <a
                  href="mailto:pamela@pamelaorg.com"
                  className="contact-btn-outline w-full"
                >
                  <Mail size={13} />
                  Email Us
                </a>
                <div className="contact-card-hover-border" />
              </motion.div>

              {/* ── Card 3: Phone ── */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="contact-card group"
              >
                <div className="contact-card-topline" />
                <div className="contact-card-icon">
                  <Phone size={22} />
                </div>
                <h2 className="contact-card-heading">Call Us</h2>
                <div className="contact-card-divider" />
                <p className="contact-card-body flex-1">
                  +91 63612 55568
                </p>
                <a
                  href="tel:+916361255568"
                  className="contact-btn-outline w-full"
                >
                  <Phone size={13} />
                  Call Us
                </a>
                <div className="contact-card-hover-border" />
              </motion.div>

              {/* ── Card 4: Social ── */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="contact-card group"
              >
                <div className="contact-card-topline" />
                <div className="contact-card-icon">
                  <Instagram size={22} />
                </div>
                <h2 className="contact-card-heading">Follow Us</h2>
                <div className="contact-card-divider" />
                <p className="contact-card-body flex-1">
                  Stay connected for new collections, fashion updates and jewellery launches.
                </p>
                {/* Two equal social buttons stacked to avoid overflow */}
                <div className="flex flex-col gap-2 w-full">
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="contact-btn-solid w-full"
                  >
                    <Instagram size={13} />
                    Instagram
                  </a>
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="contact-btn-outline w-full"
                  >
                    <Facebook size={13} />
                    Facebook
                  </a>
                </div>
                <div className="contact-card-hover-border" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── WHATSAPP CHANNEL ──────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 pc-bg-deep-teal">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p
              className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-5 pc-text-gold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Stay Updated
            </p>
            <h2
              className="font-semibold mb-5 text-white"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
            >
              Follow Our WhatsApp Channel
            </h2>
            <div className="mx-auto mb-6 bg-accent" style={{ width: '40px', height: '2px' }} />
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: 'hsl(var(--white-soft))', fontFamily: 'var(--font-sans)' }}
            >
              Get updates about new arrivals, latest collections, special offers and product announcements.
            </p>
            <a
              href={WHATSAPP_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--charcoal))', fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', padding: '16px 36px', textTransform: 'uppercase' }}
            >
              <WhatsAppIcon size={16} />
              Follow Our WhatsApp Channel
            </a>
          </motion.div>
        </section>

        {/* ── ENQUIRY FORM ──────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <p
                className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-4 pc-text-gold"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Enquiry Form
              </p>
              <h2
                className="font-semibold mb-4 text-foreground"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
              >
                How Can We Help?
              </h2>
              <div className="mx-auto mb-5 bg-accent" style={{ width: '40px', height: '2px' }} />
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                Send us your enquiry and our team will get back to you.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-card"
              style={{ border: '1px solid hsl(var(--border))', padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase font-semibold pc-text-gold" style={{ fontFamily: 'var(--font-sans)' }}>
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className="contact-input" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase font-semibold pc-text-gold" style={{ fontFamily: 'var(--font-sans)' }}>
                    Phone Number
                  </label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className="contact-input" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase font-semibold pc-text-gold" style={{ fontFamily: 'var(--font-sans)' }}>
                  Email Address
                </label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="contact-input" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="product" className="text-[10px] tracking-[0.2em] uppercase font-semibold pc-text-gold" style={{ fontFamily: 'var(--font-sans)' }}>
                  Product / Collection
                </label>
                <input id="product" name="product" type="text" value={form.product} onChange={handleChange} placeholder="e.g. Sarees, Jewellery, Kurtis…" className="contact-input" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase font-semibold pc-text-gold" style={{ fontFamily: 'var(--font-sans)' }}>
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us what you're looking for…" className="contact-input resize-none" />
              </div>

              {submitted && (
                <p className="text-sm text-center pc-text-gold" style={{ fontFamily: 'var(--font-sans)' }}>
                  Your enquiry has been sent via WhatsApp. We'll be in touch shortly.
                </p>
              )}

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 bg-primary text-primary-foreground border-none cursor-pointer mt-2"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', padding: '16px 32px', textTransform: 'uppercase' }}
              >
                <Send size={14} />
                Send Enquiry
              </button>
            </motion.form>
          </div>
        </section>

        {/* ── QUICK HELP ────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center pc-bg-charcoal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto"
          >
            <h2
              className="font-semibold mb-4 text-white"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
            >
              Need Help Choosing?
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'hsl(var(--white-soft))', fontFamily: 'var(--font-sans)' }}
            >
              Not sure which style is right for you? Contact us on WhatsApp and we'll be happy to assist you.
            </p>
            <a
              href={WHATSAPP_HELP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--charcoal))', fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', padding: '16px 36px', textTransform: 'uppercase' }}
            >
              <WhatsAppIcon size={16} />
              Chat With Us
            </a>
          </motion.div>
        </section>
      </main>

      <style>{`
        /* ── Contact card shell ── */
        .contact-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.75rem 1.75rem;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          box-shadow: 0 2px 16px hsl(var(--accent) / 0.04), 0 1px 4px hsl(0 0% 0% / 0.06);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .contact-card:hover {
          box-shadow: 0 6px 28px hsl(var(--accent) / 0.10), 0 2px 8px hsl(0 0% 0% / 0.08);
          transform: translateY(-3px);
        }

        /* Gold top accent line */
        .contact-card-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, hsl(var(--accent) / 0.7), transparent);
        }

        /* Gold icon circle */
        .contact-card-icon {
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
          color: hsl(var(--accent));
          background: hsl(var(--accent) / 0.09);
          border: 1px solid hsl(var(--accent) / 0.28);
          flex-shrink: 0;
        }

        /* Serif heading */
        .contact-card-heading {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }

        /* Thin gold rule under heading */
        .contact-card-divider {
          width: 28px;
          height: 1.5px;
          background: hsl(var(--accent) / 0.55);
          margin-bottom: 0.85rem;
          flex-shrink: 0;
        }

        /* Body copy */
        .contact-card-body {
          font-family: var(--font-sans);
          font-size: 0.825rem;
          line-height: 1.65;
          color: hsl(var(--muted-foreground));
          margin-bottom: 1.4rem;
        }

        /* Solid teal button */
        .contact-btn-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          font-family: var(--font-sans);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 12px 16px;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          border: none;
          text-decoration: none;
          transition: filter 0.25s, transform 0.25s;
          flex-shrink: 0;
        }
        .contact-btn-solid:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        /* Outlined gold button */
        .contact-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          font-family: var(--font-sans);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 11px 16px;
          background: transparent;
          color: hsl(var(--accent));
          border: 1.5px solid hsl(var(--accent));
          text-decoration: none;
          transition: background 0.25s, color 0.25s, transform 0.25s;
          flex-shrink: 0;
        }
        .contact-btn-outline:hover {
          background: hsl(var(--accent) / 0.08);
          transform: translateY(-1px);
        }

        /* Gold border overlay on hover */
        .contact-card-hover-border {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 1.5px solid hsl(var(--accent));
          opacity: 0;
          transition: opacity 0.3s;
        }
        .contact-card:hover .contact-card-hover-border {
          opacity: 1;
        }

        /* ── Form inputs ── */
        .contact-input {
          width: 100%;
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          font-family: var(--font-sans);
          font-size: 0.875rem;
          padding: 12px 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .contact-input::placeholder {
          color: hsl(var(--muted-foreground));
        }
        .contact-input:focus {
          border-color: hsl(var(--accent));
        }
      `}</style>
    </>
  );
}
