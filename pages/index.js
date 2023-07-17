import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
import Home from '../components/Home';
import DynamicFooter from '../components/Footer/Dynamic/DynamicFooter';
import StaticFooter from '../components/Footer/Static/StaticFooter';
// import AnimatedBannerText from '../components/3D/AnimatedBannerText'

const Homepage = (_props) => {
  const router = useRouter()
  const t = useTranslation('common')

  return (
    <>
      <main>
        <DynamicHeader />
        <Home />
        {/* <AnimatedBannerText /> */}
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
