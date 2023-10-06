

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../app/homePage.module.css";
import { React, useState, useEffect } from "react";

const CompanyBanner = (props) => {
    
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  
    return (
        <div className={styles.clientList}>
            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            style={{ 
                height: "60px",
            }}
            spaceBetween={0}
            speed={50000}
            loop={true}
            slidesPerView={"auto"}
            slidesPerGroup={1}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
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
                props.img,
                props.img,
                props.img,
            ].map((image, index) => (
                <SwiperSlide
                key={index}
                style={{
                    width: "auto",
                    margin: '0 70px'
                }}
                ><img style={{height:"60px"}} src={image}/></SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
};

export default CompanyBanner;
