import ExampleClientComponent from '@/components/ExampleClientComponent';
import styles from './page.module.css';
import Link from 'next/link';
import initTranslations from '../i18n';

const i18nNamespaces = ['home', "appBar"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    // <TranslationsProvider
    //   namespaces={i18nNamespaces}
    //   locale={locale}
    //   resources={resources}>
      <main className={styles.main}>
        <h1>{t('header')}</h1>
        <h1 className="text-3xl font-bold underline text-sky-400">
        Hello world!
        </h1>
        <ExampleClientComponent />
        <Link href="/about">{t('page2')}</Link>
      </main>
    // </TranslationsProvider>
  );
}

export default Home;
