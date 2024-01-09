import i18nConfig from '@/i18nConfig';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { dir } from 'i18next';
import { Providers } from '../providers';
import Appbar from '@/components/Appbar';
import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations from '../i18n';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const i18nNamespaces = [ "appBar"];

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Snap Clear',
  description: 'Remove background images with one click'
};

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {

  const { resources } = await initTranslations(locale, i18nNamespaces);


  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <Providers>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
            >
            <Appbar />
            <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            {children}
          </TranslationsProvider>
        </Providers>
      </body>
    </html>
  );
}