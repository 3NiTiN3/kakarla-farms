import styles from "./Footer.module.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© {new Date().getFullYear()} Kakarla Farms. All rights reserved.</p>
      </div>
    </footer>
  );
}
