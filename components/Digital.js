"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { React, useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import printing from "../app/digital.module.css";
// import printing from "../app/printing.module.css";
import { useTranslation } from "next-i18next";
import { IoIosArrowDown } from "react-icons/io";

const Digital = () => {
  const { t } = useTranslation("common");

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
  const [modalExit1, setModalExit1] = useState(true);
  const [modalExit2, setModalExit2] = useState(true);
  const [modalExit3, setModalExit3] = useState(true);
  const [modalExit4, setModalExit4] = useState(true);
  const [isMobile, setMobile] = useState(false);

  let smallPhoto;
  let bigPhoto;
  let smallTextBox;
  let bigTextBox;
  let w;
  let smallPhotomobilew;
  let smallPhotomobileh;
  let bigPhotomobilew;
  let bigPhotomobileh;

  if (typeof window !== "undefined") {
    w = window.innerWidth;

    smallPhotomobilew = 360;
    smallPhotomobileh = 150;
    bigPhotomobilew = 360;
    bigPhotomobileh = 330;
    if (w > 1050) {
      smallPhoto = 263;
      bigPhoto = 1140;
      smallTextBox = 263;
      bigTextBox = 750;
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
      console.log("handleresize:", isMobile);
    } else {
      setMobile(false);
      console.log("handleresize:", isMobile);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.innerWidth < 768) {
      console.log("isMobile : true");
      setMobile(true);
    } else {
      console.log("isMobile: false");
      setMobile(false);
    }
  }, []);

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
      pNode.previousElementSibling.classList.remove(
        printing.serviceComponentBox
      );
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

      pes.previousElementSibling.classList.value = "";
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

      ppes.classList.value = "";
      ppes.classList.add(printing.serviceComponentBox1);

      ppes.previousElementSibling.classList.value = "";
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

        w = window.innerWidth;

        if (ffec.textContent == t("digital_page.img_icon_seo")) {
          let nnes = nes.nextElementSibling;

          if (w < 768) {
            // fec.firstElementChild.style.display = "none";
            // fec.lastElementChild.style.display = "none";
          } else {
            nes.className = "";
            nes.classList.add(printing.servicelistVisile);
            nnes.className = "";
            nnes.classList.add(printing.servicelistVisile);
            nnes.nextElementSibling.className = "";
            nnes.nextElementSibling.classList.add(printing.servicelistVisile);
          }

          target.style.backgroundImage =
            "url('/images/Online-Service-SEO.jpg')";

          setModalExit1(false);
          setSlide1(!slide1);
        } else if (ffec.textContent == t("digital_page.img_icon_cms")) {
          let nnes = nes.nextElementSibling;

          if (w < 768) {
            // fec.firstElementChild.style.display = "none";
            // fec.lastElementChild.style.display = "none";
          } else {
            nes.className = "";
            nes.classList.add(printing.servicelistVisile);
            nnes.className = "";
            nnes.classList.add(printing.servicelistVisile);
            pes.className = "";
            pes.classList.add(printing.servicelistVisile);
          }

          target.style.backgroundImage =
            "url('/images/Online-Service-CMS.jpg')";

          setModalExit1(false);
          setSlide2(!slide2);
        } else if (ffec.textContent == t("digital_page.img_icon_tpa")) {
          let ppes = pes.previousElementSibling;

          if (w < 768) {
            // fec.firstElementChild.style.display = "none";
            // fec.lastElementChild.style.display = "none";
          } else {
            pes.className = "";
            pes.classList.add(printing.servicelistVisile);
            ppes.className = "";
            ppes.classList.add(printing.servicelistVisile);
            nes.className = "";
            nes.classList.add(printing.servicelistVisile);
          }

          target.style.backgroundImage =
            "url('/images/Online-Service-OAuth.jpg')";

          setModalExit1(false);
          setSlide3(!slide3);
        } else if (ffec.textContent == t("digital_page.img_icon_eci")) {
          let ppes = pes.previousElementSibling;

          if (w < 768) {
            // fec.firstElementChild.style.display = "none";
            // fec.lastElementChild.style.display = "none";
          } else {
            pes.className = "";
            pes.classList.add(printing.servicelistVisile);
            ppes.className = "";
            ppes.classList.add(printing.servicelistVisile);
            ppes.previousElementSibling.className = "";
            ppes.previousElementSibling.classList.add(
              printing.servicelistVisile
            );
          }

          target.style.backgroundImage =
            "url('/images/Online-Service-Ecommerce.jpg')";

          setModalExit1(false);
          setSlide4(!slide4);
        } else if (ffec.textContent == t("digital_page.img_icon_adi")) {
          target.style.backgroundImage =
            "url('/images/Online-Service-Admin.jpg')";
          if (w < 768) {
            // fec.firstElementChild.style.display = "none";
            // fec.lastElementChild.style.display = "none";
            setModalExit2(false);
          }
          setSlide5(!slide5);
        } else if (ffec.textContent == t("digital_page.img_icon_vid")) {
          if (w < 768) {
            // fec.firstElementChild.style.display = "none";
            // fec.lastElementChild.style.display = "none";
            setModalExit3(false);
          }
          setSlide6(!slide6);
        } else if (ffec.textContent == t("digital_page.img_icon_pd")) {
          if (w < 768) {
            // fec.firstElementChild.style.display = "none";
            // fec.lastElementChild.style.display = "none";
            setModalExit4(false);
          } else {
            nes.className = "";
            nes.classList.add(printing.servicelistVisile);
          }
          setSlide7(!slide7);
        } else if (ffec.textContent == t("digital_page.img_icon_md")) {
          if (w < 768) {
            // fec.firstElementChild.style.display = "none";
            // fec.lastElementChild.style.display = "none";
            setModalExit4(false);
          } else {
            pes.className = "";
            pes.classList.add(printing.servicelistVisile);
          }
          setSlide8(!slide8);
        }

        target.className = "";
        target.classList.add(printing.servicelist1);

        if (w > 768) {
          fec.classList.remove(printing.serviceText);
          fec.classList.add(printing.serviceText1);
          fec.classList.remove(printing.serviceTextLg);

          ffec.classList.remove(printing.serviceTitle);
          ffec.classList.add(printing.serviceTitle1);
        } else {
          if (
            fec.firstElementChild.textContent == t("digital_page.img_icon_adi")
          ) {
            fec.classList.remove(printing.serviceTextLg);
            fec.classList.add(printing.serviceTextM);

            fec.lastElementChild.classList.add(printing.serviceDescM);
          } else {
            fec.classList.remove(printing.serviceText);
            fec.classList.add(printing.serviceTextM);

            fec.lastElementChild.classList.add(printing.serviceDescM);
          }
        }

        target.lastElementChild.classList.remove(printing.modalExit);
        target.lastElementChild.classList.add(printing.modalExit1);

        fec.lastElementChild.classList.remove(printing.serviceDesc);
        if (w > 768) fec.lastElementChild.classList.add(printing.serviceDesc1);
        else fec.getElementsByTagName("svg")[0].style.display = "none";

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
    if (ffec.textContent == t("digital_page.img_icon_seo")) {
      let nnes = nes.nextElementSibling;

      if (w < 768) {
        fec.getElementsByTagName("svg")[0].style.display = "block";
        ffec.style.display = "block";
      }

      nes.className = "";
      nes.classList.add(printing.servicelist);

      nnes.className = "";
      nnes.classList.add(printing.servicelist);

      nnes.nextElementSibling.className = "";
      nnes.nextElementSibling.classList.add(printing.servicelist);

      ppNode.style.backgroundImage = "url('/images/Online-Service-SEO.jpg')";

      setModalExit1(true);
      setSlide1(!slide1);
    } else if (ffec.textContent == t("digital_page.img_icon_cms")) {
      let nnes = nes.nextElementSibling;

      if (w < 768) {
        fec.getElementsByTagName("svg")[0].style.display = "block";
        ffec.style.display = "block";
      }

      nes.className = "";
      nes.classList.add(printing.servicelist);

      nnes.className = "";
      nnes.classList.add(printing.servicelist);

      pes.className = "";
      pes.classList.add(printing.servicelist);

      ppNode.style.backgroundImage = "url('/images/Online-Service-CMS.jpg')";

      setModalExit1(true);
      setSlide2(!slide2);
    } else if (ffec.textContent == t("digital_page.img_icon_tpa")) {
      let ppes = pes.previousElementSibling;

      if (w < 768) {
        fec.getElementsByTagName("svg")[0].style.display = "block";
        ffec.style.display = "block";
      }

      nes.className = "";
      nes.classList.add(printing.servicelist);

      pes.className = "";
      pes.classList.add(printing.servicelist);

      ppes.className = "";
      ppes.classList.add(printing.servicelist);

      ppNode.style.backgroundImage = "url('/images/Online-Service-OAuth.jpg')";

      setModalExit1(true);
      setSlide3(!slide3);
    } else if (ffec.textContent == t("digital_page.img_icon_eci")) {
      let ppes = pes.previousElementSibling;

      if (w < 768) {
        fec.getElementsByTagName("svg")[0].style.display = "block";
        ffec.style.display = "block";
      }

      pes.className = "";
      pes.classList.add(printing.servicelist);

      ppes.className = "";
      ppes.classList.add(printing.servicelist);

      ppes.previousElementSibling.className = "";
      ppes.previousElementSibling.classList.add(printing.servicelist);

      ppNode.style.backgroundImage =
        "url('/images/Online-Service-Ecommerce.jpg')";

      setModalExit1(true);
      setSlide4(!slide4);
    } else if (ffec.textContent == t("digital_page.img_icon_adi")) {
      ppNode.style.backgroundImage = "url('/images/Online-Service-Admin.jpg')";
      if (w < 768) {
        fec.getElementsByTagName("svg")[0].style.display = "block";
        ffec.style.display = "block";
        setModalExit2(true);
      }
      setSlide5(!slide5);
    } else if (ffec.textContent == t("digital_page.img_icon_vid")) {
      if (w < 768) {
        fec.getElementsByTagName("svg")[0].style.display = "block";
        ffec.style.display = "block";
        setModalExit3(true);
      }
      setSlide6(!slide6);
    } else if (ffec.textContent == t("digital_page.img_icon_pd")) {
      if (w < 768) {
        fec.getElementsByTagName("svg")[0].style.display = "block";
        ffec.style.display = "block";
        setModalExit4(true);
      }
      setSlide7(!slide7);
      nes.className = "";
      nes.classList.add(printing.servicelist);
    } else if (ffec.textContent == t("digital_page.img_icon_md")) {
      if (w < 768) {
        fec.getElementsByTagName("svg")[0].style.display = "block";
        ffec.style.display = "block";
        setModalExit4(true);
      }
      setSlide8(!slide8);
      pes.className = "";
      pes.classList.add(printing.servicelist);
    }

    ppNode.className = "";
    ppNode.classList.add(printing.servicelist);

    fec.classList.remove(printing.serviceText1);

    if (ffec.textContent == t("digital_page.img_icon_adi")) {
      fec.classList.add(printing.serviceTextLg);
    } else {
      fec.classList.add(printing.serviceText);
    }

    pNode.classList.remove(printing.modalExit1);
    pNode.classList.add(printing.modalExit);

    ffec.classList.remove(printing.serviceTitle1);
    ffec.classList.add(printing.serviceTitle);

    fec.lastElementChild.classList.remove(printing.serviceDesc1);
    if (w > 768) {
      fec.lastElementChild.classList.add(printing.serviceDesc);
    } else {
      if (fec.firstElementChild.textContent == t("digital_page.img_icon_adi")) {
        ppNode.firstElementChild.classList.remove(printing.serviceTextM);
        ppNode.firstElementChild.classList.add(printing.serviceTextLg);

        ppNode.firstElementChild.lastElementChild.classList.remove(
          printing.serviceDescM
        );
      } else {
        ppNode.firstElementChild.classList.remove(printing.serviceTextM);
        ppNode.firstElementChild.classList.add(printing.serviceText);

        ppNode.firstElementChild.lastElementChild.classList.remove(
          printing.serviceDescM
        );
      }
    }

    ppNode.firstElementChild.lastElementChild.classList.add(
      printing.serviceDesc
    );

    setIsSlide(!isSlide);
    setclick(false);
  };

  const clickMove = (e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.click();
    if (w > 768) e.target.parentNode.click();
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
      <div className="hidden md:block">
        <div className={printing.bgimg}>
          <div className="absolute left-[30px] md:left-[10%] top-[430px]">
            <h1 className={printing.mainHead}>{t("digital_page.banner1")}</h1>
            <p className="flex flex-wrap box-content w-[300px] md:w-[550px] font-medium">
              {t("digital_page.banner2")}
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className={printing.bgimgMobile}>
          <div className="absolute left-[30px] md:left-[10%] top-[430px]">
            <h1 className={printing.mainHead}>{t("digital_page.banner1")}</h1>
            <p className="flex flex-wrap box-content w-[300px] md:w-[550px] font-medium">
              {t("digital_page.banner2")}
            </p>
          </div>
        </div>
      </div>
      {/* our service */}
      <div className={printing.serviceBg}>
        {/* <div className={printing.serviceBgBox}> */}
        <div className="flex w-[1140px] h-[2256px] md:h-[1106px] flex-col mt-[200px] items-center">
          <div className={printing.serviceHeadBox}>
            <h2 className={printing.serviceHead}>
              {t("digital_page.ourservice")}
            </h2>
          </div>
          {/* mobile */}
          <div className="block md:hidden w-[400px] h-[100px] flex flex-col pt-[50px]">
            <div className="block md:hidden w-[360px] h-[60px] flex justify-start border-b-8 border-solid border-[#C83832]">
              <div
                id="printing"
                className="block md:hidden w-[460px] h-[60px] flex items-center text-[18px] font-[400px] text-black font-semibold"
                onClick={isWeb}
              >
                <p>{t("digital_page.os_wd_mobile")}</p>
              </div>
            </div>
          </div>
          {/* <div className="w-[400px] h-[600px] mt-[20px] block md:hidden mb-[0px]"> */}
          <div
            className={`w-[400px] ${
              modalExit1 ? "h-[630px]" : "h-[810px]"
            } mt-[20px] block md:hidden mb-[0px]`}
          >
            <motion.div
              className={printing.servicelistBoxMobile}
              animate={{
                justifyContent: !slide1
                  ? "space-between"
                  : !slide2
                  ? "space-between"
                  : !slide3
                  ? "space-between"
                  : !slide4
                  ? "space-between"
                  : "space-between",
              }}
            >
              <motion.div
                id="container"
                className="w-[360px] h-[150px] flex relative mb-[10px]"
                style={{
                  backgroundImage: `url('/images/Online-Service-SEO.jpg')`,
                }}
                animate={{
                  // width: slide1 ? smallPhoto : bigPhoto,
                  width: slide1 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide1 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("digital_page.img_icon_seo")}
                  </h1>
                  <IoIosArrowDown className={printing.serviceArrow} />
                  {true && (
                    <p className={printing.serviceDesc}>
                      {t("digital_page.img_icon_seo_desc")}
                    </p>
                  )}
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
                  backgroundImage: `url('/images/Online-Service-CMS.jpg')`,
                }}
                animate={{
                  // width: slide2 ? smallPhoto : bigPhoto,
                  width: slide2 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide2 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("digital_page.img_icon_cms")}
                  </h1>
                  <IoIosArrowDown className={printing.serviceArrow} />
                  {true && (
                    <p className={printing.serviceDesc}>
                      {t("digital_page.img_icon_cms_desc")}
                      <br />
                      <br />
                      {t("digital_page.img_icon_cms_desc2")}
                    </p>
                  )}
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
                  backgroundImage: `url('/images/Online-Service-OAuth.jpg')`,
                }}
                animate={{
                  // width: slide3 ? smallPhoto : bigPhoto,
                  width: slide3 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide3 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("digital_page.img_icon_tpa")}
                  </h1>
                  <IoIosArrowDown className={printing.serviceArrow} />
                  {true && (
                    <p className={printing.serviceDesc}>
                      {t("digital_page.img_icon_tpa_desc")}
                    </p>
                  )}
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
                className="w-[360px] h-[150px] flex relative"
                style={{
                  backgroundImage: `url('/images/Online-Service-Ecommerce.jpg')`,
                }}
                animate={{
                  // width: slide4 ? smallPhoto : bigPhoto,
                  width: slide4 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide4 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("digital_page.img_icon_eci")}
                  </h1>
                  <IoIosArrowDown className={printing.serviceArrow} />
                  {true && (
                    <p className={printing.serviceDesc}>
                      {t("digital_page.img_icon_eci_desc")}
                    </p>
                  )}
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
          <div className="block md:hidden w-[400px] h-[100px] flex flex-col pt-[50px]">
            <div className="block md:hidden w-[360px] h-[60px] flex justify-start border-b-8 border-solid border-[#C83832]">
              <div
                id="printing"
                className="block md:hidden w-[460px] h-[60px] flex items-center text-[18px] font-[400px] text-black font-semibold"
                onClick={isAdmin}
              >
                <p>{t("digital_page.os_ai_mobile")}</p>
              </div>
            </div>
          </div>
          {/* <div className="w-[400px] h-[150px] mt-[20px] block md:hidden mb-[40px]"> */}
          <div
            className={`w-[400px] ${
              modalExit2 ? "h-[150px]" : "h-[330px]"
            } mt-[20px] block md:hidden mb-[0px]`}
          >
            <motion.div
              className={printing.servicelistBox}
              animate={{
                justifyContent: !slide5 ? "start" : "start",
              }}
            >
              <motion.div
                id="container"
                className="w-[360px] h-[150px] flex relative"
                style={{
                  backgroundImage: `url('/images/Online-Service-Admin.jpg')`,
                }}
                animate={{
                  // width: slide5 ? smallPhoto : bigPhoto,
                  width: slide5 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide5 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceTextLg} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("digital_page.img_icon_adi")}
                  </h1>
                  <IoIosArrowDown className={printing.serviceArrow} />
                  {true && (
                    <p className={printing.serviceDesc}>
                      {t("digital_page.img_icon_adi_desc")}
                    </p>
                  )}
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
          <div className="block md:hidden w-[400px] h-[100px] flex flex-col pt-[50px]">
            <div className="block md:hidden w-[360px] h-[60px] flex justify-start border-b-8 border-solid border-[#C83832]">
              <div
                id="printing"
                className="block md:hidden w-[260px] h-[60px] flex items-center text-[18px] font-[400px] text-black font-semibold"
                onClick={isBranding}
              >
                <p>{t("digital_page.os_branding_design")}</p>
              </div>
            </div>
          </div>
          {/* <div className="w-[400px] h-[150px] mt-[20px] block md:hidden mb-[40px]"> */}
          <div
            className={`w-[400px] ${
              modalExit3 ? "h-[150px]" : "h-[330px]"
            } mt-[20px] block md:hidden mb-[0px]`}
          >
            <motion.div
              className={printing.servicelistBox}
              animate={{
                justifyContent: !slide6 ? "start" : "start",
              }}
            >
              <motion.div
                id="container"
                className="w-[360px] h-[150px] flex relative"
                style={{
                  backgroundImage: `url('/images/Online-Service-Branding.jpg')`,
                }}
                animate={{
                  // width: slide6 ? smallPhoto : bigPhoto,
                  width: slide6 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide6 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("digital_page.img_icon_vid")}
                  </h1>
                  <IoIosArrowDown className={printing.serviceArrow} />
                  {true && (
                    <p className={printing.serviceDesc}>
                      {t("digital_page.img_icon_vid_desc")}
                    </p>
                  )}
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
          <div className="block md:hidden w-[400px] h-[100px] flex flex-col pt-[50px]">
            <div className="block md:hidden w-[360px] h-[60px] flex justify-start border-b-8 border-solid border-[#C83832]">
              <div
                id="printing"
                className="block md:hidden w-[260px] h-[60px] flex items-center text-[18px] font-[400px] text-black font-semibold"
                onClick={isGraphic}
              >
                <p>{t("digital_page.os_graphic_design")}</p>
              </div>
            </div>
          </div>
          <div
            className={`w-[400px] ${
              modalExit4 ? "h-[310px]" : "h-[490px]"
            } mt-[20px] block md:hidden mb-[40px]`}
          >
            <motion.div
              className={printing.servicelistBoxMobile}
              animate={{
                justifyContent: !slide7
                  ? "space-between"
                  : !slide8
                  ? "space-between"
                  : "space-between",
              }}
            >
              <motion.div
                id="container"
                className="w-[360px] h-[150px] flex relative mb-[10px]"
                style={{
                  backgroundImage: `url('/images/Online-Service-Poster.jpg')`,
                }}
                animate={{
                  // width: slide7 ? smallPhoto : bigPhoto,
                  width: slide7 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide7 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("digital_page.img_icon_pd")}
                  </h1>
                  <IoIosArrowDown className={printing.serviceArrow} />
                  {true && (
                    <p className={printing.serviceDesc}>
                      {t("digital_page.img_icon_pd_desc")}
                    </p>
                  )}
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
                className="w-[360px] h-[150px] flex relative"
                style={{
                  backgroundImage: `url('/images/Online-Service-Menu.jpg')`,
                  // marginLeft: "20px",
                }}
                animate={{
                  // width: slide8 ? smallPhoto : bigPhoto,
                  width: slide8 ? smallPhotomobilew : bigPhotomobilew,
                  height: slide8 ? smallPhotomobileh : bigPhotomobileh,
                }}
                onClick={isModal}
              >
                <div className={printing.serviceText} onClick={clickMove}>
                  {" "}
                  <h1 className={printing.serviceTitle}>
                    {t("digital_page.img_icon_md")}
                  </h1>
                  <IoIosArrowDown className={printing.serviceArrow} />
                  {true && (
                    <p className={printing.serviceDesc}>
                      {t("digital_page.img_icon_md_desc")}
                    </p>
                  )}
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
          {/* <div className={printing.serviceBox}> */}
          <div className="w-[1140px] h-[892px] flex flex-col items-center hidden md:block">
            {/* <div className={printing.serviceTitleBox}> */}
            <div className="w-[1140px] h-[72px] flex justify-between border-b-8 border-solid border-[#C83832]">
              <div
                id="web"
                // className={printing.serviceComponentBox}
                className="w-[380px] h-[65px] flex items-center justify-center text-[22px] bg-[#C83832] justify-center text-[25px] font-[400px] text-white"
                onClick={isWeb}
              >
                <p>
                  {t("digital_page.os_website_design")}
                  <br />
                  {t("digital_page.os_development")}
                </p>
              </div>
              <div
                id="admin"
                // className={printing.serviceComponentBox1}
                className="w-[380px] h-[65px] flex items-center justify-center text-[22px]"
                onClick={isAdmin}
              >
                <p>
                  {t("digital_page.os_admin_dashboard")}
                  <br />
                  {t("digital_page.os_implementation")}
                </p>
              </div>
              <div
                id="branding"
                // className={printing.serviceComponentBox1}
                className="w-[380px] h-[65px] flex items-center justify-center text-[22px]"
                onClick={isBranding}
              >
                <p>{t("digital_page.os_branding_design")}</p>
              </div>
              <div
                id="graphic"
                // className={printing.serviceComponentBox1}
                className="w-[380px] h-[65px] flex items-center justify-center text-[22px]"
                onClick={isGraphic}
              >
                <p>{t("digital_page.os_graphic_design")}</p>
              </div>
            </div>
            <div className={printing.servicelistBoxContainer}>
              {web ? (
                <motion.div
                  className={printing.servicelistBox}
                  animate={{
                    justifyContent: !slide1
                      ? "center"
                      : !slide2
                      ? "center"
                      : !slide3
                      ? "center"
                      : !slide4
                      ? "center"
                      : "space-between",
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
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("digital_page.img_icon_seo")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("digital_page.img_icon_seo_desc")}
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
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("digital_page.img_icon_cms")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("digital_page.img_icon_cms_desc")}
                        <br />
                        <br />
                        {t("digital_page.img_icon_cms_desc2")}
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
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("digital_page.img_icon_tpa")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("digital_page.img_icon_tpa_desc")}
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
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("digital_page.img_icon_eci")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("digital_page.img_icon_eci_desc")}
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
                    justifyContent: !slide5 ? "center" : "start",
                  }}
                >
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
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("digital_page.img_icon_adi")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("digital_page.img_icon_adi_desc")}
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
                    justifyContent: !slide6 ? "center" : "start",
                  }}
                >
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
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("digital_page.img_icon_vid")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("digital_page.img_icon_vid_desc")}
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
                    justifyContent: !slide7
                      ? "center"
                      : !slide8
                      ? "center"
                      : "start",
                  }}
                >
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
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("digital_page.img_icon_pd")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("digital_page.img_icon_pd_desc")}
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
                      className={printing.serviceTextDesktop}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        {t("digital_page.img_icon_md")}
                      </h1>
                      <p className={printing.serviceDesc}>
                        {t("digital_page.img_icon_md_desc")}
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
      <div className="pb-[200px]">
        <div className="flex w-[100%] justify-center pb-[25%] md:pb-[0%]">
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
                src="/images/Online-Insight-Elevating.jpg"
                alt="react logo"
                className="w-[100%] h-[100%] px-4 md:px-0 md:w-[555px] md:h-[600px]"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="flex flex-col w-[100%] pl-[24px] md:pl-[84px] justify-center"
            >
              <h1 className="font-semibold text-2xl md:text-3xl pb-[40px] pt-[40px]">
                {t("digital_page.digital_page_option1")}
              </h1>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("digital_page.digital_page_option1_desc")}
              </p>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("digital_page.digital_page_option1_desc2")}
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex w-[100%] justify-center mt-[400px] md:mt-[0px] pb-[10%] md:pb-[0%]">
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
                {t("digital_page.digital_page_option2")}
              </h1>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("digital_page.digital_page_option2_desc")}
              </p>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("digital_page.digital_page_option2_desc2")}
              </p>
              {/* </div> */}
            </motion.div>
            <motion.div variants={item} className="w-[100%] h-[100%]">
              <img
                src="/images/Online-Insight-Building.jpg"
                alt="react logo"
                className="w-[100%] h-[100%] px-4 md:px-0 md:w-[555px] md:h-[600px]"
              />
            </motion.div>
          </motion.div>
        </div>
        <div
          className="flex w-[100%] justify-center mb-[450px] md:mb-[200px]"
          style={{
            marginBottom: `200px`,
          }}
        >
          <motion.div
            ref={ref2}
            variants={boxVariant}
            initial="hidden"
            animate={control2}
            className="flex h-[600px] w-[1140px] mt-[70px] md:mt-[200px] flex-col md:flex-row"
          >
            <motion.div variants={item} className="w-[100%] h-[100%]">
              <img
                src="/images/Online-Insight-Fueling.jpg"
                alt="react logo"
                className="w-[100%] h-[100%] md:w-[555px] md:h-[600px] px-4 md:px-0"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="flex flex-col w-[100%] pl-[24px] md:pl-[84px] justify-center"
            >
              <h1 className="font-semibold text-2xl md:text-3xl pb-[40px] pt-[40px]">
                {t("digital_page.digital_page_option3")}
              </h1>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("digital_page.digital_page_option3_desc")}
              </p>
              <p className="text-xl pb-[20px] pr-[10px]">
                {t("digital_page.digital_page_option3_desc2")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
