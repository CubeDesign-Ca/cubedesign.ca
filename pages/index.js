import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Footer from '../components/Footer/Static/StaticFooter'
import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
// import StaticHeader from '../components/Header/Static/StaticHeader';
import Home from '../components/Home';

const Homepage = (_props) => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')

  return (
    <>
      <main>
        <DynamicHeader />
        {/* <StaticHeader /> */}
        <Home />
        <Footer />

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
