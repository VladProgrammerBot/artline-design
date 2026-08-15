import Image from "next/image";
import Link from "next/link";
import { Box, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

// --- SEO Метадані для сторінки замовлення ---
export const metadata: Metadata = {
  title: "Оформлення замовлення на широкоформатний друк | ART LINE Design",
  description: "Розрахуйте вартість та замовте широкоформатний друк, виготовлення вивісок, брендування та поліграфію онлайн. Швидко та якісно.",
  openGraph: {
    title: "Оформлення замовлення на друк | ART LINE Design",
    description: "Замовляйте якісний широкоформатний друк та рекламну продукцію в один клік.",
    url: "https://artline-design.ua/order",
    siteName: "ART LINE Design",
    locale: "uk_UA",
    type: "website",
  },
};

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col">
      <section className="flex-1 py-12 md:py-20 container mx-auto px-6">
        
        <div className="max-w-4xl mx-auto">
          {/* SEO-заголовок та контекст */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold uppercase mb-2 text-zinc-900">
              Оформлення замовлення
            </h1>
            <p className="text-zinc-500">
              Розрахуйте вартість друку, оберіть додаткові послуги та завантажте макет. 
              Наші менеджери зв'яжуться з вами для підтвердження.
            </p>
          </div>

          {/* Блок з формою */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-zinc-200">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                  Розмір (ширина x висота)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    defaultValue="1500"
                    className="w-full border border-zinc-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  />{" "}
                  x
                  <input
                    type="number"
                    defaultValue="1000"
                    className="w-full border border-zinc-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  />{" "}
                  мм
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                  Матеріал
                </label>
                <select className="w-full border border-zinc-300 rounded p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-lime-400">
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
                  className="w-full border border-zinc-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                  Кількість
                </label>
                <input
                  type="number"
                  defaultValue="1"
                  className="w-full border border-zinc-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs uppercase text-zinc-400 font-bold mb-1">
                Додаткові послуги
              </label>
              <div className="flex flex-wrap gap-6 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-lime-500" /> Ламінація
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-lime-500" /> Порізка
                </label>
              </div>
            </div>

            <div className="border-2 border-dashed border-zinc-300 rounded-lg p-6 mb-6 text-center cursor-pointer hover:bg-zinc-50 transition bg-zinc-50/30">
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

            <div className="flex justify-between items-center mb-6 border-b border-zinc-100 pb-6">
              <div className="text-xs uppercase text-zinc-400">
                ЗАГАЛЬНА ВАРТІСТЬ
              </div>
              <div className="text-3xl font-bold text-lime-500">480 грн</div>
            </div>

            <button className="w-full bg-lime-400 text-black font-bold py-4 rounded hover:bg-lime-500 transition uppercase text-base shadow-sm">
              Оформити замовлення
            </button>
            
            <p className="text-[10px] text-center text-zinc-400 mt-4">
              Натискаючи кнопку, ви погоджуєтеся з умовами обробки персональних даних.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}