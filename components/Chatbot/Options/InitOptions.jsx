import React from "react";

import "./ChatbotOpts.css";

import { useTranslation } from 'next-i18next'

const Options = (props) => {
  const options = props.options;
  const { t } = useTranslation('common');

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} 
      onClick={() => props.actionProvider.answer(option.id, t)} 
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
