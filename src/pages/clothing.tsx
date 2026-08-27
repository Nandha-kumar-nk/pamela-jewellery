import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const WHATSAPP_NUMBER = '916361255568';

function enquireOnWhatsApp(productName: string) {
  const message =
    "Hello Pamela's Couture,\n\n" +
    `I'm interested in "${productName}" that I saw on your website.\n\n` +
    'Could you please share the price, availability and delivery details?\n\n' +
    'Thank you.';

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}

// ─────────────────────────────────────────────
// CLOTHING PRODUCTS
// ─────────────────────────────────────────────

const products = [
 

  {
    id: 'c1',
    name: 'Emerald Green Bandhani Sharara Set',
    subtitle: 'Designer Bandhani Festive Set',
    description:
      'A rich emerald-green Bandhani-inspired ensemble with intricate detailing, flowing sharara pants and a delicate dupatta. Perfect for festive and wedding occasions.',
    price: 3430,
    image:
     '/images/clothing/c1.png',
  },

 
];

export default function ClothingPage() {
  return (
    <>
      <Helmet>
        <title>Women's Clothing | Pamela's Couture</title>

        <meta
          name="description"
          content="Explore women's clothing at Pamela's Couture — kurtis, dresses, nightwear and elegant two-piece sets."
        />

        <link
          rel="canonical"
          href="https://pamelascouture.in/clothing"
        />
      </Helmet>

      <main>

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}

        <section className="clothing-hero">

          <div className="clothing-hero-content">

            <p className="gold-label">
              Pamela's Couture
            </p>

            <h1>
              Women's Clothing
            </h1>

            <div className="gold-line" />

            <p className="hero-description">
              Discover elegant clothing designed to bring comfort,
              confidence and timeless style to every occasion.
            </p>

          </div>

        </section>


        {/* ═══════════════════════════════════════
            PRODUCTS
        ═══════════════════════════════════════ */}

        <section className="product-section">

          <div className="section-heading">

            <p className="gold-label">
              Our Collection
            </p>

            <h2>
              Clothing
            </h2>

            <p>
              Explore our latest women's clothing collection.
            </p>

          </div>


          <div className="product-grid">

            {products.map((product, index) => (

              <motion.article
                key={product.id}
                className="product-card"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >

                {/* PRODUCT IMAGE */}

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                </div>


                {/* PRODUCT CONTENT */}

                <div className="product-content">

                  <div className="gold-small-line" />

                  <p className="product-subtitle">
                    {product.subtitle}
                  </p>

                  <h2>
                    {product.name}
                  </h2>

                  <p className="product-description">
                    {product.description}
                  </p>

                  <p className="product-price">
                    ₹{product.price.toLocaleString('en-IN')}/-
                  </p>

                  <button
                    onClick={() =>
                      enquireOnWhatsApp(product.name)
                    }
                    className="whatsapp-button"
                  >
                    Enquire on WhatsApp
                  </button>

                </div>

              </motion.article>

            ))}

          </div>

        </section>


        {/* ═══════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════ */}

        <section className="bottom-section">

          <p className="gold-label">
            Explore More
          </p>

          <h2>
            Discover Our Collections
          </h2>

          <div className="bottom-links">

            <Link to="/sarees">
              Shop Sarees
            </Link>

            <Link to="/jewellery">
              Shop Jewellery
            </Link>

          </div>

        </section>


        {/* ═══════════════════════════════════════
            STYLES
        ═══════════════════════════════════════ */}

        <style>{`

          /* =========================================
             HERO
          ========================================= */

          .clothing-hero {
            min-height: 400px;

            display: flex;
            align-items: center;
            justify-content: center;

            text-align: center;

            padding: 100px 24px 60px;

            background:
              linear-gradient(
                rgba(20, 40, 42, 0.75),
                rgba(20, 40, 42, 0.75)
              ),
              url('/airo-assets/images/pages/clothing/hero');

            background-size: cover;
            background-position: center;
          }


          .clothing-hero-content {
            width: 100%;
            max-width: 650px;
          }


          .clothing-hero h1 {
            color: white;

            font-family: var(--font-heading);

            font-size: clamp(
              2.3rem,
              5vw,
              4rem
            );

            font-weight: 500;

            line-height: 1.2;

            margin: 10px 0 20px;
          }


          .hero-description {
            color: rgba(255, 255, 255, 0.88);

            font-family: var(--font-sans);

            font-size: 1rem;

            line-height: 1.7;

            margin: 0 auto;

            max-width: 600px;
          }


          /* =========================================
             GOLD LABEL
          ========================================= */

          .gold-label {
            color: hsl(var(--accent));

            font-family: var(--font-sans);

            font-size: 0.75rem;

            font-weight: 600;

            letter-spacing: 0.18em;

            text-transform: uppercase;

            line-height: 1.5;

            margin: 0;
          }


          /* =========================================
             GOLD LINE
          ========================================= */

          .gold-line {
            width: 50px;
            height: 2px;

            background: hsl(var(--accent));

            margin: 0 auto 20px;
          }


          /* =========================================
             PRODUCT SECTION
          ========================================= */

          .product-section {
            width: 100%;

            max-width: 1200px;

            margin: 0 auto;

            padding: 70px 24px;
          }


          /* =========================================
             SECTION HEADING
          ========================================= */

          .section-heading {
            text-align: center;

            margin-bottom: 50px;
          }


          .section-heading h2 {
            font-family: var(--font-heading);

            font-size: 2.4rem;

            font-weight: 500;

            line-height: 1.3;

            color: hsl(var(--foreground));

            margin: 8px 0 10px;
          }


          .section-heading p:last-child {
            color: hsl(var(--muted-foreground));

            font-family: var(--font-sans);

            font-size: 0.95rem;

            line-height: 1.6;

            margin: 0;
          }


          /* =========================================
             PRODUCT GRID
          ========================================= */

          .product-grid {
            display: grid;

            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 28px;

            align-items: stretch;
          }


          /* =========================================
             PRODUCT CARD
          ========================================= */

          .product-card {
            border: 1px solid hsl(var(--border));

            background: hsl(var(--card));

            overflow: hidden;

            display: flex;

            flex-direction: column;

            min-width: 0;

            min-height: 720px;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }


          .product-card:hover {
            transform: translateY(-4px);

            box-shadow:
              0 12px 30px rgba(0, 0, 0, 0.08);
          }


          /* =========================================
             PRODUCT IMAGE
          ========================================= */

          .product-image {
            width: 100%;

            aspect-ratio: 3 / 4;

            overflow: hidden;

            background: hsl(var(--muted));

            flex-shrink: 0;
          }


          .product-image img {
            width: 100%;

            height: 100%;

            object-fit: cover;

            object-position: center;

            display: block;

            transition:
              transform 0.6s ease;
          }


          .product-card:hover
          .product-image img {
            transform: scale(1.04);
          }


          /* =========================================
             PRODUCT CONTENT
          ========================================= */

          .product-content {
            padding: 24px;

            display: flex;

            flex-direction: column;

            flex: 1;

            min-width: 0;
          }


          /* =========================================
             SMALL GOLD LINE
          ========================================= */

          .gold-small-line {
            width: 30px;

            height: 2px;

            background: hsl(var(--accent));

            margin-bottom: 14px;

            flex-shrink: 0;
          }


          /* =========================================
             PRODUCT SUBTITLE
          ========================================= */

          .product-subtitle {
            color: hsl(var(--accent));

            font-family: var(--font-sans);

            font-size: 0.76rem;

            font-weight: 600;

            text-transform: uppercase;

            letter-spacing: 0.11em;

            line-height: 1.5;

            margin: 0 0 9px;
          }


          /* =========================================
             PRODUCT TITLE
          ========================================= */

          .product-content h2 {
            color: hsl(var(--foreground));

            font-family: var(--font-heading);

            font-size: 1.5rem;

            font-weight: 500;

            line-height: 1.35;

            margin: 0 0 14px;
          }


          /* =========================================
             PRODUCT DESCRIPTION
          ========================================= */

          .product-description {
            color: hsl(var(--muted-foreground));

            font-family: var(--font-sans);

            font-size: 0.95rem;

            font-weight: 400;

            line-height: 1.7;

            margin: 0;

            flex: 1;
          }


          /* =========================================
             PRODUCT PRICE
          ========================================= */

          .product-price {
            color: hsl(var(--accent));

            font-family: var(--font-sans);

            font-size: 1.15rem;

            font-weight: 700;

            line-height: 1.4;

            margin: 20px 0 16px;
          }


          /* =========================================
             WHATSAPP BUTTON
          ========================================= */

          .whatsapp-button {
            width: 100%;

            min-height: 52px;

            border: none;

            background: hsl(var(--primary));

            color: hsl(var(--primary-foreground));

            padding: 14px 16px;

            cursor: pointer;

            font-family: var(--font-sans);

            font-size: 0.72rem;

            font-weight: 700;

            letter-spacing: 0.08em;

            line-height: 1.3;

            text-transform: uppercase;

            transition:
              opacity 0.2s ease,
              transform 0.2s ease;
          }


          .whatsapp-button:hover {
            opacity: 0.9;

            transform: translateY(-1px);
          }


          .whatsapp-button:active {
            transform: translateY(0);
          }


          /* =========================================
             BOTTOM SECTION
          ========================================= */

          .bottom-section {
            text-align: center;

            padding: 70px 24px;
          }


          .bottom-section h2 {
            color: hsl(var(--foreground));

            font-family: var(--font-heading);

            font-size: 2.2rem;

            font-weight: 500;

            line-height: 1.3;

            margin: 8px 0 28px;
          }


          .bottom-links {
            display: flex;

            justify-content: center;

            gap: 15px;

            flex-wrap: wrap;
          }


          .bottom-links a {
            display: inline-flex;

            align-items: center;

            justify-content: center;

            min-height: 48px;

            padding: 13px 25px;

            background: hsl(var(--primary));

            color: hsl(var(--primary-foreground));

            text-decoration: none;

            font-family: var(--font-sans);

            font-size: 0.7rem;

            font-weight: 700;

            letter-spacing: 0.08em;

            line-height: 1.3;

            text-transform: uppercase;

            transition: opacity 0.2s ease;
          }


          .bottom-links a:hover {
            opacity: 0.9;
          }


          /* =========================================
             TABLET
          ========================================= */

          @media (max-width: 900px) {

            .product-grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));

              gap: 22px;
            }

            .product-card {
              min-height: 700px;
            }

          }


          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 600px) {

            .clothing-hero {
              min-height: 340px;

              padding:
                80px 20px
                50px;
            }


            .clothing-hero h1 {
              font-size: 2.2rem;
            }


            .hero-description {
              font-size: 0.9rem;

              line-height: 1.65;
            }


            .product-section {
              padding: 50px 15px;
            }


            .section-heading {
              margin-bottom: 35px;
            }


            .section-heading h2 {
              font-size: 2rem;
            }


            .section-heading p:last-child {
              font-size: 0.9rem;
            }


            .product-grid {
              grid-template-columns: 1fr;

              gap: 22px;
            }


            .product-card {
              min-height: auto;
            }


            .product-content {
              padding: 20px;
            }


            .product-subtitle {
              font-size: 0.72rem;

              letter-spacing: 0.1em;
            }


            .product-content h2 {
              font-size: 1.35rem;

              line-height: 1.35;
            }


            .product-description {
              font-size: 0.9rem;

              line-height: 1.65;
            }


            .product-price {
              font-size: 1.1rem;

              margin:
                18px 0
                14px;
            }


            .whatsapp-button {
              min-height: 50px;

              font-size: 0.68rem;

              padding: 13px;
            }


            .bottom-section {
              padding: 55px 20px;
            }


            .bottom-section h2 {
              font-size: 1.9rem;
            }

          }


          /* =========================================
             VERY SMALL DEVICES
          ========================================= */

          @media (max-width: 380px) {

            .product-grid {
              grid-template-columns: 1fr;
            }


            .product-content h2 {
              font-size: 1.25rem;
            }


            .product-description {
              font-size: 0.86rem;
            }

          }

        `}</style>

      </main>
    </>
  );
}