import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

import logo from '@/assets/logo.jpeg';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Clothing', href: '/clothing' },
  { label: 'Sarees', href: '/sarees' },
  { label: 'Jewellery', href: '/jewellery' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${
        scrolled ? 'border-b border-border shadow-sm' : 'border-b border-accent/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            aria-label="Pamela's Couture — home"
          >
            <img
              src={logo}
              alt="Pamela's Couture"
              width={54}
              height={54}
              className="block rounded-full object-cover"
              style={{ width: '54px', height: '54px', maxWidth: '54px', maxHeight: '54px' }}
            />
          </Link>

          {/* ── Desktop navigation ───────────────────────────────────────── */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative text-[13px] font-medium tracking-wide transition-colors duration-200 group"
                  style={{
                    color: isActive ? 'hsl(var(--primary))' : 'hsl(var(--charcoal))',
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{
                      background: 'hsl(var(--accent))',
                      width: isActive ? '100%' : '0%',
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Mobile menu toggle ───────────────────────────────────────── */}
          <button
            className={`lg:hidden flex items-center justify-center w-9 h-9 rounded-sm transition-colors duration-200 text-foreground ${
              menuOpen ? 'bg-muted' : ''
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────────── */}
      <div
        id="mobile-nav"
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '360px' : '0', opacity: menuOpen ? 1 : 0 }}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col py-3 bg-background border-t border-border"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className="px-6 py-3 text-[13px] font-medium tracking-wide transition-colors duration-150"
                style={{
                  color: isActive ? 'hsl(var(--primary))' : 'hsl(var(--charcoal))',
                  borderLeft: isActive
                    ? '2px solid hsl(var(--accent))'
                    : '2px solid transparent',
                  background: isActive ? 'hsl(var(--muted) / 0.4)' : 'transparent',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.04em',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
