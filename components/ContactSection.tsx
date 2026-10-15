'use client';

import { useState } from 'react';
import { Mail, Github, Copy, Check, ArrowUpRight, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = '24ibrahimhasan@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono font-bold text-[#F05A28]">05</span>
              <span className="h-px w-8 bg-[#F05A28]" aria-hidden="true" />
              <span className="text-xs font-mono tracking-widest text-[#69665F] dark:text-[#9E9C96] uppercase">
                KOMUNIKASI & KERJA SAMA
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#171717] dark:text-[#EDEDEC] tracking-tight">
              LET&apos;S CONNECT
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#69665F] dark:text-[#9E9C96] max-w-sm">
            Saluran komunikasi langsung untuk diskusi magang, proyek web, atau kolaborasi teknis.
          </p>
        </div>

        {/* Contact Main Box */}
        <div className="border border-[#D4D0C7] dark:border-[#2C2C30] bg-[#F4F1EA] dark:bg-[#111113] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left 7 Columns: Invitation Message & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs font-mono text-[#F05A28] font-bold tracking-widest uppercase">
                [ STATUS: TERBUKA UNTUK KESEMPATAN ]
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] dark:text-[#EDEDEC] leading-tight text-balance">
                Terbuka untuk kesempatan magang, pekerjaan, dan kolaborasi yang relevan dengan pengembangan website.
              </h3>

              <p className="text-sm sm:text-base text-[#69665F] dark:text-[#9E9C96] leading-relaxed max-w-xl">
                Jika Anda mencari siswa vokasi PPLG yang disiplin, memiliki ketertarikan mendalam pada website fungsional berbasis WordPress dan fondasi web modern, jangan ragu untuk menghubungi saya langsung.
              </p>

              {/* Direct Email Action Cluster */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#171717] text-[#F4F1EA] dark:bg-[#EDEDEC] dark:text-[#111113] hover:bg-[#F05A28] dark:hover:bg-[#F05A28] dark:hover:text-[#F4F1EA] transition-all transform active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Kirim Pesan via Email</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-5 py-4 text-xs sm:text-sm font-mono border border-[#D4D0C7] dark:border-[#2C2C30] text-[#171717] dark:text-[#EDEDEC] hover:bg-[#E5E2DA] dark:hover:bg-[#1B1B1E] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">Email Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#69665F] dark:text-[#9E9C96]" aria-hidden="true" />
                      <span>Salin Alamat Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Address Display */}
              <div className="font-mono text-xs sm:text-sm text-[#69665F] dark:text-[#9E9C96] pt-1">
                Alamat: <span className="font-bold text-[#171717] dark:text-[#EDEDEC]">{emailAddress}</span>
              </div>
            </div>

            {/* Right 5 Columns: Verified Channels Matrix */}
            <div className="lg:col-span-5 border border-[#D4D0C7] dark:border-[#2C2C30] bg-[#E5E2DA]/40 dark:bg-[#1B1B1E]/40 p-6 sm:p-8 space-y-6">
              <div className="text-xs font-mono uppercase tracking-wider text-[#69665F] dark:text-[#9E9C96] pb-3 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
                SALURAN RESMI & STATUS AKUN
              </div>

              {/* GitHub Item */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                  Repositori Kode Publik
                </span>
                <a
                  href="https://github.com/ibrahimmovichasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 bg-[#F4F1EA] dark:bg-[#111113] border border-[#D4D0C7] dark:border-[#2C2C30] hover:border-[#F05A28] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#171717] dark:text-[#EDEDEC]" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#171717] dark:text-[#EDEDEC] group-hover:text-[#F05A28] transition-colors">
                      ibrahimmovichasan
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#69665F] group-hover:text-[#F05A28] transition-colors" aria-hidden="true" />
                </a>
              </div>

              {/* LinkedIn Transparency Status */}
              <div className="p-3.5 bg-[#F4F1EA]/60 dark:bg-[#111113]/60 border border-[#D4D0C7]/80 dark:border-[#2C2C30]/80">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="text-[#69665F] dark:text-[#9E9C96]">LinkedIn</span>
                  <span className="text-[#69665F] dark:text-[#9E9C96]">[ BELUM TERSEDIA ]</span>
                </div>
                <p className="text-xs text-[#69665F] dark:text-[#9E9C96] leading-normal">
                  Sesuai prinsip kejujuran data, tautan LinkedIn tidak dicantumkan karena profil resmi belum dibuat.
                </p>
              </div>

              {/* Location & Timezone Details */}
              <div className="space-y-2 pt-2 border-t border-[#D4D0C7]/60 dark:border-[#2C2C30]/60 text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F05A28]" aria-hidden="true" />
                  <span>Kalabahi, Kab. Alor, Nusa Tenggara Timur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#F05A28]" aria-hidden="true" />
                  <span>Zona Waktu: WITA (UTC+8)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
