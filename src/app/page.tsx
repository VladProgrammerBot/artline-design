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
  Clock 
} from "lucide-react";

// --- Зображення та контент (винесено для чистоти коду) ---
const services = [
  { icon: <Printer size={32} />, title: "Широкоформатний друк", href: "#" },
  { icon: <Monitor size={32} />, title: "ДТФ друк", href: "#" },
  { icon: <Brush size={32} />, title: "Дизайн", href: "#" },
  { icon: <Box size={32} />, title: "Вивіски", href: "#" },
  { icon: <Package size={32} />, title: "Брендування авто", href: "#" },
  { icon: <Package size={32} />, title: "Друк на одязі", href: "#" },
  { icon: <Printer size={32} />, title: "Поліграфія", href: "#" },
];

const portfolioItems = [
  { id: 1, title: "Брендування офісу", img: "/placeholder-portfolio-1.jpg" },
  { id: 2, title: "Вивіска для магазину", img: "/placeholder-portfolio-2.jpg" },
  { id: 3, title: "Широкоформатний банер", img: "/placeholder-portfolio-3.jpg" },
  { id: 4, title: "Друк футболок", img: "/placeholder-portfolio-4.jpg" },
  { id: 5, title: "Інтер'єрний друк", img: "/placeholder-portfolio-5.jpg" },
  { id: 6, title: "Реклама на транспорті", img: "/placeholder-portfolio-6.jpg" },
];

const clients = [
  "ROSHEN", "Эльдорадо", "НОВА ПОШТА", "eva", "VARUS", "TERWIN", "KARCHER", "INTERTOP", "pepsi"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      
      {/* --- HEADER --- */}
            {/* --- HEADER з прозорим градієнтом --- */}
      <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent pt-4 pb-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-widest uppercase text-white drop-shadow-md">ART <span className="text-zinc-400">LINE</span></span>
            <span className="text-[10px] tracking-widest uppercase text-zinc-400 -mt-1 drop-shadow-sm">Design</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide text-zinc-200 drop-shadow-md">
            <Link href="#" className="hover:text-lime-400 transition">Послуги</Link>
            <Link href="#about" className="hover:text-lime-400 transition">Про нас</Link>
            <Link href="#portfolio" className="hover:text-lime-400 transition">Проєкти</Link>
            <Link href="#clients" className="hover:text-lime-400 transition">Клієнти</Link>
            <Link href="#contacts" className="hover:text-lime-400 transition">Контакти</Link>
          </nav>
          <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded hover:bg-lime-500 transition text-sm uppercase shadow-lg">
            Увійти
          </button>
        </div>
      </header>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center bg-zinc-900 overflow-hidden">
        {/* Фоновий ефект (імітація фото цеху) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-40" style={{backgroundImage: 'linear-gradient(to right, black 30%, transparent), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop")'}}></div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-white">
              РЕКЛАМНІ РІШЕННЯ<br />
              <span className="text-lime-400">ЩО ПРАЦЮЮТЬ</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-xl">
              Дійсний друк, брендування та виготовлення реклами будь-якої складності.
            </p>
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
      <section className="py-12 bg-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {services.map((service, idx) => (
              <Link key={idx} href={service.href} className="group flex flex-col items-center justify-center p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-lime-400 hover:bg-zinc-900 transition-all text-center">
                <div className="text-zinc-400 group-hover:text-lime-400 transition mb-2">{service.icon}</div>
                <span className="text-xs font-medium uppercase text-zinc-300 group-hover:text-white">{service.title}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">Широкоформатний друк</h2>
              <div className="mb-8">
                <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                  Сучасне обладнання дозволяє друкувати якісну продукцію будь-якого формату на різних матеріалах.
                </p>
                <ul className="space-y-2 text-zinc-600 text-sm font-medium">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-zinc-400"/> Інтер'єрний та зовнішній друк</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-zinc-400"/> Екологічні чорнила</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-zinc-400"/> Висока якість та деталізація</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-zinc-400"/> Оперативне виконання</li>
                </ul>
              </div>
              {/* Приклад фото принтера */}
              <div className="w-full h-64 bg-zinc-200 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">Зображення принтера</div>
              </div>
            </div>

            {/* Права частина: Форма розрахунку */}
            <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-zinc-200">
              <h3 className="text-xl font-bold mb-6 uppercase">Оформлення замовлення</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">Розмір (ширина x висота)</label>
                  <div className="flex items-center gap-2">
                    <input type="number" defaultValue="1500" className="w-full border border-zinc-300 rounded p-2 text-sm" /> x
                    <input type="number" defaultValue="1000" className="w-full border border-zinc-300 rounded p-2 text-sm" /> мм
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">Матеріал</label>
                  <select className="w-full border border-zinc-300 rounded p-2 text-sm bg-white">
                    <option>Банер 510 г/м²</option>
                    <option>Плівка ORAJET</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">Висота друку</label>
                  <input type="number" defaultValue="720" className="w-full border border-zinc-300 rounded p-2 text-sm" />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">Кількість</label>
                  <input type="number" defaultValue="1" className="w-full border border-zinc-300 rounded p-2 text-sm" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">Додаткові послуги</label>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-1"><input type="checkbox" /> Ламінація</label>
                  <label className="flex items-center gap-1"><input type="checkbox" /> Порізка</label>
                </div>
              </div>

              <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6 mb-6 text-center cursor-pointer hover:bg-zinc-50 transition">
                <div className="flex flex-col items-center justify-center text-zinc-400">
                   <Box className="mb-2 opacity-50" size={32} />
                   <span className="text-xs font-bold uppercase">Перетягніть файл сюди</span>
                   <span className="text-[10px] mt-1 text-zinc-300">або оберіть файл</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4 border-b border-zinc-100 pb-4">
                <div className="text-xs uppercase text-zinc-400">ЗАГАЛЬНА ВАРТІСТЬ</div>
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
              ART LINE Design – це команда професіоналів у сфері рекламного друку та брендування. Ми пропонуємо повний цикл послуг: від дизайну до виготовлення.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-white">10+</span>
                <span className="text-xs uppercase text-zinc-500">років досвіду</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">500+</span>
                <span className="text-xs uppercase text-zinc-500">замовлень</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white">200+</span>
                <span className="text-xs uppercase text-zinc-500">постійних клієнтів</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-4">
             {/* Приклад фото цеху */}
            <div className="bg-zinc-800 h-48 rounded-lg flex items-center justify-center col-span-1 text-zinc-600 text-sm">Наше обладнання</div>
            <div className="bg-zinc-800 h-48 rounded-lg flex items-center justify-center col-span-1 text-zinc-600 text-sm">Процес друку</div>
          </div>
        </div>
      </section>

      {/* --- 5. PORTFOLIO --- */}
      <section id="portfolio" className="py-20 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">Проєкти</h2>
            <div className="flex gap-2 text-sm font-medium">
              <button className="px-4 py-1 bg-black text-white rounded">Всі</button>
              <button className="px-4 py-1 hover:text-black transition">Баннери</button>
              <button className="px-4 py-1 hover:text-black transition">Вивіски</button>
              <button className="px-4 py-1 hover:text-black transition">Друк</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-zinc-100 hover:shadow-md transition">
                <div className="h-64 bg-zinc-200 relative">
                   <div className="absolute inset-0 flex items-center justify-center text-zinc-400">Фото проєкту</div>
                </div>
                <div className="p-4">
                   <h4 className="font-semibold text-sm">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CLIENTS --- */}
      <section id="clients" className="py-16 bg-white border-y border-zinc-100">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold uppercase mb-8 text-center text-zinc-400">Наші клієнти</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition duration-500">
            {clients.map((client, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-bold uppercase tracking-wider">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. FOOTER & CONTACTS --- */}
      <footer id="contacts" className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <span className="text-2xl font-bold tracking-widest uppercase text-white block mb-4">ART <span className="text-zinc-600">LINE</span></span>
            <p className="text-sm text-zinc-500 max-w-xs">
              Виготовлення рекламних конструкцій, широкоформатний друк та поліграфія в Києві.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold uppercase text-white mb-4">Контакти</h4>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-zinc-500 mt-1" />
              <div>
                <p className="text-sm">+38 (050) 123 45 67</p>
                <p className="text-[10px] uppercase text-zinc-500">Щоденно 09:00 - 20:00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-zinc-500 mt-1" />
              <div>
                <p className="text-sm">м. Київ, вул. Хрещатик, 1</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-zinc-500 mt-1" />
              <p className="text-sm">info@artline-design.ua</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-white mb-4">Ми в соцмережах</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center cursor-pointer transition">IG</div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center cursor-pointer transition">FB</div>
            </div>
          </div>

        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-zinc-800 flex justify-between text-xs text-zinc-600">
          <span>&copy; 2026 Art Line Design. Всі права захищені.</span>
          <Link href="#" className="hover:text-zinc-400">Політика конфіденційності</Link>
        </div>
      </footer>

    </main>
  );
}