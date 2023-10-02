"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { React, useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import printing from "../app/digital.module.css";

import { useTranslation } from 'next-i18next'

const Digital = () => {
  const { t } = useTranslation('common')

  const [web, setWeb] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [branding, setBranding] = useState(false);
  const [graphic, setGraphic] = useState(false);
  const [slide, setSlide] = useState(true);
  const [isclick, setclick] = useState(false);
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(true);
  const [slide3, setSlide3] = useState(true);
  const [slide4, setSlide4] = useState(true);
  const [slide5, setSlide5] = useState(true);
  const [slide6, setSlide6] = useState(true);
  const [slide7, setSlide7] = useState(true);
  const [slide8, setSlide8] = useState(true);
  const [isSlide, setIsSlide] = useState(false);

  let smallPhoto;
  let bigPhoto;
  let smallTextBox;
  let bigTextBox;
  let w

  if (typeof window !== "undefined") {
    w = window.innerWidth;

    if (w > 1050) {
      smallPhoto = 263;
      bigPhoto = 1140;
      smallTextBox = 263;
      bigTextBox = 750;
    }
  }

  //ourservice
  const isWeb = (e) => {
    e.preventDefault();
    let target;
    if (e.target instanceof HTMLDivElement) {
      target = e.target.firstElementChild;
    } else {
      target = e.target;
    }
    if (!web && !isclick) {
      let pNode = target.parentNode;
      let nes = pNode.nextElementSibling;
      let nnes = nes.nextElementSibling;
      pNode.classList.remove(printing.serviceComponentBox1);
      pNode.classList.add(printing.serviceComponentBox);
      nes.classList.remove(printing.serviceComponentBox);
      nes.classList.add(printing.serviceComponentBox1);
      nnes.classList.value = "";
      nnes.classList.add(printing.serviceComponentBox1);
      nnes.nextElementSibling.classList.value = "";
      nnes.nextElementSibling.classList.add(printing.serviceComponentBox1);
      setWeb(true);
      setAdmin(false);
      setBranding(false);
      setGraphic(false);
    }
  };
  const isAdmin = (e) => {
    e.preventDefault();

    let target;
    if (e.target instanceof HTMLDivElement) {
      target = e.target.firstElementChild;
    } else {
      target = e.target;
    }

    if (!admin && !isclick) {
      let pNode = target.parentNode;
      let nes = pNode.nextElementSibling;
      pNode.classList.remove(printing.serviceComponentBox1);
      pNode.classList.add(printing.serviceComponentBox);
      nes.classList.remove(printing.serviceComponentBox);
      nes.classList.add(printing.serviceComponentBox1);
      pNode.previousElementSibling.classList.remove(printing.serviceComponentBox);
      pNode.previousElementSibling.classList.add(printing.serviceComponentBox1);
      nes.nextElementSibling.classList.value = "";
      nes.nextElementSibling.classList.add(printing.serviceComponentBox1);

      setWeb(false);
      setAdmin(true);
      setBranding(false);
      setGraphic(false);
    }
  };

  const isBranding = (e) => {
    e.preventDefault();

    let target;
    if (e.target instanceof HTMLDivElement) {
      target = e.target.firstElementChild;
    } else {
      target = e.target;
    }

    if (!branding && !isclick) {
      let pNode = target.parentNode;
      let pes = pNode.previousElementSibling;
      pNode.classList.remove(printing.serviceComponentBox1);
      pNode.classList.add(printing.serviceComponentBox);

      pes.classList.value = "";
      pes.classList.add(printing.serviceComponentBox1);

      pes.previousElementSibling.classList.value ="";
      pes.previousElementSibling.classList.add(printing.serviceComponentBox1);

      pNode.nextElementSibling.classList.value = "";
      pNode.nextElementSibling.classList.add(printing.serviceComponentBox1);

      setWeb(false);
      setAdmin(false);
      setBranding(true);
      setGraphic(false);
    }
  };

  const isGraphic = (e) => {
    e.preventDefault();

    let target;
    if (e.target instanceof HTMLDivElement) {
      target = e.target.firstElementChild;
    } else {
      target = e.target;
    }

    if (!graphic && !isclick) {
      let pNode = target.parentNode;
      let pes = pNode.previousElementSibling;
      let ppes = pes.previousElementSibling;
      pNode.classList.remove(printing.serviceComponentBox1);
      pNode.classList.add(printing.serviceComponentBox);

      pes.classList.value = "";
      pes.classList.add(printing.serviceComponentBox1);

      ppes.classList.value ="";
      ppes.classList.add(printing.serviceComponentBox1);

      ppes.previousElementSibling.classList.value ="";
      ppes.previousElementSibling.classList.add(printing.serviceComponentBox1);

      setWeb(false);
      setAdmin(false);
      setBranding(false);
      setGraphic(true);
    }
  };

  // service list

  const isModal = (e) => {
    e.preventDefault();

    if (e.target.id == "container") {
      if (!isSlide) {
        let target = e.target;
        let fec = target.firstElementChild;
        let ffec = fec.firstElementChild;
        let nes = target.nextElementSibling;
        let pes = target.previousElementSibling;
        if (ffec.textContent == t('digital_page.img_icon_seo')) {
          let nnes = nes.nextElementSibling;

          nes.className = "";
          nes.classList.add(printing.servicelistVisile);

          nnes.className = "";
          nnes.classList.add(printing.servicelistVisile);

          nnes.nextElementSibling.className = "";
          nnes.nextElementSibling.classList.add(printing.servicelistVisile);

          target.style.backgroundImage = "url('/images/Online-Service-SEO.jpg')";

          setSlide1(!slide1);
        } else if (ffec.textContent ==t('digital_page.img_icon_cms')) {
          let nnes = nes.nextElementSibling;

          nes.className = "";
          nes.classList.add(printing.servicelistVisile);

          nnes.className = "";
          nnes.classList.add(printing.servicelistVisile);

          pes.className = "";
          pes.classList.add(printing.servicelistVisile);

          target.style.backgroundImage ="url('/images/Online-Service-CMS.jpg')";

          setSlide2(!slide2);
        } else if (ffec.textContent == t('digital_page.img_icon_tpa')) {
          let ppes = pes.previousElementSibling;

          pes.className = "";
          pes.classList.add(printing.servicelistVisile);

          ppes.className = "";
          ppes.classList.add(printing.servicelistVisile);

          nes.className = "";
          nes.classList.add(printing.servicelistVisile);

          target.style.backgroundImage = "url('/images/Online-Service-OAuth.jpg')";
          setSlide3(!slide3);
        } else if (ffec.textContent == t('digital_page.img_icon_eci')) {
          let ppes = pes.previousElementSibling;

          pes.className = "";
          pes.classList.add(printing.servicelistVisile);

          ppes.className = "";
          ppes.classList.add(printing.servicelistVisile);

          ppes.previousElementSibling.className = "";
          ppes.previousElementSibling.classList.add(printing.servicelistVisile);

          target.style.backgroundImage = "url('/images/Online-Service-Ecommerce.jpg')";
          setSlide4(!slide4);
        } else if (ffec.textContent == t('digital_page.img_icon_adi')) {
          target.style.backgroundImage = "url('/images/Online-Service-Admin.jpg')";
          setSlide5(!slide5);
        } else if (ffec.textContent == t('digital_page.img_icon_vid')) {
          setSlide6(!slide6);
        } else if (ffec.textContent == t('digital_page.img_icon_pd')) {
          setSlide7(!slide7);
          nes.className = "";
          nes.classList.add(printing.servicelistVisile);
        } else if (ffec.textContent == t('digital_page.img_icon_md')) {
          setSlide8(!slide8);
          pes.className = "";
          pes.classList.add(printing.servicelistVisile);
        }

        target.className = "";
        target.classList.add(printing.servicelist1);

        fec.classList.remove(printing.serviceText);
        fec.classList.add(printing.serviceText1);

        target.lastElementChild.classList.remove(printing.modalExit);
        target.lastElementChild.classList.add(printing.modalExit1);

        ffec.classList.remove(printing.serviceTitle);
        ffec.classList.add(printing.serviceTitle1);

        fec.lastElementChild.classList.remove(printing.serviceDesc);
        fec.lastElementChild.classList.add(printing.serviceDesc1);

        setclick(true);
        setIsSlide(!isSlide);
      }
    }
  };

  const exitModal = (e) => {
    e.preventDefault();

    let pNode = e.target.parentNode;
    let ppNode = pNode.parentNode;
    let fec = ppNode.firstElementChild;
    let ffec = fec.firstElementChild;
    let nes = ppNode.nextElementSibling;
    let pes = ppNode.previousElementSibling;
    if (ffec.textContent == t('digital_page.img_icon_seo')) {
      let nnes = nes.nextElementSibling;

      nes.className = "";
      nes.classList.add(printing.servicelist);

      nnes.className = "";
      nnes.classList.add(printing.servicelist);

      nnes.nextElementSibling.className = "";
      nnes.nextElementSibling.classList.add(printing.servicelist);

      ppNode.style.backgroundImage = "url('/images/Online-Service-SEO.jpg')";

      setSlide1(!slide1);
    } else if (ffec.textContent == t('digital_page.img_icon_cms')) {
      let nnes = nes.nextElementSibling;

      nes.className = "";
      nes.classList.add(printing.servicelist);

      nnes.className = "";
      nnes.classList.add(printing.servicelist);

      pes.className = "";
      pes.classList.add(printing.servicelist);

      ppNode.style.backgroundImage = "url('/images/Online-Service-CMS.jpg')";
      setSlide2(!slide2);
    } else if (ffec.textContent == t('digital_page.img_icon_tpa')) {
      let ppes = pes.previousElementSibling;

      nes.className = "";
      nes.classList.add(printing.servicelist);

      pes.className = "";
      pes.classList.add(printing.servicelist);

      ppes.className = "";
      ppes.classList.add(printing.servicelist);

      ppNode.style.backgroundImage = "url('/images/Online-Service-OAuth.jpg')";
      setSlide3(!slide3);
    } else if (ffec.textContent == t('digital_page.img_icon_eci')) {
      let ppes = pes.previousElementSibling;

      pes.className = "";
      pes.classList.add(printing.servicelist);

      ppes.className = "";
      ppes.classList.add(printing.servicelist);

      ppes.previousElementSibling.className = "";
      ppes.previousElementSibling.classList.add(printing.servicelist);

      ppNode.style.backgroundImage = "url('/images/Online-Service-Ecommerce.jpg')";
      setSlide4(!slide4);
    } else if (ffec.textContent == t('digital_page.img_icon_adi')) {
      ppNode.style.backgroundImage = "url('/images/Online-Service-Admin.jpg')";
      setSlide5(!slide5);
    } else if (ffec.textContent == t('digital_page.img_icon_vid')) {
      setSlide6(!slide6);
    } else if (ffec.textContent == t('digital_page.img_icon_pd')) {
      setSlide7(!slide7);
      nes.className = "";
      nes.classList.add(printing.servicelist);
    } else if (ffec.textContent == t('digital_page.img_icon_md')) {
      setSlide8(!slide8);
      pes.className = "";
      pes.classList.add(printing.servicelist);
    }

    ppNode.className = "";
    ppNode.classList.add(printing.servicelist);

    fec.classList.remove(printing.serviceText1);
    fec.classList.add(printing.serviceText);
    pNode.classList.remove(printing.modalExit1);
    pNode.classList.add(printing.modalExit);

    ffec.classList.remove(printing.serviceTitle1);
    ffec.classList.add(printing.serviceTitle);

    fec.lastElementChild.classList.remove(printing.serviceDesc1);
    fec.lastElementChild.classList.add(printing.serviceDesc);

    setIsSlide(!isSlide);
    setclick(false);
  };

  const clickMove = (e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.click();
    e.target.parentNode.click();
  };
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const boxVariant = {
    hidden: { opacity: 0 },
    visible: {
      ease: [0.17, 0.67, 0.83, 0.67],
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.3,
        staggerChildren: 0.8,
      },
    },
  };

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView = useInView(ref);
  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  useEffect(() => {
    if (inView1) {
      control1.start("visible");
    }
  }, [control1, inView1]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    }
  }, [control2, inView2]);
  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      {/* bacground photo */}
      <div className={printing.bgimg}>
        <div className={printing.bgTextBox}>
          <h1 className={printing.mainHead}>{t('digital_page.banner1')}</h1>
          <p className={printing.mainText}>
            {t('digital_page.banner2')}
          </p>
        </div>
      </div>
      {/* our service */}
      <div className={printing.serviceBg}>
        <div className={printing.serviceBgBox}>
          <div className={printing.serviceHeadBox}>
            <h2 className={printing.serviceHead}>{t('digital_page.ourservice')}</h2>
          </div>
          <div className={printing.serviceBox}>
            <div className={printing.serviceTitleBox}>
              <div
                id="web"
                className={printing.serviceComponentBox}
                onClick={isWeb}
              >
                <p>
                  {t('digital_page.os_website_design')}
                  <br />{t('digital_page.os_development')}
                </p>
              </div>
              <div
                id="admin"
                className={printing.serviceComponentBox1}
                onClick={isAdmin}
              >
                <p>
                  {t('digital_page.os_admin_dashboard')}
                  <br />
                  {t('digital_page.os_implementation')}
                </p>
              </div>
              <div
                id="branding"
                className={printing.serviceComponentBox1}
                onClick={isBranding}
              >
                <p>{t('digital_page.os_branding_design')}</p>
              </div>
              <div
                id="graphic"
                className={printing.serviceComponentBox1}
                onClick={isGraphic}
              >
                <p>{t('digital_page.os_graphic_design')}</p>
              </div>
            </div>
            <div className={printing.servicelistBoxContainer}>
              {web ? (
                <motion.div
                  className={printing.servicelistBox}
                  animate={{
                    justifyContent: !slide1? "center" : !slide2? "center" : !slide3? "center" : !slide4? "center" : "space-between",
                  }}
                >
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/Online-Service-SEO.jpg')`,
                    }}
                    animate={{
                      width: slide1 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div
                      className={printing.serviceText}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t('digital_page.img_icon_seo')}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t('digital_page.img_icon_seo_desc')}
                      </p>
                    </div>
                    <div
                      id="exit"
                      className={printing.modalExit}
                      onClick={exitModal}
                    >
                      {" "}
                      <button className={printing.serviceExitBtn}>x</button>
                    </div>
                  </motion.div>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/Online-Service-CMS.jpg')`,
                    }}
                    animate={{
                      width: slide2 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div
                      className={printing.serviceText}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t('digital_page.img_icon_cms')}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t('digital_page.img_icon_cms_desc')}
                        <br />
                        <br />
                        {t('digital_page.img_icon_cms_desc2')}
                      </p>
                    </div>
                    <div
                      id="exit"
                      className={printing.modalExit}
                      onClick={exitModal}
                    >
                      {" "}
                      <button className={printing.serviceExitBtn}>x</button>
                    </div>
                  </motion.div>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/Online-Service-OAuth.jpg')`,
                    }}
                    animate={{
                      width: slide3 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div
                      className={printing.serviceText}
                      onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t('digital_page.img_icon_tpa')}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t('digital_page.img_icon_tpa_desc')}
                      </p>
                    </div>
                    <div
                      id="exit"
                      className={printing.modalExit}
                      onClick={exitModal}
                    >
                      {" "}
                      <button className={printing.serviceExitBtn}>x</button>
                    </div>
                  </motion.div>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/Online-Service-Ecommerce.jpg')`,
                    }}
                    animate={{
                      width: slide4 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div
                      className={printing.serviceText}
                      onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t('digital_page.img_icon_eci')}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t('digital_page.img_icon_eci_desc')}
                      </p>
                    </div>
                    <div
                      id="exit"
                      className={printing.modalExit}
                      onClick={exitModal}
                    >
                      {" "}
                      <button className={printing.serviceExitBtn}>x</button>
                    </div>
                  </motion.div>
                </motion.div>
              ) : admin ? (
                <motion.div
                className={printing.servicelistBox}
                animate={{
                  justifyContent: !slide5
                    ? "center"
                    : "start"
                }}>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/Online-Service-Admin.jpg')`,
                    }}
                    animate={{
                      width: slide5 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div
                      className={printing.serviceText}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t('digital_page.img_icon_adi')}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t('digital_page.img_icon_adi_desc')}
                      </p>
                    </div>
                    <div
                      id="exit"
                      className={printing.modalExit}
                      onClick={exitModal}
                    >
                      {" "}
                      <button className={printing.serviceExitBtn}>x</button>
                    </div>
                  </motion.div>
                </motion.div>
              ) : branding ? (
                <motion.div
                className={printing.servicelistBox}
                animate={{
                  justifyContent: !slide6
                    ? "center"
                    : "start"
                }}>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/Online-Service-Branding.jpg')`,
                    }}
                    animate={{
                      width: slide6 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div
                      className={printing.serviceText}
                      onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t('digital_page.img_icon_vid')}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t('digital_page.img_icon_vid_desc')}
                      </p>
                    </div>
                    <div
                      id="exit"
                      className={printing.modalExit}
                      onClick={exitModal}
                    >
                      {" "}
                      <button className={printing.serviceExitBtn}>x</button>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                className={printing.servicelistBox}
                animate={{
                  justifyContent: !slide7? "center" : !slide8? "center" : "start",
                }}>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/Online-Service-Poster.jpg')`,
                    }}
                    animate={{
                      width: slide7 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div
                      className={printing.serviceText}
                      onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>{t('digital_page.img_icon_pd')}</h1>
                      <p className={printing.serviceDesc}>
                        {t('digital_page.img_icon_pd_desc')}
                      </p>
                    </div>
                    <div
                      id="exit"
                      className={printing.modalExit}
                      onClick={exitModal}
                    >
                      {" "}
                      <button className={printing.serviceExitBtn}>x</button>
                    </div>
                  </motion.div>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/Online-Service-Menu.jpg')`,
                      marginLeft: "20px",
                    }}
                    animate={{
                      width: slide8 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div
                      className={printing.serviceText}
                      onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>{t('digital_page.img_icon_md')}</h1>
                      <p className={printing.serviceDesc}>
                        {t('digital_page.img_icon_md_desc')}
                      </p>
                    </div>
                    <div
                      id="exit"
                      className={printing.modalExit}
                      onClick={exitModal}
                    >
                      {" "}
                      <button className={printing.serviceExitBtn}>x</button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* gallery */}
      <div className={printing.galleryBackground}>
        <h1 className={printing.galleryBackgroundText}>
          Our Gallery <br /> (coming soon)
        </h1>
      </div>
      {/* reference */}
      <div className={printing.referenceBg}>
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          exit="hidden"
          className={printing.referenceBox}
        >
          <motion.div variants={item} className={printing.referenceImgBox}>
            <img
              src="/images/Online-Insight-Elevating.jpg"
              alt="react logo"
              className={printing.referenceImg}
            />
          </motion.div>
          <motion.div variants={item} className={printing.referenceText}>
            <h1 className={printing.referenceTextTitle}>
              {t('digital_page.digital_page_option1')}
            </h1>
            <p className={printing.referenceTextStyle}>
              {t('digital_page.digital_page_option1_desc')}
            </p>
            <p className={printing.referenceTextStyle}>
              {t('digital_page.digital_page_option1_desc2')}
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className={printing.referenceBg}>
        <motion.div
          ref={ref1}
          variants={boxVariant}
          initial="hidden"
          animate={control1}
          className={printing.referenceBox1}
        >
          <motion.div variants={item} className={printing.referenceText1}>
            <div className={printing.referenceText2}>
              <h1 className={printing.referenceTextTitle}>
                {t('digital_page.digital_page_option2')}
              </h1>
              <p className={printing.referenceTextStyle}>
                {t('digital_page.digital_page_option2_desc')}
              </p>
              <p className={printing.referenceTextStyle}>
                {t('digital_page.digital_page_option2_desc2')}
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className={printing.referenceImgBox1}>
            <img
              src="/images/Online-Insight-Building.jpg"
              alt="react logo"
              className={printing.referenceImg1}
            />
          </motion.div>
        </motion.div>
      </div>
      <div
        className={printing.referenceBg}
        style={{
          marginBottom: `200px`,
        }}
      >
        <motion.div
          ref={ref2}
          variants={boxVariant}
          initial="hidden"
          animate={control2}
          className={printing.referenceBox1}
        >
          <motion.div variants={item} className={printing.referenceImgBox}>
            <img
              src="/images/Online-Insight-Fueling.jpg"
              alt="react logo"
              className={printing.referenceImg}
            />
          </motion.div>
          <motion.div variants={item} className={printing.referenceText}>
            <h1 className={printing.referenceTextTitle}>
              {t('digital_page.digital_page_option3')}
            </h1>
            <p className={printing.referenceTextStyle}>
              {t('digital_page.digital_page_option3_desc')}
            </p>
            <p className={printing.referenceTextStyle}>
              {t('digital_page.digital_page_option3_desc2')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Digital;
