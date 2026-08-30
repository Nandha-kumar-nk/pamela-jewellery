import { home } from 'virtual:content';
import { Link } from 'react-router';
import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Sparkles, Gem, Truck, Star, Heart, Droplets } from 'lucide-react';
import OrnamentalDivider from '@/components/OrnamentalDivider';

// ─── Why Choose Us features ───────────────────────────────────────────────────
const features = [
  {
    icon: <Sparkles size={28} />,
    title: 'Elegant & Trendy Designs',
    desc: 'Curated fashion that blends tradition with contemporary style.'
  },
  {
    icon: <Gem size={28} />,
    title: 'Premium-Looking Jewellery',
    desc: 'Beautifully crafted pieces that elevate every outfit.'
  },
  {
    icon: <Heart size={28} />,
    title: 'Fashion for Every Occasion',
    desc: 'From everyday wear to festive celebrations.'
  },
  {
    icon: <Droplets size={28} />,
    title: 'Waterproof Jewellery Collection',
    desc: 'Jewellery designed to last — wear it every day, worry-free.'
  },
  {
    icon: <Star size={28} />,
    title: 'Carefully Selected Products',
    desc: 'Every piece is thoughtfully chosen for quality and beauty.'
  },
  {
    icon: <Truck size={28} />,
    title: 'Convenient Shopping & Delivery',
    desc: 'Shop with ease and receive your order at your doorstep.'
  }
];


const WHATSAPP_NUMBER = '916361255568';

function enquireOnWhatsApp(productName: string) {
  const message =
    "Hello Pamela's Couture," +
    '\n\n' +
    'I\'m interested in ' + productName + ' that I saw on your website.' +
    '\n\n' +
    'Could you please share the price, available sizes/colours, and delivery details?' +
    '\n\n' +
    'Thank you for your assistance.\n' +
    'Looking forward to hearing from you.';

  window.open(
    'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message),
    '_blank'
  );
}


export default function HomePage() {

  const siteUrl = 'https://pamelascouture.com';

  const jsonLd = {
    '@context': 'https://schema.org',

    '@graph': [

      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: "Pamela's Couture",
        url: `${siteUrl}/`
      },

      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: "Pamela's Couture",
        url: `${siteUrl}/`,
        description:
          "Pamela's Couture brings together elegant women's fashion and carefully selected jewellery for customers who appreciate style, quality and timeless beauty."
      },

      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: "Pamela's Couture | Women's Fashion & Waterproof Jewellery",
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        datePublished: '2026-08-22',
        dateModified: '2026-08-22'
      }

    ]
  };


  return (
    <>

      <Helmet>

        <title>Pamela's Couture | Home</title>

        <meta
          name="description"
          content="Pamela's Couture offers elegant women's fashion including sarees, kurtis, dresses, nightwear and waterproof jewellery. Shop timeless fashion crafted for every occasion."
        />

        <link
          rel="canonical"
          href={siteUrl}
        />

        <meta
          property="og:title"
          content="Pamela's Couture | Women's Fashion & Waterproof Jewellery"
        />

        <meta
          property="og:description"
          content="Elegant women's fashion and waterproof jewellery — sarees, kurtis, dresses, nightwear and more."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content={siteUrl}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

      </Helmet>


      <main>


        {/* ── HERO ─────────────────────────────────────────────────────────── */}

        <section
          className="relative w-full overflow-hidden"
          style={{ minHeight: '100svh' }}
        >

          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ objectPosition: '70% center', zIndex: 0 }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/videos/home.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 pc-hero-overlay-split pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 h-32 pc-hero-vignette-bottom pointer-events-none" />


          <div
            className="relative z-10 flex items-center"
            style={{ minHeight: '100svh' }}
          >

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 sm:py-32">

              <div className="max-w-xl lg:max-w-2xl">


                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeOut' as const
                  }}
                  className="text-[11px] tracking-[0.4em] uppercase font-medium mb-5 pc-text-gold"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Pamela's Couture
                </motion.p>


                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15,
                    ease: 'easeOut' as const
                  }}
                  className="font-semibold leading-[1.15] mb-5 pc-text-gold pc-text-shadow-hero"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.9rem, 4vw, 3.1rem)'
                  }}
                >

                  Elegant Women's Fashion

                  <br />

                  <span
                    style={{
                      color:
                        'hsl(var(--charcoal-foreground) / 0.92)'
                    }}
                  >
                    &amp; Exquisite Waterproof Jewellery
                  </span>

                </motion.h1>


                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0
                  }}
                  animate={{
                    opacity: 1,
                    scaleX: 1
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35,
                    ease: 'easeOut' as const
                  }}
                  className="origin-left mb-6 bg-accent"
                  style={{
                    width: '56px',
                    height: '2px'
                  }}
                />


                <motion.p
                  initial={{
                    opacity: 0,
                    y: 16
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                    ease: 'easeOut' as const
                  }}
                  className="font-light mb-10 leading-relaxed pc-white-high"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)'
                  }}
                >
                  Discover timeless fashion, beautifully crafted for every occasion.
                </motion.p>


                <motion.div
                  initial={{
                    opacity: 0,
                    y: 16
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6,
                    ease: 'easeOut' as const
                  }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                >

                  <Link
                    to="/clothing"
                    className="inline-flex items-center justify-center bg-accent transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    style={{
                      color: 'hsl(var(--charcoal))',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      padding: '14px 32px',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Shop Clothing
                  </Link>


                  <Link
                    to="/jewellery"
                    className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 pc-text-gold"
                    style={{
                      border: '1.5px solid hsl(var(--accent))',
                      background: 'transparent',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      padding: '14px 32px',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Shop Jewellery
                  </Link>

                </motion.div>

              </div>

            </div>

          </div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.4,
              duration: 0.8
            }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >

            <span
              className="text-[10px] tracking-[0.3em] uppercase pc-text-gold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Scroll
            </span>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut' as const
              }}
              className="bg-accent"
              style={{
                width: '1px',
                height: '28px'
              }}
            />

          </motion.div>

        </section>



        {/* ── EXPLORE OUR COLLECTIONS ──────────────────────────────────────── */}

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">

          <div className="max-w-7xl mx-auto">


            <motion.div
              initial={{
                opacity: 0,
                y: 24
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7
              }}
              className="text-center mb-16"
            >

              <p
                className="text-[11px] tracking-[0.4em] uppercase font-medium mb-4 pc-text-gold"
                style={{
                  fontFamily: 'var(--font-sans)'
                }}
              >
                Curated for You
              </p>

              <h2
                className="font-semibold mb-6 text-foreground"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize:
                    'clamp(2rem, 3.5vw, 2.75rem)'
                }}
              >
                Explore Our Collections
              </h2>

              <div className="flex justify-center">

                <div
                  className="bg-accent"
                  style={{
                    width: '48px',
                    height: '2px'
                  }}
                />

              </div>

            </motion.div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">


              {/* ── Card 1: Sarees ── */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 36
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.65,
                  delay: 0
                }}
                className="group flex flex-col overflow-hidden"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))'
                }}
              >

                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: '3/4'
                  }}
                >

                  <img
                    src='/images/collections/collection1.png'
                    alt="Elegant Indian woman in traditional saree"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, hsl(var(--charcoal) / 0.55) 0%, transparent 50%)'
                    }}
                  />

                </div>


                <div className="flex flex-col flex-1 p-7">

                  <h3
                    className="font-semibold mb-3 text-foreground"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem'
                    }}
                  >
                    Sarees
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-7 text-muted-foreground flex-1"
                    style={{
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    Elegant sarees for celebrations and special occasions.
                  </p>

                  <Link
                    to="/sarees"
                    className="inline-flex items-center justify-center w-full transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 bg-primary text-primary-foreground"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      padding: '13px 24px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Shop Sarees
                  </Link>

                </div>


                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: '2px solid hsl(var(--accent))'
                  }}
                />

              </motion.div>



              {/* ── Card 2: Women's Clothing ── */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 36
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.13
                }}
                className="group flex flex-col overflow-hidden relative"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))'
                }}
              >

                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: '3/4'
                  }}
                >

                  <img
                    src='/images/collections/collection2.jpeg'
                    alt="Indian woman in elegant ethnic clothing"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, hsl(var(--charcoal) / 0.55) 0%, transparent 50%)'
                    }}
                  />

                </div>


                <div className="flex flex-col flex-1 p-7">

                  <h3
                    className="font-semibold mb-3 text-foreground"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem'
                    }}
                  >
                    Women's Clothing
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-7 text-muted-foreground flex-1"
                    style={{
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    Kurtis, dresses, and stylish two-piece collections.
                  </p>

                  <Link
                    to="/clothing"
                    className="inline-flex items-center justify-center w-full transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 bg-primary text-primary-foreground"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      padding: '13px 24px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Shop Clothing
                  </Link>

                </div>


                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: '2px solid hsl(var(--accent))'
                  }}
                />

              </motion.div>



              {/* ── Card 3: Waterproof Jewellery ── */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 36
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.26
                }}
                className="group flex flex-col overflow-hidden relative"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))'
                }}
              >

                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: '3/4'
                  }}
                >

                  <img
                    src='/images/collections/collection3.jpeg'
                    alt="Elegant gold jewellery necklace and earrings set"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, hsl(var(--charcoal) / 0.55) 0%, transparent 50%)'
                    }}
                  />

                </div>


                <div className="flex flex-col flex-1 p-7">

                  <h3
                    className="font-semibold mb-3 text-foreground"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem'
                    }}
                  >
                    Waterproof Jewellery
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-7 text-muted-foreground flex-1"
                    style={{
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    Elegant jewellery designed for everyday and festive style.
                  </p>

                  <Link
                    to="/jewellery"
                    className="inline-flex items-center justify-center w-full transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 bg-primary text-primary-foreground"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      padding: '13px 24px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Shop Jewellery
                  </Link>

                </div>


                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    border: '2px solid hsl(var(--accent))'
                  }}
                />

              </motion.div>

            </div>

          </div>

        </section>



        {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}

        <section className="py-24 px-4 sm:px-6 lg:px-8 pc-bg-deep-teal">

          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}
              className="text-center mb-16"
            >

              <p
                className="text-xs tracking-[0.3em] uppercase mb-4 pc-text-gold"
                style={{
                  fontFamily: 'var(--font-sans)'
                }}
              >
                Our Promise
              </p>

              <h2
                className="text-4xl sm:text-5xl font-semibold mb-6 text-primary-foreground"
                style={{
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Why Choose Pamela's Couture?
              </h2>

              <OrnamentalDivider className="justify-center" />

            </motion.div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {features.map((f, i) =>

                <motion.div
                  key={f.title}
                  initial={{
                    opacity: 0,
                    y: 30
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1
                  }}
                  className="flex flex-col items-center text-center p-8 rounded-sm"
                  style={{
                    background:
                      'hsl(var(--primary-foreground) / 0.08)'
                  }}
                >

                  <div
                    className="mb-5 p-4 rounded-full pc-text-gold"
                    style={{
                      background:
                        'hsl(var(--accent) / 0.15)'
                    }}
                  >
                    {f.icon}
                  </div>

                  <h3
                    className="text-xl font-semibold mb-3 text-primary-foreground"
                    style={{
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {f.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color:
                        'hsl(var(--primary-foreground) / 0.75)',
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    {f.desc}
                  </p>

                </motion.div>

              )}

            </div>

          </div>

        </section>



        {/* ── FESTIVE PROMO BANNER ─────────────────────────────────────────── */}

        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center pc-bg-charcoal">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="max-w-3xl mx-auto"
          >

            <p
              className="text-xs tracking-[0.4em] uppercase mb-4 pc-text-gold"
              style={{
                fontFamily: 'var(--font-sans)'
              }}
            >
              Limited Time Offer
            </p>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 pc-text-gold"
              style={{
                fontFamily: 'var(--font-heading)'
              }}
            >
              Festive Special
            </h2>

            <p
              className="text-2xl sm:text-3xl font-light mb-8 text-white"
              style={{
                fontFamily: 'var(--font-heading)'
              }}
            >
              Flat 15% Off
            </p>

            <OrnamentalDivider className="justify-center mb-8" />

            <p
              className="text-sm mb-10 font-light pc-white-soft"
              style={{
                fontFamily: 'var(--font-sans)'
              }}
            >
              Celebrate in style — exclusive savings on our entire collection.
            </p>

            <Link
              to="/clothing"
              className="inline-block px-12 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:scale-105 bg-accent"
              style={{
                color: 'hsl(var(--charcoal))',
                fontFamily: 'var(--font-sans)'
              }}
            >
              Shop Now
            </Link>

          </motion.div>

        </section>



        {/* ── FEATURED COLLECTION ──────────────────────────────────────────── */}

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">

          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}
              className="text-center mb-16"
            >

              <p
                className="text-[11px] tracking-[0.4em] uppercase font-medium mb-4 pc-text-gold"
                style={{
                  fontFamily: 'var(--font-sans)'
                }}
              >
                Handpicked for You
              </p>

              <h2
                className="font-semibold mb-4 text-foreground"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize:
                    'clamp(2rem, 3.5vw, 2.75rem)'
                }}
              >
                Featured Collection
              </h2>

              <p
                className="text-sm text-muted-foreground mb-6"
                style={{
                  fontFamily: 'var(--font-sans)'
                }}
              >
                Discover selected styles from Pamela's Couture.
              </p>

              <div className="flex justify-center">

                <div
                  className="bg-accent"
                  style={{
                    width: '48px',
                    height: '2px'
                  }}
                />

              </div>

            </motion.div>


            <div className="pc-featured-grid">

              {home.featuredProducts.map((product, i) =>

                <motion.div
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: 30
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1
                  }}
                  className="group relative pc-product-card"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))'
                  }}
                >

                  <div className="pc-card-image-wrap">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="pc-card-img transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                  </div>


                  <div className="pc-card-body">

                    <div
                      className="bg-accent flex-shrink-0"
                      style={{
                        width: '28px',
                        height: '1.5px',
                        marginBottom: '10px'
                      }}
                    />


                    <h3 className="pc-card-name">
                      {product.name}
                    </h3>


                    <p className="pc-card-subtitle">
                      {product.subtitle || '\u00A0'}
                    </p>


                    <p className="pc-card-desc">
                      {product.desc}
                    </p>


                    <div className="pc-card-price-row">

                      <span className="pc-text-gold pc-card-price">
                        {product.price}
                      </span>

                    </div>


                    <button
                      onClick={() =>
                        enquireOnWhatsApp(
                          product.subtitle
                            ? `${product.name} – ${product.subtitle}`
                            : product.name
                        )
                      }
                      className="pc-card-btn w-full bg-primary text-primary-foreground border-none cursor-pointer transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    >
                      Enquire on WhatsApp
                    </button>

                  </div>


                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: '2px solid hsl(var(--accent))'
                    }}
                  />

                </motion.div>

              )}

            </div>


            <style>{`

              .pc-featured-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 20px;
              }

              @media (min-width: 640px) {

                .pc-featured-grid {
                  grid-template-columns: repeat(2, 1fr);
                  gap: 24px;
                }

              }

              @media (min-width: 1024px) {

                .pc-featured-grid {
                  grid-template-columns: repeat(4, 1fr);
                  gap: 28px;
                }

              }


              .pc-product-card {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                width: 100%;
              }


              .pc-card-image-wrap {
                position: relative;
                width: 100%;
                aspect-ratio: 3 / 4;
                overflow: hidden;
                flex-shrink: 0;
                background: hsl(var(--muted));
              }


              @media (min-width: 1024px) {

                .pc-card-image-wrap {
                  aspect-ratio: 4 / 5;
                }

              }


              .pc-card-img {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center;
              }


              .pc-card-body {
                display: flex;
                flex-direction: column;
                flex: 1;
                padding: 16px;
              }


              @media (min-width: 640px) {

                .pc-card-body {
                  padding: 18px;
                }

              }


              @media (min-width: 1024px) {

                .pc-card-body {
                  padding: 20px;
                }

              }


              .pc-card-name {
                font-family: var(--font-heading);
                font-size: 1.05rem;
                font-weight: 600;
                line-height: 1.3;
                color: hsl(var(--foreground));
                margin: 0 0 4px;
                min-height: 2.6rem;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }


              .pc-card-subtitle {
                font-family: var(--font-sans);
                font-size: 0.70rem;
                letter-spacing: 0.04em;
                line-height: 1.4;
                color: hsl(var(--muted-foreground));
                margin: 0 0 8px;
                min-height: 1rem;
              }


              .pc-card-desc {
                font-family: var(--font-sans);
                font-size: 0.82rem;
                line-height: 1.65;
                color: hsl(var(--muted-foreground));
                margin: 0;
                flex: 1;
              }


              .pc-card-price-row {
                margin-top: 14px;
                margin-bottom: 12px;
                flex-shrink: 0;
              }


              .pc-card-price {
                font-family: var(--font-heading);
                font-size: 1.2rem;
                font-weight: 600;
                letter-spacing: 0.02em;
              }


              .pc-card-btn {
                font-family: var(--font-sans);
                font-size: 0.60rem;
                font-weight: 700;
                letter-spacing: 0.16em;
                text-transform: uppercase;
                padding: 11px 14px;
                flex-shrink: 0;
              }

            `}</style>


            <motion.div
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="text-center mt-12"
            >

              <Link
                to="/clothing"
                className="inline-flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 pc-text-gold"
                style={{
                  border:
                    '1.5px solid hsl(var(--accent))',
                  background: 'transparent',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  padding: '14px 40px',
                  textTransform: 'uppercase'
                }}
              >
                View All Collections
              </Link>

            </motion.div>

          </div>

        </section>



        {/* ── SHARE YOUR FEEDBACK ─────────────────────────────────────────── */}

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">

          <div className="max-w-3xl mx-auto text-center">

            <motion.div
              initial={{
                opacity: 0,
                y: 25
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7
              }}
            >

              <p
                className="text-[11px] tracking-[0.4em] uppercase font-medium mb-4 pc-text-gold"
                style={{
                  fontFamily: 'var(--font-sans)'
                }}
              >
                We Value Your Experience
              </p>


              <h2
                className="font-semibold mb-5 text-foreground"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize:
                    'clamp(2rem, 4vw, 2.8rem)'
                }}
              >
                Share Your Feedback
              </h2>


              <div className="flex justify-center mb-6">

                <div
                  className="bg-accent"
                  style={{
                    width: '48px',
                    height: '2px'
                  }}
                />

              </div>


              <p
                className="text-sm leading-relaxed text-muted-foreground mb-8"
                style={{
                  fontFamily: 'var(--font-sans)'
                }}
              >
                We'd love to hear about your experience with Pamela's Couture.
                Your feedback helps us serve you better.
              </p>


              <button
                type="button"
                onClick={() => {

                  const message =
                    "Hello Pamela's Couture,\n\n" +
                    "I would like to share my feedback about my experience.\n\n" +
                    "Product/Purchase:\n" +
                    "Rating: ⭐⭐⭐⭐⭐\n" +
                    "My Feedback:\n";

                  window.open(
                    'https://wa.me/' +
                      WHATSAPP_NUMBER +
                      '?text=' +
                      encodeURIComponent(message),
                    '_blank'
                  );

                }}
                className="inline-flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:brightness-110 bg-primary text-primary-foreground"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  padding: '15px 32px',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >

                <span style={{ fontSize: '1rem' }}>
                  💬
                </span>

                Give Feedback on WhatsApp

              </button>

            </motion.div>

          </div>

        </section>


      </main>

    </>

  );

}