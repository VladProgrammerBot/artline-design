import Image from "next/image";
import Link from "next/link";
import { Target, Lightbulb, Check, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects"; // шлях до ваших даних
import Gallery from "@/components/Gallery";
import UniversalGrid from "@/components/ImagesGrid";
import ContactCTA from "@/components/CallToAction";

// --- Генерація статичних параметрів для SSG ---
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// --- Компонент сторінки ---
export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params; // Обов'язково очікуємо розпакування Promise
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <h1 className="text-4xl">Проєкт не знайдено</h1>
      </main>
    );
  }

  // Інші проєкти (всі, крім поточного)
  const otherProjects = projects.filter((p) => p.slug !== params.slug);

  return (
    <main className="min-h-screen g-zinc-950 text-zinc-100">
      {/* --- 1. HERO: зображення + назва клієнта --- */}
      <section className="relative pt-32 pb-20 min-h-[70vh] flex items-center g-zinc-900 overflow-hidden">
        <img
          src="/office.webp"
          alt="Office"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 w-full h-full">
          <img
            src={project.mainImage}
            alt={project.title}
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
        </div>
        <div className="absolute inset-0 size-full opacity-20 bg-gradient-to-br from-red-500 via-green-900 to-yellow-500" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-lime-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Проєкт
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              {project.title}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-zinc-200 mt-2 drop-shadow-md">
              {project.client}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.services.map((service, idx) => (
                <span
                  key={idx}
                  className="bg-lime-400/20 text-lime-300 px-4 py-1 rounded-full text-sm font-medium border border-lime-400/30"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. TASK – SOLUTION – RESULT --- */}
      <section className="py-20 bg-zinc-900 border-b border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-lime-400" size={24} />
                <h3 className="text-xl font-bold uppercase text-white">
                  Завдання
                </h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">{project.task}</p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-lime-400" size={24} />
                <h3 className="text-xl font-bold uppercase text-white">
                  Рішення
                </h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
              <div className="flex items-center gap-3 mb-4">
                <Check className="text-lime-400" size={24} />
                <h3 className="text-xl font-bold uppercase text-white">
                  Результат
                </h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">{project.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. GALLERY --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold uppercase mb-8 text-black">
            Галерея
          </h2>
          <Gallery
            images={project.gallery}
            title="Наші роботи"
            className="my-8"
          />
        </div>
      </section>

      {/* --- 4. OTHER PROJECTS --- */}
      {otherProjects.length > 0 && (
        <section className="py-20 bg-zinc-900 border-t border-zinc-800">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">
                Інші проєкти
              </h2>
              <Link
                href="/projects"
                className="text-lime-400 hover:text-lime-300 transition flex items-center gap-1"
              >
                Всі проєкти <ArrowRight size={16} />
              </Link>
            </div>
            <UniversalGrid
              items={projects}
              defaultHref="/projects/default"
              imageAltPrefix="Portfolio"
              columns={3}
            />
          </div>
        </section>
      )}

      {/* --- 5. CONTACT (CTA) --- */}
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
