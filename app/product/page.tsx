"use client";

import Link from "next/link";
import { ArrowLeft, Cpu, Sprout, ShieldCheck } from "lucide-react";

export default function ProdukPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Tombol Kembali */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-400 font-medium transition-all duration-300 group text-sm"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> 
            Kembali ke Beranda
          </Link>
        </div>

        {/* Header Halaman */}
        <div className="border-b border-zinc-900 pb-10 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Katalog Produk & Perangkat
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Jelajahi ekosistem perangkat keras dan lunak HD Tani Digital yang dirancang khusus untuk modernisasi pertanian Indonesia.
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Perangkat 1 */}
          <div className="bg-zinc-950/60 border border-zinc-900 p-8 rounded-3xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div>
              <div className="bg-emerald-500/10 text-emerald-400 p-3.5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu size={26} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                HD Sensor Node v2
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Sensor tanah multi-parameter untuk mendeteksi kelembaban, pH, NPK, dan suhu lingkungan secara real-time langsung dari lahan.
              </p>
            </div>
            <span className="text-emerald-500 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Lihat Spesifikasi <span>→</span>
            </span>
          </div>

          {/* Perangkat 2 */}
          <div className="bg-zinc-950/60 border border-zinc-900 p-8 rounded-3xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div>
              <div className="bg-emerald-500/10 text-emerald-400 p-3.5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sprout size={26} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                HD Smart Irrigation Valve
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Katup air otomatis berbasis IoT yang mengatur jadwal pengairan cerdas berdasarkan data konkrit dari sensor lapangan.
              </p>
            </div>
            <span className="text-emerald-500 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Lihat Spesifikasi <span>→</span>
            </span>
          </div>

          {/* Perangkat 3 */}
          <div className="bg-zinc-950/60 border border-zinc-900 p-8 rounded-3xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div>
              <div className="bg-emerald-500/10 text-emerald-400 p-3.5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                HD Gateway Hub
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Stasiun pemancar utama berdaya jangkau luas dengan protokol LoRaWAN untuk enkripsi dan transmisi data sensor ke cloud aman.
              </p>
            </div>
            <span className="text-emerald-500 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Lihat Spesifikasi <span>→</span>
            </span>
          </div>

        </div>
      </div>
    </main>
  );
}