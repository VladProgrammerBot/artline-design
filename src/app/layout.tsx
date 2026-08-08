import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "ART LINE DESIGN | Широкоформатний друк, вивіски та реклама",
  description: "Професійний широкоформатний друк, виготовлення вивісок, інтер'єрний друк та поліграфія. Швидко, якісно та з гарантією.",
  keywords: "широкоформатний друк, вивіски, поліграфія, реклама, друк на плівці, київ, art line design",
  openGraph: {
    title: "ART LINE DESIGN | Рекламні рішення",
    description: "Дійсний друк, брендування та виготовлення реклами будь-якої складності.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}