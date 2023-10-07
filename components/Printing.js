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

import { useTranslation } from "next-i18next";

const Printing = () => {
  const { t } = useTranslation("common");

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
  const [isMobile, setMobile] = useState(false);
  const [modalExit2, setModalExit2] = useState(false);
  const [modalExit3, setModalExit3] = useState(false);

  let smallPhoto;
  let bigPhoto;
  let smallPhotomobilew;
  let smallPhotomobileh;
  let bigPhotomobilew;
  let bigPhotomobileh;
  let smallTextBox;
  let bigTextBox;
  let w;

  if (typeof window !== "undefined") {
    w = window.innerWidth;

    smallPhotomobilew = 360;
    smallPhotomobileh = 150;
    bigPhotomobilew = 360;
    bigPhotomobileh = 330;
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
      pNode.previousElementSibling.classList.remove(
        printing.serviceComponentBox
      );
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

      pNode.previousElementSibling.previousElementSibling.classList.value = "";
      pNode.previousElementSibling.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );

      setPrint(false);
      setDesign(false);
      setProduct(true);
    }
  };

  // service list

  const isModal = (e) => {
    console.log("isModal()");
    e.preventDefault();
    if (e.target.id == "container") {
      if (!isSlide) {
        let target = e.target;
        let fec = target.firstElementChild;
        let nes = target.nextElementSibling;
        let pes = target.previousElementSibling;
        if (
          fec.firstElementChild.textContent == t("printing_page.img_icon_lfp")
        ) {
          if (w < 768) {
            fec.firstElementChild.style.display = "none";
            fec.lastElementChild.style.display = "none";
          }

          nes.className = "";
          console.log("nes.classList:", nes.classList);
          nes.classList.add(printing.servicelistVisile);

          nes.nextElementSibling.className = "";
          nes.nextElementSibling.classList.add(printing.servicelistVisile);

          setSlide1(!slide1);
        } else if (
          fec.firstElementChild.textContent == t("printing_page.img_icon_dps")
        ) {
          nes.className = "";
          nes.classList.add(printing.servicelistVisile);

          pes.className = "";
          pes.classList.add(printing.servicelistVisile);

          if (w < 768) {
            fec.firstElementChild.style.display = "none";
            fec.lastElementChild.style.display = "none";
          }

          setSlide2(!slide2);
        } else if (
          fec.firstElementChild.textContent == t("printing_page.img_icon_is")
        ) {
          pes.className = "";
          pes.classList.add(printing.servicelistVisile);

          pes.previousElementSibling.className = "";
          pes.previousElementSibling.classList.add(printing.servicelistVisile);

          if (w < 768) {
            fec.firstElementChild.style.display = "none";
            fec.lastElementChild.style.display = "none";
          }

          setSlide3(!slide3);
        } else if (
          fec.firstElementChild.textContent == t("printing_page.img_icon_dsd")
        ) {
          if (w < 768) {
            fec.firstElementChild.style.display = "none";
            fec.lastElementChild.style.display = "none";
          }
          setModalExit2(false);
          setSlide4(!slide4);
        } else {
          if (w < 768) {
            fec.firstElementChild.style.display = "none";
            fec.lastElementChild.style.display = "none";
          }
          console.log("setSlide5:", slide5);

          setModalExit3(false);
          setSlide5(!slide5);
        }

        target.className = "";
        target.classList.add(printing.servicelist1);

        fec.classList.remove(printing.serviceText);
        fec.classList.remove(printing.serviceText2);

        if (w < 768) {
        } else {
          fec.classList.add(printing.serviceText1);
        }

        target.lastElementChild.classList.remove(printing.modalExit);
        target.lastElementChild.classList.add(printing.modalExit1);

        fec.firstElementChild.classList.remove(printing.serviceTitle);
        fec.firstElementChild.classList.add(printing.serviceTitle1);

        fec.lastElementChild.classList.remove(printing.serviceDesc);

        if (w < 768) {
        } else {
          fec.lastElementChild.classList.add(printing.serviceDesc1);
        }
        console.log(
          "firstelementchild->textcontent2:",
          fec.firstElementChild.lastElementChild
        );
        setclick(true);
        setIsSlide(!isSlide);
      }
    }
  };

  const exitModal = (e) => {
    console.log("exitModal()");
    e.preventDefault();

    let ppNode = e.target.parentNode.parentNode;
    let ffec = ppNode.firstElementChild.firstElementChild;
    let nes = ppNode.nextElementSibling;
    let pes = ppNode.previousElementSibling;
    if (ffec.textContent == t("printing_page.img_icon_lfp")) {
      nes.className = "";
      nes.classList.add(printing.servicelist);

      nes.nextElementSibling.className = "";
      nes.nextElementSibling.classList.add(printing.servicelist);

      if (w < 768) {
        ffec.style.display = "block";
      }

      setSlide1(!slide1);
    } else if (ffec.textContent == t("printing_page.img_icon_dps")) {
      nes.className = "";
      nes.classList.add(printing.servicelist);

      pes.className = "";
      pes.classList.add(printing.servicelist);

      if (w < 768) {
        ffec.style.display = "block";
      }

      setSlide2(!slide2);
    } else if (ffec.textContent == t("printing_page.img_icon_is")) {
      pes.className = "";
      pes.classList.add(printing.servicelist);

      pes.previousElementSibling.className = "";
      pes.previousElementSibling.classList.add(printing.servicelist);

      if (w < 768) {
        ffec.style.display = "block";
      }

      setSlide3(!slide3);
    } else if (ffec.textContent == t("printing_page.img_icon_dsd")) {
      if (w < 768) {
        ffec.style.display = "block";
      }
      setModalExit2(true);
      setSlide4(!slide4);
    } else {
      console.log("exitModal:", ppNode, ffec);
      if (w < 768) {
        ffec.style.display = "block";
      }
      console.log("setSlide5:", slide5);
      setSlide5(!slide5);
      setModalExit3(true);
    }

    ppNode.className = "";
    ppNode.classList.add(printing.servicelist);

    if (ffec.textContent == t("printing_page.img_icon_ppm")) {
      console.log("adding servicelist2");
      ppNode.firstElementChild.classList.add(printing.serviceText2);
    } else {
      console.log("adding servicelist");
      ppNode.firstElementChild.classList.add(printing.serviceText);
    }
    ppNode.firstElementChild.classList.remove(printing.serviceText1);

    e.target.parentNode.classList.remove(printing.modalExit1);
    e.target.parentNode.classList.add(printing.modalExit);

    ffec.classList.remove(printing.serviceTitle1);
    ffec.classList.add(printing.serviceTitle);

    ppNode.firstElementChild.lastElementChild.classList.remove(
      printing.serviceDesc1
    );
    ppNode.firstElementChild.lastElementChild.classList.add(
      printing.serviceDesc
    );

    setIsSlide(!isSlide);
    setclick(false);
  };

  const clickMove = (e) => {
    console.log("clickmove!");
    e.preventDefault();
    e.target.parentNode.parentNode.click();
    e.target.parentNode.click();
  };

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

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
      // console.log("handleresize:", isMobile);
    } else {
      setMobile(false);
      // console.log("handleresize:", isMobile);
    }
  };

  useEffect(() => {
    console.log("useEffect resize!");
    window.addEventListener("resize", handleResize);
  }, []);

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
      {/* <div className="bg-[url('/images/printing-bg-reverse.jpg')] md:bg-[url('/images/printing-bg.jpg')] h-[690px] w-[2000px] flex"> */}
      <div className="hidden md:block">
        <div className={printing.bgimg}>
          <div className="absolute left-[30px] md:left-[10%] top-[430px]">
            <h1 className={printing.mainHead}>{t("printing_page.banner1")}</h1>
            <p className="flex flex-wrap box-content w-[300px] md:w-[550px] font-medium">
              {t("printing_page.banner2")}
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className={printing.bgimgMobile}>
          <div className="absolute left-[30px] md:left-[165px] top-[400px]">
            <h1 className={printing.mainHead}>{t("printing_page.banner1")}</h1>
            <p className="flex flex-wrap box-content w-[300px] md:w-[550px] font-medium">
              {t("printing_page.banner2")}
            </p>
          </div>
        </div>
      </div>
      {/* our service */}
      <div className={printing.serviceBg}>
        {/* <div className={printing.serviceBgBox}> */}
        <div className="flex w-[1140px] h-[1206px] md:h-[956px] flex-col mt-[200px] items-center">
          <div className={printing.serviceHeadBox}>
            <h2 className={printing.serviceHead}>
              {t("printing_page.ourservice")}
            </h2>
          </div>
          {/* mobile */}
          <div className="block md:hidden w-[400px] h-[100px] flex flex-col items-center pt-[50px]">
            <div className="block md:hidden w-[400px] h-[60px] flex justify-start border-b-8 border-solid border-[#C83832]">
              <div
                id="printing"
                className="block md:hidden w-[260px] h-[60px] flex items-center text-[24px] font-[400px] text-black"
                onClick={isPrint}
              >
                <p>{t("printing_page.os_printing_installation")}</p>
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[450px] mt-[20px] block md:hidden mb-[40px]">
            <motion.div
              className={printing.servicelistBoxMobile}
              animate={{
                justifyContent: !slide1
                  ? "center"
                  : !slide2
                  ? "center"
                  : !slide3
                  ? "center"
                  : "space-between",
              }}
            >
              <motion.div
                id="container"
                className="w-[360px] h-[150px] flex relative mb-[10px]"
                style={{
                  backgroundImage: `url('/images/offline-service-large-click.jpg')`,
                }}
                animate={{
                  width: slide1 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide1 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("printing_page.img_icon_lfp")}
                  </h1>
                  <p className={printing.serviceDesc}>
                    {t("printing_page.img_icon_lfp_desc")} <br />{" "}
                    {t("printing_page.img_icon_lfp_desc2")}
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
                className="w-[360px] h-[150px] flex relative mb-[10px]"
                style={{
                  backgroundImage: `url('/images/offline-service-digital-click.jpg')`,
                }}
                animate={{
                  width: slide2 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide2 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("printing_page.img_icon_dps")}
                  </h1>
                  <p className={printing.serviceDesc}>
                    {t("printing_page.img_icon_dps_desc")} <br />{" "}
                    {t("printing_page.img_icon_dps_desc2")}
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
                className="w-[360px] h-[150px] flex relative "
                style={{
                  backgroundImage: `url('/images/offline-service-installation-click.jpg')`,
                }}
                animate={{
                  width: slide3 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide3 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("printing_page.img_icon_is")}
                  </h1>
                  <p className={printing.serviceDesc}>
                    {t("printing_page.img_icon_is_desc")} <br />{" "}
                    {t("printing_page.img_icon_is_desc2")}
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
          </div>
          <div className="block md:hidden w-[400px] h-[60px] flex justify-start border-b-8 border-solid border-[#C83832] ">
            <div
              id="printing"
              className="block md:hidden w-[260px] h-[60px] flex items-center text-[24px] font-[400px] text-black"
              onClick={isPrint}
            >
              <p>{t("printing_page.os_wayfinding")}</p>
            </div>
          </div>
          {/* <div className="w-[400px] h-[150px] mt-[20px] block md:hidden mb-[40px]"> */}
          <div
            className={`w-[400px] ${
              modalExit2 ? "h-[150px]" : "h-[330px]"
            } mt-[20px] block md:hidden mb-[40px]`}
          >
            <motion.div
              className={printing.servicelistBoxMobile}
              animate={{
                justifyContent: !slide4 ? "center" : "start",
              }}
            >
              <motion.div
                id="container"
                className="w-[360px] h-[150px] flex relative"
                style={{
                  backgroundImage: `url('/images/offline-service-wayfinding-click.jpg')`,
                }}
                animate={{
                  width: slide4 ? smallPhoto : bigPhoto,
                  height: slide4 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("printing_page.img_icon_dsd")}
                  </h1>
                  <p className={printing.serviceDesc}>
                    {t("printing_page.img_icon_dsd_desc")} <br />{" "}
                    {t("printing_page.img_icon_dsd_desc2")}
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
          </div>
          <div className="block md:hidden w-[400px] h-[60px] flex justify-start border-b-8 border-solid border-[#C83832]">
            <div
              id="printing"
              className="block md:hidden w-[260px] h-[60px] flex items-center text-[24px] font-[400px] text-black"
              onClick={isPrint}
            >
              <p>{t("printing_page.os_promotional")}</p>
            </div>
          </div>
          {/* <div className="w-[400px] h-[300px] mt-[20px] block md:hidden mb-[40px] "> */}
          <div
            className={`w-[400px] ${
              modalExit3 ? "h-[150px]" : "h-[330px]"
            } mt-[20px] block md:hidden mb-[40px]`}
          >
            <motion.div
              className={printing.servicelistBoxMobile}
              animate={{
                justifyContent: !slide5 ? "center" : "start",
              }}
            >
              <motion.div
                id="container"
                className="w-[360px] h-[150px] flex relative "
                style={{
                  backgroundImage: `url('/images/offline-service-promotional-click.jpg')`,
                }}
                animate={{
                  width: slide5 ? smallPhoto : bigPhoto,
                  height: slide5 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText2} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle2}>
                    {t("printing_page.img_icon_ppm")}
                  </h1>
                  <p className={printing.serviceDesc}>
                    {t("printing_page.img_icon_ppm_desc")} <br />{" "}
                    {t("printing_page.img_icon_ppm_desc2")}
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
          </div>
          {/* desktop */}
          <div className="w-[1140px] h-[892px] flex flex-col items-center hidden md:block">
            <div className="w-[1140px] h-[72px] flex justify-between border-b-8 border-solid border-[#C83832]">
              <div
                id="printing"
                className="w-[380px] h-[65px] flex items-center justify-center text-[25px] bg-[#C83832] justify-center text-[25px] font-[400px] text-white"
                onClick={isPrint}
              >
                <p>{t("printing_page.os_printing_installation")}</p>
              </div>
              <div
                id="design"
                className="w-[380px] h-[65px] flex items-center justify-center text-[25px]"
                onClick={isDesign}
              >
                <p>{t("printing_page.os_wayfinding")}</p>
              </div>
              <div
                id="product"
                className="w-[380px] h-[65px] flex items-center justify-center text-[25px]"
                onClick={isProduct}
              >
                <p>{t("printing_page.os_promotional")}</p>
              </div>
            </div>
            <div className={printing.servicelistBoxContainer}>
              {print ? (
                <motion.div
                  className={printing.servicelistBox}
                  animate={{
                    justifyContent: !slide1
                      ? "center"
                      : !slide2
                      ? "center"
                      : !slide3
                      ? "center"
                      : "space-between",
                  }}
                >
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
                    <div
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("printing_page.img_icon_lfp")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("printing_page.img_icon_lfp_desc")} <br />{" "}
                        {t("printing_page.img_icon_lfp_desc2")}
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
                    <div
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("printing_page.img_icon_dps")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("printing_page.img_icon_dps_desc")} <br />{" "}
                        {t("printing_page.img_icon_dps_desc2")}
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
                    <div
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("printing_page.img_icon_is")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("printing_page.img_icon_is_desc")} <br />{" "}
                        {t("printing_page.img_icon_is_desc2")}
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
                    justifyContent: !slide4 ? "center" : "start",
                  }}
                >
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
                    <div
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("printing_page.img_icon_dsd")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("printing_page.img_icon_dsd_desc")} <br />{" "}
                        {t("printing_page.img_icon_dsd_desc2")}
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
                    justifyContent: !slide5 ? "center" : "start",
                  }}
                >
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
                    <div
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("printing_page.img_icon_ppm")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("printing_page.img_icon_ppm_desc")} <br />{" "}
                        {t("printing_page.img_icon_ppm_desc2")}
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
          spaceBetween={isMobile ? 10 : 50}
          speed={700}
          slidesPerView={isMobile ? 2 : 4}
          slidesPerGroup={isMobile ? 2 : 4}
          navigation={{
            // 네비게이션 적용, < >
            nextEl: ".swiper-button-next", // 다음 버튼 클래스명
            prevEl: ".swiper-button-prev", // 이전 버튼 클래스명
          }}
          onSlideNextTransitionStart={toggleSwitch}
          onSlidePrevTransitionStart={toggleSwitch}
          slidesOffsetBefore={isMobile ? 0 : 150}
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
          {!isMobile && <div class="swiper-button-prev"></div>}
          {!isMobile && <div class="swiper-button-next"></div>}
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
      <div>
        <div className="flex w-[100%] w-[100%] justify-center">
          <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            exit="hidden"
            className="flex h-[600px] w-[1140px] mt-[200px] flex-col md:flex-row"
          >
            <motion.div variants={item} className="w-[100%] h-[100%]">
              <img
                src="/images/Offline-Insight-BrandRecall.jpg"
                alt="react logo"
                className="w-[100%] h-[100%] px-4 md:px-0 md:w-[555px] md:h-[600px]"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="flex flex-col w-[100%] pl-[24px] md:pl-[84px] justify-center"
            >
              <h1 className="font-semibold text-2xl md:text-3xl pb-[40px] pt-[40px]">
                {t("printing_page.printing_page_option1")}
              </h1>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("printing_page.printing_page_option1_desc")}
              </p>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("printing_page.printing_page_option1_desc2")}
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex w-[100%] w-[100%] justify-center mt-[400px] md:mt-[0px]">
          <motion.div
            ref={ref1}
            variants={boxVariant}
            initial="hidden"
            animate={control1}
            className="flex h-[600px] w-[1140px] mt-[140px] md:mt-[200px] flex-col-reverse md:flex-row"
          >
            <motion.div
              variants={item}
              className="flex flex-col w-[100%] pl-[24px] md:pr-[84px] justify-center"
            >
              {/* <div className={printing.referenceText2}> */}
              <h1 className="font-semibold text-2xl md:text-3xl pb-[40px] pt-[40px]">
                {t("printing_page.printing_page_option2")}
              </h1>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("printing_page.printing_page_option2_desc")}
              </p>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("printing_page.printing_page_option2_desc2")}
              </p>
              {/* </div> */}
            </motion.div>
            <motion.div variants={item} className="w-[100%] h-[100%]">
              <img
                src="/images/Offline-Insight-Decision.jpg"
                alt="react logo"
                className="w-[100%] h-[100%] px-4 md:px-0 md:w-[555px] md:h-[600px]"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="flex w-[100%] w-[100%] justify-center mb-[450px] md:mb-[200px]">
          <motion.div
            ref={ref2}
            variants={boxVariant}
            initial="hidden"
            animate={control2}
            className="flex h-[600px] w-[1140px] mt-[70px] md:mt-[200px] flex-col md:flex-row"
          >
            <motion.div variants={item} className="w-[100%] h-[100%]">
              <img
                src="/images/Offline-Insight-Combination.jpg"
                alt="react logo"
                className="w-[100%] h-[100%] md:w-[555px] md:h-[600px] px-4 md:px-0"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="flex flex-col w-[100%] pl-[24px] md:pl-[84px] justify-center"
            >
              <h1 className="font-semibold text-2xl md:text-3xl pb-[40px] pt-[40px]">
                {t("printing_page.printing_page_option3")}
              </h1>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("printing_page.printing_page_option3_desc")}
              </p>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("printing_page.printing_page_option3_desc2")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Printing;
