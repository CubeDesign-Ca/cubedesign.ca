import styles from "../app/homePage.module.css";

import { React, useState, useEffect } from "react";
import BrandValueCube from "./3D/BrandValueCube";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BrandValueCube from './3D/BrandValueCube';
import ReactDOM from 'react-dom/client';

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
  const ADD_CUBE_SCROLL_Y = 1600;

  const TOP = "top";
  const LEFT = "left";
  const RIGHT = "right";

  const CUBE1_IMG = "../images/3d_one_stop.png";
  const CUBE2_IMG = "../images/3d_trust.png";
  const CUBE3_IMG = "../images/3d_after_sales.png";

  const BANNER_IMG = "/images/client_all.png";
  const COMPANY_BANNER_CONTAINER = "company_banner_container";
  const COMPANY_BANNER_CONTAINER = "company_banner_container";

  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);

  const [genCompanyBanner, setGenCompanyBanner] = useState(false);
  const [genCompanyBanner, setGenCompanyBanner] = useState(false);
  // Add the first cube
  const handleScroll = () => {
    if (window.scrollY >= ADD_CUBE_SCROLL_Y) {
      let container = document.getElementById(CUBE_CONTAINER_ID + "1");
      if (container.childElementCount == 0) {
        ReactDOM.createRoot(container).render(
          <BrandValueCube prop_id="1" direction={TOP} img_src={CUBE1_IMG} updateCurStage={updateCurStage}/>
        );
      }

      let banner = document.getElementById(COMPANY_BANNER_CONTAINER);
      if (banner.childElementCount == 0) {
        ReactDOM.createRoot(banner).render(
          <CompanyBanner img={BANNER_IMG} />
        );
      }
    }
  }
    if (window.scrollY >= ADD_CUBE_SCROLL_Y) {
      let container = document.getElementById(CUBE_CONTAINER_ID + "1");
      if (container.childElementCount == 0) {
        ReactDOM.createRoot(container).render(
          <BrandValueCube prop_id="1" direction={TOP} img_src={CUBE1_IMG} updateCurStage={updateCurStage}/>
        );
      }

      let banner = document.getElementById(COMPANY_BANNER_CONTAINER);
      if (banner.childElementCount == 0) {
        ReactDOM.createRoot(banner).render(
          <CompanyBanner img={BANNER_IMG} />
        );
      }
    }
  }

  // Handle scroll event to add the first cube
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateCurStage = (newValue) => {
    if (newValue == LEFT) {
      let container = document.getElementById(CUBE_CONTAINER_ID + "2");
      if (container != null && container.childElementCount == 0) {
        ReactDOM.createRoot(container).render(
          <BrandValueCube
            prop_id="2"
            direction={LEFT}
            img_src={CUBE2_IMG}
            updateCurStage={updateCurStage}
          />
        );
      }
    } else if (newValue == RIGHT) {
      let container = document.getElementById(CUBE_CONTAINER_ID + "3");
      if (container != null && container.childElementCount == 0) {
        ReactDOM.createRoot(container).render(
          <BrandValueCube
            prop_id="3"
            direction={RIGHT}
            img_src={CUBE3_IMG}
            updateCurStage={updateCurStage}
          />
        );
      }
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [hideScrollButton, setHideScrollButton] = useState(false);
  const bouncingImageHandleScroll = () => {
    if (window.scrollY == 0) {
      setIsScrolled(false);
      setHideScrollButton(false);
      control.start("visible");
    } else {
      setHideScrollButton(true);
      setIsScrolled(true);
      control.start("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", bouncingImageHandleScroll);
    return () => {
      window.removeEventListener("scroll", bouncingImageHandleScroll);
    };
  }, [isScrolled, hideScrollButton]);

  const control = useAnimation();
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleAnimationComplete = () => {
    setHideScrollButton(true);
  };

  return (
    <>
      {/* main img */}
      <div className={styles.imgContainer}>
        <div className="container text-3xl font-bold absolute left-12 sm:left-24 md:left-36 top-1/3 flex-wrap md:flex-nowrap">
          <figcaption>{t("home.banner1")}</figcaption>
          <figcaption>{t("home.banner2")}</figcaption>
        </div>

        <motion.div
          animate={control}
          initial="visible"
          variants={variant}
          onAnimationComplete={handleAnimationComplete}
        >
          {/* <div className="w-[60px] h-[60px] absolute left-24 bottom-72 ml-[-30px] rounded-md	bg-[#CCD4E0] opacity-50 pl-[13px] pt-[7px]"> */}
          <div className="w-[60px] h-[60px] absolute left-12 md:left-1/2 top-[950px] rounded-md bg-[#CCD4E0] opacity-50 pl-[13px] pt-[7px]">
            <img className="h-[46px]" src="/images/arrow.png"></img>
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
            <div className={styles.bvContainer}>
              <div className={styles.bvCard}>
                <div id="cube_container_1" className="h-[200px]"></div>
                <h4 className={styles.bvTitle}>{t("home.onestop_solution")}</h4>
                <p className={styles.bvDesc}>
                  {t("home.onestop_solution_desc")}
                </p>
              </div>
              <div className={styles.bvCard}>
                <div id="cube_container_2" className="h-[200px]"></div>
                <h4 className={styles.bvTitle}>
                  {t("home.trustworthy")}
                  <br /> {t("home.trustworthy2")}
                </h4>
                <p className={styles.bvDesc}>{t("home.trustworthy_desc")}</p>
              </div>
              <div className={styles.bvCard}>
                <div id="cube_container_3" className="h-[200px]"></div>
                <h4 className={styles.bvTitle}>
                  {t("home.aftersales_support")}
                </h4>
                <p className={styles.bvDesc}>
                  {t("home.aftersales_support_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={COMPANY_BANNER_CONTAINER} className={styles.client}>
        {/* <CompanyBanner img={BANNER_IMG}/> */}
      </div>
      <div className="hidden" alt="load banner imgs and this should be hidden">
          <img src={BANNER_IMG} alt="banner img" />
      </div>
    </>
  );
};

export default Home;
