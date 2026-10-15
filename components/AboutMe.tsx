'use client';

import { MapPin, GraduationCap, Compass, BookOpen, ShieldCheck } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono font-bold text-[#F05A28]">02</span>
              <span className="h-px w-8 bg-[#F05A28]" aria-hidden="true" />
              <span className="text-xs font-mono tracking-widest text-[#69665F] dark:text-[#9E9C96] uppercase">
                FILOSOFI & LATAR BELAKANG
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#171717] dark:text-[#EDEDEC] tracking-tight">
              BEHIND THE BUILD
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#69665F] dark:text-[#9E9C96] max-w-sm">
            Membangun fondasi digital melalui disiplin belajar, struktur kode yang teliti, dan etos kerja sama.
          </p>
        </div>

        {/* Editorial Layout: Left Narrative, Right Fact Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left 7 Columns: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Bio Paragraph */}
            <div className="p-6 sm:p-8 bg-[#E5E2DA]/40 dark:bg-[#1B1B1E]/40 border-l-2 border-[#F05A28] border-y border-r border-[#D4D0C7] dark:border-[#2C2C30]">
              <p className="font-display text-lg sm:text-xl font-medium text-[#171717] dark:text-[#EDEDEC] leading-relaxed">
                &ldquo;Saya Ibrahimmovic Hasan, siswa kelas XII PPLG 1 di MAKN Ende. Saya berfokus pada pengembangan website, terutama menggunakan WordPress, serta mempelajari HTML, CSS, dan JavaScript untuk membangun pengalaman digital yang fungsional dan terstruktur.&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#69665F] dark:text-[#9E9C96] leading-relaxed">
              <p>
                Bagi saya, pemrograman bukan sekadar menulis deretan instruksi, melainkan proses merapikan kekacauan menjadi sistem yang teratur. Ketertarikan saya pada pengembangan website tumbuh dari keinginan menghadirkan media informasi yang dapat diakses dengan mudah, memiliki navigasi yang masuk akal, dan memberi nilai guna nyata bagi pembacanya.
              </p>
              <p>
                Sebagai siswa jurusan Pengembangan Perangkat Lunak dan GIM (PPLG), proses belajar sehari-hari melatih ketelitian logika dan kesabaran saat menelusuri kode baris demi baris. Pendekatan ini saya perkuat dengan disiplin yang ditempa dari dunia olahraga—di mana setiap peran dalam tim harus dijalankan dengan konsistensi, persiapan yang matang, dan komitmen tinggi terhadap tujuan bersama.
              </p>
              <p>
                Saat ini, saya berada pada tahap pemula menuju menengah dengan motivasi tinggi untuk terus menyempurnakan kemampuan teknis melalui kesempatan magang, proyek kolaboratif, dan tantangan pengembangan web di dunia nyata.
              </p>
            </div>

            {/* Core Values / Work Principles */}
            <div className="pt-6 border-t border-[#D4D0C7]/60 dark:border-[#2C2C30]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#F4F1EA] dark:bg-[#111113] border border-[#D4D0C7] dark:border-[#2C2C30]">
                <div className="text-xs font-mono font-bold text-[#F05A28] mb-1">01 / STRUKTUR</div>
                <div className="font-display font-bold text-sm text-[#171717] dark:text-[#EDEDEC] mb-1">
                  Keteraturan Semantik
                </div>
                <p className="text-xs text-[#69665F] dark:text-[#9E9C96] leading-normal">
                  Menyusun elemen halaman dengan hierarki logis agar mudah dipelihara dan diakses.
                </p>
              </div>

              <div className="p-4 bg-[#F4F1EA] dark:bg-[#111113] border border-[#D4D0C7] dark:border-[#2C2C30]">
                <div className="text-xs font-mono font-bold text-[#F05A28] mb-1">02 / DISIPLIN</div>
                <div className="font-display font-bold text-sm text-[#171717] dark:text-[#EDEDEC] mb-1">
                  Ketelitian Eksekusi
                </div>
                <p className="text-xs text-[#69665F] dark:text-[#9E9C96] leading-normal">
                  Membiasakan pengujian teliti sebelum menyatakan sebuah tugas selesai.
                </p>
              </div>

              <div className="p-4 bg-[#F4F1EA] dark:bg-[#111113] border border-[#D4D0C7] dark:border-[#2C2C30]">
                <div className="text-xs font-mono font-bold text-[#F05A28] mb-1">03 / KOLABORASI</div>
                <div className="font-display font-bold text-sm text-[#171717] dark:text-[#EDEDEC] mb-1">
                  Kerja Sama Tim
                </div>
                <p className="text-xs text-[#69665F] dark:text-[#9E9C96] leading-normal">
                  Terbuka menerima masukan dan siap berkontribusi secara aktif dalam tim kerja.
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Verified Profile Fact Sheet */}
          <div className="lg:col-span-5 border border-[#D4D0C7] dark:border-[#2C2C30] bg-[#E5E2DA]/30 dark:bg-[#1B1B1E]/30 p-6 sm:p-8">
            <div className="pb-4 border-b border-[#D4D0C7] dark:border-[#2C2C30] flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-[#69665F] dark:text-[#9E9C96]">
                DATA PROFIL RESMI
              </span>
              <span className="text-xs font-mono text-[#F05A28] font-bold">
                DATA TERVERIFIKASI
              </span>
            </div>

            <div className="divide-y divide-[#D4D0C7]/60 dark:divide-[#2C2C30]/60 text-xs sm:text-sm">
              <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-mono text-[#69665F] dark:text-[#9E9C96]">Nama Lengkap</span>
                <span className="font-semibold text-[#171717] dark:text-[#EDEDEC]">Ibrahimmovic Hasan</span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-mono text-[#69665F] dark:text-[#9E9C96]">Nama Panggilan</span>
                <span className="font-semibold text-[#171717] dark:text-[#EDEDEC]">Him / Ibra</span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-mono text-[#69665F] dark:text-[#9E9C96]">Pendidikan Formal</span>
                <span className="font-semibold text-[#171717] dark:text-[#EDEDEC] text-right">
                  Siswa Kelas XII PPLG 1<br />
                  <span className="text-xs font-normal text-[#69665F] dark:text-[#9E9C96]">MAKN Ende, NTT</span>
                </span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-mono text-[#69665F] dark:text-[#9E9C96]">Asal Daerah</span>
                <span className="font-semibold text-[#171717] dark:text-[#EDEDEC] text-right">
                  Kalabahi, Kab. Alor<br />
                  <span className="text-xs font-normal text-[#69665F] dark:text-[#9E9C96]">Nusa Tenggara Timur</span>
                </span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-mono text-[#69665F] dark:text-[#9E9C96]">Fokus Pengembangan</span>
                <span className="font-semibold text-[#F05A28] text-right">
                  Website & WordPress
                </span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-mono text-[#69665F] dark:text-[#9E9C96]">Status Profesi</span>
                <span className="font-semibold text-[#171717] dark:text-[#EDEDEC]">Software Developer</span>
              </div>

              <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-mono text-[#69665F] dark:text-[#9E9C96]">Tingkat Kemampuan</span>
                <span className="font-semibold text-[#171717] dark:text-[#EDEDEC]">Pemula Menuju Menengah</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4D0C7] dark:border-[#2C2C30] text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
              Tersedia untuk magang vokasi dan pengembangan website fungsional berbasis WordPress serta fondasi web modern.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
