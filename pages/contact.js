import React from 'react';
import ContactUs from '../components/Contact';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ContactUsPage = () => {
  return (
    <div>
      
      <ContactUs />
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
