'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function BackButton() {
  const { t } = useTranslation();

  return (
    <>
    <h2>useTranslation hook: {t("snap")}</h2>
    <Link href="/">
      {t('back')} {t('test:test')}
    </Link>
    </>
  );
}
