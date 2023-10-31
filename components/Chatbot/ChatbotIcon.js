import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

import "react-chatbot-kit/build/main.css";

import { useTranslation } from "next-i18next";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";

import OptDataClass from "./Options/OptData";
import InitOptions from "./Options/InitOptions";

const ChatbotButton = () => {
  const { t } = useTranslation("common");

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
  const [mobile, setMobile] = useState(false);

  const [imgSrc, setImgSrc] = useState(icon_idle);

  const defaultTime = 8000;
  const animTime = 2000;
  const [time, setTime] = useState(0);

  const mobileMediumWidth = 768;

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
            setImgSrc(icon_anim);
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
      setImgSrc(icon_opening);
      let openingInterval = null;
      const startOpeningInterval = () => {
        openingInterval = setTimeout(() => {
          setImgSrc(icon_close);
          setIsOpening(false);
          setIsOpened(true);
          clearInterval(openingInterval);
        }, 2500);
      };
      startOpeningInterval();
    } else if (!animating && isOpened) {
      // Closing chatbot
      setIsOpened(false);

      setIsClosing(true);
      setImgSrc(icon_closing);
      let closingInterval = null;
      const startClosingInterval = () => {
        closingInterval = setTimeout(() => {
          initChatbot();
          clearInterval(closingInterval);
        }, 2500);
      };
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
  };

  config["initialMessages"] = [
    createChatBotMessage(t("chatbot.init1"), {}),
    createChatBotMessage(t("chatbot.init2"), { widget: "options" }),
  ];

  const optDataClass = new OptDataClass(t);
  config["widgets"] = [
    {
      widgetName: "options",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("initOptions")}
        />
      ),
    },
    {
      widgetName: "printing1",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("printing1")}
        />
      ),
    },
    {
      widgetName: "printing1a",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("printing1a")}
        />
      ),
    },
    {
      widgetName: "printing1a1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "printing1b1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "printing1c1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "printing1d1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "printing1e1",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("printing1e1")}
        />
      ),
    },
    {
      widgetName: "printing2a",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("printing2a")}
        />
      ),
    },
    {
      widgetName: "printing3a",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("printing3a")}
        />
      ),
    },
    {
      widgetName: "printing4a",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "digital1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("digital1")} />
      ),
    },
    {
      widgetName: "digital1a",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("digital1a")}
        />
      ),
    },
    {
      widgetName: "digital1a1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "digital1b1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "digital1c1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "digital1d1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "digital1e1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "digital2a",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("digital2a")}
        />
      ),
    },
    {
      widgetName: "digital3a",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("digital3a")}
        />
      ),
    },
    {
      widgetName: "digital4a",
      widgetFunc: (props) => (
        <InitOptions
          {...props}
          options={optDataClass.getOptData("digital4a")}
        />
      ),
    },
    {
      widgetName: "digital4c1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "digital5a",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "complex1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
    {
      widgetName: "idontknow1",
      widgetFunc: (props) => (
        <InitOptions {...props} options={optDataClass.getOptData("yesno")} />
      ),
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < mobileMediumWidth) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isOpened && (
        <Modal
          id="chatbot_modal"
          isOpen={isOpened}
          onRequestClose={toggleChatbot}
          contentLabel="Modal"
          ariaHideApp={false} // This is important for Next.js to prevent a warning
          className="modal-cube-chatbot" // Add a custom class for the modal
          overlayClassName="modal-overlay" // Add a custom class for the overlay
          style={{
            content: {
              /* desktop */
              // width: "400px",
              // height: "600px",
              // position: `${mobile ? "absolute" : "fixed"}`,
              // bottom: "230px",
              // right: "70px",
              /* mobile */
              width: `${mobile ? "100%" : "400px"}`,
              height: `${mobile ? "100%" : "600px"}`,
              position: "fixed",
              bottom: `${mobile ? "0px" : "230px"}`,
              right: `${mobile ? "0px" : "70px"}`,
              top: "auto",
              left: "auto",
              padding: "0px",
              border: "none",
              borderRadius: "0px",
              // background: "rgba(128, 128, 138, 1)",
              background: "rgba(204, 212, 224, 0.6)",
              backdropFilter: "blur(10px)",
              zIndex: "10",
            },
            overlay: {
              background: "transparent",
            },
          }}
          shouldCloseOnOverlayClick={false}
        >
          <Chatbot
            headerText="Cube Design Chatbot"
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </Modal>
      )}

      <button
        id="chatbot_icon"
        onClick={toggleChatbot}
        className="h-[70px] w-[70px] fixed bottom-[130px] right-20 cursor-pointer flex items-center justify-center z-10"
      >
        <img src={imgSrc} alt="chatbot icon" />
      </button>

      <div
        className="hidden"
        alt="load chatbot icons and this should be hidden"
      >
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
