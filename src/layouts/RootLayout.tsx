import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from 'react-router';

import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';

/**
 * Root layout component that wraps all pages with consistent header and footer.
 *
 * To customize the header or footer, directly edit the Header.tsx and Footer.tsx
 * files in the layouts/parts directory.
 *
 * Site-wide <title> and <meta> live in the <Helmet> below. Individual pages can
 * override them by rendering their own <Helmet> — last-mounted wins.
 */
interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Helmet>
        <title>Pamela's Couture | Women's Fashion &amp; Waterproof Jewellery</title>
        <meta
          name="description"
          content="Pamela's Couture offers elegant women's fashion including sarees, kurtis, dresses, nightwear and waterproof jewellery. Shop timeless fashion crafted for every occasion."
        />
        <meta name="keywords" content="Pamela's Couture, women's fashion, sarees, kurtis, dresses, waterproof jewellery, fashion boutique, Indian fashion" />
      </Helmet>
      <ScrollRestoration />
      <Header />
      {children}
      <Footer />
    </Website>
  );
}
