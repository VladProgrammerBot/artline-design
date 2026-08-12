// app/services/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ExternalLink,
} from "lucide-react";
import Gallery from "@/components/Gallery";

// ========== ДАНІ (можна винести в окремий файл /lib/services.ts) ==========
const servicesData = [
  {
    slug: "shyrokoformatnyi-druk",
    title: "Широкоформатний друк",
    image: "/public/office.webp",
    shortDescription: "Друк великих форматів на банері, плівці та папері.",
    longDescription:
      "Сучасне обладнання дозволяє виконувати широкоформатний друк до 5 метрів. Використовуємо екологічні чорнила з високою стійкістю до ультрафіолету. Ідеально підходить для зовнішньої реклами, виставкових стендів та інтер'єрного декору. Термін виконання – від 1 дня.",
    concreteServices: [
      { name: "Банери", description: "510 г/м², люверси через кожні 50 см" },
      {
        name: "Самоклеюча плівка ORAJET",
        description: "Ідеальна для вітрин та авто",
      },
      {
        name: "Фотопапір",
        description: "Матова/глянцева поверхня, 180-300 г/м²",
      },
      {
        name: "Інтер'єрний друк",
        description: "Еко-чорнила, стійкі до стирання",
      },
    ],
    gallery: [
      "/services/wide/example-1.jpg",
      "/services/wide/example-2.jpg",
      "/services/wide/example-3.jpg",
      "/services/wide/example-4.jpg",
      "/services/wide/example-5.jpg",
      "/services/wide/example-6.jpg",
    ],
  },
  {
    slug: "dtf-druk",
    title: "ДТФ друк",
    image: "/office.webp",
    shortDescription: "Яскравий друк на одязі та текстилі методом DTF.",
    longDescription:
      "DTF-друк забезпечує насичені кольори та високу зносостійкість зображень. Перенос на футболки, худі, сумки та інший текстиль. Використовуємо преміальні плівки та чорнила. Мінімальне замовлення – від 1 шт. Термін виконання – 1-2 дні.",
    concreteServices: [
      { name: "Футболки", description: "100% бавовна, різні розміри" },
      { name: "Худі та світшоти", description: "Трьохнитка, 280 г/м²" },
      { name: "Сумки-шопери", description: "Щільний оксфорд" },
      { name: "Спецодяг", description: "Стройка, логотипи" },
    ],
    gallery: [
      "/services/dtf/example-1.jpg",
      "/services/dtf/example-2.jpg",
      "/services/dtf/example-3.jpg",
      "/services/dtf/example-4.jpg",
    ],
  },
  // ... інші послуги
];

// ========== SEO: generateStaticParams + generateMetadata ==========
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} | ART LINE Design – рекламний друк та брендування`;
  const description = service.shortDescription;
  const url = `https://artlinedesign.com.ua/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image],
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        provider: { "@type": "LocalBusiness", name: "ART LINE Design" },
        description: service.shortDescription,
        areaServed: { "@type": "City", name: "Ваше місто" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "UAH",
          },
        },
      }),
    },
  };
}

// ========== Компонент сторінки ==========
export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Хлібні крихти / навігація */}
      <div className="container mx-auto px-6 pt-28 pb-4">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-lime-400 transition">
            Головна
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-lime-400 transition">
            Послуги
          </Link>
          <span>/</span>
          <span className="text-zinc-300">{service.title}</span>
        </nav>
      </div>

      {/* --- 1. HERO зображення + короткий опис (figma) --- */}
      <section className="relative w-full h-[60vh] min-h-[400px] bg-zinc-900 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 max-w-2xl drop-shadow-md">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. Довгий опис --- */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert prose-lg text-zinc-300 leading-relaxed">
            {service.longDescription.split("\n").map((paragraph, i) => (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Конкретні підпослуги (concrete of services) --- */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase text-lime-400">
            Що входить у послугу
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.concreteServices.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 bg-zinc-800/50 border border-zinc-800 rounded-lg hover:border-lime-400/30 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-lime-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. Галерея --- */}
      <section className="py-16 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase text-black">
            Приклади робіт
          </h2>

          {/* Pinterest-style masonry grid */}
          <Gallery
            images={[
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
              "/office.webp",
            ]}
            title="Наші роботи"
            className="my-8"
          />
        </div>
      </section>

      {/* --- 5. Заклик до дії (у стилі головної) --- */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Зацікавила послуга?
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-8">
            Залиште заявку, і ми прорахуємо вартість вашого проєкту за 30
            хвилин.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-lime-400 text-black font-bold px-10 py-4 rounded-xl hover:bg-lime-500 transition-transform hover:-translate-y-1 text-lg uppercase shadow-[0_4px_14px_0_rgba(163,230,53,0.4)]">
              Замовити {service.title.toLowerCase()}
            </button>
            <button className="bg-transparent border-2 border-white/10 text-white font-medium px-10 py-4 rounded-xl hover:bg-white/5 transition uppercase">
              +38 (050) 123 45 67
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
