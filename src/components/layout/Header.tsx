'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

/* ─────────────────────────────────────────────
   Navigation config.
   - `sectionId` is the DOM id on the homepage.
   - `href` is the route for non-homepage contexts.
   When on the homepage, clicking scrolls to section.
   When on subpages, clicking navigates to the route.
   ───────────────────────────────────────────── */
const navigation = [
  { name: 'Services', sectionId: 'services', href: '/services' },
  { name: 'Pricing', sectionId: 'pricing', href: '/pricing' },
  { name: 'Testimonials', sectionId: 'testimonials', href: '/#testimonials' },
  { name: 'Gallery', sectionId: null, href: '/gallery' },
  { name: 'Contact', sectionId: null, href: '/contact' },
];

// All section IDs on the homepage, in DOM order (top → bottom)
const SECTION_IDS = ['hero', 'services', 'why-us', 'how-it-works', 'testimonials', 'pricing', 'faq', 'book'];
const HEADER_HEIGHT = 80; // px – offset for scroll positioning

/* ─── Throttle helper ─── */
function throttle<T extends (...args: unknown[]) => void>(fn: T, ms: number): T {
  let last = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;
  return ((...args: unknown[]) => {
    const now = Date.now();
    const remaining = ms - (now - last);
    if (remaining <= 0) {
      if (timer) { clearTimeout(timer); timer = null; }
      last = now;
      fn(...args);
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now();
        timer = null;
        fn(...args);
      }, remaining);
    }
  }) as T;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isHomepage, setIsHomepage] = useState(false);
  const isScrollingRef = useRef(false); // prevents scroll-spy fighting click-scroll

  /* ─── Detect if we're on the homepage ─── */
  useEffect(() => {
    setIsHomepage(window.location.pathname === '/');
  }, []);

  /* ─── Scroll spy (throttled to ~60ms for 16fps updates) ─── */
  useEffect(() => {
    if (!isHomepage) return;

    const computeActiveSection = () => {
      if (isScrollingRef.current) return;

      const scrollY = window.scrollY + HEADER_HEIGHT + 40; // 40px buffer into section

      // Check from bottom to top — first match wins (we want the section we're "inside")
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTION_IDS[i]);
          return;
        }
      }
      setActiveSection('');
    };

    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);
      computeActiveSection();
    }, 60);

    // Initial computation
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  /* ─── Non-homepage scroll listener (just for header bg, no spy) ─── */
  useEffect(() => {
    if (isHomepage) return;
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  /* ─── Smooth scroll to section with offset ─── */
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    // Prevent scroll-spy from overriding while we're animating
    isScrollingRef.current = true;
    setActiveSection(sectionId);

    const targetY = el.offsetTop - HEADER_HEIGHT;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });

    // Re-enable scroll spy after animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  }, []);

  /* ─── Click handler: scroll on homepage, navigate on subpages ─── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof navigation)[0]) => {
      if (isHomepage && item.sectionId) {
        e.preventDefault();
        scrollToSection(item.sectionId);
        setIsOpen(false);
      }
      // If not homepage or no sectionId → normal <a> navigation proceeds
      if (!isHomepage || !item.sectionId) {
        setIsOpen(false);
      }
    },
    [isHomepage, scrollToSection]
  );

  /* ─── Keyboard: Enter/Space on nav items ─── */
  const handleNavKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>, item: (typeof navigation)[0]) => {
      if ((e.key === 'Enter' || e.key === ' ') && isHomepage && item.sectionId) {
        e.preventDefault();
        scrollToSection(item.sectionId);
        setIsOpen(false);
      }
    },
    [isHomepage, scrollToSection]
  );

  /* ─── Determine the href for each item ─── */
  const getHref = (item: (typeof navigation)[0]) => {
    if (isHomepage && item.sectionId) return `#${item.sectionId}`;
    return item.href;
  };

  /* ─── Is a nav item "active"? ─── */
  const isActive = (item: (typeof navigation)[0]) => {
    if (!isHomepage) return false;
    if (!item.sectionId) return false;
    return activeSection === item.sectionId;
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      )}
      role="banner"
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="JusCleanIt Home">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-md group-hover:shadow-glow-primary transition-shadow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill="white" />
            </svg>
          </div>
          <span className={clsx(
            'font-heading text-xl font-bold transition-colors',
            isScrolled ? 'text-neutral-900' : 'text-white'
          )}>
            Jus<span className="text-secondary-400">CleanIt</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={getHref(item)}
              onClick={(e) => handleNavClick(e, item)}
              onKeyDown={(e) => handleNavKeyDown(e, item)}
              className={clsx(
                'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                isActive(item)
                  ? isScrolled
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-white bg-white/15'
                  : isScrolled
                    ? 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
              )}
              aria-current={isActive(item) ? 'true' : undefined}
            >
              {item.name}
              {/* Active indicator dot */}
              {isActive(item) && (
                <span
                  className={clsx(
                    'absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300',
                    isScrolled ? 'bg-primary-600' : 'bg-white'
                  )}
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:juscleanitcleaningco@gmail.com"
            className={clsx(
              'text-sm font-medium transition-colors',
              isScrolled ? 'text-neutral-600' : 'text-white/80'
            )}
          >
            juscleanitcleaningco@gmail.com
          </a>
          <Button href="/booking" variant={isScrolled ? 'primary' : 'white'} size="sm">
            Request A Clean
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={clsx(
                'block h-0.5 w-6 rounded-full transition-all duration-300',
                isScrolled ? 'bg-neutral-800' : 'bg-white',
                isOpen && 'rotate-45 translate-y-[9px]'
              )}
            />
            <span
              className={clsx(
                'block h-0.5 w-6 rounded-full transition-all duration-300',
                isScrolled ? 'bg-neutral-800' : 'bg-white',
                isOpen && 'opacity-0'
              )}
            />
            <span
              className={clsx(
                'block h-0.5 w-6 rounded-full transition-all duration-300',
                isScrolled ? 'bg-neutral-800' : 'bg-white',
                isOpen && '-rotate-45 -translate-y-[9px]'
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={clsx(
          'lg:hidden overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="container-wide py-4 space-y-1 bg-white rounded-b-2xl shadow-medium mt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={getHref(item)}
              onClick={(e) => handleNavClick(e, item)}
              onKeyDown={(e) => handleNavKeyDown(e, item)}
              className={clsx(
                'block px-4 py-3 rounded-xl font-medium transition-colors',
                isActive(item)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
              )}
              aria-current={isActive(item) ? 'true' : undefined}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-neutral-100">
            <Button href="/booking" variant="primary" fullWidth>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
