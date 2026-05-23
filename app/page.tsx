"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Network,
  Shield,
  Phone,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold"
        >
          PT Digital Nusantara
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-zinc-400 max-w-xl"
        >
          Solusi IT modern untuk bisnis, networking,
          software development, dan sistem digital.
        </motion.p>

        <div className="flex gap-4 mt-8">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Portfolio
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-xl">
            Contact
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Layanan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <Monitor size={40} />
            <h3 className="text-2xl font-semibold mt-4">
              Software Development
            </h3>
            <p className="text-zinc-400 mt-3">
              Pembuatan aplikasi kasir, website,
              mobile app, dan sistem bisnis.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <Network size={40} />
            <h3 className="text-2xl font-semibold mt-4">
              Networking
            </h3>
            <p className="text-zinc-400 mt-3">
              Setup Mikrotik, fiber optic, server,
              access point dan jaringan kantor.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <Shield size={40} />
            <h3 className="text-2xl font-semibold mt-4">
              Security System
            </h3>
            <p className="text-zinc-400 mt-3">
              Instalasi CCTV, monitoring system,
              dan keamanan jaringan.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center mb-16">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              SmartKas POS
            </h3>

            <p className="text-zinc-400 mt-4">
              Sistem kasir modern dengan thermal
              printer bluetooth dan inventory.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Fiber Optic Office
            </h3>

            <p className="text-zinc-400 mt-4">
              Instalasi jaringan fiber optic
              perusahaan dan access point.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 text-center">
        <Phone className="mx-auto" size={50} />

        <h2 className="text-4xl font-bold mt-6">
          Hubungi Kami
        </h2>

        <p className="text-zinc-400 mt-4">
          WhatsApp: +62 812-xxxx-xxxx
        </p>
      </section>
    </main>
  );
}