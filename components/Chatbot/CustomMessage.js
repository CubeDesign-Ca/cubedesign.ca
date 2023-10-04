import { motion, useAnimation } from 'framer-motion';
import { React, useEffect } from "react";

const CustomMessage = (props) => {
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

  return (
    <motion.div
      animate={control}
      initial="hidden"
      variants={variant}
    >
      <img
        src='https://i.pinimg.com/originals/cf/da/fa/cfdafa4dc6aab40eae1c5315c02b9339.jpg'
        style={{ width: '100%' }}
      />
    </motion.div>

  );
};

export default CustomMessage;
