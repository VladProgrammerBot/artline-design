import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building2,
  ChevronRight,
} from "lucide-react";

export default async function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* ===== HERO / HEADER ===== */}
      <section className="relative pt-32 pb-16 bg-zinc-900 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        <img
          src="/office.webp"
          alt="Office"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sm text-lime-400 font-medium uppercase tracking-wider mb-3">
              <span className="w-6 h-px bg-lime-400"></span>
              Зв'яжіться з нами
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Контакти
              <span className="text-lime-400 block mt-1">ART LINE Design</span>
            </h1>
            <p className="text-lg text-zinc-300 mt-4 max-w-xl drop-shadow-md">
              Ми завжди на зв'язку! Залиште заявку або зв'яжіться з нами зручним
              для вас способом.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT GRID: INFO + FORM + MAP ===== */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* --- Ліва колонка: контактна інформація --- */}
            <div className="lg:col-span-2 space-y-8">
              {/* Картка з інфо */}
              <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Building2 size={22} className="text-lime-400" />
                  Контактна інформація
                </h2>

                <div className="space-y-4">
                  {/* Телефон */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition">
                      <Phone size={18} className="text-lime-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                        Телефон
                      </p>
                      <a
                        href="tel:+380501234567"
                        className="text-white hover:text-lime-400 transition text-lg font-medium"
                      >
                        +38 (050) 123 45 67
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition">
                      <Mail size={18} className="text-lime-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:info@artline.ua"
                        className="text-white hover:text-lime-400 transition text-lg font-medium"
                      >
                        info@artline.ua
                      </a>
                    </div>
                  </div>

                  {/* Адреса */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition">
                      <MapPin size={18} className="text-lime-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                        Адреса
                      </p>
                      <p className="text-white text-lg font-medium">
                        м. Київ, вул. Хрещатик, 10
                      </p>
                    </div>
                  </div>

                  {/* Графік роботи */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-lime-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition">
                      <Clock size={18} className="text-lime-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                        Графік роботи
                      </p>
                      <p className="text-white text-lg font-medium">
                        Пн–Пт: 09:00 – 20:00
                      </p>
                      <p className="text-zinc-400 text-sm">Сб–Нд: вихідний</p>
                    </div>
                  </div>
                </div>

                {/* Додаткова інформація */}
                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    📍 Ми знаходимось у центрі Києва. Завжди раді новим клієнтам
                    та цікавим проєктам!
                  </p>
                </div>
              </div>
            </div>

            {/* --- Права колонка: форма --- */}
            <div className="lg:col-span-3">
              <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-xl">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-6">
                  <MessageSquare size={22} className="text-lime-400" />
                  Напишіть нам
                </h2>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase text-zinc-400 font-bold tracking-wider mb-1.5">
                        Ваше ім'я
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                        />
                        <input
                          type="text"
                          placeholder="Іван Петренко"
                          className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs uppercase text-zinc-400 font-bold tracking-wider mb-1.5">
                        Телефон
                      </label>
                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                        />
                        <input
                          type="tel"
                          placeholder="+38 (050) 123 45 67"
                          className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-zinc-400 font-bold tracking-wider mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                      />
                      <input
                        type="email"
                        placeholder="ivan@example.com"
                        className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-zinc-400 font-bold tracking-wider mb-1.5">
                      Повідомлення
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={18}
                        className="absolute left-3 top-3 text-zinc-500"
                      />
                      <textarea
                        rows={4}
                        placeholder="Опишіть ваше замовлення або питання..."
                        className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition resize-y"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 bg-lime-400 text-black font-bold px-8 py-3.5 rounded-xl hover:bg-lime-500 transition transform hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(163,230,53,0.3)] hover:shadow-[0_6px_20px_0_rgba(163,230,53,0.5)] w-full text-lg"
                  >
                    <Send size={18} />
                    Відправити
                  </button>

                  <p className="text-xs text-zinc-500 text-center mt-2">
                    Натискаючи &quot;Відправити&quot;, ви погоджуєтесь з
                    політикою конфіденційності
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* ===== MAP + OFFICE IMAGE (два рядки) ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Карта */}
            <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 border-b border-zinc-800 flex items-center gap-2">
                <MapPin size={18} className="text-lime-400" />
                <span className="text-sm font-medium text-white">
                  Ми на карті
                </span>
              </div>
              <div className="h-64 md:h-72 bg-zinc-800 relative">
                {/* Тут можна вставити iframe Google Maps або компонент карти */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500">
                  <MapPin size={48} className="text-lime-400/50 mb-2" />
                  <p className="text-sm font-medium">
                    Google Maps – м. Київ, вул. Хрещатик, 10
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    (вставте сюди iframe з картою)
                  </p>
                </div>
                {/* Приклад iframe (закоментовано) */}
                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!... "
                                    className="w-full h-full"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
