"use client";

import {React, useState } from "react";
import printing from "../app/printing.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Printing = () => {
  const [print, setPrint] = useState(true);
  const [design, setDesign] = useState(false);
  const [product, setProduct] = useState(false);
  const [slide, setSlide] = useState(true);
  const [isclick, setclick] = useState(false);

  //oursercie

  const isPrint = (e) => {
    if(!isclick){
      e.target.parentNode.classList.add("bg-red-600");
      e.target.parentNode.nextElementSibling.classList.remove("bg-red-600");
      e.target.parentNode.nextElementSibling.nextElementSibling.classList.remove(
        "bg-red-600"
      );
      setPrint(true);
      setDesign(false);
      setProduct(false);
    }
    
  };
  const isDesign = (e) => {
    if(!isclick){
      e.target.parentNode.classList.add("bg-red-600");
      e.target.parentNode.nextElementSibling.classList.remove("bg-red-600");
      e.target.parentNode.previousElementSibling.classList.remove("bg-red-600");
      setPrint(false);
      setDesign(true);
      setProduct(false);
    }
    
  };
  const isProduct = (e) => {
    if(!isclick){
      e.target.parentNode.classList.add("bg-red-600");
      e.target.parentNode.previousElementSibling.classList.remove("bg-red-600");
      e.target.parentNode.previousElementSibling.previousElementSibling.classList.remove(
        "bg-red-600"
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

      e.target.firstElementChild.firstElementChild.classList.remove(printing.serviceTitle);
      e.target.firstElementChild.firstElementChild.classList.add(printing.serviceTitle1);

      e.target.firstElementChild.lastElementChild.classList.remove(printing.serviceDesc);
      e.target.firstElementChild.lastElementChild.classList.add(printing.serviceDesc1);

      if(e.target.firstElementChild.firstElementChild.textContent == "Large Format Printing"){
        e.target.style.backgroundImage="url('/images/offline-service-large-click.jpg')";
      }else if(e.target.firstElementChild.firstElementChild.textContent == "Digital Printing Service"){
        e.target.style.backgroundImage="url('/images/offline-service-digital-click.jpg')";
      }else{
        e.target.style.backgroundImage="url('/images/offline-service-installation-click.jpg')";
      }

      setclick(true)
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

    e.target.parentNode.parentNode.firstElementChild.firstElementChild.classList.remove(printing.serviceTitle1);
    e.target.parentNode.parentNode.firstElementChild.firstElementChild.classList.add(printing.serviceTitle);

    e.target.parentNode.parentNode.firstElementChild.lastElementChild.classList.remove(printing.serviceDesc1);
    e.target.parentNode.parentNode.firstElementChild.lastElementChild.classList.add(printing.serviceDesc);

    if(e.target.parentNode.parentNode.firstElementChild.firstElementChild.textContent == "Large Format Printing"){
      e.target.parentNode.parentNode.style.backgroundImage="url('/images/offline-service-large.jpg')";
    }else if(e.target.parentNode.parentNode.firstElementChild.firstElementChild.textContent == "Digital Printing Service"){
      e.target.parentNode.parentNode.style.backgroundImage="url('/images/offline-service-digital.jpg')";
    }else{
      e.target.parentNode.parentNode.style.backgroundImage="url('/images/offline-service-installation.jpg')";
    }

    setclick(false)
  };

  const clickMove = (e) => {
    e.target.parentNode.parentNode.click();
  }
  //slide

  const rightSlide = () => {
    setSlide(false);
  };

  const leftSlide = () => {
    setSlide(true);
  };

  return (
    <div>
      {/* bacground photo */}
      <div className={printing.bgimg}>
        <div className="h-full flex flex-col justify-end pl-20 pb-36">
          <h1 className="text-4xl font-semibold">Printing</h1>{" "}
          <p className="text-lg">
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
          <div className="h-12 mt-5">
            <h2>Our Service</h2>
          </div>
          <div className="w-7/12 flex justify-between border-solid border-b-8 border-red-600 mb-10">
            <div id="printing" className="w-2/6 bg-red-600" onClick={isPrint}>
              <p>Printing & Installation</p>
            </div>
            <div id="design" className="w-2/6" onClick={isDesign}>
              <p> wayfinding Design</p>
            </div>
            <div id="product" className="w-2/6" onClick={isProduct}>
              <p>Promotional Product</p>
            </div>
          </div>
          <div className="w-7/12 h-3/4 mt-5">
            {print ? (
              <div className="w-full h-full flex justify-between relative">
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{ 
                    backgroundImage: `url('/images/offline-service-large.jpg')` 
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText} onClick={clickMove} >
                    {" "}
                    <h1 className={printing.serviceTitle}>Large Format Printing</h1>
                    <p className={printing.serviceDesc}>Reliable printing services offering excellent prints and a seamless <br /> customer experience.</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{ 
                    backgroundImage: `url('/images/offline-service-digital.jpg')` 
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText}  onClick={clickMove}>
                    {" "}
                    <h1 className={printing.serviceTitle}>Digital Printing Service</h1>
                    <p className={printing.serviceDesc}>Trusted printing services for top-notch prints and a hassle-free, <br /> reliables experience.</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{ 
                    backgroundImage: `url('/images/offline-service-installation.jpg')` 
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText} onClick={clickMove}>
                    {" "}
                    <h1 className={printing.serviceTitle}>Installation Service</h1>
                    <p className={printing.serviceDesc}>Professional and reliable installation service for a hassle-free <br /> experience you can trust.</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
              </div>
            ) : design ? (
              <div className="w-full h-full flex justify-between relative">
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{ 
                    backgroundColor: `rgb(252 165 165)`
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText}>
                    {" "}
                    <p className="ml-5">Large Format Printing123</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex justify-between relative">
                <div
                  id="container"
                  className={printing.servicelist}
                  style={{ 
                    backgroundColor: `rgb(252 165 165)`
                  }}
                  onClick={isModal}
                >
                  <div className={printing.serviceText}>
                    {" "}
                    <p className="ml-5">Large Format Printing123</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
      {/* gallery */}
      <div className={printing.galleryBackground}>
  

        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      speed={1800}
      slidesPerView={4}
      slidesPerGroup= {3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={printing.slides}>Take a look <br /> our Gallery</SwiperSlide>
      <SwiperSlide className="bg-emerald-600">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-emerald-600">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-emerald-600">Slide 4</SwiperSlide>
      <SwiperSlide className="bg-emerald-600">Slide 5</SwiperSlide>
      <SwiperSlide className="bg-emerald-600">Slide 6</SwiperSlide>
      <SwiperSlide className="bg-emerald-600">Slide 7</SwiperSlide>
      ...
    </Swiper>
      </div>
      {/* reference */}
      <div className="w-full h-full">
      <div className={printing.referenceBox}>
        <div className={printing.referenceImg}
         style={{ 
          backgroundImage: `url('/images/Offline-Insight-BrandRecall.jpg')` 
        }}></div>
        <div className={printing.referenceText}>
          <h1></h1>
          <p>lorem:4qweoihasfiuhasfdipuhasilfuhbasifuhb
          </p>
        </div>
      </div>
      <div className={printing.referenceBox}>
      <div className={printing.referenceText}>
          <h1></h1>
          <p>lorem:4qweoihasfiuhasfdipuhasilfuhbasifuhb
          </p>
        </div>
        <div className={printing.referenceImg}
         style={{ 
          backgroundImage: `url('/images/Offline-Insight-Decision.jpg')` 
        }}></div>
        
      </div>
      <div className={printing.referenceBox}>
        <div className={printing.referenceImg}
         style={{ 
          backgroundImage: `url('/images/Offline-Insight-Combination.jpg')` 
        }}></div>
        <div className={printing.referenceText}>
          <h1></h1>
          <p>lorem:4qweoihasfiuhasfdipuhasilfuhbasifuhb
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Printing;
