// pages/projects.js (або app/projects/page.jsx для App Router)
import UniversalGrid from "@/components/ImagesGrid";
import { portfolioItems } from "@/data/projects";
import Head from "next/head";
import Link from "next/link";

// Дані всіх проектів – залишаються статичними
const allProjects = [
  {
    id: 1,
    title: "Брендування офісу IT-компанії",
    category: "Брендування",
    img: "/projects/office-branding.jpg",
  },
  {
    id: 2,
    title: "Вивіска для магазину одягу",
    category: "Вивіски",
    img: "/projects/store-sign.jpg",
  },
  {
    id: 3,
    title: "Широкоформатний банер для виставки",
    category: "Баннери",
    img: "/projects/banner-expo.jpg",
  },
  {
    id: 4,
    title: "Друк футболок для корпоративу",
    category: "Друк",
    img: "/projects/tshirts-corp.jpg",
  },
  {
    id: 5,
    title: "Інтер'єрний друк на стінах ресторану",
    category: "Друк",
    img: "/projects/wall-art.jpg",
  },
  {
    id: 6,
    title: "Реклама на транспорті (брендування авто)",
    category: "Брендування",
    img: "/projects/car-wrap.jpg",
  },
  {
    id: 7,
    title: "Зовнішня вивіска кафе",
    category: "Вивіски",
    img: "/projects/cafe-sign.jpg",
  },
  {
    id: 8,
    title: "Банер для спортивного заходу",
    category: "Баннери",
    img: "/projects/sport-banner.jpg",
  },
  {
    id: 9,
    title: "Друк на одязі для фан-магазину",
    category: "Друк",
    img: "/projects/merch-print.jpg",
  },
  {
    id: 10,
    title: "Брендування вітрин мережі аптек",
    category: "Брендування",
    img: "/projects/pharmacy-windows.jpg",
  },
  {
    id: 11,
    title: "Широкоформатний друк на стелі",
    category: "Друк",
    img: "/projects/ceiling-print.jpg",
  },
  {
    id: 12,
    title: "Вивіска для салону краси",
    category: "Вивіски",
    img: "/projects/beauty-sign.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Наші проекти | ART LINE Design — Портфоліо рекламного друку</title>
        <meta
          name="description"
          content="Перегляньте виконані проекти з широкоформатного друку, брендування, вивісок та поліграфії. Якісні фото робіт компанії ART LINE Design."
        />
        <meta property="og:title" content="Проекти ART LINE Design" />
        <meta
          property="og:description"
          content="Портфоліо готових робіт: банери, вивіски, друк на одязі, брендування авто та інтер'єрів."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-projects.jpg" />
        <link rel="canonical" href="https://your-domain.com/projects" />
      </Head>

      <main className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* Hero Section – повністю статичний */}
        <section className="relative pt-32 pb-20 bg-zinc-900 overflow-hidden border-b border-zinc-800">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-sm">
              Наші <span className="text-lime-400">проекти</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl">
              Роботи, якими ми пишаємось. Від ідеї до готового продукту — кожен проект
              виконаний із увагою до деталей.
            </p>
          </div>
        </section>

        {/* Сітка проектів – без фільтрів, лише статичний вивід усіх елементів */}
        <section className="py-16 bg-zinc-50 text-zinc-900">
  <div className="container mx-auto px-6">
    <UniversalGrid
      items={allProjects.map(project => ({
        id: project.id,
        title: project.title,
        description: project.category,
        img: "/office.webp",
        href: `/projects/${project.id}`
      }))}
      defaultHref="/projects/default"
      imageAltPrefix="Portfolio"
      columns={3}
    />
  </div>
</section>


        {/* CTA – статичний блок із посиланнями замість кнопок */}
        <section className="py-24 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Сподобався стиль? <br />
              <span className="text-lime-400">Замовте свій проект</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8">
              Ми втілимо вашу ідею в життя — від дизайну до готового виробу.
              Зв’яжіться для консультації.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-lime-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-lime-500 transition uppercase shadow-lg shadow-lime-400/20 inline-block"
              >
                Розрахувати вартість
              </Link>
              <a
                href="tel:+380501234567"
                className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/5 transition uppercase inline-block"
              >
                +38 (050) 123 45 67
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}