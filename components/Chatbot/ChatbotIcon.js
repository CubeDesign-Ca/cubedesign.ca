import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Chatbot from 'react-chatbot-kit';
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

import 'react-chatbot-kit/build/main.css'

const ChatbotButton = () => {
  const icon_idle = "/images/Chatbot_idle.png";
  const icon_anim = "../../images/Chatbot_anim.gif";
  const icon_opening = "/images/Chatbot_opening.gif";
  const icon_close = "/images/Chatbot_close.png";
  const icon_closing = "/images/Chatbot_closing.gif";

  const [isIdle, setIsIdle] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [imgSrc, setImgSrc] = useState(icon_idle);

  const defaultTime = 8000;
  const animTime = 2000;
  const [time, setTime] = useState(0);

  useEffect(() => {
    let idleInterval = null;
    const toggleTime = () => {
      clearInterval(idleInterval);
      setTime(isIdle ? defaultTime : animTime);
      startIdleInterval();
    };

    const startIdleInterval = () => {
      idleInterval = setInterval(() => {
        
        // Idle time interval
        if (!isOpened) {
          setIsAnimating((prev) => !prev);
          setIsIdle((prev) => !prev);
          toggleTime();

          if (isIdle) {
            setImgSrc(icon_idle);
          }

          if (isAnimating) {
            setImgSrc(icon_anim)
          }
          if ((isIdle || isAnimating) && isOpening) {
            // while animating the opening image ..
            setIsIdle(false);
            setIsAnimating(false);

          }
        } else {
          // while chatbot is opened ..
          clearInterval(idleInterval);
          setTime(1000);
          startIdleInterval();
        }
      }, time);
    };

    startIdleInterval();

    return () => clearInterval(idleInterval);  
  }, [imgSrc, time, isIdle, isAnimating, isOpening, isOpened]);

  const toggleChatbot = () => {
    // Check if chatbot is display the box opening or closing ..
    let animating = isOpening || isClosing;
    if (!animating && !isOpened) {
      // Opening chatbot
      setIsOpening(true);
      setImgSrc(icon_opening)
      let openingInterval = null;
      const startOpeningInterval = () => {
        openingInterval = setTimeout(() => {
          setImgSrc(icon_close);
          setIsOpening(false);
          setIsOpened(true);
          clearInterval(openingInterval);
        }, 2500);
      }
      startOpeningInterval();
    } else if (!animating && isOpened) {
      // Closing chatbot
      setIsClosing(true);
      setImgSrc(icon_closing);
      let closingInterval = null;
      const startClosingInterval = () => {
        closingInterval = setTimeout(() => {
          initChatbot();
          clearInterval(closingInterval);
        }, 2500);
      }
      startClosingInterval();
    }
  };

  const initChatbot = () => {
    setImgSrc(icon_idle);
    setIsOpened(false);
    setIsAnimating(false);
    setIsOpening(false);
    setIsClosing(false);
    setIsIdle(true);
  }

  return (
    <div>      
      {isOpened && (<Modal
        isOpen={isOpened}
        onRequestClose={toggleChatbot}
        contentLabel="Modal"
        ariaHideApp={false} // This is important for Next.js to prevent a warning
        className="modal" // Add a custom class for the modal
        overlayClassName="modal-overlay" // Add a custom class for the overlay
        style={{
          content: {
            width: '400px',
            height: '600px',
            position: 'fixed',
            top: 'auto',
            bottom: '230px',
            left: 'auto',
            right: '70px',
            padding: '0px',
            border: 'none',
            borderRadius: '0px',
            background: 'rgba(204, 212, 224, 0.6)',
            backdropFilter: 'blur(10px)',
            
          },
          overlay: {
            background: 'transparent',
          },
        }}
        shouldCloseOnOverlayClick={false}>
        <Chatbot
          headerText='Cube Design Chatbot'
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser} />
          
      </Modal>)} 

      <button onClick={toggleChatbot} className="h-[70px] w-[70px] fixed bottom-[130px] right-20 cursor-pointer flex items-center justify-center">
        <img src={imgSrc} alt="chatbot icon" />
      </button>

      <div className="hidden" alt="load chatbot icons and this should be hidden">
        <img src={icon_idle} alt="chatbot icon" />
        <img src={icon_anim} alt="chatbot icon" />
        <img src={icon_opening} alt="chatbot icon" />
        <img src={icon_close} alt="chatbot icon" />
        <img src={icon_closing} alt="chatbot icon" />
      </div>

    </div>
  );
};

export default ChatbotButton;
