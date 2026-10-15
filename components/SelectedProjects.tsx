'use client';

import { useState } from 'react';
import {
  Package,
  Layers,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Plus,
  Trash2,
  RefreshCw,
  Eye,
  SlidersHorizontal,
} from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  unit: string;
  status: 'Tersedia' | 'Menipis' | 'Habis';
}

const initialInventory: InventoryItem[] = [
  {
    id: 'GDG-001',
    name: 'Kardus Packing Double Wall (A3)',
    category: 'Material Pengemasan',
    stock: 150,
    unit: 'Pcs',
    status: 'Tersedia',
  },
  {
    id: 'GDG-002',
    name: 'Lakban Cokelat Industri 48mm',
    category: 'Material Pengemasan',
    stock: 14,
    unit: 'Roll',
    status: 'Menipis',
  },
  {
    id: 'GDG-003',
    name: 'Palet Kayu Standar Gudang',
    category: 'Perlengkapan Logistik',
    stock: 45,
    unit: 'Unit',
    status: 'Tersedia',
  },
  {
    id: 'GDG-004',
    name: 'Spidol Marker Tinta Hitam Permanen',
    category: 'Alat Tulis Kantor Gudang',
    stock: 0,
    unit: 'Pcs',
    status: 'Habis',
  },
  {
    id: 'GDG-005',
    name: 'Plastik Bubble Wrap 50m Roll',
    category: 'Material Pengemasan',
    stock: 8,
    unit: 'Roll',
    status: 'Menipis',
  },
];

export default function SelectedProjects() {
  const [activeTab, setActiveTab] = useState<'case-study' | 'interactive-demo'>('case-study');

  // Interactive prototype state
  const [items, setItems] = useState<InventoryItem[]>(initialInventory);
  const [filterCategory, setFilterCategory] = useState<string>('Semua');
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('Material Pengemasan');
  const [newStock, setNewStock] = useState('20');
  const [newUnit, setNewUnit] = useState('Pcs');
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const qty = parseInt(newStock, 10) || 0;
    let status: 'Tersedia' | 'Menipis' | 'Habis' = 'Tersedia';
    if (qty === 0) status = 'Habis';
    else if (qty <= 15) status = 'Menipis';

    const newItem: InventoryItem = {
      id: `GDG-00${items.length + 1}`,
      name: newName.trim(),
      category: newCategory,
      stock: qty,
      unit: newUnit,
      status,
    };

    setItems([newItem, ...items]);
    setNewName('');
    setNewStock('20');
    setNotification(`Barang "${newItem.name}" berhasil ditambahkan ke catatan antarmuka.`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    setItems(initialInventory);
    setNotification('Data simulasi dikembalikan ke kondisi awal.');
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredItems = items.filter((item) => {
    if (filterCategory === 'Semua') return true;
    return item.status === filterCategory;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono font-bold text-[#F05A28]">01</span>
              <span className="h-px w-8 bg-[#F05A28]" aria-hidden="true" />
              <span className="text-xs font-mono tracking-widest text-[#69665F] dark:text-[#9E9C96] uppercase">
                STUDI KASUS & REKAYASA ANTARMUKA
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#171717] dark:text-[#EDEDEC] tracking-tight">
              PROYEK PILIHAN
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#69665F] dark:text-[#9E9C96] max-w-sm">
            Eksplorasi antarmuka digital yang fungsional, terstruktur, dan diverifikasi tanpa klaim fiktif.
          </p>
        </div>

        {/* Project 01: Inventory Gudang Case Study Card */}
        <div className="border border-[#D4D0C7] dark:border-[#2C2C30] bg-[#F4F1EA] dark:bg-[#111113] overflow-hidden mb-16">
          {/* Card Top Banner / Metadata Header */}
          <div className="p-6 sm:p-8 bg-[#E5E2DA]/50 dark:bg-[#1B1B1E]/50 border-b border-[#D4D0C7] dark:border-[#2C2C30] flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#69665F] dark:text-[#9E9C96] mb-1">
                <span>PROJECT / 01</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#171717] dark:text-[#EDEDEC] font-semibold">PROTOTYPE INTERFACE</span>
                <span aria-hidden="true">·</span>
                <span>STATUS: TERVERIFIKASI</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] dark:text-[#EDEDEC] tracking-tight">
                Inventory Gudang
              </h3>
            </div>

            {/* Mode Selector Tabs (Interactive Functional Controls) */}
            <div className="flex items-center border border-[#D4D0C7] dark:border-[#2C2C30] bg-[#F4F1EA] dark:bg-[#111113] p-1">
              <button
                type="button"
                onClick={() => setActiveTab('case-study')}
                className={`px-4 py-2 text-xs font-mono font-semibold transition-colors ${
                  activeTab === 'case-study'
                    ? 'bg-[#171717] text-[#F4F1EA] dark:bg-[#EDEDEC] dark:text-[#111113]'
                    : 'text-[#69665F] dark:text-[#9E9C96] hover:text-[#171717] dark:hover:text-[#EDEDEC]'
                }`}
              >
                Ikhtisar Kasus
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('interactive-demo')}
                className={`px-4 py-2 text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'interactive-demo'
                    ? 'bg-[#F05A28] text-white'
                    : 'text-[#69665F] dark:text-[#9E9C96] hover:text-[#F05A28]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Simulasi Prototipe</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Detailed Case Study View */}
          {activeTab === 'case-study' && (
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left 7 Columns: Problem, Solution, Real Contribution */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#F05A28] font-bold mb-2">
                      RINGKASAN PROYEK
                    </h4>
                    <p className="text-base sm:text-lg text-[#171717] dark:text-[#EDEDEC] leading-relaxed font-medium">
                      Proyek pengelolaan inventaris gudang yang bertujuan membantu pencatatan barang menjadi lebih terstruktur melalui media digital dibandingkan pencatatan manual.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <div className="p-5 bg-[#E5E2DA]/40 dark:bg-[#1B1B1E]/40 border border-[#D4D0C7] dark:border-[#2C2C30]">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#171717] dark:text-[#EDEDEC] mb-2">
                        <AlertCircle className="w-4 h-4 text-[#F05A28]" aria-hidden="true" />
                        <span>MASALAH NYATA</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#69665F] dark:text-[#9E9C96] leading-relaxed">
                        Pencatatan barang secara manual di buku fisik rentan menyulitkan pengorganisasian data, memperlambat pencarian barang yang dibutuhkan, serta menyulitkan pengawasan kondisi stok harian.
                      </p>
                    </div>

                    <div className="p-5 bg-[#E5E2DA]/40 dark:bg-[#1B1B1E]/40 border border-[#D4D0C7] dark:border-[#2C2C30]">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#171717] dark:text-[#EDEDEC] mb-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F05A28]" aria-hidden="true" />
                        <span>SOLUSI YANG DIBUAT</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#69665F] dark:text-[#9E9C96] leading-relaxed">
                        Membuat antarmuka web digital terstruktur untuk mengelompokkan barang berdasarkan nama, kategori, dan jumlah stok dengan tabel yang jelas dan mudah dipindai oleh pengguna.
                      </p>
                    </div>
                  </div>

                  {/* Real Contributions & Verified Scope */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#69665F] dark:text-[#9E9C96] font-bold mb-3">
                      KONTRIBUSI IMPLEMENTASI & LINGKUP NYATA
                    </h4>
                    <ul className="space-y-2.5 text-sm text-[#171717] dark:text-[#EDEDEC]">
                      <li className="flex items-start gap-2.5">
                        <span className="font-mono text-[#F05A28] font-bold shrink-0">→</span>
                        <span>
                          <strong>Struktur Semantik HTML:</strong> Membangun kerangka halaman form input dan tabel data inventaris yang terstruktur dan mudah dinavigasi.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="font-mono text-[#F05A28] font-bold shrink-0">→</span>
                        <span>
                          <strong>Tata Letak CSS Terukur:</strong> Merancang antarmuka tabel responsif dengan garis pembatas kontras tinggi sehingga status stok terbaca sekilas.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="font-mono text-[#F05A28] font-bold shrink-0">→</span>
                        <span>
                          <strong>Logika JavaScript Murni:</strong> Mengimplementasikan mekanisme penambahan data baru, manipulasi DOM dinamis, serta penyaringan kategori.
                        </span>
                      </li>
                    </ul>
                    <p className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96] mt-4 pt-3 border-t border-[#D4D0C7]/60 dark:border-[#2C2C30]/60">
                      *Catatan transparansi: Prototipe ini berfokus pada fondasi antarmuka klien (HTML/CSS/JS) murni tanpa mengklaim database eksternal ataupun fitur tak terverifikasi.
                    </p>
                  </div>
                </div>

                {/* Right 5 Columns: Tech, Verified Result, & Quick Action */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-[#E5E2DA]/30 dark:bg-[#1B1B1E]/30 border border-[#D4D0C7] dark:border-[#2C2C30]">
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#69665F] dark:text-[#9E9C96] block mb-2">
                        TEKNOLOGI YANG DIGUNAKAN
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-sm font-mono font-semibold text-[#171717] dark:text-[#EDEDEC]">
                        <span>HTML</span>
                        <span className="text-[#F05A28]" aria-hidden="true">·</span>
                        <span>CSS</span>
                        <span className="text-[#F05A28]" aria-hidden="true">·</span>
                        <span>JavaScript (DOM Manipulation)</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D4D0C7] dark:border-[#2C2C30]">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#69665F] dark:text-[#9E9C96] block mb-2">
                        HASIL YANG DAPAT DIBUKTIKAN
                      </span>
                      <p className="text-sm text-[#171717] dark:text-[#EDEDEC] leading-relaxed">
                        Memvalidasi alur pencatatan data barang yang lebih tertata dan mudah dibaca secara visual dibandingkan catatan buku manual, mengurangi kesalahan pembacaan stok secara langsung.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#D4D0C7] dark:border-[#2C2C30]">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#69665F] dark:text-[#9E9C96] block mb-2">
                        REPOSITORI & SUMBER KODE
                      </span>
                      <p className="text-xs text-[#69665F] dark:text-[#9E9C96] mb-3">
                        Dikelola melalui profil GitHub resmi Ibrahimmovic Hasan.
                      </p>
                      <a
                        href="https://github.com/ibrahimmovichasan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#171717] dark:text-[#EDEDEC] hover:text-[#F05A28] dark:hover:text-[#F05A28] transition-colors"
                      >
                        <span>github.com/ibrahimmovichasan</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#D4D0C7] dark:border-[#2C2C30]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('interactive-demo')}
                      className="w-full py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider bg-[#171717] text-[#F4F1EA] dark:bg-[#EDEDEC] dark:text-[#111113] hover:bg-[#F05A28] dark:hover:bg-[#F05A28] dark:hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" aria-hidden="true" />
                      <span>Uji Coba Prototipe Langsung</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Live Interactive Prototype Sandbox */}
          {activeTab === 'interactive-demo' && (
            <div className="p-6 sm:p-10 space-y-8">
              {/* Sandbox Header / Explainer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D4D0C7] dark:border-[#2C2C30]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#F05A28] font-bold mb-1">
                    <span>[ SIMULASI ANTARMUKA PROTOTIPE LANGSUNG ]</span>
                  </div>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-[#171717] dark:text-[#EDEDEC]">
                    Antarmuka Tata Kelola Stok Barang
                  </h4>
                  <p className="text-xs sm:text-sm text-[#69665F] dark:text-[#9E9C96] mt-1">
                    Simulasi logika berbasis JavaScript murni: tambah barang, kategorisasi, status stok otomatis, dan penyaringan.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono border border-[#D4D0C7] dark:border-[#2C2C30] text-[#69665F] dark:text-[#9E9C96] hover:text-[#171717] dark:hover:text-[#EDEDEC] hover:bg-[#E5E2DA] dark:hover:bg-[#1B1B1E] transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset Data</span>
                </button>
              </div>

              {notification && (
                <div className="p-3 bg-[#E5E2DA] dark:bg-[#1B1B1E] border border-[#F05A28] text-xs font-mono text-[#171717] dark:text-[#EDEDEC] flex items-center justify-between">
                  <span>{notification}</span>
                  <button
                    type="button"
                    onClick={() => setNotification(null)}
                    className="text-[#69665F] hover:text-[#171717] text-xs font-bold"
                  >
                    Tutup
                  </button>
                </div>
              )}

              {/* Form Input Entri Barang Baru */}
              <form onSubmit={handleAddItem} className="p-5 bg-[#E5E2DA]/40 dark:bg-[#1B1B1E]/40 border border-[#D4D0C7] dark:border-[#2C2C30]">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#171717] dark:text-[#EDEDEC] mb-4 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#F05A28]" aria-hidden="true" />
                  <span>Formulir Tambah Data Barang</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5">
                    <label htmlFor="item-name" className="block text-xs font-mono text-[#69665F] dark:text-[#9E9C96] mb-1">
                      Nama Barang *
                    </label>
                    <input
                      id="item-name"
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Contoh: Lakban Bening 2 Inch"
                      className="w-full px-3 py-2 text-sm bg-[#F4F1EA] dark:bg-[#111113] border border-[#D4D0C7] dark:border-[#2C2C30] text-[#171717] dark:text-[#EDEDEC] focus:border-[#F05A28] outline-none"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="item-category" className="block text-xs font-mono text-[#69665F] dark:text-[#9E9C96] mb-1">
                      Kategori
                    </label>
                    <select
                      id="item-category"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-[#F4F1EA] dark:bg-[#111113] border border-[#D4D0C7] dark:border-[#2C2C30] text-[#171717] dark:text-[#EDEDEC] focus:border-[#F05A28] outline-none"
                    >
                      <option value="Material Pengemasan">Material Pengemasan</option>
                      <option value="Perlengkapan Logistik">Perlengkapan Logistik</option>
                      <option value="Alat Tulis Kantor Gudang">Alat Tulis Kantor Gudang</option>
                      <option value="Peralatan Keselamatan">Peralatan Keselamatan</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="item-stock" className="block text-xs font-mono text-[#69665F] dark:text-[#9E9C96] mb-1">
                      Jumlah
                    </label>
                    <input
                      id="item-stock"
                      type="number"
                      min="0"
                      value={newStock}
                      onChange={(e) => setNewStock(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-[#F4F1EA] dark:bg-[#111113] border border-[#D4D0C7] dark:border-[#2C2C30] text-[#171717] dark:text-[#EDEDEC] focus:border-[#F05A28] outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-end">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-3 text-xs font-mono font-bold uppercase tracking-wider bg-[#F05A28] text-white hover:bg-[#d94819] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Simpan</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Filter Controls (Segmented Control / Buttons) */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                    Filter Status:
                  </span>
                  <div className="flex items-center border border-[#D4D0C7] dark:border-[#2C2C30] p-0.5">
                    {(['Semua', 'Tersedia', 'Menipis', 'Habis'] as const).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFilterCategory(cat)}
                        className={`px-3 py-1 text-xs font-mono transition-colors ${
                          filterCategory === cat
                            ? 'bg-[#171717] text-[#F4F1EA] dark:bg-[#EDEDEC] dark:text-[#111113] font-bold'
                            : 'text-[#69665F] dark:text-[#9E9C96] hover:text-[#171717] dark:hover:text-[#EDEDEC]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                  Total Entri Terdata: <span className="font-bold text-[#171717] dark:text-[#EDEDEC]">{filteredItems.length}</span>
                </div>
              </div>

              {/* Interactive Table View */}
              <div className="border border-[#D4D0C7] dark:border-[#2C2C30] overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#E5E2DA] dark:bg-[#1B1B1E] border-b border-[#D4D0C7] dark:border-[#2C2C30] font-mono text-xs text-[#69665F] dark:text-[#9E9C96]">
                    <tr>
                      <th scope="col" className="py-3 px-4 font-semibold">KODE</th>
                      <th scope="col" className="py-3 px-4 font-semibold">NAMA BARANG</th>
                      <th scope="col" className="py-3 px-4 font-semibold">KATEGORI</th>
                      <th scope="col" className="py-3 px-4 font-semibold text-right">JUMLAH STOK</th>
                      <th scope="col" className="py-3 px-4 font-semibold">STATUS</th>
                      <th scope="col" className="py-3 px-4 font-semibold text-center">AKSI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D4D0C7]/60 dark:divide-[#2C2C30]/60">
                    {filteredItems.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-[#E5E2DA]/30 dark:hover:bg-[#1B1B1E]/30 transition-colors"
                      >
                        <td className="py-3 px-4 font-mono text-xs text-[#69665F] dark:text-[#9E9C96]">
                          {item.id}
                        </td>
                        <td className="py-3 px-4 font-medium text-[#171717] dark:text-[#EDEDEC]">
                          {item.name}
                        </td>
                        <td className="py-3 px-4 text-[#69665F] dark:text-[#9E9C96]">
                          {item.category}
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-bold tabular-nums text-[#171717] dark:text-[#EDEDEC]">
                          {item.stock} <span className="text-xs font-normal text-[#69665F] dark:text-[#9E9C96]">{item.unit}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`font-mono text-xs font-bold ${
                              item.status === 'Tersedia'
                                ? 'text-emerald-700 dark:text-emerald-400'
                                : item.status === 'Menipis'
                                ? 'text-[#F05A28]'
                                : 'text-rose-700 dark:text-rose-400'
                            }`}
                          >
                            ● {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-1 text-[#69665F] hover:text-rose-600 transition-colors"
                            aria-label={`Hapus entri ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredItems.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                          Tidak ada data inventaris dengan status tersebut.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Section: Future Projects Pipeline (Structured Editorial Slot) */}
        <div className="border border-[#D4D0C7] dark:border-[#2C2C30] p-6 sm:p-8 bg-[#E5E2DA]/20 dark:bg-[#1B1B1E]/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D4D0C7]/60 dark:border-[#2C2C30]/60 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#F05A28] font-bold">[ PIPELINE PROYEK ]</span>
              <span className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                EKSPANSI PORTOFOLIO MENDATANG
              </span>
            </div>
            <span className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
              STATUS: TAHAP PENGEMBANGAN AKTIF
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-[#171717] dark:text-[#EDEDEC] mb-2">
                Website Berbasis WordPress & Custom CMS
              </h4>
              <p className="text-sm text-[#69665F] dark:text-[#9E9C96] leading-relaxed mb-4">
                Sebagai fokus utama pembelajaran, modul implementasi WordPress dirancang untuk menghadirkan website profil lembaga dan media publikasi yang dinamis, terstruktur dengan Gutenberg Blocks, dan mudah dikelola administrator.
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-[#69665F] dark:text-[#9E9C96]">
                <span>Fokus: WordPress Theme Structure</span>
                <span aria-hidden="true">·</span>
                <span>Content Architecture</span>
              </div>
            </div>

            <div className="p-5 border border-dashed border-[#D4D0C7] dark:border-[#2C2C30] bg-[#F4F1EA] dark:bg-[#111113]">
              <div className="text-xs font-mono text-[#69665F] dark:text-[#9E9C96] mb-2 font-bold">
                PRINSIP PENGEMBANGAN:
              </div>
              <p className="text-xs text-[#69665F] dark:text-[#9E9C96] leading-relaxed">
                Struktur data portofolio ini dirancang secara modular agar ketika proyek website WordPress berikutnya selesai diuji coba, studi kasus dapat langsung ditambahkan secara jujur dan transparan tanpa mengganggu integritas arsitektur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
