import type { Metadata } from 'next';
import { Barlow, Fira_Sans } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { cn } from '@/utils/cn';

import '../styles/globals.css';

const fontBarlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['700'],
});

const fontFiraSans = Fira_Sans({
  subsets: ['latin'],
  variable: '--font-fira-sans',
  weight: ['500', '400'],
});

export const metadata: Metadata = {
  title: '2 Digits - Development Agency',
  description:
    '2 Digits is a development agency that specializes in building web applications and websites.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col justify-between bg-light font-barlow antialiased',
          fontBarlow.variable,
          fontFiraSans.variable,
        )}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
