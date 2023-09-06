import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import InitOptions from "./Options/InitOptions";
import Printing1 from "./Options/Printing1";
import Printing1a from "./Options/Printing1a";
import Printing1a1 from "./Options/Printing1a1";
import Printing1a2 from "./Options/Printing1a2";
import Printing1a3 from "./Options/Printing1a3";
import Printing1a4 from "./Options/Printing1a4";
import Printing1b from "./Options/Printing1b";
import Printing1c from "./Options/Printing1c";
import Printing1d from "./Options/Printing1d";
import Digital1 from "./Options/Digital1";
import Digital1a from "./Options/Digital1a";
import Digital1a1 from "./Options/Digital1a1";
import Digital1a2 from "./Options/Digital1a2";
import Digital1a3 from "./Options/Digital1a3";
import Digital1a4 from "./Options/Digital1a4";
import Digital1a5 from "./Options/Digital1a5";
import Digital1b from "./Options/Digital1b";
import Digital1c from "./Options/Digital1c";
import Digital1d from "./Options/Digital1d";
import Digital1d1 from "./Options/Digital1d1";
import Digital1e from "./Options/Digital1e";
import Complex1 from "./Options/Complex1";
import Idontknow1 from "./Options/Idontknow1";
import BotAvatar from "./BotAvatar";

import CustomMessage from './CustomMessage';

import OptData from './Options/OptData';

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
    createChatBotMessage(`Hi, there! Having a hard time to find what you need? Let me help you!`, {
    }),
    createChatBotMessage(`Please select you are interested!`, {
      widget: "options",
    }),
    // createChatBotMessage(`Great! Cube Design offers 3 services that provide years of expertise and knowledge.`, {
    //   widget: "printing1",
    // }),
    // createChatBotMessage(`We can help you to find out what you need for your business! Please select one of services in the below.`, {
    //   widget: "printing1a",
    // }),
    // NEED TO ADD MORE HERE
    // NEED TO ADD MORE HERE
    // NEED TO ADD MORE HERE
    // NEED TO ADD MORE HERE
    // NEED TO ADD MORE HERE
    // NEED TO ADD MORE HERE
    // NEED TO ADD MORE HERE
    // NEED TO ADD MORE HERE
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
      widgetFunc: (props) => <InitOptions {...props} options={OptData.initOptions}/>,
    },
    {
      widgetName: "printing1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing1}/>,
      // widgetFunc: (props) => <Printing1 {...props} />,
    },
    {
      widgetName: "printing1a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing1a}/>,
    },
    {
      widgetName: "printing1a1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing1a1}/>,
    },
    {
      widgetName: "printing1a2",
      widgetFunc: (props) => <Printing1a2 {...props} />,
    },
    {
      widgetName: "printing1a3",
      widgetFunc: (props) => <Printing1a3 {...props} />,
    },
    {
      widgetName: "printing1a4",
      widgetFunc: (props) => <Printing1a4 {...props} />,
    },
    {
      widgetName: "printing1b",
      widgetFunc: (props) => <Printing1b {...props} />,
    },
    {
      widgetName: "printing1c",
      widgetFunc: (props) => <Printing1c {...props} />,
    },
    {
      widgetName: "printing1a",
      widgetFunc: (props) => <Printing1d {...props} />,
    },
    {
      widgetName: "digital1",
      widgetFunc: (props) => <Digital1 {...props} />,
    },
    {
      widgetName: "digital1a",
      widgetFunc: (props) => <Digital1a {...props} />,
    },
    {
      widgetName: "digital1a1",
      widgetFunc: (props) => <Digital1a1 {...props} />,
    },
    {
      widgetName: "digital1a2",
      widgetFunc: (props) => <Digital1a2 {...props} />,
    },
    {
      widgetName: "digital1a3",
      widgetFunc: (props) => <Digital1a3 {...props} />,
    },
    {
      widgetName: "digital1a4",
      widgetFunc: (props) => <Digital1a4 {...props} />,
    },
    {
      widgetName: "digital1a5",
      widgetFunc: (props) => <Digital1a5 {...props} />,
    },
    {
      widgetName: "digital1b",
      widgetFunc: (props) => <Digital1b {...props} />,
    },
    {
      widgetName: "digital1c",
      widgetFunc: (props) => <Digital1c {...props} />,
    },
    {
      widgetName: "digital1d",
      widgetFunc: (props) => <Digital1d {...props} />,
    },
    {
      widgetName: "digital1d1",
      widgetFunc: (props) => <Digital1d1 {...props} />,
    },
    {
      widgetName: "digital1e",
      widgetFunc: (props) => <Digital1e {...props} />,
    },
    {
      widgetName: "complex1",
      widgetFunc: (props) => <Complex1 {...props} />,
    },
    {
      widgetName: "idontknow1",
      widgetFunc: (props) => <Idontknow1 {...props} />,
    },
  ],
};

export default config;
