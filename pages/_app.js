import { appWithTranslation, useTranslation } from "next-i18next";
import Head from "next/head";
import "../pages/styles.css";
import StaticHeader from "../components/Header/Static/StaticHeader";
import DynamicMenu from '../components/Header/Dynamic/DynamicMenu';
import StaticFooter from "../components/Footer/Static/StaticFooter";
import ChatbotButton from "../components/Chatbot/ChatbotIcon";
import React from "react";

import { ContextProvider } from "../components/Context";

const MyApp = ({ Component, pageProps }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("company")}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/favicon.ico" /> {}
      </Head>
      <ContextProvider>
        <DynamicMenu />
        <StaticHeader />
      </ContextProvider>
      <Component {...pageProps} />
      <StaticFooter />
      <ChatbotButton />
    </>
  );
};

export default appWithTranslation(MyApp);
