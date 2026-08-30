import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { useMemo, useState } from 'react';
import OrnamentalDivider from '@/components/OrnamentalDivider';

// ─────────────────────────────────────────────────────────────
// WhatsApp
// ─────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = '916361255568';

function enquireOnWhatsApp(productName: string) {
  const message =
  "Hello Pamela's Couture," +
  '\n\n' +
  "I'm interested in " +
  productName +
  ' that I saw on your website.' +
  '\n\n' +
  'Could you please share the price, available sizes/colours, and delivery details?' +
  '\n\n' +
  'Thank you for your assistance.';

  window.open(
    'https://wa.me/' +
    WHATSAPP_NUMBER +
    '?text=' +
    encodeURIComponent(message),
    '_blank'
  );
}

// ─────────────────────────────────────────────────────────────
// Product data
// Add new jewellery products here.
// ─────────────────────────────────────────────────────────────

const products = [
{
  id: 'n1',
  name: 'Royal Amethyst Multi-Strand Necklace Set',
  category: 'Necklaces',
  subtitle: 'Necklace & Matching Earrings',
  desc: 'A sophisticated multi-strand necklace featuring sparkling stones and elegant purple gemstone accents, paired with matching statement earrings. A graceful choice for weddings, receptions and special occasions.',
  price: 2475,
  image: '/images/jewellery/necklaces/n1.jpeg'
},

{
  id: 'n2',
  name: 'Emerald Cascade Statement Necklace Set',
  category: 'Necklaces',
  subtitle: 'Necklace & Matching Earrings',
  desc: 'A striking emerald-green jewellery set featuring a geometric statement pendant, coordinated necklace and matching earrings with intricate stone detailing. Designed to create a bold and luxurious look for festive and special occasions.',
  price: 1800,
  image:  '/images/jewellery/necklaces/n2.jpeg'
},
{
  id: 'n3',
  name: 'Amethyst Cascade Statement Necklace Set',
  category: 'Necklaces',
  subtitle: 'Necklace & Matching Earrings',
  desc: 'A stunning statement jewellery set featuring elegant purple amethyst-style stones, layered crystal detailing, a cascading pendant design, and matching drop earrings. Perfect for weddings, festive celebrations, parties, and special occasions.',
  price: 2527,
  image: '/images/jewellery/necklaces/n3.png'
},
{
  id: 'n4',
  name: 'Mint Green Crystal Necklace Set',
  category: 'Necklaces',
  subtitle: 'Layered Necklace & Matching Earrings',
  desc: 'A sophisticated jewellery set featuring layered strands of sparkling stones with elegant mint-green crystal accents and matching drop earrings. Perfect for weddings, festive celebrations, receptions, and special occasions.',
  price: 3000,
  image: '/images/jewellery/necklaces/n4.png'
},
{
  id: 'n5',
  name: 'Ruby Elegance Statement Necklace Set',
  category: 'Necklaces',
  subtitle: 'Ruby Necklace & Matching Earrings',
  desc: 'A luxurious ruby-red jewellery set featuring a layered statement necklace with sparkling stone detailing and matching drop earrings. Perfect for weddings, festive celebrations, and special occasions.',
  price: 2992,
  image: '/images/jewellery/necklaces/n5.png'
},
{
  id: 'n6',
  name: 'Royal Blue Sapphire Necklace Set',
  category: 'Necklaces',
  subtitle: 'Blue Sapphire Necklace & Matching Earrings',
  desc: 'A sophisticated royal blue jewellery set featuring a layered necklace adorned with deep blue stones, sparkling accents, and matching drop earrings. Perfect for weddings, festive celebrations, and elegant evening occasions.',
  price: 3525,
  image: '/images/jewellery/necklaces/n6.png'
},
{
  id: 'n7',
  name: 'Blush Pink Crystal Necklace Set',
  category: 'Necklaces',
  subtitle: 'Pink Crystal Necklace & Matching Earrings',
  desc: 'An elegant jewellery set featuring delicate blush-pink stones surrounded by sparkling crystal detailing, complemented by a graceful layered necklace and matching drop earrings. Perfect for weddings, festive occasions, and sophisticated evening looks.',
  price: 1987,
  image: '/images/jewellery/necklaces/n7.png'
},
{
  id: 'n8',
  name: 'Amethyst Royal Statement Necklace Set',
  category: 'Necklaces',
  subtitle: 'Amethyst Necklace & Matching Earrings',
  desc: 'A stunning statement jewellery set featuring deep purple amethyst-inspired stones with intricate crystal detailing and elegant cascading designs. Perfect for weddings, festive celebrations, parties, and glamorous evening occasions.',
  price: 2325,
  image: '/images/jewellery/necklaces/n8.png'
},
{
  id: 'n9',
  name: 'Pearl Elegance Necklace Set',
  category: 'Necklaces',
  subtitle: 'Pearl Necklace & Matching Earrings',
  desc: 'An elegant pearl jewellery set featuring lustrous pearls arranged with intricate crystal detailing and graceful floral-inspired motifs. Perfect for weddings, festive occasions, celebrations, and timeless traditional looks.',
  price: 2025,
  image: '/images/jewellery/necklaces/n9.png'
},
{
  id: 'n10',
  name: 'Pearl Leaf Pendant Necklace Set',
  category: 'Necklaces',
  subtitle: 'Pearl Necklace & Matching Earrings',
  desc: 'A graceful pearl jewellery set featuring lustrous pearls, an elegant leaf-inspired statement pendant, sparkling stone detailing, and matching drop earrings. Perfect for weddings, festive celebrations, parties, and sophisticated traditional occasions.',
  price: 1455,
  image: '/images/jewellery/necklaces/n10.png'
},
{
  id: 'n11',
  name: 'Mint Green Bridal Jewellery Set',
  category: 'Necklaces',
  subtitle: 'Necklace, Earrings & Mangtika Set',
  desc: 'A luxurious mint-green jewellery set featuring a layered necklace, elegant chandelier earrings, and a matching mangtika. Adorned with sparkling stones and delicate teardrop embellishments, this statement set is perfect for weddings, festive celebrations, and special occasions.',
  price: 4050,
  image: '/images/jewellery/necklaces/n11.jpeg'
},
{
  id: 'e1',
  name: 'Radiant Bloom Diamond Drop Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Floral-Inspired Statement Earrings',
  desc: 'A stunning pair of silver-plated drop earrings featuring brilliant cubic zirconia stones arranged in a delicate floral-inspired design. Lightweight and elegant, these sparkling earrings are perfect for weddings, parties, festive celebrations and special occasions.',
  price: 1280,
  image: '/images/jewellery/earrings/e1.png'
},

{
  id: 'e2',
  name: 'Emerald Bow Crystal Statement Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Emerald-Green Statement Earrings',
  desc: 'A striking pair of emerald-green statement earrings featuring a bold bow-inspired design, rich green stones, and sparkling crystal accents. Set against a sophisticated silver-tone finish, these earrings add a luxurious touch to weddings, festive celebrations, parties, and evening occasions.',
  price: 1000,
  image: '/images/jewellery/earrings/e2.png'
},

{
  id: 'e3',
  name: 'Golden Radiance Floral Earrings',
  category: 'Earrings',
  subtitle: 'Sparkling Sunburst Statement Earrings',
  desc: 'A stunning pair of gold-tone earrings featuring a radiant floral-inspired design with a brilliant center stone and sparkling crystal detailing. Perfect for weddings, festive celebrations, parties and special occasions.',
  price: 150,
  image: '/images/jewellery/earrings/e3.png'
},
{
  id: 'e4',
  name: 'Ruby Heart Crystal Hoops',
  category: 'Earrings',
  subtitle: 'Romantic Heart Gemstone Hoops',
  desc: 'Beautiful gold-tone hoop earrings featuring a sparkling heart-shaped centre with rich ruby-coloured crystal detailing. A romantic and glamorous choice for celebrations and special occasions.',
  price: 130,
  image: '/images/jewellery/earrings/e4.png'
},
{
  id: 'e5',
  name: 'Golden Heritage Scroll Hoops',
  category: 'Earrings',
  subtitle: 'Elegant Gold Scroll-Detail Hoop Earrings',
  desc: 'A sophisticated pair of gold-tone hoop earrings featuring graceful scroll-inspired detailing with a delicate sparkling border. A timeless design that adds an elegant touch to traditional, festive and evening looks.',
  price: 150,
  image: '/images/jewellery/earrings/e5.png'
},
{
  id: 'e6',
  name: 'Silver Royal Crystal Stud Earrings',
  category: 'Earrings',
  subtitle: 'Brilliant Square Halo Statement Earrings',
  desc: 'A glamorous pair of silver-tone square earrings featuring a brilliant centre stone surrounded by intricate crystal detailing. Designed to add sophisticated sparkle to festive celebrations, parties, weddings and elegant evening looks.',
  price: 180,
  image: '/images/jewellery/earrings/e6.png'
},
{
  id: 'e7',
  name: 'Emerald Gold Huggie Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Green Gemstone Hoop Earrings',
  desc: 'Delicate gold-tone huggie earrings adorned with vibrant green gemstone accents. Their sleek and elegant design makes them perfect for everyday wear, festive occasions and adding a refined pop of colour to any outfit.',
  price: 140,
  image: '/images/jewellery/earrings/e7.png'
},
{
  id: 'e8',
  name: 'Silver Square Crystal Stud Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Pavé Square Stud Earrings',
  desc: 'A sophisticated pair of silver-tone square stud earrings featuring intricate pavé crystal detailing and a sparkling geometric centre. Their clean, elegant design is perfect for everyday sophistication, parties, weddings and special occasions.',
  price: 200,
  image: '/images/jewellery/earrings/e8.png'
},
{
  id: 'e9',
  name: 'Silver Leaf Crystal Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Leaf-Inspired Statement Earrings',
  desc: 'A graceful pair of silver-tone earrings featuring delicate leaf-shaped crystal detailing arranged in a beautiful botanical design. Their sparkling finish adds an elegant touch to weddings, festive celebrations, parties and special occasions.',
  price: 330,
  image: '/images/jewellery/earrings/e9.png'
},
{
  id: 'e10',
  name: 'Golden Circle Crystal Hoops',
  category: 'Earrings',
  subtitle: 'Elegant Gold Hoop Earrings with Crystal Detailing',
  desc: 'A luxurious pair of gold-tone hoop earrings featuring a beautiful pattern of sparkling round crystals. Their bold yet elegant design adds a glamorous touch to festive celebrations, parties, weddings and evening looks.',
  price: 180,
  image: '/images/jewellery/earrings/e10.png'
},
{
  id: 'e11',
  name: 'Pearl Blossom Crystal Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Pearl Flower & Square Crystal Earrings',
  desc: 'A delicate blend of timeless pearls and brilliant square-cut crystals in a charming floral design. Perfect for adding a touch of elegance to everyday outfits, festive celebrations, weddings and special occasions.',
  price: 220,
  image: '/images/jewellery/earrings/e11.png'
},
{
  id: 'e12',
  name: 'Golden Crystal Wing Hoop Earrings',
  category: 'Earrings',
  subtitle: 'Bold Gold Hoops with Sparkling Crystal Detailing',
  desc: 'A stylish pair of polished gold-tone hoop earrings featuring layered wing-inspired bands adorned with sparkling crystal accents. Their bold yet elegant design adds a luxurious touch to festive occasions, parties, weddings and evening looks.',
  price: 180,
  image: '/images/jewellery/earrings/e12.png'
},
{
  id: 'e13',
  name: 'Golden Heart Huggie Earrings',
  category: 'Earrings',
  subtitle: 'Romantic Gold Hoops with Crystal Heart Detailing',
  desc: 'A charming pair of polished gold-tone huggie earrings featuring elegant heart motifs framed with sparkling crystal accents. A romantic and luxurious design, perfect for festive occasions, date nights, celebrations and special events.',
  price: 180,
  image: '/images/jewellery/earrings/e13.png'
},
{
  id: 'e14',
  name: 'Ruby Pearl Stud Earrings',
  category: 'Earrings',
  subtitle: 'Ruby, Pearl & Crystal Stud Earrings',
  desc: 'Elegant gold-tone stud earrings featuring rich ruby-red rectangular stones surrounded by delicate pearls and sparkling crystal detailing. A luxurious choice for festive occasions, celebrations, and traditional outfits.',
  price: 220,
  image: '/images/jewellery/earrings/e14.png'
},
{
  id: 'e15',
  name: 'Black Onyx Pearl Stud Earrings',
  category: 'Earrings',
  subtitle: 'Black Stone, Pearl & Crystal Stud Earrings',
  desc: 'Sophisticated gold-tone stud earrings featuring bold black rectangular stones framed with delicate pearls and sparkling crystal accents. A timeless and elegant choice for festive occasions, celebrations, and traditional outfits.',
  price: 220,
  image: '/images/jewellery/earrings/e15.png'
},
{
  id: 'e16',
  name: 'Multicolor Gemstone Gold Hoop Earrings',
  category: 'Earrings',
  subtitle: 'Gold Hoops with Ruby & Emerald Stones',
  desc: 'Beautiful gold-tone hoop earrings featuring vibrant ruby, emerald, and sparkling stone accents in an elegant floral-inspired design. Perfect for adding a stylish and luxurious touch to festive and everyday outfits.',
  price: 160,
  image: '/images/jewellery/earrings/e16.png'
},
{
  id: 'e17',
  name: 'Mint Green Stone Floral Jhumka Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Silver Jhumkas with Mint Green Stones',
  desc: 'Exquisite silver-tone jhumka earrings featuring delicate floral leaf detailing, sparkling stones, and beautiful mint green gemstone accents. A graceful statement piece designed to add a luxurious touch to festive, traditional, and special occasion outfits.',
  price: 1200,
  image: '/images/jewellery/earrings/e17.1.png'
},
{
  id: 'e18',
  name: 'Mint Green Leaf Jhumka Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Silver Jhumkas with Mint Green Stones',
  desc: 'A stunning pair of silver-tone jhumka earrings featuring intricate leaf-inspired detailing, sparkling stones, and elegant mint green gemstones. Designed to add a luxurious and graceful touch to festive, traditional, and special occasion outfits.',
  price: 1400,
  image: '/images/jewellery/earrings/e18.2.png'
},
{
  id: 'e18.3',
  name: 'Pink Gemstone Leaf Jhumka Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Pink Stone Jhumka Earrings',
  desc: 'A luxurious pair of silver-tone jhumka earrings featuring beautiful pink gemstones, sparkling crystal detailing, and an intricate leaf-inspired cascade design. A graceful statement piece perfect for weddings, festive occasions, parties, and elegant evening wear.',
  price: 1400,
  image: '/images/jewellery/earrings/e18.3.png'
},
{
  id: 'e19',
  name: 'Royal Sapphire Jhumka Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Blue Sapphire Chandelier Jhumkas',
  desc: 'A stunning pair of silver-tone jhumka earrings featuring deep blue sapphire-inspired gemstones, sparkling marquise accents, and an intricate chandelier design. A luxurious statement piece perfect for weddings, festive occasions, parties, and evening wear.',
  price: 1400,
  image: '/images/jewellery/earrings/e19.png'
},
{
  id: 'e20',
  name: 'Ruby Leaf Crystal Stud Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Ruby Studs with Crystal Leaf Detailing',
  desc: 'Elegant silver-tone stud earrings featuring deep ruby-red gemstones framed with sparkling crystals and delicate leaf-inspired detailing. A sophisticated statement piece perfect for festive occasions, parties, celebrations, and elegant evening wear.',
  price: 840,
  image: '/images/jewellery/earrings/e20.png'
},
{
  id: 'e21',
  name: 'Emerald Butterfly Crystal Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Emerald Earrings with Crystal Butterfly Detailing',
  desc: 'A stunning pair of silver-tone earrings featuring deep emerald-green gemstones surrounded by sparkling crystals and intricate butterfly-inspired detailing. Designed to bring a luxurious and sophisticated touch to festive occasions, parties, celebrations, and elegant evening wear.',
  price: 840,
  image: '/images/jewellery/earrings/e21.png'
},
{
  id: 'e21.1',
  name: 'Royal Purple Floral Drop Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Purple Gemstone Earrings with Floral Detailing',
  desc: 'A sophisticated pair of silver-tone earrings featuring deep purple faceted gemstones surrounded by sparkling crystals and intricate floral and leaf-inspired detailing. Designed to bring a luxurious and elegant touch to weddings, festive occasions, parties, celebrations, and evening wear.',
  price: 840,
  image: '/images/jewellery/earrings/e21.1.png'
},
{
  id: 'e21.2',
  name: 'Royal Crystal Floral Drop Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Crystal Earrings with Floral Detailing',
  desc: 'A luxurious pair of silver-tone drop earrings featuring brilliant clear faceted gemstones surrounded by sparkling crystals and intricate floral, leaf, and scroll-inspired detailing. A sophisticated statement design perfect for weddings, parties, festive occasions, celebrations, and elegant evening wear.',
  price: 840,
  image: '/images/jewellery/earrings/e21.2.png'
},
{
  id: 'e22',
  name: 'Emerald Crystal Floral Jhumka Earrings',
  category: 'Earrings',
  subtitle: 'Emerald Drop Earrings with Crystal Floral Detailing',
  desc: 'A luxurious pair of silver-tone earrings featuring rich emerald-green gemstones, sparkling crystal accents, and intricate floral-inspired detailing with elegant hanging drops. Perfect for festive occasions, celebrations, parties, and sophisticated traditional looks.',
  price: 1200,
  image: '/images/jewellery/earrings/e22.png'
},
{
  id: 'e23',
  name: 'Crystal Layered Statement Drop Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Geometric Crystal Drop Earrings',
  desc: 'A glamorous pair of silver-tone statement earrings featuring sparkling crystal detailing, elegant layered geometric patterns, floral-inspired accents, and delicate teardrop drops. Perfect for weddings, festive occasions, parties, celebrations, and sophisticated evening wear.',
  price: 1200,
  image: '/images/jewellery/earrings/e23.png'
},
{
  id: 'e24',
  name: 'Emerald Teardrop Crystal Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Emerald Teardrop Statement Earrings',
  desc: 'A stunning pair of silver-tone earrings featuring rich emerald-green teardrop gemstones surrounded by sparkling crystal detailing. The elegant double-drop design creates a luxurious and sophisticated look, perfect for festive occasions, parties, celebrations, and evening wear.',
  price: 620,
  image: '/images/jewellery/earrings/e24.png'
},
{
  id: 'e25',
  name: 'Floral Crystal Hoop Drop Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Floral Crystal Statement Earrings',
  desc: 'A dazzling pair of silver-tone earrings featuring intricate floral tops, elegant circular crystal hoops, delicate jhumka-inspired details, and sparkling drop accents. Perfect for weddings, festive occasions, celebrations, parties, and sophisticated evening wear.',
  price: 1200,
  image: '/images/jewellery/earrings/e25.png'
},
{
  id: 'e26',
  name: 'Crystal Geometric Drop Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Crystal Statement Drop Earrings',
  desc: 'A sophisticated pair of silver-tone drop earrings featuring oval-cut center stones, sparkling crystal borders, and intricate geometric detailing. The elongated design creates a graceful statement look, perfect for weddings, festive occasions, parties, celebrations, and elegant evening wear.',
  price: 1050,
  image: '/images/jewellery/earrings/e26.png'
},
{
  id: 'e27',
  name: 'Emerald Floral Gemstone Earrings',
  category: 'Earrings',
  subtitle: 'Green Gemstone Floral Stud Earrings',
  desc: 'Elegant silver-tone floral earrings featuring rich green gemstone accents and sparkling stone details. A sophisticated statement design suitable for festive occasions, parties, and special events.',
  price: 1040,
  image: '/images/jewellery/earrings/e27.png'
},
{
  id: 'e28',
  name: 'Sparkle Disc Floral Stud Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Silver Floral Stud Earrings',
  desc: 'Elegant silver-tone stud earrings featuring a beautiful clustered floral design with sparkling cubic zirconia accents. The intricate circular arrangement gives these earrings a sophisticated and modern look, perfect for everyday wear, parties, festive occasions, and special events.',
  price: 1040,
  image: '/images/jewellery/earrings/e28.png'
},
{
  id: 'e29',
  name: 'Pink Gemstone Tiered Chandelier Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Pink Stone Tiered Drop Earrings',
  desc: 'Elegant silver-tone chandelier earrings featuring a delicate pink gemstone surrounded by sparkling stones, with cascading tiers of baguette-cut crystals arranged in a graceful fan-inspired design. Perfect for weddings, parties, festive occasions, and elegant evening wear.',
  price: 900,
  image: '/images/jewellery/earrings/e29.png'
},
{
  id: 'e30',
  name: 'Aqua Bloom Fan Drop Earrings',
  category: 'Earrings',
  subtitle: 'Silver Fan Drops with Aqua Blue Gemstones',
  desc: 'Elegant silver-tone drop earrings featuring delicate aqua blue teardrop gemstones surrounded by sparkling floral accents and layered fan-shaped baguette stones. A sophisticated statement design, perfect for festive occasions, parties, weddings, and evening wear.',
  price: 900,
  image: '/images/jewellery/earrings/e30.png'
},
{
  id: 'e31',
  name: 'Crystal Bloom Fan Drop Earrings',
  category: 'Earrings',
  subtitle: 'Silver Fan Drops with Clear Crystal Stones',
  desc: 'Elegant silver-tone drop earrings featuring clear teardrop crystals surrounded by sparkling floral accents and layered fan-shaped baguette stones. A sophisticated statement design, perfect for weddings, festive occasions, parties, and evening wear.',
  price: 900,
  image: '/images/jewellery/earrings/e31.png'
},
{
  id: 'e32',
  name: 'Pink Crystal Chandelier Earrings',
  category: 'Earrings',
  subtitle: 'Elegant Pink Teardrop Chandelier Earrings',
  desc: 'A luxurious pair of silver-tone chandelier earrings featuring sparkling crystal detailing, layered crescent patterns, delicate floral accents, and elegant pink teardrop gemstones. A sophisticated statement design perfect for weddings, festive occasions, parties, celebrations, and evening wear.',
  price: 1600,
  image: '/images/jewellery/earrings/e32.png'
},
{
  id: 'r1',
  name: 'Royal Pavé Halo Statement Ring',
  category: 'Rings',
  subtitle: 'Statement Ring',
  desc: 'A luxurious statement ring featuring a round pavé-set design with brilliant crystal detailing, crafted for an elegant and sophisticated look.',
  price: 400,
  image: '/images/jewellery/rings/r1.jpeg'
},

{
  id: 'r2',
  name: 'Radiant Crystal Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Silver Floral Crystal Ring',
  desc: 'A striking silver-tone statement ring featuring a detailed circular floral design with brilliant crystal stones. Its bold sparkle and elegant finish make it perfect for weddings, festive occasions, parties, and evening wear',
  price: 800,
  image: '/images/jewellery/rings/r2.jpeg'
},
{
  id: 'r3',
  name: 'Radiant Emerald Crystal Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Emerald Floral Crystal Ring',
  desc: 'A luxurious silver-tone statement ring featuring a vivid emerald-green center gemstone surrounded by sparkling crystals and intricate floral detailing. A sophisticated design perfect for weddings, festive occasions, parties, celebrations, and elegant evening wear.',
  price: 500,
  image: '/images/jewellery/rings/r3.png'
},
{
  id: 'r4',
  name: 'Emerald Ruby Floral Statement Ring',
  category: 'Rings',
  subtitle: 'Luxurious Emerald and Ruby Crystal Ring',
  desc: 'A striking statement ring featuring a vivid ruby-red center gemstone surrounded by emerald-green accents, sparkling crystal detailing, and intricate gold-toned floral design. A luxurious piece perfect for weddings, festive occasions, celebrations, parties, and elegant evening wear.',
  price: 520,
  image: '/images/jewellery/rings/r4.png'
},
{
  id: 'r5',
  name: 'Aqua Floral Crystal Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Aquamarine Floral Crystal Ring',
  desc: 'A stunning statement ring featuring beautiful aqua-green gemstone petals arranged in an intricate floral design, surrounded by sparkling crystal detailing. Its elegant silver-tone finish makes it perfect for weddings, festive occasions, parties, celebrations, and sophisticated evening wear.',
  price: 478,
  image: '/images/jewellery/rings/r5.png'
},
{
  id: 'r6',
  name: 'Black Diamond Floral Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Black Crystal Floral Ring',
  desc: 'A striking silver-tone statement ring featuring elegant black gemstone petals surrounded by sparkling crystal detailing in an intricate floral design. Its sophisticated and luxurious look makes it perfect for weddings, parties, festive occasions, celebrations, and evening wear.',
  price: 400,
  image: '/images/jewellery/rings/r6.png'
},
{
  id: 'r7',
  name: 'Classic Round Halo Crystal Ring',
  category: 'Rings',
  subtitle: 'Elegant Round Crystal Halo Ring',
  desc: 'A timeless silver-tone statement ring featuring a brilliant round center stone surrounded by a sparkling halo and pavé-set multi-row bands. Its elegant and sophisticated design makes it perfect for weddings, celebrations, parties, and evening wear.',
  price: 400,
  image: '/images/jewellery/rings/r7.png'
},
{
  id: 'r8',
  name: 'Pink Floral Crystal Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Pink Gemstone Floral Ring',
  desc: 'A beautiful silver-tone statement ring featuring delicate pink gemstone petals surrounded by sparkling crystal detailing in an intricate floral design. Its elegant and luxurious appearance makes it perfect for weddings, festive occasions, parties, celebrations, and evening wear.',
  price: 470,
  image: '/images/jewellery/rings/r8.png'
},
{
  id: 'r9',
  name: 'Emerald Floral Crystal Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Emerald Square Crystal Ring',
  desc: 'A luxurious silver-tone statement ring featuring a vivid emerald-cut green gemstone surrounded by sparkling crystals and intricate floral-inspired detailing. Its elegant square design makes it perfect for weddings, festive occasions, parties, celebrations, and sophisticated evening wear.',
  price: 500,
  image: '/images/jewellery/rings/r9.png'
},
{
  id: 'r10',
  name: 'Pink Radiance Crystal Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Pink Crystal Halo Statement Ring',
  desc: 'A glamorous statement ring featuring vibrant pink baguette-cut gemstones arranged in a radiant circular halo around a sparkling crystal centre. Its sophisticated design and brilliant finish make it perfect for weddings, festive occasions, parties, celebrations, and elegant evening wear.',
  price: 450,
  image: '/images/jewellery/rings/r10.png'
},
{
  id: 'r11',
  name: 'Royal Amethyst Crystal Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Purple Gemstone Halo Ring',
  desc: 'A luxurious statement ring featuring a deep purple rectangular gemstone surrounded by a brilliant double halo of sparkling crystals. Its sophisticated design adds a regal touch to weddings, festive occasions, parties, celebrations, and elegant evening wear.',
  price: 550,
  image: '/images/jewellery/rings/r11.png'
},
{
  id: 'r12',
  name: 'Midnight Marquise Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Black Onyx Crystal Ring',
  desc: 'A bold statement ring featuring deep black marquise-cut gemstones arranged around a brilliant crystal centre. Its dramatic design and sparkling details create a sophisticated look, perfect for parties, evening occasions, celebrations, and elegant wear.',
  price: 400,
  image: '/images/jewellery/rings/r12.png'
},
{
  id: 'r13',
  name: 'Ruby Floral Radiance Ring',
  category: 'Rings',
  subtitle: 'Elegant Ruby and Diamond Floral Statement Ring',
  desc: 'A luxurious statement ring featuring vivid ruby gemstones arranged in a symmetrical floral design, accented with brilliant diamond-like crystals. Its bold yet elegant appearance makes it perfect for weddings, festive occasions, parties, celebrations, and sophisticated evening wear.',
  price: 550,
  image: '/images/jewellery/rings/r13.png'
},
{
  id: 'r14',
  name: 'Emerald Floral Elegance Ring',
  category: 'Rings',
  subtitle: 'Elegant Emerald and Crystal Floral Statement Ring',
  desc: 'A luxurious floral statement ring featuring a vibrant emerald centre surrounded by rich green gemstones and brilliant crystal accents. Its intricate design and sophisticated finish make it perfect for weddings, festive occasions, parties, celebrations, and elegant evening wear.',
  price: 600,
  image: '/images/jewellery/rings/r14.png'
},
{
  id: 'r15',
  name: 'Royal Sapphire Floral Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Blue Sapphire and Crystal Cluster Ring',
  desc: 'A sophisticated statement ring featuring a vivid blue sapphire centre surrounded by brilliant marquise-cut crystals and sparkling pavé detailing. The multi-band design adds a luxurious and elegant finish, making it perfect for weddings, festive occasions, parties, celebrations, and evening wear.',
  price: 450,
  image: '/images/jewellery/rings/r15.png'
},
{
  id: 'r16',
  name: 'Etoile Blossom Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Floral Crystal Statement Ring',
  desc: 'A magnificent statement ring featuring a stunning three-petal floral-inspired design adorned with brilliant baguette and round-cut crystals. Its exquisite craftsmanship and radiant sparkle make it perfect for weddings, parties, festive occasions, celebrations, and elegant evening wear.',
  price: 450,
  image: '/images/jewellery/rings/r16.png'
},
{
  id: 'r17',
  name: 'Celestial Diamond Statement Ring',
  category: 'Rings',
  subtitle: 'Elegant Multi-Row Diamond Ring',
  desc: 'A luxurious statement ring featuring a brilliant oval center stone surrounded by sparkling round and baguette-cut crystals. Its layered design and refined finish make it perfect for weddings, celebrations, parties, and elegant evening wear.',
  price: 450,
  image: '/images/jewellery/rings/r17.png'
},
{
  id: 'r18',
  name: 'Eternal Marquise Diamond Ring',
  category: 'Rings',
  subtitle: 'Elegant Marquise Crystal Band Ring',
  desc: 'A sophisticated statement ring featuring a graceful row of marquise-cut crystals surrounded by brilliant round accents. Its refined multi-stone design creates a luxurious sparkle, making it perfect for weddings, celebrations, parties, and elegant evening wear.',
  price: 400,
  image: '/images/jewellery/rings/r18.png'
},
{
  id: 'r19',
  name: 'Pearl Halo Crystal Ring',
  category: 'Rings',
  subtitle: 'Elegant Pear-Shaped Crystal Halo Ring',
  desc: 'A sophisticated statement ring featuring a circular arrangement of brilliant pear-shaped crystals on a polished silver-tone band. Its graceful design and sparkling finish make it perfect for weddings, festive occasions, parties, celebrations, and elegant evening wear.',
  price: 400,
  image: '/images/jewellery/rings/r19.png'
},
{
  id: 'b1',
  name: 'Silver Crystal Elegance Bangle Set',
  category: 'Bangles',
  subtitle: 'Premium Sparkling Statement Bangles',
  desc: 'A sophisticated silver-tone bangle set featuring rows of brilliant square-cut crystals with intricate pavé detailing. Its luxurious sparkle and elegant design make it perfect for weddings, festive celebrations, parties, and special occasions.',
  price: 1620,
  image:'/images/jewellery/bangles/b1.png'
},

{
  id: 'b2',
  name: 'Emerald Luxe Stone Bangle Set',
  category: 'Bangles',
  subtitle: 'Elegant Emerald Statement Bangle',
  desc: 'A luxurious silver-tone bangle set featuring rich emerald-green stones framed with sparkling crystal detailing. Designed with a sophisticated geometric pattern, this statement piece adds a refined touch to festive occasions, weddings and special celebrations.',
  price: 1620,
 image:'/images/jewellery/bangles/b2.png'
},
{
  id: 'b3',
  name: 'Crimson Ruby Luxe Bangle Set',
  category: 'Bangles',
  subtitle: 'Elegant Red Stone Waterproof Bangle Set',
  desc: 'A stunning silver-toned bangle set featuring deep crimson-red stones and intricate crystal detailing. Designed with a luxurious finish, this statement piece is perfect for weddings, festive occasions, parties, and elegant everyday styling.',
  price: 1620,
  image:'/images/jewellery/bangles/b3.png'
}];


const categories = [
'All',
'Earrings',
'Necklaces',
'Rings',
'Bangles',
'Jewellery Sets'];


export default function JewelleryPage() {
  // ─────────────────────────────────────────────────────────────
  // Filters
  // ─────────────────────────────────────────────────────────────

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // ─────────────────────────────────────────────────────────────
  // Filter products
  // ─────────────────────────────────────────────────────────────

  const filteredProducts = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return products.filter((product) => {
      const matchesSearch =
      !searchText ||
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      product.subtitle.toLowerCase().includes(searchText);

      const matchesCategory =
      category === 'All' || product.category === category;

      const matchesMinPrice =
      !minPrice || product.price >= Number(minPrice);

      const matchesMaxPrice =
      !maxPrice || product.price <= Number(maxPrice);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice);

    });
  }, [search, category, minPrice, maxPrice]);

  function clearFilters() {
    setSearch('');
    setCategory('All');
    setMinPrice('');
    setMaxPrice('');
  }

  const siteUrl = 'https://pamelascouture.in';
  const pageUrl = `${siteUrl}/jewellery`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#webpage`,
    name: "Waterproof Jewellery Collection | Pamela's Couture",
    url: pageUrl,
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    about: {
      '@id': `${siteUrl}/#organization`
    }
  };

  return (
    <>
      <Helmet>
        <title>Pamela's Couture | Jewellery</title>

        <meta
          name="description"
          content="Shop Pamela's Couture waterproof jewellery — earrings, necklaces, rings, bangles and jewellery sets. Stylish, durable and perfect for every season." />
        

        <link rel="canonical" href={pageUrl} />

        <meta
          property="og:title"
          content="Waterproof Jewellery Collection | Pamela's Couture" />
        

        <meta
          property="og:description"
          content="Shop our waterproof jewellery collection." />
        

        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:card"
          content="summary_large_image" />
        

        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">

        {/* ───────────────── HERO ───────────────── */}

        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            minHeight: '420px',
            paddingTop: '80px',
            paddingBottom: '60px'
          }}>
          
          <video
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/jewellery-bg.mp4" type="video/mp4" />
          </video>
          

          <div className="absolute inset-0 pointer-events-none hero-overlay" />

          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

            <p
              className="pc-text-gold mb-3"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.70rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase'
              }}>
              
              Waterproof Collection
            </p>

            <h1
              className="text-white mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 600
              }}>
              
              Fine Jewellery
            </h1>

            <div
              className="mx-auto mb-5 bg-accent"
              style={{
                width: '48px',
                height: '1.5px'
              }} />
            

            <p
              className="text-white-muted"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: 1.7
              }}>
              
              Beautifully crafted pieces designed to last — wear them every
              day, worry-free.
            </p>

          </div>
        </section>

        {/* ───────────────── FILTER AREA ───────────────── */}

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="jewellery-filters">

            <div className="search-box">

              <span className="search-icon">
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search jewellery..."
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
              

            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="filter-select">
              
              {categories.map((item) =>
              <option key={item} value={item}>
                  {item}
                </option>
              )}
            </select>

            <input
              type="number"
              placeholder="Min ₹"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="price-input"
              min="0" />
            

            <input
              type="number"
              placeholder="Max ₹"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="price-input"
              min="0" />
            

            <button
              type="button"
              onClick={clearFilters}
              className="clear-button">
              
              Clear
            </button>

          </div>

          <div className="result-count">
            Showing {filteredProducts.length} jewellery product
            {filteredProducts.length !== 1 ? 's' : ''}
          </div>

        </section>

        {/* ───────────────── PRODUCT GRID ───────────────── */}

        <section
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            paddingTop: '30px',
            paddingBottom: '80px'
          }}>
          

          {filteredProducts.length > 0 ?

          <div className="jw-product-grid">

              {filteredProducts.map((product, index) =>

            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
              className="jw-product-card group">
              

                  <div className="jw-card-image-wrap">

                    <img
                  src={product.image}
                  alt={product.name}
                  className="jw-card-img"
                  loading="lazy" />
                

                  </div>

                  <div className="jw-card-body">

                    <div className="jw-card-divider" />

                    <p className="jw-card-category">
                      {product.category}
                    </p>

                    <h2 className="jw-card-name">
                      {product.name}
                    </h2>

                    <p className="jw-card-subtitle">
                      {product.subtitle}
                    </p>

                    <p className="jw-card-desc">
                      {product.desc}
                    </p>

                    <div className="jw-card-price-row">

                      <span className="jw-card-price">
                        ₹{product.price.toLocaleString('en-IN')}/-
                      </span>

                    </div>

                    <button
                  type="button"
                  onClick={() =>
                  enquireOnWhatsApp(
                    `${product.name} - ${product.category}`
                  )
                  }
                  className="jw-card-btn">
                  
                      Enquire on WhatsApp
                    </button>

                  </div>

                </motion.div>

            )}

            </div> :



          <div className="no-products">

              <h2>
                No jewellery found
              </h2>

              <p>
                Try another search, category or price range.
              </p>

              <button
              type="button"
              onClick={clearFilters}
              className="clear-button">
              
                Show All Products
              </button>

            </div>

          }

        </section>

        {/* ───────────────── PREMIUM WATERPROOF PROMISE ───────────────── */}

        <section className="jw-promise-section">

          <div className="jw-promise-glow jw-promise-glow-left" />

          <div className="jw-promise-glow jw-promise-glow-right" />

          <div className="jw-promise-inner">

            <div className="jw-promise-eyebrow">

              <span className="jw-promise-line" />

              <span>OUR PROMISE</span>

              <span className="jw-promise-line" />

            </div>

            <h2 className="jw-promise-title">

              Waterproof.

              <br />

              <span>Every Piece.</span>

            </h2>

            <div className="jw-promise-ornament">

              <span />

              <b>✦</b>

              <span />

            </div>

            <p className="jw-promise-description">
              Every jewellery piece in our collection is crafted to be
              waterproof — so you can wear it daily, through every season,
              without worry.
            </p>

            <div className="jw-promise-grid">

              <div className="jw-promise-card">

                <div className="jw-promise-icon">
                  ◇
                </div>

                <h3>
                  Waterproof
                </h3>

                <p>
                  Designed for everyday wear.
                </p>

              </div>

              <div className="jw-promise-card">

                <div className="jw-promise-icon">
                  ✦
                </div>

                <h3>
                  Daily Styling
                </h3>

                <p>
                  Easy elegance for every day.
                </p>

              </div>

              <div className="jw-promise-card">

                <div className="jw-promise-icon">
                  ♢
                </div>

                <h3>
                  All-Season
                </h3>

                <p>
                  Made to complement every season.
                </p>

              </div>

              <div className="jw-promise-card">

                <div className="jw-promise-icon">
                  ✧
                </div>

                <h3>
                  Special Moments
                </h3>

                <p>
                  Beautiful pieces for celebrations.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ───────────────── CTA ───────────────── */}

        <section className="py-16 px-6 text-center">

          <OrnamentalDivider className="mb-8" />

          <p
            className="pc-text-gold mb-2"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
            }}>
            
            Explore More
          </p>

          <h2
            className="text-foreground"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '24px'
            }}>
            
            Discover Our Full Collection
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/clothing"
              className="catalogue-link">
              
              Shop Clothing
            </Link>

            <Link
              to="/sarees"
              className="catalogue-link catalogue-outline">
              
              Shop Sarees
            </Link>

          </div>

        </section>

        {/* ───────────────── STYLES ───────────────── */}

        <style>{`

/* =========================================================
   FILTERS
========================================================= */

.jewellery-filters {
  display: grid;

  grid-template-columns:
    2fr
    1fr
    1fr
    1fr
    auto;

  gap: 12px;

  align-items: center;

  padding: 22px;

  margin-top: 35px;

  background: hsl(var(--card));

  border: 1px solid hsl(var(--border));

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.04);
}

.search-box {
  display: flex;

  align-items: center;

  height: 46px;

  border: 1px solid hsl(var(--border));

  background: hsl(var(--background));

  transition: 0.25s ease;
}

.search-box:focus-within {
  border-color: hsl(var(--accent));

  box-shadow:
    0 0 0 3px rgba(212, 175, 55, 0.08);
}

.search-icon {
  font-size: 20px;

  padding-left: 13px;

  color: hsl(var(--muted-foreground));
}

.search-box input {
  width: 100%;

  height: 100%;

  border: none;

  outline: none;

  background: transparent;

  padding: 0 13px;

  font-family: var(--font-sans);

  font-size: 0.85rem;

  color: hsl(var(--foreground));
}

.filter-select,
.price-input {
  width: 100%;

  height: 46px;

  border: 1px solid hsl(var(--border));

  background: hsl(var(--background));

  padding: 0 12px;

  outline: none;

  font-family: var(--font-sans);

  font-size: 0.82rem;

  color: hsl(var(--foreground));

  transition: 0.25s ease;
}

.filter-select:focus,
.price-input:focus {
  border-color: hsl(var(--accent));
}

.clear-button {
  height: 46px;

  padding: 0 20px;

  border: 1px solid hsl(var(--accent));

  background: transparent;

  color: hsl(var(--accent));

  cursor: pointer;

  font-family: var(--font-sans);

  font-size: 0.72rem;

  font-weight: 600;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  transition: 0.25s ease;
}

.clear-button:hover {
  background: hsl(var(--accent));

  color: white;
}

.result-count {
  margin-top: 14px;

  color: hsl(var(--muted-foreground));

  font-family: var(--font-sans);

  font-size: 0.78rem;
}


/* =========================================================
   PRODUCT GRID
========================================================= */

.jw-product-grid {
  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 22px;

  align-items: stretch;
}


/* =========================================================
   PRODUCT CARD
========================================================= */

.jw-product-card {
  position: relative;

  display: flex;

  flex-direction: column;

  width: 100%;

  height: 100%;

  overflow: hidden;

  background: hsl(var(--card));

  border: 1px solid hsl(var(--border));

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.045);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.jw-product-card:hover {
  transform: translateY(-5px);

  border-color: hsl(var(--accent));

  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.10);
}


/* =========================================================
   PRODUCT IMAGE
========================================================= */

.jw-card-image-wrap {
  position: relative;

  width: 100%;

  height: 285px;

  overflow: hidden;

  background: #f3f1ed;
}

.jw-card-img {
  display: block;

  width: 100%;

  height: 100%;

  object-fit: cover;

  object-position: center;

  transition:
    transform 0.7s ease,
    filter 0.3s ease;
}

.jw-product-card:hover .jw-card-img {
  transform: scale(1.04);
}


/* =========================================================
   PRODUCT CONTENT
========================================================= */

.jw-card-body {
  display: flex;

  flex-direction: column;

  flex: 1;

  min-height: 330px;

  padding: 20px 20px 18px;

  background: hsl(var(--card));
}

.jw-card-divider {
  flex-shrink: 0;

  width: 30px;

  height: 2px;

  margin-bottom: 12px;

  background: hsl(var(--accent));
}

.jw-card-category {
  margin: 0 0 8px;

  font-family: var(--font-sans);

  font-size: 0.64rem;

  font-weight: 600;

  letter-spacing: 0.16em;

  text-transform: uppercase;

  color: hsl(var(--accent));
}

.jw-card-name {
  margin: 0 0 8px;

  min-height: 52px;

  font-family: var(--font-heading);

  font-size: 1.08rem;

  font-weight: 500;

  line-height: 1.35;

  color: hsl(var(--foreground));

  letter-spacing: -0.01em;
}

.jw-card-subtitle {
  margin: 0 0 12px;

  min-height: 20px;

  font-family: var(--font-sans);

  font-size: 0.70rem;

  font-weight: 500;

  color: hsl(var(--muted-foreground));

  letter-spacing: 0.02em;
}

.jw-card-desc {
  margin: 0;

  min-height: 92px;

  font-family: var(--font-sans);

  font-size: 0.78rem;

  line-height: 1.65;

  color: hsl(var(--muted-foreground));
}


/* =========================================================
   PRICE
========================================================= */

.jw-card-price-row {
  display: flex;

  align-items: center;

  margin-top: auto;

  padding-top: 16px;

  margin-bottom: 14px;

  border-top:
    1px solid hsl(var(--border));
}

.jw-card-price {
  font-family: var(--font-heading);

  font-size: 1.15rem;

  font-weight: 600;

  letter-spacing: 0.01em;

  color: hsl(var(--accent));
}


/* =========================================================
   WHATSAPP BUTTON
========================================================= */

.jw-card-btn {
  width: 100%;

  min-height: 46px;

  border: none;

  cursor: pointer;

  background: hsl(var(--primary));

  color: hsl(var(--primary-foreground));

  padding: 12px 10px;

  font-family: var(--font-sans);

  font-size: 0.62rem;

  font-weight: 700;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.jw-card-btn:hover {
  filter: brightness(1.08);

  transform: translateY(-2px);

  box-shadow:
    0 7px 18px rgba(0, 0, 0, 0.15);
}


/* =========================================================
   EMPTY PRODUCTS
========================================================= */

.no-products {
  text-align: center;

  padding: 90px 20px;
}

.no-products h2 {
  font-family: var(--font-heading);

  font-size: 1.8rem;

  margin-bottom: 10px;
}

.no-products p {
  color: hsl(var(--muted-foreground));

  margin-bottom: 20px;

  font-family: var(--font-sans);
}


/* =========================================================
   CTA BUTTONS
========================================================= */

.catalogue-link {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-height: 46px;

  padding: 0 28px;

  text-decoration: none;

  background: hsl(var(--primary));

  color: hsl(var(--primary-foreground));

  font-family: var(--font-sans);

  font-size: 0.65rem;

  font-weight: 700;

  letter-spacing: 0.14em;

  text-transform: uppercase;

  transition: 0.25s ease;
}

.catalogue-link:hover {
  transform: translateY(-2px);

  filter: brightness(1.08);
}

.catalogue-outline {
  background: transparent;

  color: hsl(var(--accent));

  border: 1px solid hsl(var(--accent));
}

.catalogue-outline:hover {
  background: hsl(var(--accent));

  color: white;
}


/* =========================================================
   PREMIUM WATERPROOF PROMISE
   COLORS:
   #0D3B3E = Deep Teal
   #176B6C = Teal
   #D4AF37 = Luxury Gold
   #FFFFFF = White
   #F5EFE6 = Soft Cream
========================================================= */

.jw-promise-section {
  position: relative;

  overflow: hidden;

  padding: 90px 24px;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(23, 107, 108, 0.45),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 80%,
      rgba(212, 175, 55, 0.12),
      transparent 28%
    ),
    linear-gradient(
      135deg,
      #0D3B3E 0%,
      #123F42 48%,
      #0B3033 100%
    );

  border-top:
    1px solid rgba(212, 175, 55, 0.25);

  border-bottom:
    1px solid rgba(212, 175, 55, 0.25);
}


/* Decorative glow */

.jw-promise-glow {
  position: absolute;

  width: 260px;

  height: 260px;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(70px);

  opacity: 0.25;
}

.jw-promise-glow-left {
  left: -120px;

  top: -80px;

  background: #176B6C;
}

.jw-promise-glow-right {
  right: -120px;

  bottom: -100px;

  background: #D4AF37;
}


/* Content */

.jw-promise-inner {
  position: relative;

  z-index: 2;

  max-width: 1050px;

  margin: 0 auto;

  text-align: center;
}


/* Eyebrow */

.jw-promise-eyebrow {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 14px;

  margin-bottom: 18px;

  color: #D4AF37;

  font-family: var(--font-sans);

  font-size: 0.68rem;

  font-weight: 600;

  letter-spacing: 0.28em;

  text-transform: uppercase;
}

.jw-promise-line {
  width: 38px;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #D4AF37
    );
}

.jw-promise-line:last-child {
  background:
    linear-gradient(
      90deg,
      #D4AF37,
      transparent
    );
}


/* Main title */

.jw-promise-title {
  margin: 0;

  color: #FFFFFF;

  font-family: var(--font-heading);

  font-size:
    clamp(2.4rem, 6vw, 4.5rem);

  font-weight: 500;

  line-height: 1.02;

  letter-spacing: -0.025em;
}

.jw-promise-title span {
  color: #F5EFE6;

  font-style: italic;
}


/* Ornament */

.jw-promise-ornament {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 12px;

  margin: 24px auto 22px;
}

.jw-promise-ornament span {
  width: 55px;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #D4AF37
    );
}

.jw-promise-ornament span:last-child {
  background:
    linear-gradient(
      90deg,
      #D4AF37,
      transparent
    );
}

.jw-promise-ornament b {
  color: #D4AF37;

  font-size: 0.85rem;

  font-weight: 400;
}


/* Description */

.jw-promise-description {
  max-width: 680px;

  margin: 0 auto;

  color: rgba(255, 255, 255, 0.78);

  font-family: var(--font-sans);

  font-size: 0.95rem;

  line-height: 1.85;
}


/* Promise cards */

.jw-promise-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 14px;

  margin-top: 45px;
}

.jw-promise-card {
  padding: 25px 18px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.09),
      rgba(255, 255, 255, 0.035)
    );

  border:
    1px solid rgba(212, 175, 55, 0.25);

  backdrop-filter: blur(10px);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.jw-promise-card:hover {
  transform: translateY(-5px);

  background:
    linear-gradient(
      145deg,
      rgba(23, 107, 108, 0.45),
      rgba(255, 255, 255, 0.06)
    );

  border-color:
    rgba(212, 175, 55, 0.65);
}


/* Promise icons */

.jw-promise-icon {
  display: flex;

  align-items: center;

  justify-content: center;

  width: 42px;

  height: 42px;

  margin: 0 auto 14px;

  border:
    1px solid rgba(212, 175, 55, 0.55);

  border-radius: 50%;

  color: #D4AF37;

  font-family: var(--font-heading);

  font-size: 1.15rem;
}

.jw-promise-card h3 {
  margin: 0 0 7px;

  color: #FFFFFF;

  font-family: var(--font-heading);

  font-size: 1rem;

  font-weight: 500;
}

.jw-promise-card p {
  margin: 0;

  color: rgba(255, 255, 255, 0.62);

  font-family: var(--font-sans);

  font-size: 0.68rem;

  line-height: 1.55;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {

  .jw-product-grid {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }

  .jewellery-filters {
    grid-template-columns: 1fr 1fr;
  }

  .search-box {
    grid-column: 1 / -1;
  }

  .jw-promise-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}


/* =========================================================
   SMALL TABLET
========================================================= */

@media (max-width: 800px) {

  .jw-product-grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 16px;
  }

  .jw-card-image-wrap {
    height: 260px;
  }

  .jw-promise-section {
    padding: 75px 20px;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  .jewellery-filters {
    grid-template-columns: 1fr;

    padding: 16px;

    margin-top: 25px;
  }

  .search-box {
    grid-column: auto;
  }

  .jw-product-grid {
    grid-template-columns: 1fr 1fr;

    gap: 12px;
  }

  .jw-card-image-wrap {
    height: 220px;
  }

  .jw-card-body {
    min-height: 315px;

    padding: 15px;
  }

  .jw-card-name {
    font-size: 0.92rem;

    min-height: 48px;
  }

  .jw-card-subtitle {
    font-size: 0.62rem;

    margin-bottom: 9px;
  }

  .jw-card-desc {
    font-size: 0.70rem;

    line-height: 1.55;

    min-height: 88px;
  }

  .jw-card-price {
    font-size: 1rem;
  }

  .jw-card-btn {
    min-height: 42px;

    font-size: 0.52rem;

    letter-spacing: 0.08em;
  }

  .jw-promise-section {
    padding: 65px 16px;
  }

  .jw-promise-eyebrow {
    font-size: 0.58rem;

    letter-spacing: 0.20em;

    gap: 9px;
  }

  .jw-promise-line {
    width: 24px;
  }

  .jw-promise-title {
    font-size:
      clamp(2.25rem, 12vw, 3.2rem);

    line-height: 1.04;
  }

  .jw-promise-description {
    font-size: 0.82rem;

    line-height: 1.75;

    max-width: 360px;
  }

  .jw-promise-grid {
    grid-template-columns: 1fr 1fr;

    gap: 9px;

    margin-top: 32px;
  }

  .jw-promise-card {
    padding: 20px 10px;
  }

  .jw-promise-icon {
    width: 36px;

    height: 36px;

    font-size: 1rem;

    margin-bottom: 10px;
  }

  .jw-promise-card h3 {
    font-size: 0.82rem;
  }

  .jw-promise-card p {
    font-size: 0.61rem;
  }

}


/* =========================================================
   VERY SMALL MOBILE
========================================================= */

@media (max-width: 390px) {

  .jw-product-grid {
    grid-template-columns: 1fr;
  }

  .jw-card-image-wrap {
    height: 280px;
  }

  .jw-card-body {
    min-height: auto;
  }

  .jw-card-name {
    min-height: auto;
  }

  .jw-card-desc {
    min-height: auto;
  }

  .jw-promise-grid {
    grid-template-columns: 1fr;
  }

  .jw-promise-card {
    display: grid;

    grid-template-columns: 42px 1fr;

    column-gap: 12px;

    align-items: center;

    text-align: left;
  }

  .jw-promise-icon {
    grid-row: span 2;

    margin: 0;
  }

}

`}</style>

      </main>
    </>);

}