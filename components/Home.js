import styles from "../app/homePage.module.css";

import { React, useState, useEffect } from "react";

import DBVCubeContainer from "./3D/DesktopBVCubeContainer";
import MBVCubeContainer from "./3D/MobileBVCubeContainer";

import ReactDOM from "react-dom/client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import "../app/globals.css";
import { motion, useAnimation } from "framer-motion";

import { useTranslation } from "next-i18next";

import CompanyBanner from "./CompanyBanner/CompanyBanner";

const Home = () => {
  const { t } = useTranslation("common");
  const CUBE_CONTAINER_ID = "cube_container_";
  const THREEJS_CONTAINER = "threejs_container";
  const REMOVE_SCROLL_NOTIFICATION = 200;
  const ADD_CUBE_SCROLL_Y = 1600;

  const BANNER_IMG = "/images/client_all.png";
  const COMPANY_BANNER_CONTAINER = "company_banner_container";

  const MOBILE_WIDTH = 767;

  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);

  const [genCompanyBanner, setGenCompanyBanner] = useState(false);
  // Add the first cube
  // const handleScroll = () => {
  //   if (window.scrollY >= ADD_CUBE_SCROLL_Y) {
  //     let container = document.getElementById(CUBE_CONTAINER_ID + "1");
  //     if (container.childElementCount == 0) {
  //       ReactDOM.createRoot(container).render(
  //         <BrandValueCube
  //           prop_id="1"
  //           direction={TOP}
  //           img_src={CUBE1_IMG}
  //           updateCurStage={updateCurStage}
  //         />
  //       );
  //     }
  //   }
  // }
  const [isMobile, setIsMobile] = useState(false);

  const renderThreeContainer = () => {
    let container = document.getElementById(THREEJS_CONTAINER);
    if (window.innerWidth > MOBILE_WIDTH) {
      ReactDOM.createRoot(container).render(
        <DBVCubeContainer id={CUBE_CONTAINER_ID} t={t} />
      );
    } else {
      ReactDOM.createRoot(container).render(
        <MBVCubeContainer id={CUBE_CONTAINER_ID} t={t} />
      );
    }
  };

  const handleScroll = () => {
    let container = document.getElementById(THREEJS_CONTAINER);
    // Render brand value cube(s)
    if (
      window.scrollY >= ADD_CUBE_SCROLL_Y &&
      container.childElementCount == 0
    ) {
      renderThreeContainer();
    }

    // Add company banner swiper
    if (window.scrollY >= ADD_CUBE_SCROLL_Y) {
      let banner = document.getElementById(COMPANY_BANNER_CONTAINER);
      if (banner.childElementCount == 0) {
        ReactDOM.createRoot(banner).render(<CompanyBanner img={BANNER_IMG} />);
      }
    }

    // Disable/enable scroll notification
    if (window.scrollY < REMOVE_SCROLL_NOTIFICATION) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  };

  // Handle scroll event to add the first cube
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  function handleResize() {
    let container = document.getElementById(THREEJS_CONTAINER);
    if (window.innerWidth > MOBILE_WIDTH && container.childElementCount == 1) {
      // Changing Mobile to Desktop environment and remove all children
      if (container.hasChildNodes()) {
        container.removeChild(container.lastElementChild);
      }

      renderThreeContainer();
      setIsMobile(false);
    } else if (
      window.innerWidth <= MOBILE_WIDTH &&
      container.childElementCount == 3
    ) {
      // Changing Desktop to Mobile environment and remove all children
      let container = document.getElementById(THREEJS_CONTAINER);
      while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      }
      renderThreeContainer();
      setIsMobile(true);
    }
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [hideScrollButton, setHideScrollButton] = useState(false);
  const bouncingImageHandleScroll = () => {
    if (window.scrollY == 0) {
      setIsScrolled(false);
      setHideScrollButton(false);
      // control.start("visible");
    } else {
      setHideScrollButton(true);
      setIsScrolled(true);
      control.start("hidden");
    }
  };

  // Window resize listener
  useEffect(() => {
    if (window.scrollY == 0) {
      control.start("visible");
    }
    window.addEventListener("scroll", bouncingImageHandleScroll);
    setIsMobile(window.innerWidth > MOBILE_WIDTH);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", bouncingImageHandleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, [isMobile]);

  const control = useAnimation();
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      {/* main img */}
      <div className={styles.imgContainer}>
        <div className="absolute top-[243px] left-0 right-0 md:flex justify-center items-center z-10">
          <div className="center px-[5px] md:display-flex md:container xl:min-w-[1140px] xl:max-w-[1140px]">
            <div className="container text-3xl font-bold top-1/3 flex-wrap md:flex-nowrap">
              <figcaption>{t("home.banner1")}</figcaption>
              <div className="inline-flex">
                <figcaption className="w-[100px] mt-[17px]">{t("home.banner2")}</figcaption>
                <div className="mt-[17px]">
                  <img src="/images/main_banner01.gif" className="min-w-[517px] h-[40px]"></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={control}
          initial="visible"
          variants={variant}
        >
          <div className="fixed h-[95px] py-[24px] bottom-10 left-0 right-0 md:flex justify-center items-center z-10">
            <div className="center md:display-flex md:container font-white w-screen xl:min-w-[1140px] xl:max-w-[1140px]">
              <img className="h-[46px] w-[60px]" src="/images/main_arrow.svg"></img>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.container}>
        {/* printing & digital */}
        <div className={`${styles.mainContainer}`}>
          {/* <div className={`${styles.service}`}> */}
          <div className="flex justify-center gap-3 mb-48 ">
            {/* printing */}

            <div className="flex-initial hidden md:block">
              <Link href="/printing" legacyBehavior passHref>
                <div
                  className={`${styles.card} ${styles.card1}`}
                  style={{
                    backgroundImage: isCard1Hovered
                      ? "url('/images/main-service-printing.jpg')"
                      : "url('/images/main-service-printing-click.jpg')",
                  }}
                  onMouseEnter={() => setIsCard1Hovered(true)}
                  onMouseLeave={() => setIsCard1Hovered(false)}
                >
                  <div className={styles.serviceContent}>
                    <h3 className="text-4xl md:text-2xl mb-5 text-[#103558] font-sans font-bold md:font-normal py-10 md:py-0 ">
                      {t("home.printing")}
                    </h3>
                    <div className="hidden md:contents">
                      <p className={styles.serviceDesc}>
                        {t("home.printing_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex-initial hidden md:block">
              <Link href="/digital" legacyBehavior passHref>
                <div
                  className={`${styles.card} ${styles.card2}`}
                  style={{
                    backgroundImage: isCard2Hovered
                      ? "url('/images/main-service-digital.jpg')"
                      : "url('/images/main-service-digital-click.jpg')",
                  }}
                  onMouseEnter={() => setIsCard2Hovered(true)}
                  onMouseLeave={() => setIsCard2Hovered(false)}
                >
                  <div className={styles.serviceContent}>
                    <h3 className="text-4xl md:text-2xl mb-5 text-[#103558] font-sans font-bold md:font-normal py-10 md:py-0 ">
                      {t("home.digital")}
                    </h3>
                    <div className="hidden md:contents">
                      <p className={styles.serviceDesc}>
                        {t("home.digital_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex-initial block md:hidden">
              <Link href="/printing" legacyBehavior passHref>
                <div
                  className={`${styles.cardMobile} ${styles.card1}`}
                  style={{
                    backgroundImage: isCard1Hovered
                      ? "url('/images/main-service-printing-mobile.jpg')"
                      : "url('/images/main-service-printing-mobile-click.jpg')",
                  }}
                  onMouseEnter={() => setIsCard1Hovered(true)}
                  onMouseLeave={() => setIsCard1Hovered(false)}
                >
                  <div className={styles.serviceContentMobile}>
                    <h3 className="text-4xl md:text-2xl mb-5 text-[#103558] font-sans font-bold md:font-normal py-10 md:py-0 ">
                      {t("home.printing")}
                    </h3>
                    <div className="hidden md:contents">
                      <p className={styles.serviceDesc}>
                        {t("home.printing_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex-initial block md:hidden">
              <Link href="/digital" legacyBehavior passHref>
                <div
                  className={`${styles.cardMobile} ${styles.card2}`}
                  style={{
                    backgroundImage: isCard2Hovered
                      ? "url('/images/main-service-digital-mobile.jpg')"
                      : "url('/images/main-service-digital-mobile-click.jpg')",
                  }}
                  onMouseEnter={() => setIsCard2Hovered(true)}
                  onMouseLeave={() => setIsCard2Hovered(false)}
                >
                  <div className={styles.serviceContentMobile}>
                    <h3 className="text-4xl md:text-2xl mb-5 text-[#103558] font-sans font-bold md:font-normal py-10 md:py-0 ">
                      {t("home.digital")}
                    </h3>
                    <div className="hidden md:contents">
                      <p className={styles.serviceDesc}>
                        {t("home.digital_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.bvContainerTitle}>{t("home.brand_value")}</h3>
            <div id={THREEJS_CONTAINER} className={styles.bvContainer}>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <div id={COMPANY_BANNER_CONTAINER} className={styles.client}>
        {/*  */}
      </div>
      <div className="hidden" alt="load banner imgs and this should be hidden">
        <img src={BANNER_IMG} alt="banner img" />
      </div>
    </>
  );
};

export default Home;
