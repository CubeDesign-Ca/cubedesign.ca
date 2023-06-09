import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Header from '../components/Header'
import { Footer } from '../components/Footer'


const Homepage = (_props) => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale) => {
    i18n.changeLanguage(newLocale);
  }

  const changeTo = router.locale === 'en' ? 'ko' : 'en'

  return (
    <>
      <main>
        <Header companyName={t('company')} printing={t('printing')} digital={t('digital')} contactUs={t('contactus')} />

        {/* <div>
          <Link href="/" locale={changeTo}>
            <button>{t('change-locale', { changeTo })}</button>
          </Link>
        </div> */}
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

export default Homepage
