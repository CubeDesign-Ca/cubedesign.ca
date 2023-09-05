import React from "react";

import "./ChatbotOpts.css";

const Options = (props) => {
  const options = props.options;
  
  const handleOptionClick = (optionId) => {
    setClickedOption(optionId);
    const selectedOption = options.find((option) => option.id === optionId);
    selectedOption.handler(optionId);
  };

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} 
      // onClick={() => option.handler(option.id)} 
      onClick={() => props.actionProvider.answer(option.id)} 
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
