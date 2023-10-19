import styles from "../../app/homePage.module.css";
import DBVCube from './DesktopBVCube';
import ReactDOM from 'react-dom/client';


function DBVCubeContainer(props) {
  const CUBE_CONTAINER_ID = props.id;
  const t = props.t;

  const TOP = "top";
  const LEFT = "left";
  const RIGHT = "right";

  const CUBE1_IMG = "../images/3d_one_stop.png";
  const CUBE2_IMG = "../images/3d_trust.png";
  const CUBE3_IMG = "../images/3d_after_sales.png";

  const updateCurStage = (newValue) => {
    if (newValue == LEFT) {
      let container = document.getElementById(CUBE_CONTAINER_ID + "2");
      if (container != null && container.childElementCount == 0) {
        ReactDOM.createRoot(container).render(
          <DBVCube
            prop_id="2"
            direction={LEFT}
            img_src={CUBE2_IMG}
            updateCurStage={updateCurStage}
          />
        );
      }
    } else if (newValue == RIGHT) {
      let container = document.getElementById(CUBE_CONTAINER_ID + "3");
      if (container != null && container.childElementCount == 0) {
        ReactDOM.createRoot(container).render(
          <DBVCube
            prop_id="3"
            direction={RIGHT}
            img_src={CUBE3_IMG}
            updateCurStage={updateCurStage}
          />
        );
      }
    }
  };

  return (
    <>
      <div className={styles.bvCard}>
        {/* Brand Value Cube Container */}
        <div id={CUBE_CONTAINER_ID + "1"} className="h-[200px]">
          <DBVCube prop_id="1" direction={TOP} img_src={CUBE1_IMG} updateCurStage={updateCurStage} />
        </div>

        {/* Brand Value Title */}
        <h4 className={styles.bvTitle}>{t("home.onestop_solution")}</h4>

        {/* Brand Value Description */}
        <p className={styles.bvDesc}>
          {t("home.onestop_solution_desc")}
        </p>
      </div>
      <div className={styles.bvCard}>
        {/* Brand Value Cube Container */}
        <div id={CUBE_CONTAINER_ID + "2"} className="h-[200px]"></div>

        {/* Brand Value Title */}
        <h4 className={styles.bvTitle}>
          {t("home.trustworthy")}
          <br /> {t("home.trustworthy2")}
        </h4>

        {/* Brand Value Description */}
        <p className={styles.bvDesc}>
          {t("home.trustworthy_desc")}
        </p>
      </div>
      <div className={styles.bvCard}>
        {/* Brand Value Cube Container */}
        <div id={CUBE_CONTAINER_ID + "3"} className="h-[200px]"></div>

        {/* Brand Value Title */}
        <h4 className={styles.bvTitle}>
          {t("home.aftersales_support")}
        </h4>

        {/* Brand Value Description */}
        <p className={styles.bvDesc}>
          {t("home.aftersales_support_desc")}
        </p>
      </div>
    </>
  );
}

export default DBVCubeContainer;
