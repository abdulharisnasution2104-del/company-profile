"use client";

import Link from "next/link";
import { ArrowLeft, Sprout, ShieldCheck, Cpu } from "lucide-react";

export default function ProdukPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition mb-8 text-sm">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>

        {/* Header Halaman */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Katalog Produk & Perangkat</h1>
          <p className="text-zinc-400 max-w-2xl">
            Jelajahi ekosistem perangkat keras dan lunak HD Tani Digital yang dirancang khusus untuk modernisasi pertanian Indonesia.
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Produk 1 */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl hover:border-emerald-500/50 transition">
            <div className="bg-emerald-500/10 p-3 rounded-xl w-fit text-emerald-500 mb-4">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">HD Sensor Node v2</h3>
            <p className="text-zinc-400 text-sm mb-4">Sensor tanah multi-parameter untuk mendeteksi kelembaban, pH, NPK, dan suhu lingkungan secara real-time.</p>
            <span className="text-emerald-500 font-semibold text-sm">Lihat Spesifikasi →</span>
          </div>

          {/* Produk 2 */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl hover:border-emerald-500/50 transition">
            <div className="bg-emerald-500/10 p-3 rounded-xl w-fit text-emerald-500 mb-4">
              <Sprout size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">HD Smart Irrigation Valve</h3>
            <p className="text-zinc-400 text-sm mb-4">Katup air otomatis berbasis IoT yang mengatur jadwal pengairan berdasarkan data langsung dari sensor tanah.</p>
            <span className="text-emerald-500 font-semibold text-sm">Lihat Spesifikasi →</span>
          </div>

          {/* Produk 3 */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl hover:border-emerald-500/50 transition">
            <div className="bg-emerald-500/10 p-3 rounded-xl w-fit text-emerald-500 mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">HD Gateway Hub</h3>
            <p className="text-zinc-400 text-sm mb-4">Stasiun pemancar utama berdaya jangkau luas (LoRaWAN) untuk menghubungkan seluruh sensor lahan ke cloud.</p>
            <span className="text-emerald-500 font-semibold text-sm">Lihat Spesifikasi →</span>
          </div>

        </div>

      </div>
    </main>
  );
}