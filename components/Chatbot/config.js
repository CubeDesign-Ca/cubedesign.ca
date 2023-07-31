import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./Options/Options";
import BotAvatar from "./BotAvatar";

import CustomMessage from './CustomMessage';

const config = {
  botName: "Chatbot",
  customComponents: {
    header: () => <div style={{ background: 'rgba(36, 71, 129, 0.3)', padding: "15px", height: '70px' }}>
      <img src='/images/logo_white.png' className='w-[40px] h-[40px]' />
      </div>,
    botAvatar: (props) => <BotAvatar {...props} />,
    // botChatMessage: (props) => <div />,
  },
  initialMessages: [
    // createChatBotMessage(`Hi, there! Having a hard time to find what you need? Let me help you!`, {
    // }),
    // createChatBotMessage(`Please select you are interested!`, {
    //   widget: "options",
    // }),
  ],
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "white",
      fontColor: "black",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "black",
    },
  },
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
