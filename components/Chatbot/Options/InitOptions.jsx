import "./ChatbotOpts.css";

import { useTranslation } from 'next-i18next'
import { motion, useAnimation } from 'framer-motion';
import { React, useEffect } from "react";


const Options = (props) => {
  const options = props.options;
  const { t } = useTranslation('common');

  const control = useAnimation();
  const variant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.0,
        delay: 0.3,
        staggerChildren: 0.8,
      },
    },
  }
  useEffect(() => {  
    control.start("visible");
  }, []);
  const buttonsMarkup = options.map((option) => (
    <motion.div
      animate={control}
      initial="hidden"
      variants={variant}
    >
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
    </motion.div>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
