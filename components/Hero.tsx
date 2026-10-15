"use client";

import { ArrowDown, Mail, Github, MapPin } from "lucide-react";

export default function Hero() {
   return (
      <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top metadata strip */}
            <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-xs font-mono tracking-wider text-[#69665F] dark:text-[#9E9C96] pb-6 mb-8 border-b border-[#D4D0C7]/80 dark:border-[#2C2C30]/80">
               <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F05A28]" aria-hidden="true" />
                  <span>KALABAHI, NUSA TENGGARA TIMUR</span>
                  <span aria-hidden="true">·</span>
                  <span>INDONESIA</span>
               </div>

               <div className="flex items-center gap-2">
                  <span>MAKN ENDE</span>
                  <span aria-hidden="true">/</span>
                  <span>KELAS XII PPLG 1</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#171717] dark:text-[#EDEDEC] font-semibold">2026 EDITION</span>
               </div>
            </div>

            {/* Main hero layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
               {/* Left column */}
               <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#F05A28] font-bold">[ SOFTWARE DEVELOPER ]</span>
                     <span className="h-px w-12 bg-[#F05A28]" aria-hidden="true" />
                  </div>

                  <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tighter text-[#171717] dark:text-[#EDEDEC] leading-[0.95] mb-6">
                     IBRAHIMMOVIC <br />
                     <span className="text-[#171717] dark:text-[#EDEDEC]">HASAN</span>
                     <span className="text-[#F05A28]">.</span>
                  </h1>

                  <p className="font-display text-xl sm:text-2xl font-medium text-[#171717] dark:text-[#EDEDEC] leading-snug mb-4 max-w-xl text-balance">Merancang website yang terstruktur, fungsional, dan mudah digunakan.</p>

                  <p className="text-sm sm:text-base text-[#69665F] dark:text-[#9E9C96] leading-relaxed mb-8 max-w-xl">Siswa kelas XII PPLG di MAKN Ende, dengan fokus pada pengembangan website berbasis WordPress serta fondasi HTML, CSS, dan JavaScript. Memadukan disiplin terukur, struktur kode yang bersih, dan antarmuka berorientasi pengguna.</p>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                     <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#171717] text-[#F4F1EA] dark:bg-[#EDEDEC] dark:text-[#111113] hover:bg-[#F05A28] dark:hover:bg-[#F05A28] dark:hover:text-[#F4F1EA] transition-all transform active:scale-[0.98]">
                        <span>Lihat Proyek</span>
                        <ArrowDown className="w-4 h-4" aria-hidden="true" />
                     </a>

                     <a href="mailto:24ibrahimhasan@gmail.com" className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider border-2 border-[#171717] dark:border-[#EDEDEC] text-[#171717] dark:text-[#EDEDEC] hover:bg-[#171717] hover:text-[#F4F1EA] dark:hover:bg-[#EDEDEC] dark:hover:text-[#111113] transition-all transform active:scale-[0.98]">
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>Hubungi Saya</span>
                     </a>

                     <a href="https://github.com/ibrahimmovichasan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-mono text-[#69665F] dark:text-[#9E9C96] hover:text-[#171717] dark:hover:text-[#EDEDEC] transition-colors" aria-label="Kunjungi profil GitHub Ibrahimmovic Hasan">
                        <Github className="w-4 h-4" aria-hidden="true" />
                        <span>github.com/ibrahimmovichasan</span>
                     </a>
                  </div>

                  {/* Nickname */}
                  <div className="mt-8 pt-6 border-t border-[#D4D0C7]/50 dark:border-[#2C2C30]/50 flex flex-wrap items-center gap-4 text-xs text-[#69665F] dark:text-[#9E9C96]">
                     <span className="font-mono text-[#F05A28]">NICKNAME:</span>
                     <span>Him</span>
                     <span aria-hidden="true">/</span>
                     <span>Ibra</span>
                     <span aria-hidden="true">·</span>
                     <span>Fokus: WordPress &amp; Front-End Web</span>
                  </div>
               </div>

               {/* Right column: Profile photo */}
               <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md">
                     {/* Minimal technical framing */}
                     <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#F05A28] z-10 pointer-events-none" aria-hidden="true" />

                     <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#F05A28] z-10 pointer-events-none" aria-hidden="true" />

                     {/* Profile image */}
                     <div className="relative aspect-[4/5] overflow-hidden bg-[#E5E2DA] dark:bg-[#1B1B1E] border border-[#D4D0C7] dark:border-[#2C2C30]">
                        <img src="/src/profile.jpg" alt="Foto profil Ibrahimmovic Hasan" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchPriority="high" />

                        {/* Subtle image gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" aria-hidden="true" />

                        {/* Image metadata */}
                        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-4">
                           <span className="font-mono text-[10px] sm:text-xs tracking-widest text-white">PORTRAIT // 001</span>
                           <span className="font-mono text-[10px] sm:text-xs text-white/80">IH.2026</span>
                        </div>

                        {/* Bottom caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                           <div className="flex items-center gap-2 mb-2">
                              <span className="w-2 h-2 bg-[#F05A28]" />
                              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/80">Software Developer</span>
                           </div>

                           <div className="flex items-end justify-between gap-4">
                              <div>
                                 <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">Ibrahimmovic Hasan</h2>
                                 <p className="mt-1 text-xs sm:text-sm text-white/75">WordPress &amp; Front-End Web</p>
                              </div>

                              <span className="font-mono text-sm font-bold text-[#F05A28]">01</span>
                           </div>
                        </div>
                     </div>

                     {/* Location caption */}
                     <div className="flex justify-between items-center gap-4 mt-4 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#69665F] dark:text-[#9E9C96]">
                        <span>KALABAHI, ALOR, NTT</span>
                        <span>8°13&apos;S 124°31&apos;E</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
