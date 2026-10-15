'use client';

import { ArrowUp, Github, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#E5E2DA]/40 dark:bg-[#111113] border-t border-[#D4D0C7] dark:border-[#2C2C30] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#D4D0C7]/70 dark:border-[#2C2C30]/70">
          {/* Brand & Identity */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-[#171717] dark:text-[#EDEDEC]">
                HIM<span className="text-[#F05A28]">.</span>
              </span>
              <span className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96] border-l border-[#D4D0C7] dark:border-[#2C2C30] pl-3">
                IBRAHIMMOVIC HASAN
              </span>
            </div>
            <p className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
              Software Developer · Siswa Kelas XII PPLG 1 MAKN Ende
            </p>
          </div>

          {/* Clean Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href="mailto:24ibrahimhasan@gmail.com"
              className="text-[#69665F] dark:text-[#9E9C96] hover:text-[#F05A28] dark:hover:text-[#F05A28] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>24ibrahimhasan@gmail.com</span>
            </a>

            <a
              href="https://github.com/ibrahimmovichasan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#69665F] dark:text-[#9E9C96] hover:text-[#F05A28] dark:hover:text-[#F05A28] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              <span>github.com/ibrahimmovichasan</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="text-[#171717] dark:text-[#EDEDEC] hover:text-[#F05A28] dark:hover:text-[#F05A28] transition-colors flex items-center gap-1 font-bold"
              aria-label="Kembali ke atas halaman"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
          <div className="flex items-center gap-2">
            <span suppressHydrationWarning>&copy; {currentYear} Ibrahimmovic Hasan. Hak cipta dilindungi.</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F05A28]" aria-hidden="true" />
            <span>Kalabahi, Kab. Alor, Nusa Tenggara Timur, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
