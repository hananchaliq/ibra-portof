'use client';

import { Code2, Globe, GitBranch, Terminal } from 'lucide-react';

interface SkillGroup {
  category: string;
  categoryEn: string;
  description: string;
  items: {
    name: string;
    description: string;
    competencyFocus: string;
  }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Fondasi Web (Web Fundamentals)',
    categoryEn: 'WEB FUNDAMENTALS',
    description: 'Pilar utama pembangun struktur, estetika, dan interaktivitas halaman web standar.',
    items: [
      {
        name: 'HTML',
        description: 'Penyusunan markup semantik, struktur dokumen yang rapi, formulir input, dan keterbacaan kode bagi browser.',
        competencyFocus: 'Semantik Dokumen & Aksesibilitas Elemen',
      },
      {
        name: 'CSS',
        description: 'Penataan tata letak visual menggunakan Flexbox dan Grid, desain antarmuka responsif antar perangkat, serta pewarnaan editorial.',
        competencyFocus: 'Tata Letak Responsif & Konsistensi Visual',
      },
      {
        name: 'JavaScript',
        description: 'Pemrograman logika sisi klien murni (vanilla JS), manipulasi DOM secara dinamis, penanganan event klik/formulir, dan filter data.',
        competencyFocus: 'Interaktivitas DOM & Validasi Data Klien',
      },
    ],
  },
  {
    category: 'Platform & CMS (Website Platform)',
    categoryEn: 'CMS & PLATFORM',
    description: 'Fokus spesialisasi dalam merancang dan mengelola website berbasis sistem manajemen konten.',
    items: [
      {
        name: 'WordPress',
        description: 'Pengaturan arsitektur situs, kustomisasi tata letak, integrasi konten, penataan hierarki menu, dan optimasi kemudahan kelola bagi pemilik situs.',
        competencyFocus: 'Pengembangan & Pengelolaan Website Berbasis WordPress',
      },
    ],
  },
  {
    category: 'Pengelolaan Kode & Lingkungan Kerja (Version Control & Workflow)',
    categoryEn: 'WORKFLOW & TOOLING',
    description: 'Alat bantu pendukung penulisan dan pelacakan versi kode proyek.',
    items: [
      {
        name: 'Git & GitHub',
        description: 'Pelacakan riwayat perubahan kode sumber, sinkronisasi repositori, dan dokumentasi proyek secara terbuka.',
        competencyFocus: 'Manajemen Repositori & Versi Kode',
      },
    ],
  },
];

export default function SkillsAndTools() {
  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono font-bold text-[#F05A28]">03</span>
              <span className="h-px w-8 bg-[#F05A28]" aria-hidden="true" />
              <span className="text-xs font-mono tracking-widest text-[#69665F] dark:text-[#9E9C96] uppercase">
                KOMPETENSI TEKNIS & ALAT KERJA
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#171717] dark:text-[#EDEDEC] tracking-tight">
              TOOLS I WORK WITH
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono text-[#69665F] dark:text-[#9E9C96] max-w-sm">
            Disajikan secara deskriptif dan jujur berdasarkan teknologi yang benar-benar dipelajari dan diimplementasikan.
          </div>
        </div>

        {/* Groups Grid */}
        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.categoryEn}
              className="border border-[#D4D0C7] dark:border-[#2C2C30] bg-[#F4F1EA] dark:bg-[#111113]"
            >
              {/* Group Header Strip */}
              <div className="p-5 sm:p-6 bg-[#E5E2DA]/50 dark:bg-[#1B1B1E]/50 border-b border-[#D4D0C7] dark:border-[#2C2C30] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#F05A28]">
                    {String(groupIndex + 1).padStart(2, '0')}.
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#171717] dark:text-[#EDEDEC]">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                  {group.description}
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[#D4D0C7]/60 dark:divide-[#2C2C30]/60">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-5 sm:p-6 hover:bg-[#E5E2DA]/20 dark:hover:bg-[#1B1B1E]/20 transition-colors"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                      <div className="md:col-span-3">
                        <span className="font-display font-bold text-xl text-[#171717] dark:text-[#EDEDEC] block">
                          {item.name}
                        </span>
                        <span className="text-xs font-mono text-[#F05A28] mt-0.5 block">
                          {item.competencyFocus}
                        </span>
                      </div>

                      <div className="md:col-span-9">
                        <p className="text-sm text-[#69665F] dark:text-[#9E9C96] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Anti-Slop Transparency Note */}
        <div className="mt-8 p-4 border border-dashed border-[#D4D0C7] dark:border-[#2C2C30] bg-[#E5E2DA]/20 dark:bg-[#1B1B1E]/20 flex items-start gap-3 text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
          <span className="text-[#F05A28] font-bold text-sm shrink-0">!</span>
          <p>
            Komitmen transparansi: Portofolio ini sengaja tidak memuat persentase subjektif seperti &ldquo;HTML 95%&rdquo; atau mencantumkan tumpukan framework yang belum dikuasai secara mendalam. Setiap teknologi di atas merupakan alat yang secara nyata dipelajari dan diimplementasikan dalam alur tugas di MAKN Ende.
          </p>
        </div>
      </div>
    </section>
  );
}
