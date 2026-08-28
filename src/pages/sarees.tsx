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
// SAREE PRODUCTS
// ─────────────────────────────────────────────

const products = [
{
  id: 's1',
  name: 'Ivory Blossom Embroidered Saree',
  subtitle: 'Elegant Embroidered Festive Saree',
  description:
  'Elegant ivory saree with delicate silver embroidery and red floral detailing, crafted for timeless festive elegance.',
  price: 6375,
  image:
  '/images/sarees/saree1.png'
},

{
  id: 's2',
  name: 'Golden Heritage Embroidered Saree',
  subtitle: 'Elegant Golden Festive Saree',
  description:
  'A graceful golden-yellow saree adorned with delicate floral embroidery and a refined border, perfect for weddings, festive celebrations, and special occasions.',
  price: 6375,
  image:
  '/images/sarees/image.png'
},

{
  id: 's3',
  name: 'Sunset Orange Embroidered Saree',
  subtitle: 'Elegant Orange Festive Saree',
  description:
  'A vibrant orange saree featuring delicate embroidered borders and traditional detailing, perfect for festive celebrations, weddings, and special occasions.',
  price: 6975,
  image:
   '/images/sarees/orange saree.png'
},

{
  id: 's4',
  name: 'Mustard Gold Embroidered Draped Set',
  subtitle: 'Designer Festive Ensemble',
  description:
  'A statement mustard-gold draped ensemble featuring intricate floral embroidery and a contemporary silhouette, perfect for festive occasions and celebrations.',
  price: 11700,
  image:
  '/images/sarees/saree4.png'
},
{
  id: 's5',
  name: "Blush Pink Embroidered Saree",
  subtitle: "Elegant Floral Embroidered Festive Saree",
  description: "A graceful blush pink saree featuring delicate floral embroidery, intricate detailing along the border, and a beautifully embellished blouse. Its soft, sophisticated look makes it perfect for weddings, festive celebrations, receptions, and special occasions.",
  price: 6675,
  image: "/images/sarees/s5.jpeg"
},
{
  id: 's6',
  name: "Ivory Embroidered Organza Saree",
  subtitle: "Elegant Pearl-Tone Embroidered Saree",
  description: "An elegant ivory saree crafted with delicate floral embroidery, scalloped detailing, and intricate embellishments along the blouse neckline and saree border. Perfect for weddings, festive celebrations, receptions, and special occasions.",
  price: 5775,
  image: "/images/sarees/s6.jpeg"
},
{
  id: 's7',
  name: "Elegant Yellow Embroidered Saree",
  subtitle: "Graceful Hand-Embroidered Festive Saree",
  description: "A beautifully crafted yellow saree featuring delicate floral embroidery, a refined embellished border, and a contrasting deep green embroidered blouse. Perfect for festive occasions, celebrations, and elegant traditional wear.",
  price: 6075,
  image: "/images/sarees/s7.jpeg"
}
];



export default function SareesPage() {
  return (
    <>
      <Helmet>

        <title>Pamela's Couture | Elegant Sarees</title>

        <meta
          name="description"
          content="Explore premium sarees at Pamela's Couture — elegant sarees crafted for weddings, celebrations and special occasions." />
        

        <link
          rel="canonical"
          href="https://pamelascouture.in/sarees" />
        

      </Helmet>


      <main>

        {/* ═══════════════════════════════════════
             HERO
          ═══════════════════════════════════════ */}

        <section className="saree-hero">

          <div className="hero-overlay" />

          <div className="hero-decoration hero-decoration-left" />
          <div className="hero-decoration hero-decoration-right" />

          <motion.div
            className="saree-hero-content"

            initial={{
              opacity: 0,
              y: 25
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.7
            }}>
            

            <p className="hero-label">
              Pamela's Couture
            </p>

            <h1>
              Timeless Sarees
            </h1>

            <div className="hero-line" />

            <p className="hero-description">
              Discover elegant sarees crafted to make
              every celebration beautifully unforgettable.
            </p>

            <a
              href="#saree-collection"
              className="hero-button">
              
              Explore Collection
            </a>

          </motion.div>

        </section>


        {/* ═══════════════════════════════════════
             COLLECTION
          ═══════════════════════════════════════ */}

        <section
          className="product-section"
          id="saree-collection">
          

          <div className="section-heading">

            <p className="gold-label">
              The Saree Collection
            </p>

            <h2>
              Elegance in Every Drape
            </h2>

            <div className="section-ornament">

              <span />

              <b>✦</b>

              <span />

            </div>

            <p className="section-description">
              Handpicked designs created for weddings,
              festivities, celebrations and unforgettable moments.
            </p>

          </div>


          {/* PRODUCT GRID */}

          <div className="product-grid">

            {products.map((product, index) =>

            <motion.article
              key={product.id}
              className="product-card"

              initial={{
                opacity: 0,
                y: 25
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true,
                amount: 0.15
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08
              }}>
              

                {/* IMAGE */}

                <div className="product-image">

                  <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy" />
                

                  <div className="image-overlay">

                    <span>
                      Pamela's Couture
                    </span>

                  </div>

                  <div className="image-badge">
                    Premium Collection
                  </div>

                </div>


                {/* DETAILS */}

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


                  <div className="product-bottom">

                    <div className="price-wrapper">

                      <span className="price-label">
                        Price
                      </span>

                      <p className="product-price">
                        ₹{product.price.toLocaleString('en-IN')}/-
                      </p>

                    </div>

                    <button
                    onClick={() =>
                    enquireOnWhatsApp(product.name)
                    }
                    className="whatsapp-button">
                    
                      <span>
                        Enquire on WhatsApp
                      </span>

                      <span className="button-arrow">
                        →
                      </span>

                    </button>

                  </div>

                </div>

              </motion.article>

            )}

          </div>

        </section>


        {/* ═══════════════════════════════════════
             PROMISE SECTION
          ═══════════════════════════════════════ */}

        <section className="promise-section">

          <div className="promise-decoration promise-decoration-one" />
          <div className="promise-decoration promise-decoration-two" />

          <div className="promise-inner">

            <p className="gold-label">
              Pamela's Couture
            </p>

            <h2>
              Made for Your Most Beautiful Moments
            </h2>

            <div className="promise-line" />

            <p className="promise-description">
              From intimate celebrations to grand weddings,
              discover sarees that bring together timeless
              elegance, beautiful detailing and effortless style.
            </p>

            <div className="promise-features">

              <div className="promise-item">

                <span className="feature-number">
                  01
                </span>

                <div className="feature-icon">
                  ✦
                </div>

                <h3>
                  Elegant Designs
                </h3>

                <p>
                  Carefully selected styles for every occasion.
                </p>

              </div>


              <div className="promise-item">

                <span className="feature-number">
                  02
                </span>

                <div className="feature-icon">
                  ◇
                </div>

                <h3>
                  Premium Selection
                </h3>

                <p>
                  Beautiful fabrics and refined detailing.
                </p>

              </div>


              <div className="promise-item">

                <span className="feature-number">
                  03
                </span>

                <div className="feature-icon">
                  ♢
                </div>

                <h3>
                  Personal Enquiry
                </h3>

                <p>
                  Speak with us directly through WhatsApp.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ═══════════════════════════════════════
             BOTTOM CTA
          ═══════════════════════════════════════ */}

        <section className="bottom-section">

          <p className="gold-label">
            Continue Exploring
          </p>

          <h2>
            Discover More Collections
          </h2>

          <div className="cta-ornament">

            <span />

            <b>✦</b>

            <span />

          </div>

          <p className="bottom-description">
            Complete your look with our curated clothing
            and jewellery collections.
          </p>


          <div className="bottom-links">

            <Link to="/clothing">
              Shop Clothing
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

          /* =====================================================
             PREMIUM COLOUR PALETTE
          =====================================================

          Deep Teal  : #0D3B3E
          Teal       : #163F42
          Gold       : #D4AF37
          Cream      : #F7F4ED
          White      : #FFFFFF

          ===================================================== */


          /* =========================================
             HERO
          ========================================= */

          .saree-hero {

            position: relative;

            min-height: 520px;

            display: flex;

            align-items: center;

            justify-content: center;

            text-align: center;

            padding:
              110px
              24px
              80px;

            background:
              radial-gradient(
                circle at 50% 35%,
                rgba(212, 175, 55, 0.16),
                transparent 38%
              ),
              linear-gradient(
                135deg,
                #123F42 0%,
                #0D3033 50%,
                #09272A 100%
              );

            overflow: hidden;

            border-bottom:
              1px solid rgba(212, 175, 55, 0.28);
          }


          .saree-hero::before {

            content: '';

            position: absolute;

            inset: 0;

            background:
              radial-gradient(
                circle at 20% 80%,
                rgba(23, 107, 108, 0.30),
                transparent 32%
              );

            pointer-events: none;
          }


          .saree-hero::after {

            content: '';

            position: absolute;

            width: 420px;
            height: 420px;

            border-radius: 50%;

            right: -180px;
            bottom: -220px;

            background:
              rgba(212, 175, 55, 0.08);

            filter: blur(55px);

            pointer-events: none;
          }


          .hero-overlay {

            position: absolute;

            inset: 0;

            border:
              1px solid
              rgba(212, 175, 55, 0.30);

            margin: 22px;

            box-shadow:
              inset 0 0 80px
              rgba(212, 175, 55, 0.035);

            pointer-events: none;

            z-index: 1;
          }


          .hero-decoration {

            position: absolute;

            width: 180px;

            height: 180px;

            border:
              1px solid
              rgba(212, 175, 55, 0.12);

            border-radius: 50%;

            pointer-events: none;
          }


          .hero-decoration-left {

            left: -90px;

            top: 50%;

            transform:
              translateY(-50%);
          }


          .hero-decoration-right {

            right: -90px;

            top: 50%;

            transform:
              translateY(-50%);
          }


          .saree-hero-content {

            position: relative;

            z-index: 3;

            width: 100%;

            max-width: 720px;

            padding: 20px;
          }


          .hero-label {

            color:
              #D4AF37;

            font-family:
              var(--font-sans);

            font-size:
              0.68rem;

            font-weight:
              600;

            letter-spacing:
              0.30em;

            text-transform:
              uppercase;

            margin:
              0 0 18px;
          }


          .saree-hero h1 {

            color:
              #FFFFFF;

            font-family:
              var(--font-heading);

            font-size:
              clamp(
                3rem,
                7vw,
                5.2rem
              );

            font-weight:
              500;

            line-height:
              1.02;

            letter-spacing:
              -0.025em;

            margin:
              0 0 22px;

            text-shadow:
              0 8px 30px
              rgba(0, 0, 0, 0.25);
          }


          .hero-line {

            width:
              65px;

            height:
              2px;

            background:
              linear-gradient(
                90deg,
                transparent,
                #D4AF37,
                transparent
              );

            margin:
              0 auto 25px;
          }


          .hero-description {

            color:
              rgba(255,255,255,0.82);

            font-family:
              var(--font-sans);

            font-size:
              0.96rem;

            line-height:
              1.85;

            max-width:
              610px;

            margin:
              0 auto 30px;
          }


          .hero-button {

            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            min-height:
              50px;

            padding:
              14px 30px;

            background:
              linear-gradient(
                135deg,
                #D4AF37,
                #E4C766
              );

            color:
              #183C3D;

            text-decoration:
              none;

            font-family:
              var(--font-sans);

            font-size:
              0.70rem;

            font-weight:
              700;

            letter-spacing:
              0.12em;

            text-transform:
              uppercase;

            border-radius:
              2px;

            box-shadow:
              0 10px 30px
              rgba(0, 0, 0, 0.18);

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }


          .hero-button:hover {

            transform:
              translateY(-3px);

            box-shadow:
              0 15px 35px
              rgba(212, 175, 55, 0.22);
          }


          /* =========================================
             PRODUCT SECTION
          ========================================= */

          .product-section {

            width:
              100%;

            max-width:
              1240px;

            margin:
              0 auto;

            padding:
              95px 24px
              100px;
          }


          .section-heading {

            text-align:
              center;

            max-width:
              700px;

            margin:
              0 auto 60px;
          }


          .gold-label {

            color:
              #B8942E;

            font-family:
              var(--font-sans);

            font-size:
              0.68rem;

            font-weight:
              700;

            letter-spacing:
              0.22em;

            line-height:
              1.5;

            text-transform:
              uppercase;

            margin:
              0 0 9px;
          }


          .section-heading h2 {

            color:
              hsl(var(--foreground));

            font-family:
              var(--font-heading);

            font-size:
              clamp(
                2.2rem,
                4vw,
                3rem
              );

            font-weight:
              500;

            line-height:
              1.25;

            letter-spacing:
              -0.015em;

            margin:
              0 0 16px;
          }


          .section-ornament {

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            gap:
              12px;

            margin:
              0 auto 18px;
          }


          .section-ornament span {

            width:
              45px;

            height:
              1px;

            background:
              linear-gradient(
                90deg,
                transparent,
                #D4AF37
              );
          }


          .section-ornament span:last-child {

            background:
              linear-gradient(
                90deg,
                #D4AF37,
                transparent
              );
          }


          .section-ornament b {

            color:
              #D4AF37;

            font-size:
              0.8rem;

            font-weight:
              400;
          }


          .section-description {

            color:
              hsl(var(--muted-foreground));

            font-family:
              var(--font-sans);

            font-size:
              0.94rem;

            line-height:
              1.75;

            margin:
              0 auto;

            max-width:
              600px;
          }


          /* =========================================
             PRODUCT GRID
          ========================================= */

          .product-grid {

            display:
              grid;

            grid-template-columns:
              repeat(
                3,
                minmax(0, 1fr)
              );

            gap:
              25px;

            align-items:
              stretch;
          }


          /* =========================================
             PRODUCT CARD
          ========================================= */

          .product-card {

            position:
              relative;

            border:
              1px solid
              rgba(180, 145, 50, 0.20);

            background:
              linear-gradient(
                145deg,
                #FFFFFF,
                #FBF9F4
              );

            overflow:
              hidden;

            display:
              flex;

            flex-direction:
              column;

            min-width:
              0;

            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease,
              border-color 0.35s ease;

            box-shadow:
              0 8px 25px
              rgba(0, 0, 0, 0.045);
          }


          .product-card:hover {

            transform:
              translateY(-8px);

            border-color:
              rgba(180, 145, 50, 0.50);

            box-shadow:
              0 22px 50px
              rgba(0, 0, 0, 0.12);
          }


          /* =========================================
             PRODUCT IMAGE
          ========================================= */

          .product-image {

            position:
              relative;

            width:
              100%;

            aspect-ratio:
              3 / 4;

            overflow:
              hidden;

            background:
              linear-gradient(
                135deg,
                #F4F0E8,
                #EDE7DA
              );
          }


          .product-image img {

            width:
              100%;

            height:
              100%;

            object-fit:
              cover;

            object-position:
              center;

            display:
              block;

            transition:
              transform 0.8s
              cubic-bezier(
                0.2,
                0.7,
                0.2,
                1
              );
          }


          .product-card:hover
          .product-image img {

            transform:
              scale(1.045);
          }


          .product-image::after {

            content:
              '';

            position:
              absolute;

            inset:
              0;

            background:
              linear-gradient(
                120deg,
                transparent 25%,
                rgba(255,255,255,0.18) 50%,
                transparent 75%
              );

            transform:
              translateX(-120%);

            transition:
              transform 0.8s ease;

            pointer-events:
              none;
          }


          .product-card:hover
          .product-image::after {

            transform:
              translateX(120%);
          }


          /* =========================================
             IMAGE OVERLAY
          ========================================= */

          .image-overlay {

            position:
              absolute;

            left:
              14px;

            bottom:
              14px;

            padding:
              7px 11px;

            background:
              rgba(20,40,42,0.82);

            backdrop-filter:
              blur(5px);

            opacity:
              0;

            transform:
              translateY(6px);

            transition:
              opacity 0.3s ease,
              transform 0.3s ease;

            z-index:
              3;
          }


          .product-card:hover
          .image-overlay {

            opacity:
              1;

            transform:
              translateY(0);
          }


          .image-overlay span {

            color:
              white;

            font-family:
              var(--font-sans);

            font-size:
              0.58rem;

            font-weight:
              600;

            letter-spacing:
              0.12em;

            text-transform:
              uppercase;
          }


          /* =========================================
             IMAGE BADGE
          ========================================= */

          .image-badge {

            position:
              absolute;

            top:
              14px;

            right:
              14px;

            padding:
              7px 10px;

            background:
              rgba(255,255,255,0.92);

            color:
              #8F7020;

            border:
              1px solid
              rgba(212,175,55,0.30);

            font-family:
              var(--font-sans);

            font-size:
              0.54rem;

            font-weight:
              700;

            letter-spacing:
              0.10em;

            text-transform:
              uppercase;

            z-index:
              3;
          }


          /* =========================================
             PRODUCT CONTENT
          ========================================= */

          .product-content {

            padding:
              27px 24px 24px;

            display:
              flex;

            flex-direction:
              column;

            flex:
              1;

            min-width:
              0;
          }


          .gold-small-line {

            width:
              34px;

            height:
              2px;

            background:
              linear-gradient(
                90deg,
                #D4AF37,
                #B8942E
              );

            margin:
              0 0 15px;
          }


          .product-subtitle {

            color:
              #B18B2B;

            font-family:
              var(--font-sans);

            font-size:
              0.66rem;

            font-weight:
              700;

            text-transform:
              uppercase;

            letter-spacing:
              0.14em;

            line-height:
              1.5;

            margin:
              0 0 10px;
          }


          .product-content h2 {

            color:
              hsl(var(--foreground));

            font-family:
              var(--font-heading);

            font-size:
              1.42rem;

            font-weight:
              500;

            line-height:
              1.32;

            letter-spacing:
              -0.01em;

            margin:
              0 0 13px;
          }


          .product-description {

            color:
              hsl(var(--muted-foreground));

            font-family:
              var(--font-sans);

            font-size:
              0.86rem;

            font-weight:
              400;

            line-height:
              1.72;

            margin:
              0;

            flex:
              1;
          }


          /* =========================================
             PRICE
             SAME STYLE AS JEWELLERY
          ========================================= */

          .product-bottom {

            margin-top:
              22px;
          }


          .price-wrapper {

            display:
              flex;

            align-items:
              baseline;

            gap:
              10px;

            padding-top:
              16px;

            margin-bottom:
              16px;

            border-top:
              1px solid
              hsl(var(--border));
          }


          .price-label {

            color:
              hsl(var(--muted-foreground));

            font-family:
              var(--font-sans);

            font-size:
              0.60rem;

            font-weight:
              600;

            letter-spacing:
              0.10em;

            text-transform:
              uppercase;
          }


          .product-price {

            color:
              hsl(var(--accent));

            font-family:
              var(--font-heading);

            font-size:
              1.15rem;

            font-weight:
              600;

            line-height:
              1.4;

            letter-spacing:
              0.01em;

            margin:
              0;
          }


          /* =========================================
             WHATSAPP BUTTON
          ========================================= */

          .whatsapp-button {

            width:
              100%;

            min-height:
              52px;

            display:
              flex;

            align-items:
              center;

            justify-content:
              space-between;

            gap:
              12px;

            border:
              1px solid
              rgba(212,175,55,0.20);

            background:
              linear-gradient(
                135deg,
                #163F42,
                #0D3033
              );

            color:
              #FFFFFF;

            padding:
              14px 17px;

            cursor:
              pointer;

            font-family:
              var(--font-sans);

            font-size:
              0.68rem;

            font-weight:
              700;

            letter-spacing:
              0.07em;

            line-height:
              1.3;

            text-transform:
              uppercase;

            box-shadow:
              0 7px 18px
              rgba(0, 0, 0, 0.08);

            transition:
              background 0.25s ease,
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }


          .whatsapp-button:hover {

            background:
              linear-gradient(
                135deg,
                #0D3033,
                #163F42
              );

            transform:
              translateY(-2px);

            box-shadow:
              0 12px 25px
              rgba(0, 0, 0, 0.14);
          }


          .button-arrow {

            color:
              #D4AF37;

            font-size:
              1.05rem;

            transition:
              transform 0.25s ease;
          }


          .whatsapp-button:hover
          .button-arrow {

            transform:
              translateX(4px);
          }


          /* =========================================
             PROMISE SECTION
          ========================================= */

          .promise-section {

            position:
              relative;

            overflow:
              hidden;

            background:
              radial-gradient(
                circle at 20% 20%,
                rgba(212,175,55,0.08),
                transparent 30%
              ),
              linear-gradient(
                135deg,
                #F8F5ED,
                #F1ECE0
              );

            padding:
              95px 24px;

            border-top:
              1px solid
              rgba(180,145,50,0.18);

            border-bottom:
              1px solid
              rgba(180,145,50,0.18);
          }


          .promise-decoration {

            position:
              absolute;

            border:
              1px solid
              rgba(180,145,50,0.10);

            border-radius:
              50%;

            pointer-events:
              none;
          }


          .promise-decoration-one {

            width:
              300px;

            height:
              300px;

            left:
              -180px;

            top:
              -130px;
          }


          .promise-decoration-two {

            width:
              220px;

            height:
              220px;

            right:
              -130px;

            bottom:
              -120px;
          }


          .promise-inner {

            position:
              relative;

            z-index:
              2;

            max-width:
              1100px;

            margin:
              0 auto;

            text-align:
              center;
          }


          .promise-inner h2 {

            color:
              hsl(var(--foreground));

            font-family:
              var(--font-heading);

            font-size:
              clamp(
                2.2rem,
                4vw,
                3rem
              );

            font-weight:
              500;

            line-height:
              1.3;

            max-width:
              760px;

            margin:
              7px auto 18px;
          }


          .promise-line {

            width:
              55px;

            height:
              2px;

            margin:
              0 auto 20px;

            background:
              linear-gradient(
                90deg,
                transparent,
                #D4AF37,
                transparent
              );
          }


          .promise-description {

            color:
              hsl(var(--muted-foreground));

            font-family:
              var(--font-sans);

            font-size:
              0.94rem;

            line-height:
              1.85;

            max-width:
              700px;

            margin:
              0 auto;
          }


          /* =========================================
             PROMISE FEATURES
          ========================================= */

          .promise-features {

            display:
              grid;

            grid-template-columns:
              repeat(3, 1fr);

            gap:
              18px;

            margin-top:
              50px;
          }


          .promise-item {

            position:
              relative;

            padding:
              28px 22px;

            background:
              rgba(255,255,255,0.48);

            border:
              1px solid
              rgba(180,145,50,0.20);

            transition:
              transform 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
          }


          .promise-item:hover {

            transform:
              translateY(-5px);

            border-color:
              rgba(180,145,50,0.50);

            box-shadow:
              0 15px 35px
              rgba(0,0,0,0.06);
          }


          .feature-number {

            display:
              block;

            color:
              #B18B2B;

            font-family:
              var(--font-sans);

            font-size:
              0.68rem;

            font-weight:
              700;

            letter-spacing:
              0.18em;

            margin-bottom:
              12px;
          }


          .feature-icon {

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            width:
              42px;

            height:
              42px;

            margin:
              0 auto 14px;

            border:
              1px solid
              rgba(212,175,55,0.45);

            border-radius:
              50%;

            color:
              #B18B2B;

            font-size:
              1rem;
          }


          .promise-item h3 {

            color:
              hsl(var(--foreground));

            font-family:
              var(--font-heading);

            font-size:
              1.18rem;

            font-weight:
              500;

            margin:
              0 0 9px;
          }


          .promise-item p {

            color:
              hsl(var(--muted-foreground));

            font-family:
              var(--font-sans);

            font-size:
              0.82rem;

            line-height:
              1.6;

            margin:
              0;
          }


          /* =========================================
             BOTTOM CTA
          ========================================= */

          .bottom-section {

            text-align:
              center;

            padding:
              90px 24px;
          }


          .bottom-section h2 {

            color:
              hsl(var(--foreground));

            font-family:
              var(--font-heading);

            font-size:
              clamp(
                2.1rem,
                4vw,
                2.9rem
              );

            font-weight:
              500;

            line-height:
              1.3;

            margin:
              7px 0 14px;
          }


          .cta-ornament {

            display:
              flex;

            align-items:
              center;

            justify-content:
              center;

            gap:
              12px;

            margin:
              0 auto 18px;
          }


          .cta-ornament span {

            width:
              45px;

            height:
              1px;

            background:
              linear-gradient(
                90deg,
                transparent,
                #D4AF37
              );
          }


          .cta-ornament span:last-child {

            background:
              linear-gradient(
                90deg,
                #D4AF37,
                transparent
              );
          }


          .cta-ornament b {

            color:
              #D4AF37;

            font-size:
              0.8rem;
          }


          .bottom-description {

            color:
              hsl(var(--muted-foreground));

            font-family:
              var(--font-sans);

            font-size:
              0.94rem;

            line-height:
              1.7;

            margin:
              0 auto 30px;

            max-width:
              550px;
          }


          .bottom-links {

            display:
              flex;

            justify-content:
              center;

            gap:
              14px;

            flex-wrap:
              wrap;
          }


          .bottom-links a {

            display:
              inline-flex;

            align-items:
              center;

            justify-content:
              center;

            min-height:
              50px;

            min-width:
              170px;

            padding:
              14px 26px;

            background:
              #163F42;

            color:
              #FFFFFF;

            border:
              1px solid
              rgba(212,175,55,0.35);

            text-decoration:
              none;

            font-family:
              var(--font-sans);

            font-size:
              0.68rem;

            font-weight:
              700;

            letter-spacing:
              0.08em;

            text-transform:
              uppercase;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              background 0.3s ease;
          }


          .bottom-links a:hover {

            transform:
              translateY(-3px);

            background:
              #0D3033;

            box-shadow:
              0 10px 25px
              rgba(0,0,0,0.10);
          }


          /* =========================================
             TABLET
          ========================================= */

          @media (max-width: 900px) {

            .product-grid {

              grid-template-columns:
                repeat(
                  2,
                  minmax(0, 1fr)
                );

              gap:
                22px;
            }


            .promise-features {

              grid-template-columns:
                repeat(3, 1fr);

              gap:
                12px;
            }


            .product-content {

              padding:
                23px 21px;
            }

          }


          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 600px) {

            .saree-hero {

              min-height:
                450px;

              padding:
                90px 18px 65px;
            }


            .hero-overlay {

              margin:
                12px;
            }


            .hero-decoration {

              display:
                none;
            }


            .saree-hero h1 {

              font-size:
                clamp(
                  2.5rem,
                  12vw,
                  3.4rem
                );

              line-height:
                1.05;
            }


            .hero-description {

              font-size:
                0.88rem;

              line-height:
                1.7;
            }


            .hero-button {

              width:
                100%;

              max-width:
                250px;
            }


            .product-section {

              padding:
                65px 15px 75px;
            }


            .section-heading {

              margin-bottom:
                40px;
            }


            .section-heading h2 {

              font-size:
                2rem;
            }


            .section-description {

              font-size:
                0.88rem;
            }


            .product-grid {

              grid-template-columns:
                1fr;

              gap:
                20px;
            }


            .product-content {

              padding:
                23px 20px 20px;
            }


            .product-content h2 {

              font-size:
                1.35rem;
            }


            .product-description {

              font-size:
                0.86rem;

              line-height:
                1.68;
            }


            .product-price {

              font-size:
                1.15rem;
            }


            .whatsapp-button {

              min-height:
                50px;

              font-size:
                0.64rem;
            }


            .image-overlay {

              display:
                none;
            }


            .image-badge {

              font-size:
                0.50rem;

              padding:
                6px 8px;
            }


            .promise-section {

              padding:
                70px 18px;
            }


            .promise-inner h2 {

              font-size:
                2.15rem;
            }


            .promise-description {

              font-size:
                0.86rem;
            }


            .promise-features {

              grid-template-columns:
                1fr;

              gap:
                12px;

              margin-top:
                35px;
            }


            .promise-item {

              text-align:
                left;

              padding:
                22px;
            }


            .feature-icon {

              margin:
                0 0 12px;
            }


            .bottom-section {

              padding:
                70px 18px;
            }


            .bottom-section h2 {

              font-size:
                2rem;
            }


            .bottom-links {

              flex-direction:
                column;

              align-items:
                center;
            }


            .bottom-links a {

              width:
                100%;

              max-width:
                300px;
            }

          }


          /* =========================================
             SMALL MOBILE
          ========================================= */

          @media (max-width: 380px) {

            .saree-hero h1 {

              font-size:
                2.3rem;
            }


            .product-content h2 {

              font-size:
                1.25rem;
            }


            .product-description {

              font-size:
                0.84rem;
            }


            .whatsapp-button {

              font-size:
                0.60rem;
            }

          }

        `}</style>

      </main>
    </>);

}