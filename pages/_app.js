import { appWithTranslation, useTranslation } from 'next-i18next';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t('company')}</title>
        <link rel="icon" href="/images/favicon.ico" /> {}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp)
