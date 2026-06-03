"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, User, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* HEADER & NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-900 text-white">
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
            {/* LOGO */}
            <Link href="/" className="text-2xl font-black tracking-tight text-emerald-500 cursor-pointer">
              HD TANI
            </Link>

            {/* NAV MENU dengan Indikator Aktif */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
              <Link 
                href="/produk" 
                className={`transition-colors duration-200 relative py-1 ${
                  isActive("/produk") ? "text-emerald-400 font-semibold" : "text-zinc-400 hover:text-emerald-500"
                }`}
              >
                Produk
                {isActive("/produk") && (
                  <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500" />
                )}
              </Link>

              <Link 
                href="/solusi" 
                className={`transition-colors duration-200 relative py-1 ${
                  isActive("/solusi") ? "text-emerald-400 font-semibold" : "text-zinc-400 hover:text-emerald-500"
                }`}
              >
                Solusi
                {isActive("/solusi") && (
                  <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500" />
                )}
              </Link>

              <Link href="/#portfolio" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                Portfolio
              </Link>
              <Link href="/#contact" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                Dukungan
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                Keberlanjutan
              </Link>
            </nav>

            {/* SEARCH BAR CAPSULE */}
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

      {/* RENDER KONTEN UTAMA PAGE */}
      {children}

      {/* CORPORATE FOOTER */}
      <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Untuk Petani</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/produk" className="hover:text-emerald-500 transition">Smart Farming</Link></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Monitoring IoT</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Sistem Irigasi</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Promo Mitra</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Untuk Bisnis</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/solusi" className="hover:text-emerald-500 transition">Website Agribisnis</Link></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Aplikasi Logistik</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Manajemen Inventori</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">Support</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition">Pusat Bantuan</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">Panduan Sistem</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">About</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition">HD Tani Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
            <div className="text-zinc-500">
              Copyright © 2026 <span className="font-semibold text-zinc-400">HD Tani Digital Indonesia.</span> All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-zinc-500">
              <a href="#" className="hover:text-white transition">Terms of Use</a>
              <span className="text-zinc-800">|</span>
              <a href="#" className="hover:text-white transition">Personal Data</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/6283844398072"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center hover:bg-emerald-600 transition-colors"
      >
        <MessageCircle size={28} className="fill-current" />
      </motion.a>
    </>
  );
}