"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { React, useState, useEffect, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation, useInView } from "framer-motion";
import printing from "../app/printing.module.css";

import { useTranslation } from 'next-i18next'

const Printing = () => {
  const { t } = useTranslation('common')

  const [print, setPrint] = useState(true);
  const [design, setDesign] = useState(false);
  const [product, setProduct] = useState(false);
  const [slide, setSlide] = useState(true);
  const [isclick, setclick] = useState(false);
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(true);
  const [slide3, setSlide3] = useState(true);
  const [slide4, setSlide4] = useState(true);
  const [slide5, setSlide5] = useState(true);
  const [isSlide, setIsSlide] = useState(false);


  let smallPhoto;
  let bigPhoto;
  let smallTextBox;
  let bigTextBox;
  let w

  if (typeof window !== "undefined") {
    w = window.innerWidth;

    if (w > 1050) {
      smallPhoto = 360;
      bigPhoto = 1140;
      smallTextBox = 263;
      bigTextBox = 750;
    }
  }

  //oursercie

  const isPrint = (e) => {
    e.preventDefault();
    let target;
    if (e.target instanceof HTMLDivElement) {
      target = e.target.firstElementChild;
    } else {
      target = e.target;
    }

    if (!print && !isclick) {
      let pNode = target.parentNode;
      pNode.classList.remove(printing.serviceComponentBox1);
      pNode.classList.add(printing.serviceComponentBox);

      let nes = pNode.nextElementSibling;
      nes.classList.remove(printing.serviceComponentBox);
      nes.classList.add(printing.serviceComponentBox1);
      nes.nextElementSibling.classList.value = "";
      nes.nextElementSibling.classList.add(printing.serviceComponentBox1);

      setPrint(true);
      setDesign(false);
      setProduct(false);
    }
  };
  const isDesign = (e) => {
    e.preventDefault();

    let target;
    if (e.target instanceof HTMLDivElement) {
      target = e.target.firstElementChild;
    } else {
      target = e.target;
    }

    if (!design && !isclick) {
      let pNode = target.parentNode;
      pNode.classList.remove(printing.serviceComponentBox1);
      pNode.classList.add(printing.serviceComponentBox);
      pNode.nextElementSibling.classList.remove(printing.serviceComponentBox);
      pNode.nextElementSibling.classList.add(printing.serviceComponentBox1);
      pNode.previousElementSibling.classList.remove(printing.serviceComponentBox);
      pNode.previousElementSibling.classList.add(printing.serviceComponentBox1);

      setPrint(false);
      setDesign(true);
      setProduct(false);
    }
  };
  const isProduct = (e) => {
    e.preventDefault();

    let target;
    if (e.target instanceof HTMLDivElement) {
      target = e.target.firstElementChild;
    } else {
      target = e.target;
    }

    if (!product && !isclick) {
      let pNode = target.parentNode;
      pNode.classList.remove(printing.serviceComponentBox1);
      pNode.classList.add(printing.serviceComponentBox);

      pNode.previousElementSibling.classList.value = "";
      pNode.previousElementSibling.classList.add(printing.serviceComponentBox1);

      pNode.previousElementSibling.previousElementSibling.classList.value ="";
      pNode.previousElementSibling.previousElementSibling.classList.add(printing.serviceComponentBox1);

      setPrint(false);
      setDesign(false);
      setProduct(true);
    }
  };

  // service list

  const isModal = (e) => {
    e.preventDefault();
    if (e.target.id == "container") {
      if (!isSlide) {
        let target = e.target;
        let fec = target.firstElementChild;
        let nes = target.nextElementSibling;
        let pes = target.previousElementSibling
        if (fec.firstElementChild.textContent == t('printing_page.img_icon_lfp')) {
          nes.className = "";
          nes.classList.add(printing.servicelistVisile);

          nes.nextElementSibling.className = "";
          nes.nextElementSibling.classList.add(printing.servicelistVisile);

          setSlide1(!slide1)
        } else if (fec.firstElementChild.textContent == t('printing_page.img_icon_dps')) {
          nes.className = "";
          nes.classList.add(printing.servicelistVisile);
    
          pes.className = "";
          pes.classList.add(printing.servicelistVisile);

          setSlide2(!slide2)
        } else if (fec.firstElementChild.textContent == t('printing_page.img_icon_is')) {
          pes.className = "";
          pes.classList.add(printing.servicelistVisile);
      
          pes.previousElementSibling.className = "";
          pes.previousElementSibling.classList.add(printing.servicelistVisile);

          setSlide3(!slide3)
        } else if (fec.firstElementChild.textContent == t('printing_page.img_icon_dsd')) {
            setSlide4(!slide4)    
        } else {
          setSlide5(!slide5)
        }

        target.className = "";
        target.classList.add(printing.servicelist1);

        fec.classList.remove(printing.serviceText);
        fec.classList.add(printing.serviceText1);

        target.lastElementChild.classList.remove(printing.modalExit);
        target.lastElementChild.classList.add(printing.modalExit1);

        fec.firstElementChild.classList.remove(printing.serviceTitle);
        fec.firstElementChild.classList.add(printing.serviceTitle1);

        fec.lastElementChild.classList.remove(printing.serviceDesc);
        fec.lastElementChild.classList.add(printing.serviceDesc1);

        setclick(true);
        setIsSlide(!isSlide);
      }    
    }
  };

  const exitModal = (e) => {
    e.preventDefault();

    let ppNode = e.target.parentNode.parentNode;
    let ffec = ppNode.firstElementChild.firstElementChild;
    let nes = ppNode.nextElementSibling;
    let pes = ppNode.previousElementSibling;
    if (ffec.textContent == t('printing_page.img_icon_lfp')) {
      nes.className = "";
      nes.classList.add(printing.servicelist);
  
      nes.nextElementSibling.className = "";
      nes.nextElementSibling.classList.add(printing.servicelist);

      setSlide1(!slide1);
    } else if (ffec.textContent == t('printing_page.img_icon_dps')) {
      nes.className = "";
      nes.classList.add(printing.servicelist);

      pes.className = "";
      pes.classList.add(printing.servicelist);

      setSlide2(!slide2);
    } else if (ffec.textContent == t('printing_page.img_icon_is')) {
      pes.className = "";
      pes.classList.add(printing.servicelist);

      pes.previousElementSibling.className = "";
      pes.previousElementSibling.classList.add(printing.servicelist);

      setSlide3(!slide3);
    } else if (ffec.textContent == t('printing_page.img_icon_dsd')) {
      setSlide4(!slide4);
    } else {
      setSlide5(!slide5);
    }

    ppNode.className = "";
    ppNode.classList.add(printing.servicelist);

    ppNode.firstElementChild.classList.remove(printing.serviceText1);
    ppNode.firstElementChild.classList.add(printing.serviceText);
    e.target.parentNode.classList.remove(printing.modalExit1);
    e.target.parentNode.classList.add(printing.modalExit);

    ffec.classList.remove(printing.serviceTitle1);
    ffec.classList.add(printing.serviceTitle);

    ppNode.firstElementChild.lastElementChild.classList.remove(printing.serviceDesc1);
    ppNode.firstElementChild.lastElementChild.classList.add(printing.serviceDesc);

    setIsSlide(!isSlide);
    setclick(false);
  };

  const clickMove = (e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.click();
    e.target.parentNode.click();
  };
  //slide

  const rightSlide = () => {
    setSlide(false);
  };

  const leftSlide = () => {
    setSlide(true);
  };

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const spring = {
    ease: "linear",
    duration: 0.5,
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
          <h1 className={printing.mainHead}>{t('printing_page.banner1')}</h1>
          <p className={printing.mainText}>
            {t('printing_page.banner2')}
          </p>
        </div>
      </div>
      {/* our service */}
      <div className={printing.serviceBg}>
        <div className={printing.serviceBgBox}>
          <div className={printing.serviceHeadBox}>
            <h2 className={printing.serviceHead}>{t('printing_page.ourservice')}</h2>
          </div>
          <div className={printing.serviceBox}>
            <div className={printing.serviceTitleBox}>
              <div
                id="printing"
                className={printing.serviceComponentBox}
                onClick={isPrint}
              >
                <p>{t('printing_page.os_printing_installation')}</p>
              </div>
              <div
                id="design"
                className={printing.serviceComponentBox1}
                onClick={isDesign}
              >
                <p>{t('printing_page.os_wayfinding')}</p>
              </div>
              <div
                id="product"
                className={printing.serviceComponentBox1}
                onClick={isProduct}
              >
                <p>{t('printing_page.os_promotional')}</p>
              </div>
            </div>
            <div className={printing.servicelistBoxContainer}>
              {print ? (
                <motion.div className={printing.servicelistBox}
                animate={{
                  justifyContent: !slide1
                    ? "center"
                    : !slide2
                    ? "center"
                    : !slide3
                    ? "center"
                    : "space-between",
                }}>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/offline-service-large-click.jpg')`,
                    }}
                    animate={{
                      width: slide1 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div className={printing.serviceText} onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>
                      {t('printing_page.img_icon_lfp')}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t('printing_page.img_icon_lfp_desc')} <br /> {t('printing_page.img_icon_lfp_desc2')}
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
                      backgroundImage: `url('/images/offline-service-digital-click.jpg')`,
                    }}
                    animate={{
                      width: slide2 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div className={printing.serviceText} onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>
                      {t('printing_page.img_icon_dps')}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t('printing_page.img_icon_dps_desc')} <br /> {t('printing_page.img_icon_dps_desc2')}
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
                      backgroundImage: `url('/images/offline-service-installation-click.jpg')`,
                    }}
                    animate={{
                      width: slide3 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div className={printing.serviceText} onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>
                      {t('printing_page.img_icon_is')}
                      </h1>
                      <p className={printing.serviceDesc}>
                      {t('printing_page.img_icon_is_desc')} <br /> {t('printing_page.img_icon_is_desc2')}
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
              ) : design ? (
                <motion.div
                className={printing.servicelistBox}
                animate={{
                  justifyContent: !slide4
                    ? "center"
                    : "start"
                }}>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/offline-service-wayfinding-click.jpg')`,
                    }}
                    animate={{
                      width: slide4 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div className={printing.serviceText} onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>
                      {t('printing_page.img_icon_dsd')}
                      </h1>
                      <p className={printing.serviceDesc}>
                      {t('printing_page.img_icon_dsd_desc')} <br /> {t('printing_page.img_icon_dsd_desc2')}
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
                  justifyContent: !slide5
                    ? "center"
                    : "start"
                }}>
                  <motion.div
                    id="container"
                    className={printing.servicelist}
                    style={{
                      backgroundImage: `url('/images/offline-service-promotional-click.jpg')`,
                    }}
                    animate={{
                      width: slide5 ? smallPhoto : bigPhoto,
                    }}
                    onClick={isModal}
                  >
                    <div className={printing.serviceText} onClick={clickMove}>
                      {" "}
                      <h1 className={printing.serviceTitle}>
                       {t('printing_page.img_icon_ppm')}
                      </h1>
                      <p className={printing.serviceDesc}>
                       {t('printing_page.img_icon_ppm_desc')} <br /> {t('printing_page.img_icon_ppm_desc2')}
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
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          style={{ height: "411px" }}
          spaceBetween={50}
          speed={700}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation={{
            // 네비게이션 적용, < >
            nextEl: ".swiper-button-next", // 다음 버튼 클래스명
            prevEl: ".swiper-button-prev", // 이전 버튼 클래스명
          }}
          onSlideNextTransitionStart={toggleSwitch}
          onSlidePrevTransitionStart={toggleSwitch}
          slidesOffsetBefore={150}
          slidesOffsetAfter={250}
        >
          <SwiperSlide className={printing.slides}>
            Take a look <br /> our Gallery
          </SwiperSlide>
          <SwiperSlide className={printing.slide1}></SwiperSlide>
          <SwiperSlide className={printing.slide2}></SwiperSlide>
          <SwiperSlide className={printing.slide3}></SwiperSlide>
          <SwiperSlide className={printing.slide4}></SwiperSlide>
          <SwiperSlide className={printing.slide5}></SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>

        <div className={printing.switch} data-on={isOn}>
          <motion.div
            className={printing.switch1}
            layout
            transition={spring}
          ></motion.div>
          <motion.div
            className={printing.switch2}
            layout
            transition={spring}
          ></motion.div>
        </div>
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
              src="/images/Offline-Insight-BrandRecall.jpg"
              alt="react logo"
              className={printing.referenceImg}
            />
          </motion.div>
          <motion.div variants={item} className={printing.referenceText}>
            <h1 className={printing.referenceTextTitle}>
              {t('printing_page.printing_page_option1')}
            </h1>
            <p className={printing.referenceTextStyle}>
              {t('printing_page.printing_page_option1_desc')}
            </p>
            <p className={printing.referenceTextStyle}>
              {t('printing_page.printing_page_option1_desc2')}
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
                {t('printing_page.printing_page_option2')}
              </h1>
              <p className={printing.referenceTextStyle}>
                {t('printing_page.printing_page_option2_desc')}
              </p>
              <p className={printing.referenceTextStyle}>
                {t('printing_page.printing_page_option2_desc2')}
              </p>
            </div>
          </motion.div>
          <motion.div variants={item} className={printing.referenceImgBox1}>
            <img
              src="/images/Offline-Insight-Decision.jpg"
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
              src="/images/Offline-Insight-Combination.jpg"
              alt="react logo"
              className={printing.referenceImg}
            />
          </motion.div>
          <motion.div variants={item} className={printing.referenceText}>
            <h1 className={printing.referenceTextTitle}>
              {t('printing_page.printing_page_option3')}
            </h1>
            <p className={printing.referenceTextStyle}>
              {t('printing_page.printing_page_option3_desc')}
            </p>
            <p className={printing.referenceTextStyle}>
              {t('printing_page.printing_page_option3_desc')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Printing;
