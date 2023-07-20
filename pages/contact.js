import React from 'react';
import ContactUs from '../components/Contact';
import DynamicHeader from '../components/Header/Dynamic/DynamicHeader';
import DynamicFooter from '../components/Footer/Dynamic/DynamicFooter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ContactUsPage = () => {
  return (
    <div>
      <DynamicHeader />
      <ContactUs />
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

export default ContactUsPage;
