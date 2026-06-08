import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harini Dental Care & Implant Center | Dr. Jinal Lad",
  description: "Transforming smiles and restoring confidence. Dr. Jinal Lad - Dental Surgeon, Cosmetic Specialist, and Smile Designer. Let's keep your mouth clean.",
  keywords: ["Dental Clinic", "Valsad", "Dr. Jinal Lad", "Dental Implants", "Root Canal", "Cosmetic Dentistry"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
