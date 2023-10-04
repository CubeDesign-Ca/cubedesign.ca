import React from 'react';
import Printing from '../components/Printing';
import '../app/globals.css';
import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
import DynamicFooter from '../components/Footer/Dynamic/DynamicFooter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PrintingPage = () => {
  return (
    <div>
      <DynamicHeader />
      <Printing />
      <DynamicFooter />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

export default PrintingPage;
