import React from 'react';

import Digital from '../components/Digital';
import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
import DynamicFooter from '../components/Footer/Dynamic/DynamicFooter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const DigitalPage = () => {
  return (
    <div>
      <DynamicHeader />
      <Digital />
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

export default DigitalPage;
