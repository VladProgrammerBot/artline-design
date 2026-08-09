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
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-800"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="text-2xl font-bold tracking-widest uppercase text-white block mb-4">
            ART <span className="text-zinc-600">LINE</span>
          </span>
          <p className="text-sm text-zinc-500 max-w-xs">
            Виготовлення рекламних конструкцій, широкоформатний друк та
            поліграфія в Києві.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase text-white mb-4">Контакти</h4>
          <div className="flex items-start gap-3">
            <Phone size={18} className="text-zinc-500 mt-1" />
            <div>
              <p className="text-sm">+38 (050) 123 45 67</p>
              <p className="text-[10px] uppercase text-zinc-500">
                Щоденно 09:00 - 20:00
              </p>
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
          <h4 className="font-bold uppercase text-white mb-4">
            Ми в соцмережах
          </h4>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center cursor-pointer transition">
              IG
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center cursor-pointer transition">
              FB
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-zinc-800 flex justify-between text-xs text-zinc-600">
        <span>&copy; 2026 Art Line Design. Всі права захищені.</span>
        <Link href="#" className="hover:text-zinc-400">
          Політика конфіденційності
        </Link>
      </div>
    </footer>
  );
};
