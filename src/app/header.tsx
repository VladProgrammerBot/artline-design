"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Ініціалізація Supabase клієнта
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navItems = [
    { title: "Послуги", href: "/#services" },
    { title: "Проєкти", href: "/#projects" },
    { title: "Про нас", href: "/#about" },
    { title: "Контакти", href: "/#contact" },
  ];

  useEffect(() => {
    // Отримуємо поточну сесію
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    getSession();

    // Підписка на зміни авторизації
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsLoggedIn(!!session);
      },
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <header className="fixed top-0 rop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] left-0 w-full z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent pt-4 pb-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-widest uppercase text-white drop-shadow-md">
            ART <span className="text-lime-400">LINE</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase text-lime-500 -mt-1 drop-shadow-sm">
            Design
          </span>
        </Link>
        <nav className="hidden drop-shadow-lg rop-shadow-black md:flex items-center space-x-8 text-sm uppercase tracking-wide text-zinc-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-lime-400 transition"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Link
            href={isLoggedIn ? "/dashboard" : "/signin"}
            className="border-2 border-lime-400 text-lime-400 font-semibold px-6 py-2 hover:bg-lime-400 hover:text-black transition text-sm uppercase"
          >
            {isLoggedIn ? "Кабінет" : "Увійти"}
          </Link>
        </div>
      </div>
    </header>
  );
};
