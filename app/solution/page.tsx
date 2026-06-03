"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, Users, Network } from "lucide-react";

export default function SolusiPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Tombol Kembali */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition mb-8 text-sm">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>

        {/* Header Halaman */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Solusi Agribisnis</h1>
          <p className="text-zinc-400 max-w-2xl">
            Sistem integrasi end-to-end yang dikembangkan untuk berbagai sektor skala operasional pertanian.
          </p>
        </div>

        {/* Grid Solusi */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Solusi 1 */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
            <div className="text-emerald-500 mb-4"><BarChart3 size={28} /></div>
            <h3 className="text-xl font-bold mb-2">Manajemen Korporasi</h3>
            <p className="text-zinc-400 text-sm">Solusi analisis data makro, prediksi hasil panen, dan akuntansi khusus perusahaan agrikultur skala besar.</p>
          </div>

          {/* Solusi 2 */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
            <div className="text-emerald-500 mb-4"><Users size={28} /></div>
            <h3 className="text-xl font-bold mb-2">Digitalisasi Koperasi & Kelompok Tani</h3>
            <p className="text-zinc-400 text-sm">Sistem pencatatan digital iuran, inventori pupuk bersama, dan transparansi distribusi hasil tani kelompok.</p>
          </div>

          {/* Solusi 3 */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl">
            <div className="text-emerald-500 mb-4"><Network size={28} /></div>
            <h3 className="text-xl font-bold mb-2">Supply Chain Tracking</h3>
            <p className="text-zinc-400 text-sm">Pelacakan jalur logistik hasil panen dari sawah hingga tangan distributor demi menjaga kesegaran komoditas.</p>
          </div>

        </div>

      </div>
    </main>
  );
}