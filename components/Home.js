import React from 'react';
import styles from '../styles/Homepage.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <figure className={styles.imgContainer}>
        <Image className={styles.img} src="/images/Home-main_banner(2000x1090_CFE2EB).jpg" alt="Main Banner" width="100" height="100"/>
        <div className={styles.mainTitle}>
          <figcaption>Cube Design & Communication</figcaption>
          <figcaption>makes Poster Design</figcaption>
        </div>
      </figure>
      
      <div className={styles.mainContainer}>
        <section className={styles.section}>
          <div className={styles.container}>
            <figure className={styles.card}>
              <div>
              <Image class={styles.img} src="/images/main-service-printing.jpg" alt="Printing Image" width="100" height="100"/>
              <Image class={styles.imgHover} src="/images/main-service-printing-click.jpg" alt="Printing Image Clicked" width="100" height="100"/>
              </div>
              <div className={styles.textOverlay}>
                <h3 className={styles.divTitle}>Printing</h3>
                <p>Maximize your visual impact with our professional printing and installation services, including way finding and promotional products.</p>
              </div>
            </figure>
            <figure className={styles.card}>
              <Image class={styles.img} src="/images/main-service-digital.jpg" alt="Digital Image" width="100" height="100"/>
              <Image class={styles.imgHover} src="/images/main-service-digital-click.jpg" alt="Digital Image Clicked" width="100" height="100"/>
              <div className={styles.textOverlay}>
                <h3 className={styles.divTitle}>Digital</h3>
                <p>Establish your online presence with our full-service solutions tailored to enhance your business.</p>
              </div>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.containerTitle}>Brand Value</h3>
          <div className={styles.container}>
            <div className={styles.brandValueCard}>
              <h4 className={styles.divTitle}>One-Stop Solution</h4>
              <p>
                One place for all your needs full-service offerings spanning offline and online realms.
              </p>
            </div>
            <div className={styles.brandValueCard}>
              <h4 className={styles.divTitle}>Trustworthy & Professional Service</h4>
              <p>
                Reliable, professional services tailored to your needs, delivered promptly to elevate your business.
              </p>
            </div>
            <div className={styles.brandValueCard}>
              <h4 className={styles.divTitle}>After-Sales Supports</h4>
              <p>
                Robust after-sales support, ensuring our commitment to standing by services post-delivery.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;




