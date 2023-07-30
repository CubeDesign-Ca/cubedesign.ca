import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';
import Chatbot from 'react-chatbot-kit';
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

import 'react-chatbot-kit/build/main.css'

const ChatbotButton = () => {
  // const [isAnimating, setIsAnimating] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsAnimating((prev) => !prev);
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, []);

  // const imageUrl = isAnimating ? '/images/Chatbot_idle.gif' : '/images/Chatbot_static.png'; 

  // const handleClick = () => {
  //   alert('Button clicked!');
  //   // You can put any logic or actions you want here
  // };

  const icon_static = "../../images/Chatbot_static.png";
  const icon_idle = "/images/Chatbot_idle.gif";
  const icon_open = "/images/Chatbot_open.gif";
  const icon_closable = "/images/Chatbot_closable.png";
  const icon_close = "/images/Chatbot_close.gif";

  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(icon_static);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgSrc(isAnimating ? icon_static : icon_idle);
      setIsAnimating((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // const handleImageLoad = () => {
  //   // Prevent further animation after the first load
  //   setIsAnimating(false);
  // };

  // Modal.setAppElement('body');

  const toggleModal = () => {
    console.log("HELLOWORLD");
    console.log(isOpen);
    if (!isOpen) {
      setImgSrc(icon_open);
    }
    setIsOpen((prevIsOpen) => !prevIsOpen);
    // if (!isModalOpen) {
    //   // Reset the animation if the modal is not open
    //   setIsAnimating(false);
    // }
  };

  const closeChatbot = () => {
    // setIsModalOpen((prev) => !prev);
    // if (!isModalOpen) {
    //   // Reset the animation if the modal is not open
    //   setIsAnimating(false);
    // }
  };
  const chatwindowconfig ={
    width: "550px",
    height: "500px",
    floating: true,
};

  return (
    <div>      
      {isOpen && (<Modal
        // isOpen={isModalOpen}
        // onRequestClose={closeChatbot}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Modal"
        ariaHideApp={false} // This is important for Next.js to prevent a warning
        className="modal" // Add a custom class for the modal
        overlayClassName="modal-overlay" // Add a custom class for the overlay
        style={{
          content: {
            width: '400px',
            height: '600px',
            position: 'absolute',
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

      <button onClick={toggleModal} className="h-[70px] w-[70px] fixed bottom-[130px] right-20 cursor-pointer">

      {isOpen ? 
        <img src={icon_open} alt="open icon" /> : 
        (isAnimating ?
          (<img src={icon_idle} alt="idle icon" />) :
          (<img src={icon_static} alt="static icon" />))
      }

        {/* <img
          // src={isAnimating ? '/images/Chatbot_idle.gif' : '/images/Chatbot_static.png'}
          src={imgSrc}
          alt="Animated Button"
          // onLoad={handleImageLoad}
        /> */}
      </button>
    </div>
  );

  // return (
  //   <button onClick={handleClick} className="h-[75px] w-[75px] fixed bottom-[150px] right-20">
  //     <img src={imageUrl} alt="Chatbot Button" />
  //   </button>
  // );
};

export default ChatbotButton;
