'use client';

import { useRouter } from 'next/navigation';
import supabase from "../utils/supabase";

export default function DashboardPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push('/'); // <-- перенаправляємо на головну
    } catch (error) {
      console.error('Помилка виходу:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="cursor-pointer border-2 border-red-500 text-red-500 font-semibold px-6 py-2 hover:bg-red-500 hover:text-black transition text-sm uppercase"
    >
      Вийти
    </button>
  );
}