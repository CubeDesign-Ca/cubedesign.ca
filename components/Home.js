import styles from "../app/homePage.module.css";
import ChatbotIcon from "./Chatbot/ChatbotIcon";

import { React, useState, useEffect } from "react";
import Image from 'next/image';
import AnimatedBannerText from './3D/AnimatedBannerText';
import BrandValueCube from './3D/BrandValueCube';
import SecondCube from './3D/SecondCube'
import ThirdCube from './3D/ThirdCube'
import ReactDOM from 'react-dom/client';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import '../app/globals.css';

const Home = () => {
  const CUBE_CONTAINER_ID = "cube_container_";
  const ADD_CUBE_SCROLL_Y = 1600;

  const TOP = "top";
  const LEFT = "left";
  const RIGHT = "right";

  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);

  // Add the first cube
  const handleScroll = () => {
    let container = document.getElementById(CUBE_CONTAINER_ID + "1")
    if (window.scrollY >= ADD_CUBE_SCROLL_Y && container.childElementCount == 0) {
      ReactDOM.createRoot(container).render(
        <BrandValueCube prop_id="1" direction={TOP} img_src="images/3d_one_stop.png" updateCurStage={updateCurStage}/>
      );
    }
  };

  // Handle scroll event to add the first cube
  useEffect(() => {  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateCurStage = (newValue) => {
    console.log(newValue == LEFT);
    if (newValue == LEFT) {
      let container = document.getElementById(CUBE_CONTAINER_ID + "2")
      if (container.childElementCount == 0) {
        ReactDOM.createRoot(container).render(
          <BrandValueCube prop_id="2" direction={LEFT} img_src="images/3d_trust.png" updateCurStage={updateCurStage}/>
        );
      }
    } else if (newValue == RIGHT) {
      let container = document.getElementById(CUBE_CONTAINER_ID + "3")
      if (container.childElementCount == 0) {
        ReactDOM.createRoot(container).render(
          <BrandValueCube prop_id="3" direction={RIGHT} img_src="images/3d_after_sales.png" updateCurStage={updateCurStage}/>
        );
      }
    }
  }

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      {/* main img */}
      <div className={styles.imgContainer}>
        <div className={styles.mainTitle}>
          <figcaption>Cube Design & Communication</figcaption>
          <figcaption>makes Poster Design</figcaption>
          {/* <AnimatedBannerText /> */}
        </div>
      </div>
      <div className={styles.container}>
        {/* printing & digital */}
        <div className={`${styles.mainContainer}`}>
          <div className={`${styles.service}`}>
            {/* printing */}
            <Link href='/printing' legacyBehavior passHref>
              <div
                className={`${styles.card} ${styles.card1}`}
                style={{ backgroundImage: isCard1Hovered ? "url('/images/main-service-printing.jpg')" : "url('/images/main-service-printing-click.jpg')" }}
                onMouseEnter={() => setIsCard1Hovered(true)}
                onMouseLeave={() => setIsCard1Hovered(false)}
              >
            
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>Printing</h3>
                  <p className={styles.serviceDesc}>
                    Maximize your visual impact with our professional printing and installation services, including way finding and promotional products.
                  </p>
                </div>
              </div>
            </Link>
            <Link href='/digital' legacyBehavior passHref>
              <div
                className={`${styles.card} ${styles.card2}`}
                style={{ backgroundImage: isCard2Hovered ? "url('/images/main-service-digital.jpg')" : "url('/images/main-service-digital-click.jpg')" }}
                onMouseEnter={() => setIsCard2Hovered(true)}
                onMouseLeave={() => setIsCard2Hovered(false)}
              >
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>Digital</h3>
                  <p className={styles.serviceDesc}>
                    Establish your online presence with our full-service solutions tailored to enhance your business.
                  </p>
                </div> 
              </div>
            </Link>
          </div>
          <div className={styles.section}>
            <h3 className={styles.bvContainerTitle}>Brand Value</h3>
            <div className={styles.bvContainer}>
              <div className={styles.bvCard}>
                <div id="cube_container_1" className="h-[200px]">
                </div>
                <h4 className={styles.bvTitle}>One-Stop Solution</h4>
                <p className={styles.bvDesc}>
                  One place for all your needs full-service offerings spanning offline and online realms.
                </p>
              </div>
              <div className={styles.bvCard}>
                <div id="cube_container_2" className="h-[200px]">
                </div>
                <h4 className={styles.bvTitle}>Trustworthy &<br /> Professional Service</h4>
                <p className={styles.bvDesc}>
                  Reliable, professional services tailored to your needs, delivered promptly to elevate your business.
                </p>
              </div>
              <div className={styles.bvCard}>
                <div id="cube_container_3" className="h-[200px]">
                </div>
                <h4 className={styles.bvTitle}>After-Sales Supports</h4>
                <p className={styles.bvDesc}>
                  Robust after-sales support, ensuring our commitment to standing by services post-delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.client}>
        <div className={styles.clientList}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            style={{ height: "60px" }}
            spaceBetween={0}
            speed={2000} // 속도 조절
            loop={true}
            slidesPerView={3}
            slidesPerGroup={1}
            navigation={{
              // 네비게이션 적용, < >
              nextEl: ".swiper-button-next", // 다음 버튼 클래스명
              prevEl: ".swiper-button-prev", // 이전 버튼 클래스명
            }}
            autoplay={{
              "delay": 0,
              "disableOnInteraction": false
            }}
            onSlideNextTransitionStart={toggleSwitch}
            onSlidePrevTransitionStart={toggleSwitch}
            slidesOffsetBefore={150}
            slidesOffsetAfter={250}
          >
            {[
              "/images/client-1.png",
              "/images/client-2.png",
              "/images/client-3.png",
              "/images/client-4.png",
              "/images/client-5.png",
              "/images/client-6.png",
              "/images/client-8.png",
              "/images/client-9.png",
              "/images/client-10.png",
              "/images/client-11.png",
              "/images/client-12.png",
              "/images/client-13.png",
              "/images/client-14.png",
              "/images/client-15.png",
              "/images/client-16.png",
            ].map((image, index) => (
              <SwiperSlide
                key={index}
                className={styles.slide}
                style={{
                  backgroundImage: `url('${image}')`,
                  // backgroundSize: 'auto 60px',
                  // margin: '0 5px',
                }}
              ></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
