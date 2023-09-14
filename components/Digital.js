"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { React, useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import printing from "../app/digital.module.css";

const Digital = () => {
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



  //oursercie

  const isWeb = (e) => {
    e.preventDefault();
    let target;
    if (e.target instanceof HTMLDivElement) {
      target = e.target.firstElementChild;
    } else {
      target = e.target;
    }
    if (!web && !isclick) {
      target.parentNode.classList.remove(printing.serviceComponentBox1);
      target.parentNode.classList.add(printing.serviceComponentBox);
      target.parentNode.nextElementSibling.classList.remove(
        printing.serviceComponentBox
      );
      target.parentNode.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );
      target.parentNode.nextElementSibling.nextElementSibling.classList.value =
        "";
      target.parentNode.nextElementSibling.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );
      target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.value =
        "";
      target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );
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
      target.parentNode.classList.remove(printing.serviceComponentBox1);
      target.parentNode.classList.add(printing.serviceComponentBox);
      target.parentNode.nextElementSibling.classList.remove(
        printing.serviceComponentBox
      );
      target.parentNode.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );
      target.parentNode.previousElementSibling.classList.remove(
        printing.serviceComponentBox
      );
      target.parentNode.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );
      target.parentNode.nextElementSibling.nextElementSibling.classList.value =
        "";
      target.parentNode.nextElementSibling.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );
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
      target.parentNode.classList.remove(printing.serviceComponentBox1);
      target.parentNode.classList.add(printing.serviceComponentBox);

      target.parentNode.previousElementSibling.classList.value = "";
      target.parentNode.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );

      target.parentNode.previousElementSibling.previousElementSibling.classList.value =
        "";
      target.parentNode.previousElementSibling.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );

      target.parentNode.nextElementSibling.classList.value = "";
      target.parentNode.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );

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
      target.parentNode.classList.remove(printing.serviceComponentBox1);
      target.parentNode.classList.add(printing.serviceComponentBox);

      target.parentNode.previousElementSibling.classList.value = "";
      target.parentNode.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );

      target.parentNode.previousElementSibling.previousElementSibling.classList.value =
        "";
      target.parentNode.previousElementSibling.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );

      target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.classList.value =
        "";
      target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );

      setWeb(false);
      setAdmin(false);
      setBranding(false);
      setGraphic(true);
    }
  };

  // service list

  const isModal = (e) => {
    e.preventDefault();

    // const box1 = document.getElementById("box1");

    // box1.className = "";
    // box1.classList.add(printing.servicelistVisile);

    if (e.target.id == "container") {
      if (!isSlide) {
        if (
          e.target.firstElementChild.firstElementChild.textContent ==
          "Search Engine Optimization"
        ) {
          e.target.nextElementSibling.className = "";
          e.target.nextElementSibling.classList.add(printing.servicelistVisile);

          e.target.nextElementSibling.nextElementSibling.className = "";
          e.target.nextElementSibling.nextElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.nextElementSibling.nextElementSibling.nextElementSibling.className =
            "";
          e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.style.backgroundImage =
            "url('/images/Online-Service-SEO.jpg')";

          setSlide1(!slide1);
        } else if (
          e.target.firstElementChild.firstElementChild.textContent ==
          "Content Management System"
        ) {
          e.target.nextElementSibling.className = "";
          e.target.nextElementSibling.classList.add(printing.servicelistVisile);

          e.target.nextElementSibling.nextElementSibling.className = "";
          e.target.nextElementSibling.nextElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.previousElementSibling.className = "";
          e.target.previousElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.style.backgroundImage =
            "url('/images/Online-Service-CMS.jpg')";

          setSlide2(!slide2);
        } else if (
          e.target.firstElementChild.firstElementChild.textContent ==
          "Third-Party Authentication"
        ) {
          e.target.previousElementSibling.className = "";
          e.target.previousElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.previousElementSibling.previousElementSibling.className = "";
          e.target.previousElementSibling.previousElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.nextElementSibling.className = "";
          e.target.nextElementSibling.classList.add(printing.servicelistVisile);

          e.target.style.backgroundImage =
            "url('/images/Online-Service-OAuth.jpg')";
          setSlide3(!slide3);
        } else if (
          e.target.firstElementChild.firstElementChild.textContent ==
          "E-commerce Intergration"
        ) {
          e.target.previousElementSibling.className = "";
          e.target.previousElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.previousElementSibling.previousElementSibling.className = "";
          e.target.previousElementSibling.previousElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.previousElementSibling.previousElementSibling.previousElementSibling.className =
            "";
          e.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.add(
            printing.servicelistVisile
          );

          e.target.style.backgroundImage =
            "url('/images/Online-Service-Ecommerce.jpg')";
          setSlide4(!slide4);
        } else if (
          e.target.firstElementChild.firstElementChild.textContent ==
          "Admin Dashboard Implementation"
        ) {
          e.target.style.backgroundImage =
            "url('/images/Online-Service-Admin.jpg')";
          setSlide5(!slide5);
        } else if (
          e.target.firstElementChild.firstElementChild.textContent ==
          "Visual Identity Design"
        ) {
          setSlide6(!slide6);
        } else if (
          e.target.firstElementChild.firstElementChild.textContent ==
          "Poster Design"
        ) {
          setSlide7(!slide7);
          e.target.nextElementSibling.className = "";
          e.target.nextElementSibling.classList.add(printing.servicelistVisile);
        } else if (
          e.target.firstElementChild.firstElementChild.textContent ==
          "Menu Design"
        ) {
          setSlide8(!slide8);
          e.target.previousElementSibling.className = "";
          e.target.previousElementSibling.classList.add(
            printing.servicelistVisile
          );
        }

        e.target.className = "";
        e.target.classList.add(printing.servicelist1);

        e.target.firstElementChild.classList.remove(printing.serviceText);
        e.target.firstElementChild.classList.add(printing.serviceText1);

        e.target.lastElementChild.classList.remove(printing.modalExit);
        e.target.lastElementChild.classList.add(printing.modalExit1);

        e.target.firstElementChild.firstElementChild.classList.remove(
          printing.serviceTitle
        );
        e.target.firstElementChild.firstElementChild.classList.add(
          printing.serviceTitle1
        );

        e.target.firstElementChild.lastElementChild.classList.remove(
          printing.serviceDesc
        );
        e.target.firstElementChild.lastElementChild.classList.add(
          printing.serviceDesc1
        );

        setclick(true);
        setIsSlide(!isSlide);
      }
    }
  };

  const exitModal = (e) => {
    e.preventDefault();

    if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Search Engine Optimization"
    ) {
      e.target.parentNode.parentNode.nextElementSibling.className = "";
      e.target.parentNode.parentNode.nextElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className =
        "";
      e.target.parentNode.parentNode.nextElementSibling.nextElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.className =
        "";
      e.target.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/Online-Service-SEO.jpg')";

      setSlide1(!slide1);
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Content Management System"
    ) {
      e.target.parentNode.parentNode.nextElementSibling.className = "";
      e.target.parentNode.parentNode.nextElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className =
        "";
      e.target.parentNode.parentNode.nextElementSibling.nextElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.previousElementSibling.className = "";
      e.target.parentNode.parentNode.previousElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/Online-Service-CMS.jpg')";
      setSlide2(!slide2);
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Third-Party Authentication"
    ) {
      e.target.parentNode.parentNode.nextElementSibling.className = "";
      e.target.parentNode.parentNode.nextElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.previousElementSibling.className = "";
      e.target.parentNode.parentNode.previousElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.className =
        "";
      e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/Online-Service-OAuth.jpg')";
      setSlide3(!slide3);
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "E-commerce Intergration"
    ) {
      e.target.parentNode.parentNode.previousElementSibling.className = "";
      e.target.parentNode.parentNode.previousElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.className =
        "";
      e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.className =
        "";
      e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.classList.add(
        printing.servicelist
      );

      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/Online-Service-Ecommerce.jpg')";
      setSlide4(!slide4);
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Admin Dashboard Implementation"
    ) {
      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/Online-Service-Admin.jpg')";
      setSlide5(!slide5);
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Visual Identity Design"
    ) {
      setSlide6(!slide6);
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Poster Design"
    ) {
      setSlide7(!slide7);
      e.target.parentNode.parentNode.nextElementSibling.className = "";
      e.target.parentNode.parentNode.nextElementSibling.classList.add(
        printing.servicelist
      );
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Menu Design"
    ) {
      setSlide8(!slide8);
      e.target.parentNode.parentNode.previousElementSibling.className = "";
      e.target.parentNode.parentNode.previousElementSibling.classList.add(
        printing.servicelist
      );
    }

    e.target.parentNode.parentNode.className = "";
    e.target.parentNode.parentNode.classList.add(printing.servicelist);

    e.target.parentNode.parentNode.firstElementChild.classList.remove(
      printing.serviceText1
    );
    e.target.parentNode.parentNode.firstElementChild.classList.add(
      printing.serviceText
    );
    e.target.parentNode.classList.remove(printing.modalExit1);
    e.target.parentNode.classList.add(printing.modalExit);

    e.target.parentNode.parentNode.firstElementChild.firstElementChild.classList.remove(
      printing.serviceTitle1
    );
    e.target.parentNode.parentNode.firstElementChild.firstElementChild.classList.add(
      printing.serviceTitle
    );

    e.target.parentNode.parentNode.firstElementChild.lastElementChild.classList.remove(
      printing.serviceDesc1
    );
    e.target.parentNode.parentNode.firstElementChild.lastElementChild.classList.add(
      printing.serviceDesc
    );

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
          <h1 className={printing.mainHead}>Digital</h1>
          <p className={printing.mainText}>
            Design, develop, and launch custom websites and web applications
            with a focus on user experience to help businesses thrive online.
          </p>
        </div>
      </div>
      {/* our service */}
      <div className={printing.serviceBg}>
        <div className={printing.serviceBgBox}>
          <div className={printing.serviceHeadBox}>
            <h2 className={printing.serviceHead}>Our Service</h2>
          </div>
          <div className={printing.serviceBox}>
            <div className={printing.serviceTitleBox}>
              <div
                id="web"
                className={printing.serviceComponentBox}
                onClick={isWeb}
              >
                <p>
                  Website Design
                  <br />& Development
                </p>
              </div>
              <div
                id="admin"
                className={printing.serviceComponentBox1}
                onClick={isAdmin}
              >
                <p>
                  Admin Dashboard
                  <br />
                  Implementation
                </p>
              </div>
              <div
                id="branding"
                className={printing.serviceComponentBox1}
                onClick={isBranding}
              >
                <p>Branding Design</p>
              </div>
              <div
                id="graphic"
                className={printing.serviceComponentBox1}
                onClick={isGraphic}
              >
                <p>Graphic Design</p>
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
                      className={printing.serviceText}
                      onClick={clickMove}
                    >
                      {" "}
                      <h1 className={printing.serviceTitle}>
                        Search Engine Optimization
                      </h1>
                      <p className={printing.serviceDesc}>
                        Enhance your website's visibility and increase traffic
                        by improving its ranking in search results, including
                        keyword research.
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
                        Content Management System
                      </h1>
                      <p className={printing.serviceDesc}>
                        Easily manage your website's content with integrated
                        Content Management System, designed to empower
                        non-technical users.
                        <br />
                        <br />
                        *Wix. Shopify, WordPress, Webflow, etc.
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
                        Third-Party Authentication
                      </h1>
                      <p className={printing.serviceDesc}>
                        Make logging in easier and secure by using third-party
                        authentication(OAuth) to verify user identity.
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
                        E-commerce Intergration
                      </h1>
                      <p className={printing.serviceDesc}>
                        Add online shopping capabilities to your website,
                        streamlining online transactions and generating revenue
                        through features such as payment gateways and shopping
                        carts.
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
                        Admin Dashboard Implementation
                      </h1>
                      <p className={printing.serviceDesc}>
                        Improve website management with a centralized Admin
                        Dashboard, allowing easy management of user accounts,
                        content, and analytics for better workflow and
                        decision-making.
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
                        Visual Identity Design
                      </h1>
                      <p className={printing.serviceDesc}>
                        Build recognition and credibility for your business by
                        creating a unique visual identity through branding
                        design.
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
                      <h1 className={printing.serviceTitle}>Poster Design</h1>
                      <p className={printing.serviceDesc}>
                        Capture attention and convey your message with our
                        visually stunning poster design services, tailored to
                        meet your unique needs and objectives.
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
                      <h1 className={printing.serviceTitle}>Menu Design</h1>
                      <p className={printing.serviceDesc}>
                        Design an attractive and user-friendly menu that
                        highlights your offerings, making it easy for customers
                        to select and order their desired products or services.
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
              Elevating Conversions through Superior User Experience
            </h1>
            <p className={printing.referenceTextStyle}>
              Did you know that a superior user experience has the potential to
              generate a 400% higher conversion rate (Forrester)?
            </p>
            <p className={printing.referenceTextStyle}>
              Boost conversions with a user-centric website that delivers
              optimized functionality, guiding visitors towards desired actions.
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
                Building Trust through Website Design
              </h1>
              <p className={printing.referenceTextStyle}>
                Did you know that 75% of consumers judge a company's credibility
                based on its website design? (Kinesis)
              </p>
              <p className={printing.referenceTextStyle}>
                Create a visually appealing and credible website, making a
                positive and lasting impression with professionalism and
                authenticity.
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
              Fueling Growth through Strategic Branding
            </h1>
            <p className={printing.referenceTextStyle}>
              Did you know that branding is considered critical for driving
              growth by 77% of marketing leaders (B2B Marketing Leaders Report)?
            </p>
            <p className={printing.referenceTextStyle}>
              Differentiate and grow your business with our strategic branding
              solutions that define a unique value proposition, fostering
              long-term loyalty.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Digital;
