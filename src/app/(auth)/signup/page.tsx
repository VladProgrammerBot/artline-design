// app/signup/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { ArrowRight, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Перевірка паролів
    if (password !== confirmPassword) {
      setError('Паролі не співпадають');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Пароль повинен містити щонайменше 6 символів');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
        },
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        setSuccess(true);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (err: any) {
      setError(err.message || 'Помилка реєстрації. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (err: any) {
      setError(err.message || 'Помилка реєстрації через Google');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Фонове зображення */}
      <div className="fixed inset-0 w-full h-full">
        <img
          src="/office.webp"
          className="w-full h-full object-cover opacity-20"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Повернення */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors duration-300 group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Повернутися на головну</span>
          </Link>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 shadow-2xl shadow-black/30">
          {/* Заголовок */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lime-400/10 border border-lime-400/20 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full"></span>
              <span className="text-lime-400 text-xs font-semibold uppercase tracking-[0.2em]">
                Реєстрація
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white">
              Створення акаунту
            </h1>
            <p className="text-zinc-400 text-sm mt-2">
              Зареєструйтесь, щоб почати користуватися системою
            </p>
          </div>

          {/* Форма реєстрації */}
          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    disabled={loading || success}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Пароль
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-300"
                    placeholder="••••••••"
                    disabled={loading || success}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-zinc-300 mb-1.5">
                  Підтвердіть пароль
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-300"
                    placeholder="••••••••"
                    disabled={loading || success}
                  />
                </div>
              </div>

              <p className="text-xs text-zinc-500 -mt-2">
                Пароль повинен містити щонайменше 6 символів
              </p>
            </div>

            {/* Повідомлення про успіх */}
            {success && (
              <div className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-400">
                    Акаунт створено! Будь ласка, перевірте свою електронну пошту для підтвердження.
                  </p>
                  <Link
                    href="/login"
                    className="text-sm text-lime-400 hover:text-lime-300 transition-colors duration-300 mt-1 inline-block"
                  >
                    Перейти до входу →
                  </Link>
                </div>
              </div>
            )}

            {/* Помилка */}
            {error && (
              <div className="flex items-start gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Кнопка реєстрації */}
            <button
              type="submit"
              disabled={loading || success}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-lime-400 text-black font-bold rounded-xl hover:bg-lime-500 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-lime-400/20"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Завантаження...</span>
                </>
              ) : (
                <>
                  <span>Зареєструватися</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Роздільник */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-700/50" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-zinc-900/80 text-zinc-500">Або</span>
            </div>
          </div>

          {/* Реєстрація через Google */}
          <button
            onClick={handleGoogleSignUp}
            disabled={loading || success}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-200 font-medium hover:bg-zinc-700/50 hover:border-zinc-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Зареєструватися через Google</span>
          </button>

          {/* Посилання на вхід */}
          <div className="mt-6 text-center">
            <p className="text-sm text-zinc-400">
              Вже маєте акаунт?{' '}
              <Link
                href="/signin"
                className="font-medium text-lime-400 hover:text-lime-300 transition-colors duration-300"
              >
                Увійти
              </Link>
            </p>
          </div>
        </div>

        {/* Декоративна лінія внизу */}
        <div className="relative flex justify-center mt-6" aria-hidden="true">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent"></div>
        </div>
      </div>
    </main>
  );
}