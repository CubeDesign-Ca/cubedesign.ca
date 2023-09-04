import React from "react";

import "./InitOptions.css";

const Options = (props) => {
  const options = [
    {
      text: "Website Design & Development",
      handler: props.actionProvider.answer,
      id: 1,
    },
    { 
      text: "Admin Dashboard Implementation",
      handler: props.actionProvider.answer,
      id: 2 
    },
    { 
      text: "Branding Design",
      handler: props.actionProvider.answer,
      id: 3 
    },
    { 
      text: "Graphic Design",
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
