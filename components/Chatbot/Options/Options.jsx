import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      imageSrc: "/images/logo.png",
      handler: props.actionProvider.answer,
      id: 1,
    },
    { 
      text: "What do you specialize in?", 
      handler: props.actionProvider.answer,
      id: 2 
    },
    { 
      text: "What are the rates of your services?", 
      handler: props.actionProvider.answer,
      id: 3 
    },
    // {
    //  text: "What type of warranty do you provide (on custom work)?",
    //   handler: props.actionProvider.answer,
    //  id: 4 
    // },
    // { 
    //   text: "Are you licensed and insured?", 
    //   handler: props.actionProvider.answer,
    //   id: 5 
    // },
    // { 
    //   text: "What are your terms and conditions?",
    //   handler: props.actionProvider.answer,
    //   id: 6 
    // },
    // { 
    //   text: "I want to reach out to the customer service.?",
    //   handler: props.actionProvider.answer,
    //   id: 7 
    // },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={() => option.handler(option.id)} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
