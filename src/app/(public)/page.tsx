import Link from "next/link";
import type { Metadata } from "next";
import UniversalGrid from "@/components/ImagesGrid";
import { clients, projects, services } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { BtnShowMore } from "@/components/BtnShowMore";
import ContactCTA from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "ART LINE Design | Рекламний друк та брендування в Україні",
  description:
    "Широкоформатний друк, ДТФ друк, дизайн, вивіски, брендування авто, поліграфія. Професійні рекламні рішення від ART LINE Design.",
  keywords:
    "рекламний друк, широкоформатний друк, ДТФ друк, брендування, вивіски, поліграфія, ART LINE Design",
  openGraph: {
    title: "ART LINE Design - Рекламні рішення що працюють",
    description:
      "Дійсний друк, брендування та виготовлення реклами будь-якої складності.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://artline.com.ua",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen g-zinc-950 text-zinc-100">
      {/* --- 1. HERO --- */}
      <section className="relative pt-40 pb-20 min-h-[100vh] flex items-center g-zinc-900 overflow-hidden">
        {/* <video
          autoPlay
          muted
          loop
          className="fixed inset-0 w-full h-full object-cover opacity-50 -z-10"
        >
          <source src="/herovideo3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img
          src="office.webp"
          className="fixed inset-0 w-full h-full object-cover opacity-50 -z-10"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
              <span className="text-lime-400 inline-block overflow-hidden whitespace-nowrap yping-first">
                РЕКЛАМНІ РІШЕННЯ
              </span>
              <br />
              <span className="text-white inline-block overflow-hidden whitespace-nowrap yping-second">
                ЩО ПРАЦЮЮТЬ
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-200 mb-8 max-w-xl drop-shadow-md">
              Дійсний друк, брендування та виготовлення реклами будь-якої
              складності.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="bg-lime-400 text-black font-bold px-8 py-3 hover:bg-lime-500 hover:scale-105 transition-all uppercase"
              >
                Дивитись проєкти
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. SERVICES GRID --- */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 border-y border-zinc-800/50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-lime-400 text-xs font-semibold uppercase tracking-[0.2em] bg-lime-400/10 px-4 py-2 border border-lime-400/20">
              Наші послуги
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6">
              Комплексні рішення для <br />
              <span className="text-lime-400">вашого бізнесу</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mt-4">
              Від створення дизайну до готового продукту — ми забезпечуємо
              повний цикл виробництва рекламної продукції будь-якої складності
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ap-6">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative overflow-hidden bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-500 over:-translate-y-2 hover:shadow-2xl hover:shadow-lime-400/10 order border-zinc-700/50 hover:border-lime-400/30"
              >
                <div className="relative h-full min-h-[300px] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Номер послуги */}
                  <span className="absolute top-4 right-4 text-lime-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 px-3 py-1 backdrop-blur-sm border border-lime-400/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Контент поверх зображення */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Іконка-індикатор */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-lime-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-3 h-3 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-zinc-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      Дізнатись більше →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Додатковий заклик до дії */}
          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors duration-300 font-medium border-b border-zinc-700 hover:border-lime-400 pb-1 group"
            >
              Переглянути всі послуги
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- 3. PORTFOLIO --- */}
      <section id="projects" className="py-20 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-lime-500 text-xs font-semibold uppercase tracking-[0.2em]">
              Наші роботи
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-zinc-900">
              Проєкти
            </h2>
          </div>

          <UniversalGrid
            items={projects}
            defaultHref="/projects/default"
            imageAltPrefix="Portfolio"
            columns={3}
          />
        </div>

        {/* Кнопка "Переглянути всі проєкти" з Lucide іконкою */}
        <div className="flex justify-center mt-14">
          <BtnShowMore href="/projects" title="Переглянути всі проєкти" />
        </div>

        {/* Декоративна лінія */}
        <div className="relative flex justify-center mt-4" aria-hidden="true">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent"></div>
        </div>
      </section>

      {/* --- 4. ABOUT US & STATS --- */}
      <section
        id="about"
        className="py-20 bg-zinc-900 text-white overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            {/* Ліва частина - текст */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-400/10 border border-lime-400/20">
                <span className="w-1.5 h-1.5 bg-lime-400"></span>
                <span className="text-lime-400 text-xs font-semibold uppercase tracking-[0.2em]">
                  Про нас
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Хто ми такі
                <span className="block text-lime-400 mt-1">
                  ART LINE Design
                </span>
              </h2>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                Ми — команда професіоналів, які перетворюють ідеї на візуальні
                рішення. Повний цикл послуг: від дизайн-концепції до якісного
                виготовлення рекламної продукції.
              </p>

              <div className="flex flex-wrap gap-10 pt-4">
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-white">
                    10+
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500">
                    років досвіду
                  </span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-white">
                    500+
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500">
                    реалізованих проєктів
                  </span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-white">
                    98%
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500">
                    задоволених клієнтів
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <BtnShowMore href="/about" title="Дізнатися більше" />
              </div>
            </div>

            {/* Зображення без анімацій та декорацій */}
            <div className="w-full -full lg:w-1/2 relative min-h-[400px] md:min-h-[500px]">
              {/* Перше зображення */}
              <div className="absolute -rotate-5 top-0 left-0 w-[70%] h-[320px] md:h-[380px] rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl shadow-black/30">
                <img
                  src="/office.webp"
                  alt="Наше обладнання для друку"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="380"
                />
              </div>

              {/* Друге зображення */}
              <div className="absolute rotate-5 bottom-0 right-0 w-[65%] h-[320px] md:h-[380px] rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl shadow-black/30">
                <img
                  src="/office.webp"
                  alt="Процес виготовлення реклами"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="380"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CLIENTS (Слайдер логотипів) --- */}
      <section
        id="clients"
        className="py-16 bg-white border-y border-zinc-200 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold uppercase mb-10 text-center text-zinc-400 tracking-widest">
            Нам довіряють
          </h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 mx-10 w-36 cursor-pointer hover:scale-110 duration-150 h-16 flex items-center justify-center"
                >
                  <img
                    src="/next.svg"
                    alt={client}
                    width={120}
                    height={50}
                    className="max-h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. CALL TO ACTION --- */}
      <ContactCTA
        title="Готові втілити"
        titleHighlight="ваші ідеї в життя?"
        description="Зв'яжіться з нами прямо зараз, щоб отримати безкоштовний розрахунок вартості та консультацію від наших фахівців. Працюємо швидко та якісно!"
        buttonText="Зв'язатися з нами"
        buttonHref="/contacts"
      />
    </main>
  );
}
