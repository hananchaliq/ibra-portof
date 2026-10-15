'use client';

import { useState, useSyncExternalStore, useCallback } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

const emptySubscribe = () => () => {};

function useIsHydrated(): boolean {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot(): 'light' | 'dark' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function getThemeServerSnapshot(): 'light' | 'dark' {
  return 'light';
}

function subscribeScroll(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
}

function getScrollSnapshot(): boolean {
  return window.scrollY > 20;
}

function getScrollServerSnapshot(): boolean {
  return false;
}

export default function Header() {
  const isHydrated = useIsHydrated();
  const rawTheme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const rawScrolled = useSyncExternalStore(subscribeScroll, getScrollSnapshot, getScrollServerSnapshot);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = isHydrated ? rawTheme : 'light';
  const scrolled = isHydrated ? rawScrolled : false;

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch {}
    } else {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch {}
    }
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Perjalanan', href: '#journey' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      suppressHydrationWarning
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#F4F1EA]/90 dark:bg-[#111113]/90 backdrop-blur-md border-b border-[#D4D0C7] dark:border-[#2C2C30]'
          : 'bg-[#F4F1EA] dark:bg-[#111113] border-b border-[#D4D0C7]/70 dark:border-[#2C2C30]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="font-display font-extrabold text-xl sm:text-2xl tracking-tighter text-[#171717] dark:text-[#EDEDEC] hover:text-[#F05A28] dark:hover:text-[#F05A28] transition-colors whitespace-nowrap"
            aria-label="Ibrahimmovic Hasan Beranda"
          >
            HIM<span className="text-[#F05A28]">.</span>
          </a>
          <span className="hidden sm:inline-block text-xs font-mono tracking-wider text-[#69665F] dark:text-[#9E9C96] border-l border-[#D4D0C7] dark:border-[#2C2C30] pl-3 whitespace-nowrap">
            PORTFOLIO / 2026
          </span>
        </div>

        {/* Zone 2: Navigation Links (single line, no pill enclosures) */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#171717] dark:text-[#EDEDEC]"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#69665F] dark:text-[#9E9C96] hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors relative py-1 hover:border-b-2 hover:border-[#F05A28] whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Controls */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            suppressHydrationWarning
            aria-label={theme === 'light' ? 'Aktifkan tema gelap' : 'Aktifkan tema terang'}
            className="p-2 rounded border border-[#D4D0C7] dark:border-[#2C2C30] text-[#171717] dark:text-[#EDEDEC] hover:bg-[#E5E2DA] dark:hover:bg-[#1B1B1E] transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Sun className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          <a
            href="mailto:24ibrahimhasan@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#171717] text-[#F4F1EA] dark:bg-[#EDEDEC] dark:text-[#111113] hover:bg-[#F05A28] dark:hover:bg-[#F05A28] dark:hover:text-[#F4F1EA] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-[#D4D0C7] dark:border-[#2C2C30] text-[#171717] dark:text-[#EDEDEC]"
            aria-expanded={mobileMenuOpen}
            aria-label="Menu navigasi mobile"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D4D0C7] dark:border-[#2C2C30] bg-[#F4F1EA] dark:bg-[#111113] px-6 py-6 space-y-4">
          <div className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96] uppercase tracking-wider mb-2">
            Navigasi
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#171717] dark:text-[#EDEDEC] hover:text-[#F05A28] dark:hover:text-[#F05A28] transition-colors py-1.5 border-b border-[#D4D0C7]/40 dark:border-[#2C2C30]/40"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="mailto:24ibrahimhasan@gmail.com"
              className="inline-flex w-full justify-center items-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider bg-[#171717] text-[#F4F1EA] dark:bg-[#EDEDEC] dark:text-[#111113] hover:bg-[#F05A28] dark:hover:bg-[#F05A28] transition-colors"
            >
              <span>Hubungi Langsung</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
