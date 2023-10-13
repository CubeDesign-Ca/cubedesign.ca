import { useEffect } from "react";
import styles from "../../app/homePage.module.css";
import MBVCube from './MobileBVCube';
import { motion, useAnimation } from "framer-motion";


function MBVCubeContainer(props) {
  const CUBE_CONTAINER_ID = props.id;
  const t = props.t;

  const CUBE_CLICKER_CONTAINER = "cube_clicker_parent";
  const CUBE_CLICKER = "cube_clicker";

  const control = useAnimation();
  const variant = {
    hidden: {
      opacity: 0,
      height: "0px",
      width: "0px",
    },
    visible: {
      opacity: 1,
      height: "0px",
      width: "0px",
    },
  };

  const control2 = useAnimation();
  const variant2 = {
    hidden: { opacity: 0 },
    visible: {
      ease: [0.17, 0.67, 0.83, 0.67],
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
        staggerChildren: 0.8,
      }
    }
  }

  const removeClicker = () => {
    control.start("hidden");
  }

  const handleAnimationComplete = (e) => {
    document.getElementById(CUBE_CLICKER_CONTAINER).remove();
    updateBrandValue("ONESTOP");
  }

  const resetBrandValue = (flag) => {
    control2.start("hidden");
    // document.getElementById("bvcube_title_motion").className = "opacity-0";
    // document.getElementById("bvcube_desc_motion").className = "opacity-0";
  }

  const updateBrandValue = (flag) => {
    if (flag == "ONESTOP") {
      document.getElementById("bvcube_title").innerHTML = t('home.onestop_solution');
      document.getElementById("bvcube_desc").innerHTML = t('home.onestop_solution_desc');
    } else if (flag == "TRUSTWORTHY") {
      document.getElementById("bvcube_title").innerHTML = t('home.trustworthy') + "<br /> " + t("home.trustworthy2");
      document.getElementById("bvcube_desc").innerHTML = t('home.trustworthy_desc');
    } else if (flag == "AFTERSALES") {
      document.getElementById("bvcube_title").innerHTML = t('home.aftersales_support');
      document.getElementById("bvcube_desc").innerHTML = t('home.aftersales_support_desc');
    }
    control2.start("visible");
  }

  return (
    <>
      <div className="p-2 text-center grid grid-rows-auto">
        {/* Mobile Cube starter */}
        <motion.div
          id={CUBE_CLICKER_CONTAINER}
          animate={control}
          initial="visible"
          variants={variant}
          onAnimationComplete={handleAnimationComplete}
        >
          <div id={CUBE_CLICKER} className="absolute w-screen h-full backdrop-blur-sm cursor-pointer" onClick={removeClicker}>
            <p className="absolute text-xl w-[140px] top-[130px] left-1/2 ml-[-70px]">Touch Here & Roll the Cube !</p>
          </div>
        </motion.div>

        {/* Brand Value Cube Container */}
        <div id={CUBE_CONTAINER_ID + "1"} className="h-[200px]">
          <MBVCube update={updateBrandValue} reset={resetBrandValue}/>
        </div>

        {/* Brand Value Title */}
        <motion.div
          id="bvcube_title_motion"
          animate={control2}
          initial="hidden"
          variants={variant2}
          // onAnimationComplete={handleAnimationComplete}
        >
          <h4 id="bvcube_title" className={styles.bvTitle}>
            {t("home.onestop_solution")}
          </h4>
        </motion.div>

        {/* Brand Value Description */}
        <motion.div
          id="bvcube_desc_motion"
          animate={control2}
          initial="hidden"
          variants={variant2}
          // onAnimationComplete={handleAnimationComplete}
        >
          <p id="bvcube_desc" className="text-lg w-screen px-[50px]">
            {t("home.onestop_solution_desc")}
          </p>
        </motion.div>

      </div>
    </>
  );
}

export default MBVCubeContainer;
