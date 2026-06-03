"use client";

import { motion } from "framer-motion";
import {
  Sprout,
  Globe,
  Smartphone,
  Phone,
  ArrowRight,
  MessageCircle, // Import icon chat / whatsapp alternative dari lucide
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
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

      {/* FLOATING WHATSAPP BUTTON (GELEMBUNG KANAN BAWAH) */}
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
        {/* Tooltip teks opsional saat di-hover */}
        <span className="absolute right-16 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-zinc-800 pointer-events-none">
          Hubungi Kami
        </span>
      </motion.a>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
        © 2026 HD Tani Digital. All Rights Reserved.
      </footer>

    </main>
  );
}