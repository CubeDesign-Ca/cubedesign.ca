"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { React, useState, useEffect, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import printing from "../app/printing.module.css";
import "../app/printing.module.css";

const Printing = () => {
  const [print, setPrint] = useState(true);
  const [design, setDesign] = useState(false);
  const [product, setProduct] = useState(false);
  const [slide, setSlide] = useState(true);
  const [isclick, setclick] = useState(false);

  //oursercie

  const isPrint = (e) => {
    if (!print && !isclick) {
      e.target.parentNode.classList.remove(printing.serviceComponentBox1);
      e.target.parentNode.classList.add(printing.serviceComponentBox);
      e.target.parentNode.nextElementSibling.classList.remove(
        printing.serviceComponentBox
      );
      e.target.parentNode.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );
      e.target.parentNode.nextElementSibling.nextElementSibling.classList.value =
        "";
      e.target.parentNode.nextElementSibling.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );
      setPrint(true);
      setDesign(false);
      setProduct(false);
    }
  };
  const isDesign = (e) => {
    if (!design && !isclick) {
      e.target.parentNode.classList.remove(printing.serviceComponentBox1);
      e.target.parentNode.classList.add(printing.serviceComponentBox);
      e.target.parentNode.nextElementSibling.classList.remove(
        printing.serviceComponentBox
      );
      e.target.parentNode.nextElementSibling.classList.add(
        printing.serviceComponentBox1
      );
      e.target.parentNode.previousElementSibling.classList.remove(
        printing.serviceComponentBox
      );
      e.target.parentNode.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );
      setPrint(false);
      setDesign(true);
      setProduct(false);
    }
  };
  const isProduct = (e) => {
    if (!product && !isclick) {
      e.target.parentNode.classList.remove(printing.serviceComponentBox1);
      e.target.parentNode.classList.add(printing.serviceComponentBox);

      e.target.parentNode.previousElementSibling.classList.value = "";
      e.target.parentNode.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );

      e.target.parentNode.previousElementSibling.previousElementSibling.classList.value =
        "";
      e.target.parentNode.previousElementSibling.previousElementSibling.classList.add(
        printing.serviceComponentBox1
      );

      setPrint(false);
      setDesign(false);
      setProduct(true);
    }
  };

  // service list

  const isModal = (e) => {
    if (e.target.id == "container") {
      e.target.classList.remove(printing.servicelist);
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

      if (
        e.target.firstElementChild.firstElementChild.textContent ==
        "Large Format Printing"
      ) {
        e.target.style.backgroundImage =
          "url('/images/offline-service-large-click.jpg')";
      } else if (
        e.target.firstElementChild.firstElementChild.textContent ==
        "Digital Printing Service"
      ) {
        e.target.style.backgroundImage =
          "url('/images/offline-service-digital-click.jpg')";
      } else if (
        e.target.firstElementChild.firstElementChild.textContent ==
        "Installation Service"
      ) {
        e.target.style.backgroundImage =
          "url('/images/offline-service-installation-click.jpg')";
      } else if (
        e.target.firstElementChild.firstElementChild.textContent ==
        "Directional Signage Design"
      ) {
        e.target.style.backgroundImage =
          "url('/images/offline-service-wayfinding-click.jpg')";
      } else {
        e.target.style.backgroundImage =
          "url('/images/offline-service-promotional-click.jpg')";
      }

      setclick(true);
    }
  };

  const exitModal = (e) => {
    e.target.parentNode.parentNode.classList.remove(printing.servicelist1);
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

    if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Large Format Printing"
    ) {
      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/offline-service-large.jpg')";
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Digital Printing Service"
    ) {
      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/offline-service-digital.jpg')";
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Installation Service"
    ) {
      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/offline-service-installation.jpg')";
    } else if (
      e.target.parentNode.parentNode.firstElementChild.firstElementChild
        .textContent == "Directional Signage Design"
    ) {
      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/offline-service-wayfinding.jpg')";
    } else {
      e.target.parentNode.parentNode.style.backgroundImage =
        "url('/images/offline-service-promotional.jpg')";
    }

    setclick(false);
  };

  const clickMove = (e) => {
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
    setIsOn(!isOn)};
  
    const spring = {
      ease: "linear",
      duration: 2,
    };

  return (
    <div>
      {/* bacground photo */}
      <div className={printing.bgimg}>
        <div className="h-full flex flex-col justify-end pl-20 pb-36">
          <h1 className={printing.mainHead}>Printing</h1>{" "}
          <p className={printing.mainText}>
            {" "}
            <br />
            Maximize your visual impact with our professional printing and{" "}
            <br /> installation services, including wayfinding and promotional
            products.
          </p>
        </div>
      </div>
      {/* our service */}
      <div className={printing.serviceBg}>
        <div className="flex flex-col items-center h-full">
          <div className={printing.serviceHeadBox}>
            <h2 className={printing.serviceHead}>Our Service</h2>
          </div>
          <div className={printing.serviceTitleBox}>
            <div
              id="printing"
              className={printing.serviceComponentBox}
              onClick={isPrint}
            >
              <p>Printing & Installation</p>
            </div>
            <div
              id="design"
              className={printing.serviceComponentBox1}
              onClick={isDesign}
            >
              <p> wayfinding Design</p>
            </div>
            <div
              id="product"
              className={printing.serviceComponentBox1}
              onClick={isProduct}
            >
              <p>Promotional Product</p>
            </div>
          </div>
          <div className={printing.servicelistBoxContainer}>
            {print ? (
              <div className={printing.servicelistBox}>
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{
                    backgroundImage: `url('/images/offline-service-large.jpg')`,
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText} onClick={clickMove}>
                    {" "}
                    <h1 className={printing.serviceTitle}>
                      Large Format Printing
                    </h1>
                    <p className={printing.serviceDesc}>
                      Reliable printing services offering excellent prints and a
                      seamless <br /> customer experience.
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
                </div>
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{
                    backgroundImage: `url('/images/offline-service-digital.jpg')`,
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText} onClick={clickMove}>
                    {" "}
                    <h1 className={printing.serviceTitle}>
                      Digital Printing Service
                    </h1>
                    <p className={printing.serviceDesc}>
                      Trusted printing services for top-notch prints and a
                      hassle-free, <br /> reliables experience.
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
                </div>
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{
                    backgroundImage: `url('/images/offline-service-installation.jpg')`,
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText} onClick={clickMove}>
                    {" "}
                    <h1 className={printing.serviceTitle}>
                      Installation Service
                    </h1>
                    <p className={printing.serviceDesc}>
                      Professional and reliable installation service for a
                      hassle-free <br /> experience you can trust.
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
                </div>
              </div>
            ) : design ? (
              <div className="w-full h-full flex justify-between relative">
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{
                    backgroundImage: `url('/images/offline-service-wayfinding.jpg')`,
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText} onClick={clickMove}>
                    {" "}
                    <h1 className={printing.serviceTitle}>
                      Directional Signage Design
                    </h1>
                    <p className={printing.serviceDesc}>
                      Streamline navagation effortlessly with out proven and
                      reliable <br /> wayfinding design solutions.
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
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex justify-between relative">
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{
                    backgroundImage: `url('/images/offline-service-promotional.jpg')`,
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText} onClick={clickMove}>
                    {" "}
                    <h1 className={printing.serviceTitle}>
                      Promotional Product & Merchandise
                    </h1>
                    <p className={printing.serviceDesc}>
                      Bring your branding to life with our expertise,
                      personalized <br /> approach, and creativity.
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* gallery */}
      <div className={printing.galleryBackground}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          style={{ height: "260px" }}
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
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </Swiper>
        
        <div className={printing.switch} data-on={isOn}>
            <motion.div className={printing.switch1} layout transition={spring} >1</motion.div>
            <motion.div className={printing.switch1} layout transition={spring}>2</motion.div>
          </div>
      </div>
      {/* reference */}
      <div className="w-full h-full">
        <div className={printing.referenceBox}>
          <div
            className={printing.referenceImg}
            style={{
              backgroundImage: `url('/images/Offline-Insight-BrandRecall.jpg')`,
            }}
          ></div>
          <div className={printing.referenceText}>
            <h1>Driving Higher Brand Recall</h1>
            <p>
              Did you know that print advertising achieves a remarkable 77%
              brand recall rate, surpassing digital platforms (Newsworks, 2020)?
              <br />
              <br />
              Maximize your brand's impact through print advertising, creating a
              lasting impression that resonates with your audience.
            </p>
          </div>
        </div>
        <div className={printing.referenceBox}>
          <div className={printing.referenceText}>
            <h1>Making Informed Decisions</h1>
            <p>
              Did you know that 82% of consumers trust print ads the most when
              making important purchase decisions? (Marketing Shepa survey)
              <br />
              <br />
              Explore how print advertising builds trust, empowers
              decision-making, and enables confident choices.
            </p>
          </div>
          <div
            className={printing.referenceImg}
            style={{
              backgroundImage: `url('/images/Offline-Insight-Decision.jpg')`,
            }}
          ></div>
        </div>
        <div className={printing.referenceBox}>
          <div
            className={printing.referenceImg}
            style={{
              backgroundImage: `url('/images/Offline-Insight-Combination.jpg')`,
            }}
          ></div>
          <div className={printing.referenceText}>
            <h1>An Unbeatable Combination</h1>
            <p>
              Did you know that combining print and digital advertising can lead
              to a 400% increase in effectiveness (Top Media Advertising)?
              <br />
              <br />
              Unleash the synergy of print and digital ads, reaching a wider
              audience for unprecedented online campaign success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Printing;
