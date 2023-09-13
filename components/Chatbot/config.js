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
      widgetName: "printing1b1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing1b1}/>,
    },
    {
      widgetName: "printing1c1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing1c1}/>,
    },
    {
      widgetName: "printing1d1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing1d1}/>,
    },
    {
      widgetName: "printing1e1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing1e1}/>,
    },
    {
      widgetName: "printing2a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing2a}/>,
    },
    {
      widgetName: "printing3a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing3a}/>,
    },
    {
      widgetName: "printing4a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.printing4a}/>,
    },
    {
      widgetName: "digital1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital1}/>,
    },
    {
      widgetName: "digital1a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital1a}/>,
    },
    {
      widgetName: "digital1a1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital1a1}/>,
    },
    {
      widgetName: "digital1b1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital1b1}/>,
    },
    {
      widgetName: "digital1c1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital1c1}/>,
    },
    {
      widgetName: "digital1d1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital1d1}/>,
    },
    {
      widgetName: "digital1e1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital1e1}/>,
    },
    {
      widgetName: "digital2a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital2a}/>,
    },
    {
      widgetName: "digital3a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital3a}/>,
    },
    {
      widgetName: "digital4a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital4a}/>,
    },
    {
      widgetName: "digital4c1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital4c1}/>,
    },
    {
      widgetName: "digital5a",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.digital5a}/>,
    },
    {
      widgetName: "complex1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.complex1}/>,
    },
    {
      widgetName: "idontknow1",
      widgetFunc: (props) => <InitOptions {...props} options={OptData.idontknow1}/>,
    },
  ],
};

export default config;
