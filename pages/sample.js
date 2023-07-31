import React from 'react';
import Sample from '../components/Sample';
import './styles.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const SamplePage = () => {
  return (
    <div>
      <Sample />
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

export default SamplePage;
