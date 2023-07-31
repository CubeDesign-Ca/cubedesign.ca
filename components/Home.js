
import styles from "../app/homePage.module.css"
import ChatbotIcon from "./Chatbot/ChatbotIcon";
import { React, useState } from "react";

const Home = () => {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);

  return (
    <>
      {/* main img */}
      <div className={styles.imgContainer}>
        <div className={styles.mainTitle}>
          <figcaption>Cube Design & Communication</figcaption>
          <figcaption>makes Poster Design</figcaption>
        </div>
      </div>
      <div className={styles.container}>
        {/* printing & digital */}
        <div className={`${styles.mainContainer}`}>
          <div className={`${styles.service}`}>
            {/* printing */}
            <div
              className={`${styles.card} ${styles.card1}`}
              style={{ backgroundImage: isCard1Hovered ? "url('/images/main-service-printing.jpg')" : "url('/images/main-service-printing-click.jpg')" }}
              onMouseEnter={() => setIsCard1Hovered(true)}
              onMouseLeave={() => setIsCard1Hovered(false)}
            >
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Printing</h3>
                <p className={styles.serviceDesc}>
                  Maximize your visual impact with our professional printing and installation services, including way finding and promotional products.
                </p>
              </div>
            </div> 

            <div
              className={`${styles.card} ${styles.card2}`}
              style={{ backgroundImage: isCard2Hovered ? "url('/images/main-service-digital.jpg')" : "url('/images/main-service-digital-click.jpg')" }}
              onMouseEnter={() => setIsCard2Hovered(true)}
              onMouseLeave={() => setIsCard2Hovered(false)}
            >
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Digital</h3>
                <p className={styles.serviceDesc}>
                  Establish your online presence with our full-service solutions tailored to enhance your business.
                </p>
              </div> 
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.bvContainerTitle}>Brand Value</h3>
            <div className={styles.bvContainer}>
              <div className={styles.bvCard}>
                <h4 className={styles.bvTitle}>One-Stop Solution</h4>
                <p className={styles.bvDesc}>
                  One place for all your needs full-service offerings spanning offline and online realms.
                </p>
              </div>
              <div className={styles.bvCard}>
                <h4 className={styles.bvTitle}>Trustworthy &<br /> Professional Service</h4>
                <p className={styles.bvDesc}>
                  Reliable, professional services tailored to your needs, delivered promptly to elevate your business.
                </p>
              </div>
              <div className={styles.bvCard}>
                <h4 className={styles.bvTitle}>After-Sales Supports</h4>
                <p className={styles.bvDesc}>
                  Robust after-sales support, ensuring our commitment to standing by services post-delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;