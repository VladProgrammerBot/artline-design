// pages/projects.js (або app/projects/page.jsx для App Router)
import UniversalGrid from "@/components/ImagesGrid";
import Head from "next/head";
import Link from "next/link";
import { projects } from "@/data/projects"; // шлях до ваших даних
import ContactCTA from "@/components/CallToAction";

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
        <title>
          Наші проекти | ART LINE Design — Портфоліо рекламного друку
        </title>
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
              Роботи, якими ми пишаємось. Від ідеї до готового продукту — кожен
              проект виконаний із увагою до деталей.
            </p>
          </div>
        </section>

        {/* Сітка проектів – без фільтрів, лише статичний вивід усіх елементів */}
        <section className="py-16 bg-zinc-50 text-zinc-900">
          <div className="container mx-auto px-6">
            <UniversalGrid
              items={projects}
              defaultHref="/projects/default"
              imageAltPrefix="Portfolio"
              columns={3}
            />
          </div>
        </section>

        {/* CTA – статичний блок із посиланнями замість кнопок */}
        <ContactCTA
          title="Сподобався стиль?"
          titleHighlight="Замовте свій проект"
          description="Зв'яжіться з нами прямо зараз, щоб отримати безкоштовний розрахунок вартості та консультацію від наших фахівців. Працюємо швидко та якісно!"
          buttonText="Зв'язатися з нами"
          buttonHref="/contacts"
        />
      </main>
    </>
  );
}
