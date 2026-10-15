'use client';

import { Trophy, Award, Users, Shield, BookOpen, Flame } from 'lucide-react';

interface AchievementCategory {
  index: string;
  title: string;
  subtitle: string;
  items: {
    title: string;
    level: string;
    description: string;
    highlightBadge?: string;
  }[];
}

const achievementCategories: AchievementCategory[] = [
  {
    index: '01',
    title: 'Kepemimpinan & Kerja Sama Tim',
    subtitle: 'LEADERSHIP & TEAMWORK',
    items: [
      {
        title: 'Kapten Tim Futsal Sekolah',
        level: 'Tingkat Kabupaten',
        description:
          'Memimpin tim futsal sekolah dalam turnamen antarpelajar tingkat kabupaten. Mengemban tanggung jawab menjaga kekompakan skuad, komunikasi taktis di lapangan, dan kedisiplinan mental saat bertanding.',
        highlightBadge: 'KEPEMIMPINAN TIM',
      },
      {
        title: 'Anggota OSIM — Bidang Keamanan',
        level: 'Organisasi Siswa Intra Madrasah (MAKN Ende)',
        description:
          'Menjalankan amanah penegakan kedisiplinan, ketertiban lingkungan belajar, dan pengawalan kegiatan sekolah dengan sikap yang tegas, sigap, dan bertanggung jawab terhadap tata tertib madrasah.',
        highlightBadge: 'ORGANISASI & KETERTIBAN',
      },
    ],
  },
  {
    index: '02',
    title: 'Prestasi & Kompetisi Olahraga',
    subtitle: 'SPORTS ACHIEVEMENTS',
    items: [
      {
        title: 'Juara 2 — Liga Pelajar U-17',
        level: 'Se-Kabupaten Ende',
        description:
          'Berhasil meraih posisi runner-up pada perhelatan Liga Pelajar U-17 se-Kabupaten Ende melalui koordinasi tim yang konsisten dan daya juang tinggi di sepanjang turnamen.',
        highlightBadge: 'PODIUM PERAK',
      },
      {
        title: 'Juara 4 — Futsal DFB Tingkat Pelajar',
        level: 'Se-Kabupaten Ende',
        description:
          'Mencapai babak empat besar (Juara 4) dalam kejuaraan futsal DFB antarpelajar se-Kabupaten Ende.',
        highlightBadge: 'SEMIFINALIS',
      },
      {
        title: 'Peserta Kompetisi Piala Soeratin U-17',
        level: 'Tingkat Regional (2 Kali Keikutsertaan)',
        description:
          'Dipercaya memperkuat tim dan berlaga dalam ajang prestisius Piala Soeratin U-17 sebanyak dua kali periode kompetisi. Mengasah ketahanan fisik, fokus permainan, dan pengalaman menghadapi atmosfer kompetisi tingkat tinggi.',
        highlightBadge: '2× PARTISIPAN RESMI',
      },
    ],
  },
  {
    index: '03',
    title: 'Pencapaian Keagamaan',
    subtitle: 'RELIGIOUS ACHIEVEMENT',
    items: [
      {
        title: 'Juara MTQ — Cabang Tilawah Kanak-Kanak',
        level: 'Tingkat Kecamatan',
        description:
          'Meraih prestasi juara pada Musabaqah Tilawatil Qur’an (MTQ) cabang tilawah kategori kanak-kanak tingkat kecamatan, yang melatih pelafalan tartil, ketelitian tajwid, dan ketenangan tampil di hadapan publik.',
        highlightBadge: 'JUARA KECAMATAN',
      },
    ],
  },
];

export default function JourneyAndAchievements() {
  return (
    <section id="journey" className="py-16 sm:py-24 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono font-bold text-[#F05A28]">04</span>
              <span className="h-px w-8 bg-[#F05A28]" aria-hidden="true" />
              <span className="text-xs font-mono tracking-widest text-[#69665F] dark:text-[#9E9C96] uppercase">
                DIMENSI PERJALANAN & PENCAPAIAN
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#171717] dark:text-[#EDEDEC] tracking-tight">
              MORE THAN CODE
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#69665F] dark:text-[#9E9C96] max-w-sm">
            Kepemimpinan lapangan, prestasi olahraga, dan pencapaian keagamaan yang membentuk karakter disiplin serta integritas pribadi.
          </p>
        </div>

        {/* 3 Athletic Discipline Category Columns / Rows */}
        <div className="space-y-12">
          {achievementCategories.map((cat) => (
            <div
              key={cat.subtitle}
              className="border border-[#D4D0C7] dark:border-[#2C2C30] bg-[#F4F1EA] dark:bg-[#111113]"
            >
              {/* Category Strip */}
              <div className="p-6 bg-[#E5E2DA]/50 dark:bg-[#1B1B1E]/50 border-b border-[#D4D0C7] dark:border-[#2C2C30] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#F05A28] leading-none">
                    {cat.index}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171717] dark:text-[#EDEDEC]">
                      {cat.title}
                    </h3>
                    <span className="text-xs font-mono tracking-wider text-[#69665F] dark:text-[#9E9C96] uppercase">
                      {cat.subtitle}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                  {cat.items.length} Catatan Terverifikasi
                </div>
              </div>

              {/* Items Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D4D0C7]/60 dark:divide-[#2C2C30]/60">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={item.title}
                    className="p-6 sm:p-8 flex flex-col justify-between hover:bg-[#E5E2DA]/20 dark:hover:bg-[#1B1B1E]/20 transition-colors"
                  >
                    <div>
                      {/* Top indicator without pill enclosure */}
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#69665F] dark:text-[#9E9C96] pb-3 mb-4 border-b border-[#D4D0C7]/40 dark:border-[#2C2C30]/40">
                        <span className="text-[#F05A28] font-bold">
                          {item.highlightBadge}
                        </span>
                        <span>{item.level}</span>
                      </div>

                      <h4 className="font-display font-bold text-lg sm:text-xl text-[#171717] dark:text-[#EDEDEC] mb-3 leading-snug">
                        {item.title}
                      </h4>

                      <p className="text-sm text-[#69665F] dark:text-[#9E9C96] leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#D4D0C7]/40 dark:border-[#2C2C30]/40 text-xs font-mono text-[#69665F] dark:text-[#9E9C96] flex items-center justify-between">
                      <span>VERIFIKASI RESMI</span>
                      <span className="text-[#171717] dark:text-[#EDEDEC] font-semibold">MAKN ENDE</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Footnote */}
        <div className="mt-8 pt-4 border-t border-[#D4D0C7]/60 dark:border-[#2C2C30]/60 text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
          *Seluruh riwayat kepemimpinan dan prestasi di atas disajikan sesuai data profil autentik tanpa penambahan klaim gelar atau penghargaan yang tidak terverifikasi.
        </div>
      </div>
    </section>
  );
}
