import React from "react";

import "./ChatbotOpts.css";

const Options = (props) => {
  const options = [
    {
      text: "Search Engine Optimization",
      handler: props.actionProvider.answer,
      id: 1,
    },
    { 
      text: "Content Management System",
      handler: props.actionProvider.answer,
      id: 2 
    },
    { 
      text: "Third-Party Authentication",
      handler: props.actionProvider.answer,
      id: 3 
    },
    { 
      text: "E-commerce Integration",
      handler: props.actionProvider.answer,
      id: 4
    },
    { 
      text: "All of the above",
      handler: props.actionProvider.answer,
      id: 5
    },
    { 
      text: "Back to previous menu", 
      handler: props.actionProvider.answer,
      id: 6 
    },
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
