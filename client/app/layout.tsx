import './globals.css';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';

const inter = Lexend({ subsets: ['latin'] });

import Header from '@/components/header/header';
import ScrollToTopButton from '@/components/ui/srcoll-to-top-button';

export const metadata: Metadata = {
  title: 'NutriNosh',
  description:
    'Explore a world of healthy and delicious culinary delights at NutriNosh. Discover nutritious recipes, food tips, and more for a balanced lifestyle.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
