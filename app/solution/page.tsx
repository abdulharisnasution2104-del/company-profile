"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, Users, Network } from "lucide-react";

export default function SolusiPage() {
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
            Solusi Integrasi Agribisnis
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Sistem ekosistem digital end-to-end yang dikembangkan untuk berbagai skala operasional sektor pertanian dan rantai pasok.
          </p>
        </div>

        {/* Grid Solusi */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Solusi 1 */}
          <div className="bg-zinc-950/60 border border-zinc-900 p-8 rounded-3xl hover:border-emerald-500/40 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="bg-emerald-500/10 text-emerald-400 p-3.5 rounded-2xl w-fit mb-6">
              <BarChart3 size={26} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
              Manajemen Korporasi
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed支">
              Solusi analisis data makro, perencanaan masa tanam, prediksi hasil panen akurat, dan modul akuntansi khusus perusahaan agrikultur skala besar.
            </p>
          </div>

          {/* Solusi 2 */}
          <div className="bg-zinc-950/60 border border-zinc-900 p-8 rounded-3xl hover:border-emerald-500/40 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="bg-emerald-500/10 text-emerald-400 p-3.5 rounded-2xl w-fit mb-6">
              <Users size={26} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
              Digitalisasi Koperasi Tani
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Sistem pencatatan digital iuran anggota kelompok tani, manajemen transparansi distribusi pupuk subsidi, dan kolektif hasil panen bersama.
            </p>
          </div>

          {/* Solusi 3 */}
          <div className="bg-zinc-950/60 border border-zinc-900 p-8 rounded-3xl hover:border-emerald-500/40 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="bg-emerald-500/10 text-emerald-400 p-3.5 rounded-2xl w-fit mb-6">
              <Network size={26} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
              Supply Chain Tracking
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Pelacakan jalur logistik komoditas panen dari area sawah/lahan, verifikasi suhu armada, hingga pintu gerbang distributor demi menjaga kesegaran pasar.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}