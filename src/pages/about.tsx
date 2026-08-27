import { Helmet } from '@dr.pogodin/react-helmet';

import logo from '@/assets/logo.jpeg';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Sparkles, Star, Heart, ShoppingBag, Shield, Users } from 'lucide-react';

// ─── Collections ──────────────────────────────────────────────────────────────
const collections = [
  { title: 'Sarees',               desc: 'Timeless sarees for celebrations and special occasions.',                              icon: <Sparkles size={24} /> },
  { title: 'Kurtis',               desc: 'Stylish and comfortable designs for everyday and occasion wear.',                      icon: <Star size={24} /> },
  { title: 'Dresses',              desc: 'Contemporary styles for effortless elegance.',                                         icon: <Heart size={24} /> },
  { title: 'Nightwear',            desc: 'Comfortable and stylish pieces for relaxed moments.',                                  icon: <ShoppingBag size={24} /> },
  { title: 'Two-Piece Sets',       desc: 'Coordinated styles for a polished modern look.',                                       icon: <Star size={24} /> },
  { title: 'Waterproof Jewellery', desc: 'Elegant jewellery designed to complement everyday and festive styling.',               icon: <Sparkles size={24} /> },
];

// ─── Promise points ───────────────────────────────────────────────────────────
const promises = [
  { icon: <Sparkles size={22} />, title: 'Elegant & Trendy Designs',      desc: 'Thoughtfully selected styles that blend timeless elegance with contemporary fashion.' },
  { icon: <Shield size={22} />,   title: 'Quality-Focused Selection',      desc: 'Collections selected with attention to appearance, style and overall quality.' },
  { icon: <Heart size={22} />,    title: 'Fashion for Every Occasion',     desc: 'Pieces for everyday wear, celebrations and special moments.' },
  { icon: <Users size={22} />,    title: 'Customer-Focused Service',       desc: 'Friendly assistance for product enquiries, availability, ordering and delivery.' },
];

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const site = 'https://pfzj1wmq28.preview.c35.airoapp.ai';
const pageUrl = `${site}/about`;
const pageTitle = "About Us — Pamela's Couture";
const pageDesc = "Pamela's Couture brings together elegant women's fashion and exquisite waterproof jewellery, thoughtfully selected for women who appreciate timeless style.";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>

        {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
        <section className="relative py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden pc-bg-charcoal">
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
              Our Story
            </p>
            <h1
              className="font-semibold mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.15 }}
            >
              The Story Behind Pamela's Couture
            </h1>
            <div className="mx-auto mb-7 bg-accent" style={{ width: '48px', height: '2px' }} />
            <p
              className="text-base leading-relaxed"
              style={{ color: 'hsl(var(--white-soft))', fontFamily: 'var(--font-sans)' }}
            >
              Pamela's Couture brings together elegant women's fashion and exquisite waterproof jewellery, thoughtfully selected for women who appreciate timeless style and contemporary elegance.
            </p>
          </motion.div>
        </section>

        {/* ── 2. ABOUT ──────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p
                  className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-5 pc-text-gold"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  About Us
                </p>
                <h2
                  className="font-semibold mb-6 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', lineHeight: 1.2 }}
                >
                  Elegance, Selected With Care
                </h2>
                <div className="mb-7 bg-accent" style={{ width: '40px', height: '2px' }} />
                <div
                  className="flex flex-col gap-5 text-muted-foreground leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}
                >
                  <p>
                    At Pamela's Couture, we believe fashion is more than what you wear — it is a reflection of your personality and style.
                  </p>
                  <p>
                    Our collection brings together beautiful sarees, kurtis, dresses, nightwear and two-piece sets, along with elegant waterproof jewellery designed to complement both everyday looks and special occasions.
                  </p>
                  <p>
                    Every collection is presented with a focus on style, quality and a beautiful shopping experience.
                  </p>
                </div>
              </motion.div>

              {/* Decorative brand panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative hidden lg:block"
              >
                <div
                  className="relative overflow-hidden pc-bg-deep-teal"
                  style={{ aspectRatio: '3/4' }}
                >
                  {/* Outer border inset */}
                  <div className="absolute inset-3 pointer-events-none" style={{ border: '1px solid hsl(var(--accent) / 0.25)' }} />

                  {/* Corner ornaments */}
                  <div className="absolute top-6 left-6 w-8 h-8 pointer-events-none" style={{ borderTop: '1.5px solid hsl(var(--accent))', borderLeft: '1.5px solid hsl(var(--accent))' }} />
                  <div className="absolute top-6 right-6 w-8 h-8 pointer-events-none" style={{ borderTop: '1.5px solid hsl(var(--accent))', borderRight: '1.5px solid hsl(var(--accent))' }} />
                  <div className="absolute bottom-6 left-6 w-8 h-8 pointer-events-none" style={{ borderBottom: '1.5px solid hsl(var(--accent))', borderLeft: '1.5px solid hsl(var(--accent))' }} />
                  <div className="absolute bottom-6 right-6 w-8 h-8 pointer-events-none" style={{ borderBottom: '1.5px solid hsl(var(--accent))', borderRight: '1.5px solid hsl(var(--accent))' }} />

                  {/* Subtle radial glow behind logo */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 65% 50% at 50% 50%, hsl(var(--accent) / 0.07) 0%, transparent 70%)' }}
                  />

                  {/* Main composition */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 px-10 text-center">

                    {/* Top label */}
                    <p
                      className="tracking-[0.38em] uppercase font-semibold pc-text-gold mb-5"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
                    >
                      Pamela's Couture
                    </p>

                    {/* Decorative top rule with stars */}
                    <div className="flex items-center gap-2 mb-7 w-full justify-center">
                      <div className="bg-accent flex-1" style={{ height: '1px', maxWidth: '48px' }} />
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 0L4.9 3.1H8L5.5 5L6.5 8L4 6.2L1.5 8L2.5 5L0 3.1H3.1L4 0Z" fill="hsl(var(--accent))" />
                      </svg>
                      <div className="bg-accent" style={{ width: '4px', height: '4px', transform: 'rotate(45deg)' }} />
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 0L4.9 3.1H8L5.5 5L6.5 8L4 6.2L1.5 8L2.5 5L0 3.1H3.1L4 0Z" fill="hsl(var(--accent))" />
                      </svg>
                      <div className="bg-accent flex-1" style={{ height: '1px', maxWidth: '48px' }} />
                    </div>

                    {/* Logo */}
                    <img
                      src={logo}
                      alt="Pamela's Couture"
                      className="h-auto w-auto rounded-full object-cover opacity-95"
                      style={{ maxHeight: '14rem', maxWidth: '78%' }}
                    />

                    {/* Decorative bottom rule */}
                    <div className="flex items-center gap-2 mt-7 mb-6 w-full justify-center">
                      <div className="bg-accent flex-1" style={{ height: '1px', maxWidth: '48px' }} />
                      <div className="bg-accent" style={{ width: '4px', height: '4px', transform: 'rotate(45deg)' }} />
                      <div className="bg-accent flex-1" style={{ height: '1px', maxWidth: '48px' }} />
                    </div>

                    {/* Tagline lines */}
                    <p
                      className="tracking-[0.22em] uppercase font-semibold text-white mb-1"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.2em' }}
                    >
                      Elegant Women's Fashion
                    </p>
                    <p
                      className="tracking-[0.22em] uppercase font-semibold text-white mb-6"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.2em' }}
                    >
                      &amp; Waterproof Jewellery
                    </p>

                    {/* Short brand line */}
                    <p
                      className="italic"
                      style={{ color: 'hsl(var(--accent))', fontFamily: 'var(--font-heading)', fontSize: '0.88rem', letterSpacing: '0.04em' }}
                    >
                      Timeless style. Thoughtfully selected.
                    </p>

                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 3. OUR COLLECTIONS ────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <p
                className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-4 pc-text-gold"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Collections
              </p>
              <h2
                className="font-semibold mb-4 text-foreground"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
              >
                What We Offer
              </h2>
              <div className="mx-auto bg-accent" style={{ width: '40px', height: '2px' }} />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative flex flex-col p-8 bg-card transition-shadow duration-300 hover:shadow-md"
                  style={{ border: '1px solid hsl(var(--border))' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5 pc-text-gold shrink-0"
                    style={{ background: 'hsl(var(--accent) / 0.10)', border: '1px solid hsl(var(--accent) / 0.3)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="mb-3 bg-accent" style={{ width: '24px', height: '1.5px' }} />
                  <h3
                    className="font-semibold mb-2 text-foreground"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-muted-foreground"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {item.desc}
                  </p>
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ border: '2px solid hsl(var(--accent))' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. OUR PROMISE ────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 pc-bg-deep-teal">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <p
                className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-4 pc-text-gold"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Our Promise
              </p>
              <h2
                className="font-semibold mb-4 text-white"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
              >
                Fashion Chosen With Care
              </h2>
              <div className="mx-auto bg-accent" style={{ width: '40px', height: '2px' }} />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {promises.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-8"
                  style={{
                    background: 'hsl(var(--white-45))',
                    border: '1px solid hsl(var(--white-border))',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5 pc-text-gold shrink-0"
                    style={{ background: 'hsl(var(--accent) / 0.15)', border: '1px solid hsl(var(--accent) / 0.4)' }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="font-semibold mb-3 text-white"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--white-soft))', fontFamily: 'var(--font-sans)' }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. BRAND STATEMENT ────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="bg-accent" style={{ width: '48px', height: '1px' }} />
              <div className="w-2 h-2 rotate-45 bg-accent" />
              <div className="bg-accent" style={{ width: '48px', height: '1px' }} />
            </div>
            <h2
              className="font-semibold mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.2 }}
            >
              Style That Feels Like You
            </h2>
            <p
              className="text-base leading-relaxed text-muted-foreground mb-10"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              From timeless ethnic wear to contemporary fashion and elegant jewellery, Pamela's Couture is a destination for discovering pieces that make every occasion feel special.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-accent" style={{ width: '48px', height: '1px' }} />
              <div className="w-2 h-2 rotate-45 bg-accent" />
              <div className="bg-accent" style={{ width: '48px', height: '1px' }} />
            </div>
          </motion.div>
        </section>

        {/* ── 6. CALL TO ACTION ─────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 text-center pc-bg-charcoal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto"
          >
            <p
              className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-5 pc-text-gold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Shop Now
            </p>
            <h2
              className="font-semibold mb-5 text-white"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
            >
              Discover Your Style
            </h2>
            <div className="mx-auto mb-7 bg-accent" style={{ width: '40px', height: '2px' }} />
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: 'hsl(var(--white-soft))', fontFamily: 'var(--font-sans)' }}
            >
              Explore our latest collections and find something beautiful for your next occasion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/clothing"
                className="inline-flex items-center justify-center transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 bg-primary text-primary-foreground"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', padding: '16px 36px', textTransform: 'uppercase' }}
              >
                Explore Collections
              </Link>
              <a
                href="https://wa.me/916361255568"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 pc-text-gold"
                style={{ border: '1.5px solid hsl(var(--accent))', background: 'transparent', fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', padding: '16px 36px', textTransform: 'uppercase' }}
              >
                <WhatsAppIcon size={15} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}
