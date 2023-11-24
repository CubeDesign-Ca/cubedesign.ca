import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
import Home from '../components/Home';
import DynamicFooter from '../components/Footer/Dynamic/DynamicFooter';

const Homepage = (_props) => {
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
