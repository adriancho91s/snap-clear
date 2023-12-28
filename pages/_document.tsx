import i18nConfig from '@/i18nConfig';
// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import { ReactNode } from 'react';
// import { dir } from 'i18next';
// import { Providers } from '../providers';
// import Appbar from '@/components/Appbar';
// import TranslationsProvider from '@/components/TranslationsProvider';
// import initTranslations from '../i18n';

// const i18nNamespaces = [ "appBar"];

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Snap Clear',
//   description: 'Remove background images with one click'
// };

// export function generateStaticParams() {
//   return i18nConfig.locales.map(locale => ({ locale }));
// }

// export default async function RootLayout({
//   children,
//   params: { locale }
// }: {
//   children: ReactNode;
//   params: { locale: string };
// }) {
  
//   const { resources } = await initTranslations(locale, i18nNamespaces);

//   return (
//     <html lang={locale} dir={dir(locale)}>
//       <body className={inter.className}>
//         <Providers>
//           <TranslationsProvider
//             namespaces={i18nNamespaces}
//             locale={locale}
//             resources={resources}
//             >
//             <Appbar />
//             {children}
//           </TranslationsProvider>
//         </Providers>
//       </body>
//     </html>
//   );
// }


import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
  } from 'next/document'
   
  class MyDocument extends Document {
    static async getStaticParams() {
        return i18nConfig.locales.map(locale => ({ locale }));
    }
    static async getInitialProps(
      ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
      const originalRenderPage = ctx.renderPage
   
      // Run the React rendering logic synchronously
      ctx.renderPage = () =>
        originalRenderPage({
          // Useful for wrapping the whole react tree
          enhanceApp: (App) => App,
          // Useful for wrapping in a per-page basis
          enhanceComponent: (Component) => Component,
        })
   
      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx)
      
   
      return initialProps
    }
   
    render() {
        const { locale } = this.props.__NEXT_DATA__;
      return (
        <Html lang={locale} >
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
   
  export default MyDocument