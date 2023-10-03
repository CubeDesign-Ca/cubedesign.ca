import React from "react";
import BotAvatar from "./BotAvatar";

import CustomMessage from './CustomMessage';

const toggleChatbot = () => {
  document.getElementById("chatbot_icon").click();
}

const config = {
  botName: "Chatbot",
  customComponents: {
    header: () => <div className="flex justify-between bg-opacity-30 bg-chatbot_bar p-4 h-[70px]">
        <img src='/images/logo_white.png' className='w-[40px] h-[40px]' />
        <img src='/images/Chatbot_Undo.png' className='w-[60px] h-[40px] cursor-pointer' onClick={toggleChatbot}/>
      </div>,
    botAvatar: (props) => <BotAvatar {...props} />,
  },
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
  // botChatMessage: (props) => <div className="bg-black" {...props} />,
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
};

export default config;
