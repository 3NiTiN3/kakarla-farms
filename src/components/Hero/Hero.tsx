import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Fresh, Handpicked Mangoes from Farmers to You</h1>
        <p className={styles.heroSubtext}>
          Grown with care, harvested with love. Experience the best mangoes directly from the farm.
        </p>
      </div>
    </section>
  );
}
