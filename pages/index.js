import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
import Home from '../components/Home';
import DynamicFooter from '../components/Footer/Dynamic/DynamicFooter';

const Homepage = (_props) => {
  const router = useRouter()
  const t = useTranslation('common')

  return (
    <>
      <main>
        <DynamicHeader />
        <Home />
        <DynamicFooter />
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
