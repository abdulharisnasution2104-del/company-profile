"use client";

import { motion } from "framer-motion";
import {
  Sprout,
  Globe,
  Smartphone,
  Phone,
  ArrowRight,
  MessageCircle,
  Search,
  ChevronDown,
  User
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative pt-[120px]">

      {/* HEADER & NAVIGATION (Layout Atas) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-900">
        {/* 1. TOP BAR */}
        <div className="bg-zinc-950 text-zinc-400 text-xs py-2 px-6 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <span className="text-sm">🇮🇩</span>
              <span>HD Tani Indonesia</span>
            </div>
            <div className="h-3 w-[1px] bg-zinc-800" />
            <div className="flex items-center gap-1 hover:text-white cursor-pointer transition">
              <span>Bahasa Indonesia</span>
              <ChevronDown size={12} />
            </div>
            <div className="h-3 w-[1px] bg-zinc-800" />
            <a href="#contact" className="flex items-center gap-1 hover:text-white transition">
              <span>Connect with Us</span>
              <ChevronDown size={12} />
            </a>
            <div className="h-3 w-[1px] bg-zinc-800" />
            <div className="flex items-center gap-1 hover:text-white cursor-pointer transition">
              <User size={12} />
              <span>Akun Mitra</span>
            </div>
          </div>
        </div>

        {/* 2. MAIN NAVBAR */}
        <div className="py-4 px-6 bg-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="text-2xl font-black tracking-tight text-emerald-500 cursor-pointer">
              HD TANI
            </div>
            <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-zinc-300">
              <a href="#" className="hover:text-emerald-500 transition">Produk</a>
              <a href="#" className="hover:text-emerald-500 transition">Solusi</a>
              <a href="#portfolio" className="hover:text-emerald-500 transition">Portfolio</a>
              <a href="#contact" className="hover:text-emerald-500 transition">Dukungan</a>
              <a href="#" className="hover:text-emerald-500 transition">Keberlanjutan</a>
            </nav>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input 
                type="text" 
                placeholder="Cari solusi pertanian..." 
                className="w-full bg-zinc-900 border border-zinc-800 text-sm text-white pl-11 pr-4 py-2.5 rounded-full focus:outline-none focus:border-emerald-500 transition-colors placeholder-zinc-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-[calc(screen-120px)] flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold"
        >
          HD Tani Digital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-zinc-400 max-w-2xl text-lg"
        >
          Menghubungkan teknologi dan pertanian untuk
          meningkatkan produktivitas, efisiensi, dan
          pertumbuhan bisnis agribisnis di Indonesia.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#portfolio"
            className="bg-emerald-500 hover:bg-emerald-600 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
          >
            Portfolio
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="border border-zinc-700 hover:border-emerald-500 transition px-8 py-4 rounded-xl"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Tentang Kami
        </h2>
        <p className="text-zinc-400 text-center text-lg max-w-4xl mx-auto leading-8">
          HD Tani Digital hadir untuk membantu petani,
          kelompok tani, koperasi, distributor, dan
          pelaku agribisnis memanfaatkan teknologi
          digital untuk meningkatkan produktivitas,
          efisiensi operasional, serta memperluas
          akses pasar di era modern.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Layanan Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <Sprout size={42} className="text-emerald-500" />
              <h3 className="text-2xl font-semibold mt-4">Smart Farming</h3>
              <p className="text-zinc-400 mt-3">
                Solusi digital untuk monitoring lahan, irigasi, produktivitas, dan pengelolaan pertanian modern.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <Globe size={42} className="text-emerald-500" />
              <h3 className="text-2xl font-semibold mt-4">Website Agribisnis</h3>
              <p className="text-zinc-400 mt-3">
                Pembuatan website perusahaan, koperasi, distributor hasil tani, dan UMKM pertanian.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <Smartphone size={42} className="text-emerald-500" />
              <h3 className="text-2xl font-semibold mt-4">Aplikasi Mobile</h3>
              <p className="text-zinc-400 mt-3">
                Sistem pencatatan panen, inventory, distribusi, dan manajemen usaha tani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-bold text-emerald-500">100+</h3>
            <p className="text-zinc-400 mt-3">Mitra Tani</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-emerald-500">50+</h3>
            <p className="text-zinc-400 mt-3">Proyek Digital</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-emerald-500">10+</h3>
            <p className="text-zinc-400 mt-3">Wilayah Operasional</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-emerald-500">24/7</h3>
            <p className="text-zinc-400 mt-3">Support</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Sistem Monitoring Lahan</h3>
              <p className="text-zinc-400 mt-4">Dashboard digital untuk memantau kondisi lahan dan produktivitas pertanian secara real-time.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Aplikasi Pencatatan Panen</h3>
              <p className="text-zinc-400 mt-4">Sistem pencatatan hasil panen, stok gudang, dan distribusi hasil tani.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Website Distributor Pupuk</h3>
              <p className="text-zinc-400 mt-4">Website perusahaan dengan katalog produk dan sistem pemesanan online.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Dashboard Agribisnis</h3>
              <p className="text-zinc-400 mt-4">Monitoring penjualan, inventory, dan laporan bisnis agrikultur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <Phone className="mx-auto text-emerald-500" size={55} />
        <h2 className="text-4xl font-bold mt-6">Hubungi Kami</h2>
        <p className="text-zinc-400 mt-6">
          Siap membantu transformasi digital sektor pertanian Indonesia.
        </p>
      </section>

      {/* CORPORATE FOOTER (Sesuai image_024bc0.png) */}
      <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* 4 Kolom Menu Utama */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            
            {/* Kolom 1 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Untuk Petani</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition">Smart Farming</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Monitoring IoT</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Sistem Irigasi</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Promo Mitra</a></li>
              </ul>
            </div>

            {/* Kolom 2 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Untuk Bisnis</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition">Website Agribisnis</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Aplikasi Logistik</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Manajemen Inventori</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Sistem Koperasi</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">ERP Pertanian</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Integrasi API</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Kemitraan & Event</a></li>
              </ul>
            </div>

            {/* Kolom 3 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Support</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Panduan Sistem</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Lokasi Operasional</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Pendaftaran Garansi</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Keamanan Data</a></li>
              </ul>
            </div>

            {/* Kolom 4 */}
            <div>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">About</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">HD Tani Blog</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Kode Etik Mitra Bisnis</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Suara Mitra</a></li>
              </ul>
            </div>

          </div>

          {/* Baris Hak Cipta & Dokumen Legal (Bawah) */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
            <div className="text-zinc-500">
              Copyright © 2026 <span className="font-semibold text-zinc-400">HD Tani Digital Indonesia.</span> All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-zinc-500">
              <a href="#contact" className="hover:text-white transition">Contact Us</a>
              <span className="text-zinc-800">|</span>
              <a href="#" className="hover:text-white transition">Terms of Use</a>
              <span className="text-zinc-800">|</span>
              <a href="#" className="hover:text-white transition">Personal Data</a>
              <span className="text-zinc-800">|</span>
              <a href="#" className="hover:text-white transition">e-Catalogue</a>
            </div>
          </div>

        </div>
      </footer>

      {/* GELEMBUNG WHATSAPP MELAYANG */}
      <motion.a
        href="https://wa.me/6283844398072"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
        <span className="absolute right-16 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-zinc-800 pointer-events-none">
          Hubungi Kami
        </span>
      </motion.a>

    </main>
  );
}