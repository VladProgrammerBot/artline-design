import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "ART LINE DESIGN | Широкоформатний друк, вивіски та реклама",
  description:
    "Професійний широкоформатний друк, виготовлення вивісок, інтер'єрний друк та поліграфія. Швидко, якісно та з гарантією.",
  keywords:
    "широкоформатний друк, вивіски, поліграфія, реклама, друк на плівці, київ, art line design",
  openGraph: {
    title: "ART LINE DESIGN | Рекламні рішення",
    description:
      "Дійсний друк, брендування та виготовлення реклами будь-якої складності.",
    url: "https://artline-design.ua",
    siteName: "ART LINE DESIGN",
    images: [
      {
        url: "/og-image.jpg", // Змініть на реальне зображення
        width: 1200,
        height: 630,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        <div className="h-0 sticky top-0 left-0 w-full bg-zinc-950/80 backdrop-blur-md pointer-events-none z-40 transition-all duration-300 group-hover:opacity-100"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
