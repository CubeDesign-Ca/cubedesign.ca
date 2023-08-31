import React from "react";

import "./InitOptions.css";

const Options = (props) => {
  const options = [
    {
      imgFlag: true,
      imgSrc: "/images/chatbot/service_printing.svg",
      text: "Printing",
      handler: props.actionProvider.answer,
      id: 1,
    },
    { 
      imgFlag: true,
      imgSrc: "/images/chatbot/service_digital.svg",
      text: "Digital",
      handler: props.actionProvider.answer,
      id: 2 
    },
    { 
      imgFlag: true,
      imgSrc: "/images/chatbot/service_digital.svg",
      text: "Complex",
      handler: props.actionProvider.answer,
      id: 3 
    },
    { 
      imgFlag: true,
      imgSrc: "/images/chatbot/service_idk.svg",
      text: "I don't know",
      handler: props.actionProvider.answer,
      id: 4
    },
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

  const handleOptionClick = (optionId) => {
    setClickedOption(optionId);
    const selectedOption = options.find((option) => option.id === optionId);
    selectedOption.handler(optionId);
  };

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} 
      onClick={() => option.handler(option.id)} 
      className={`${(option.imgFlag ? 'image-button' : 'option-button')}`}
    >
      {option.imgFlag && (
        <>
          <img
            src={option.imgSrc}
            alt="Logo"
            className="option-image"
          />
          {option.text != null && <span>{option.label}</span>}
        </>
      )}
      {!option.imgFlag && <span>{option.text}</span>}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
