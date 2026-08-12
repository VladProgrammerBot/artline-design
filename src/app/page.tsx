import Link from "next/link";
import type { Metadata } from "next";
import UniversalGrid from "@/components/ImagesGrid";
import { clients, projects, services } from "@/data/projects";

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
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* --- 1. HERO --- */}
      <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center bg-zinc-900 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        >
          <source src="/herovideo3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-1 border border-lime-400/30 rounded-full text-lime-400 text-xs uppercase tracking-widest">
              ART LINE Design
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
              <span className="text-lime-400 inline-block overflow-hidden whitespace-nowrap typing-first">
                РЕКЛАМНІ РІШЕННЯ
              </span>
              <br />
              <span className="text-white inline-block overflow-hidden whitespace-nowrap typing-second">
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
                className="bg-lime-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-lime-500 hover:scale-105 transition-all uppercase"
              >
                Наші послуги
              </Link>
              <Link
                href="/projects"
                className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all uppercase"
              >
                Переглянути проєкти
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. SERVICES GRID --- */}
      <section
        id="services"
        className="py-20 bg-zinc-950 border-b border-zinc-800/50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-lime-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Наші послуги
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
              Що ми пропонуємо
            </h2>
          </div>

          <UniversalGrid
            items={services}
            defaultHref="/projects/default"
            imageAltPrefix="Portfolio"
            columns={4}
          />
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
      </section>

      {/* --- 4. ABOUT US & STATS --- */}
      <section id="about" className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <span className="text-lime-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Про нас
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-white">
              Хто ми такі
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              ART LINE Design – це команда професіоналів у сфері рекламного
              друку та брендування. Ми пропонуємо повний цикл послуг: від
              дизайну до виготовлення.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <span className="block text-4xl font-bold text-white">10+</span>
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  років досвіду
                </span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white">
                  500+
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  замовлень
                </span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white">
                  200+
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-500">
                  постійних клієнтів
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-56 rounded-2xl overflow-hidden bg-zinc-800">
              <img
                src="/office.webp"
                alt="Наше обладнання"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 text-white font-medium">
                Наше обладнання
              </div>
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden bg-zinc-800">
              <img
                src="/office.webp"
                alt="Процес друку"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-4 left-4 text-white font-medium">
                Процес друку
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
            Наші клієнти
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
      <section
        id="contact"
        className="py-24 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Готові втілити <br />
            <span className="text-lime-400">ваші ідеї в життя?</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Зв{"'"}яжіться з нами прямо зараз, щоб отримати безкоштовний
            розрахунок вартості та консультацію від наших фахівців. Працюємо
            швидко та якісно!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacts"
              className="bg-lime-400 text-black font-bold px-10 py-4 rounded-xl hover:bg-lime-500 hover:scale-105 transition-all uppercase shadow-[0_4px_14px_0_rgba(163,230,53,0.4)]"
            >
              Зв{"'"}язатися з нами
            </Link>

            {/* <Link href="/contact" className="bg-transparent border-2 border-white/10 text-white font-medium px-10 py-4 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all uppercase">
              Зв{"'"}язатися з нами
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
