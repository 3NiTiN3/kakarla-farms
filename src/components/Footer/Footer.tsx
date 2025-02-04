import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>
          © {new Date().getFullYear()} Kakarla Farms. All rights reserved. 
          <Link href="/admin" className={styles.adminLink}> Admin</Link> {/* ✅ Admin link next to the text */}
        </p>
      </div>
    </footer>
  );
}
