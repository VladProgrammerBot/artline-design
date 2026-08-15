import { ReactNode } from 'react';
import { Header } from '@/app/header';
import { Footer } from '@/app/footer';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}