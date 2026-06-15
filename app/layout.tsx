import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SamBooste - Stabilisation 15 jours",
  description: "Programme vidéo de stabilisation pour retrouver un cadre après un régime, des vacances ou une période d'écarts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
