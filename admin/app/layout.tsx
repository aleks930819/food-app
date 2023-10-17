import { ClerkProvider } from '@clerk/nextjs';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/providers/modal-provider';
import { ToastProvider } from '@/providers/toast-provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NutriNosh Admin Panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
