import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
import StaticHeader from '../components/Header/Static/StaticHeader';
import Home from '../components/Home';
import DynamicFooter from '../components/Footer/Dynamic/DynamicFooter';
import StaticFooter from '../components/Footer/Static/StaticFooter';

const Homepage = (_props) => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')

  return (
    <>
      <main>
        <DynamicHeader />
        <StaticHeader />
        <Home />
        <DynamicFooter />
        <StaticFooter />
      </main>
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
