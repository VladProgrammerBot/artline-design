import Image from "next/image";
import Link from "next/link";
import {
  Printer,
  Monitor,
  Box,
  Package,
  Brush,
  Phone,
  User,
  ArrowRight,
  CheckCircle,
  MapPin,
  Mail,
  Clock,
} from "lucide-react";

// --- Зображення та контент (винесено для чистоти коду) ---
const services = [
  {
    title: "Широкоформатний друк",
    image: "/services/wide-format.jpg",
    href: "#",
  },
  { title: "ДТФ друк", image: "/services/dtf.jpg", href: "#" },
  { title: "Дизайн", image: "/services/design.jpg", href: "#" },
  { title: "Вивіски", image: "/services/signage.jpg", href: "#" },
  { title: "Брендування авто", image: "/services/car-branding.jpg", href: "#" },
  { title: "Друк на одязі", image: "/services/clothing-print.jpg", href: "#" },
  { title: "Поліграфія", image: "/services/printing.jpg", href: "#" },
];

const portfolioItems = [
  { id: 1, title: "Брендування офісу", img: "/placeholder-portfolio-1.jpg" },
  { id: 2, title: "Вивіска для магазину", img: "/placeholder-portfolio-2.jpg" },
  {
    id: 3,
    title: "Широкоформатний банер",
    img: "/placeholder-portfolio-3.jpg",
  },
  { id: 4, title: "Друк футболок", img: "/placeholder-portfolio-4.jpg" },
  { id: 5, title: "Інтер'єрний друк", img: "/placeholder-portfolio-5.jpg" },
  {
    id: 6,
    title: "Реклама на транспорті",
    img: "/placeholder-portfolio-6.jpg",
  },
];

const clients = [
  "ROSHEN",
  "Эльдорадо",
  "НОВА ПОШТА",
  "eva",
  "VARUS",
  "TERWIN",
  "KARCHER",
  "INTERTOP",
  "pepsi",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center bg-zinc-900 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10"></div>

        {/* Контент зліва */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            {/* Заголовок з CSS-анімацією друку (без JS) */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading- mb-4 text-white drop-shadow-lg">
              <span className="text-lime-400 inline-block overflow-hidden whitespace-nowrap typing-first">
                РЕКЛАМНІ РІШЕННЯ
              </span>
              <br />
              <span className="text-white inline-block overflow-hidden whitespace-nowrap typing-second">
                ЩО ПРАЦЮЮТЬ
              </span>
            </h1>

            {/* Опис – видимий одразу */}
            <p className="text-lg md:text-xl text-zinc-200 mb-8 max-w-xl drop-shadow-md">
              Дійсний друк, брендування та виготовлення реклами будь-якої
              складності.
            </p>

            {/* Кнопки – видимі одразу */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-lime-400 text-black font-bold px-8 py-3 rounded hover:bg-lime-500 transition uppercase">
                Наші послуги
              </button>
              <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded hover:bg-white/10 transition uppercase">
                Переглянути проєкти
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. SERVICES GRID --- */}
      {/* --- 2. SERVICES GRID --- */}
      <section className="py-12 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group relative flex flex-col items-center justify-center p-0 h-40 bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden hover:border-lime-400 transition-all"
              >
                {/* Фонове зображення з ефектом масштабування */}
                {/* <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 14vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}

                {/* Чорний градієнт знизу для читабельності тексту */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

                {/* Назва послуги */}
                <span className="relative z-20 text-xs font-medium uppercase text-white group-hover:text-lime-400 transition-colors text-center px-2 mt-auto pb-4 drop-shadow-md">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. PRICING CALCULATOR & CONTENT (Поєднання) --- */}
      <section className="py-20 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Ліва частина: Інфо про друк */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
                Широкоформатний друк
              </h2>
              <div className="mb-8">
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Сучасне обладнання дозволяє друкувати якісну продукцію
                  будь-якого формату на різних матеріалах.
                </p>
                <ul className="space-y-2 text-zinc-600 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-zinc-400" />{" "}
                    Інтер'єрний та зовнішній друк
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-zinc-400" />{" "}
                    Екологічні чорнила
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-zinc-400" /> Висока
                    якість та деталізація
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-zinc-400" />{" "}
                    Оперативне виконання
                  </li>
                </ul>
              </div>
              {/* Приклад фото принтера */}
              <div className="w-full h-64 bg-zinc-200 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  Зображення принтера
                </div>
              </div>
            </div>

            {/* Права частина: Форма розрахунку */}
            <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-zinc-200">
              <h3 className="text-xl font-bold mb-6 uppercase">
                Оформлення замовлення
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                    Розмір (ширина x висота)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      defaultValue="1500"
                      className="w-full border border-zinc-300 rounded p-2 text-sm"
                    />{" "}
                    x
                    <input
                      type="number"
                      defaultValue="1000"
                      className="w-full border border-zinc-300 rounded p-2 text-sm"
                    />{" "}
                    мм
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                    Матеріал
                  </label>
                  <select className="w-full border border-zinc-300 rounded p-2 text-sm bg-white">
                    <option>Банер 510 г/м²</option>
                    <option>Плівка ORAJET</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                    Висота друку
                  </label>
                  <input
                    type="number"
                    defaultValue="720"
                    className="w-full border border-zinc-300 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                    Кількість
                  </label>
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-full border border-zinc-300 rounded p-2 text-sm"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                  Додаткові послуги
                </label>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-1">
                    <input type="checkbox" /> Ламінація
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="checkbox" /> Порізка
                  </label>
                </div>
              </div>

              <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6 mb-6 text-center cursor-pointer hover:bg-zinc-50 transition">
                <div className="flex flex-col items-center justify-center text-zinc-400">
                  <Box className="mb-2 opacity-50" size={32} />
                  <span className="text-xs font-bold uppercase">
                    Перетягніть файл сюди
                  </span>
                  <span className="text-[10px] mt-1 text-zinc-300">
                    або оберіть файл
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4 border-b border-zinc-100 pb-4">
                <div className="text-xs uppercase text-zinc-400">
                  ЗАГАЛЬНА ВАРТІСТЬ
                </div>
                <div className="text-2xl font-bold text-lime-500">480 грн</div>
              </div>

              <button className="w-full bg-lime-400 text-black font-bold py-3 rounded hover:bg-lime-500 transition uppercase text-sm">
                Оформити замовлення
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. ABOUT US & STATS --- */}
      <section id="about" className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-6 uppercase">Про нас</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              ART LINE Design – це команда професіоналів у сфері рекламного
              друку та брендування. Ми пропонуємо повний цикл послуг: від
              дизайну до виготовлення.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-white">10+</span>
                <span className="text-xs uppercase text-zinc-500">
                  років досвіду
                </span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">
                  500+
                </span>
                <span className="text-xs uppercase text-zinc-500">
                  замовлень
                </span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">
                  200+
                </span>
                <span className="text-xs uppercase text-zinc-500">
                  постійних клієнтів
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-4">
            {/* Приклад фото цеху */}
            <div className="bg-zinc-800 h-48 rounded-lg flex items-center justify-center col-span-1 text-zinc-600 text-sm">
              Наше обладнання
            </div>
            <div className="bg-zinc-800 h-48 rounded-lg flex items-center justify-center col-span-1 text-zinc-600 text-sm">
              Процес друку
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. PORTFOLIO --- */}
      <section id="portfolio" className="py-20 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">
              Проєкти
            </h2>
            <div className="flex gap-2 text-sm font-medium">
              <button className="px-4 py-1 bg-black text-white rounded">
                Всі
              </button>
              <button className="px-4 py-1 hover:text-black transition">
                Баннери
              </button>
              <button className="px-4 py-1 hover:text-black transition">
                Вивіски
              </button>
              <button className="px-4 py-1 hover:text-black transition">
                Друк
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm border border-zinc-100 hover:shadow-md transition"
              >
                <div className="h-64 bg-zinc-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                    Фото проєкту
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CLIENTS (Слайдер логотипів, що рухається) --- */}
      <section
        id="clients"
        className="py-16 bg-white border-y border-zinc-100 overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold uppercase mb-8 text-center text-zinc-400">
            Наші клієнти
          </h2>

          {/* Контейнер з overflow-hidden для анімації */}
          <div className="relative w-full overflow-hidden">
            {/* Стрічка, яка рухається */}
            <div className="flex animate-marquee whitespace-nowrap">
              {/* Перший набір логотипів */}
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center"
                >
                  <Image
                    src="/next.svg"
                    alt={client}
                    width={100}
                    height={50}
                    className="max-h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
              {/* Дублікат для безперервного руху */}
              {clients.map((client, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center"
                >
                  <Image
                    src="/next.svg"
                    alt={client}
                    width={100}
                    height={50}
                    className="max-h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- 7. CALL TO ACTION (Заклик до дії) --- */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">
        {/* Декоративна смужка зверху для стилю та переходу */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
            Готові втілити <br />
            <span className="text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.3)]">
              ваші ідеї в життя?
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Зв'яжіться з нами прямо зараз, щоб отримати безкоштовний розрахунок 
            вартості та консультацію від наших фахівців. Працюємо швидко та якісно!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Основна кнопка */}
            <button className="bg-lime-400 text-black font-bold px-10 py-4 rounded-xl hover:bg-lime-500 transition transform hover:-translate-y-1 text-lg uppercase shadow-[0_4px_14px_0_rgba(163,230,53,0.4)] hover:shadow-[0_6px_20px_0_rgba(163,230,53,0.6)]">
              Замовити друк
            </button>
            {/* Додаткова кнопка з телефоном */}
            <button className="bg-transparent border-2 border-white/10 text-white font-medium px-10 py-4 rounded-xl hover:bg-white/5 hover:border-white/30 transition text-lg uppercase">
              +38 (050) 123 45 67
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
