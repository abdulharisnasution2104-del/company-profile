import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import komponen pembungkus baru yang kita buat tadi
import ClientLayout from "@/app/components/clientLayout"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HD Tani Digital",
  description: "Menghubungkan teknologi dan pertanian modern di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* Masukkan ClientLayout di sini untuk membungkus seluruh halaman aplikasi */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}