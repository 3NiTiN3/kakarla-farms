"use client";

import styles from "./About.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Image src="/about-hero.jpg" alt="Farm Image" width={1200} height={400} className={styles.heroImage} />
        <h1 className={styles.title}>About Kakarla Farma</h1>
      </div>

      {/* Introduction */}
      <section className={styles.contentSection}>
        <h2>Our Story</h2>
        <p>
          Kakarla Farma is dedicated to delivering the freshest, handpicked mangoes directly from our farm to your doorstep.  
          We believe in sustainable farming, ensuring that every mango is grown with love, care, and respect for nature.
        </p>
        <p>
          🌍 Located in Nellore, Andhra Pradesh. Our farm benefits from the region’s ideal tropical climate  
          that helps us produce high-quality mangoes that are naturally rich in flavor.
        </p>
      </section>

      {/* Mission & Values */}
      <section className={styles.contentSection}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality, naturally grown mangoes while supporting local farmers and eco-friendly  
          farming techniques.
        </p>
      </section>

      {/* Sustainability Section */}
      <section className={styles.contentSection}>
        <h2>Sustainable Farming</h2>
        <p>
          We follow sustainable agricultural practices to minimize waste, reduce water consumption, and protect the environment.  
          By choosing Kakarla Farma, you are supporting a greener planet.
        </p>
      </section>

      {/* Customer Trust Section */}
      <section className={styles.trustSection}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🌱 100% Naturally Grown Mangoes</li>
          <li>🚜 Direct from Farm to Your Home</li>
          <li>📦 Freshly Handpicked & Packed</li>
          <li>🌍 Eco-Friendly & Sustainable Practices</li>
          <li>🤝 Trusted by Hundreds of Happy Customers</li>
        </ul>
      </section>

      {/* Location Map */}
      <section className={styles.mapSection}>
        <h2>📍 Our Location</h2>
        <p>
          Visit us at Sri Potti Sriramulu Nellore - Dagadarthi, Andhra Pradesh.
        </p>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3859.317317408742!2d79.8093056!3d14.6946389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQxJzQwLjciTiA3OcKwNDgnMzMuNSJF!5e0!3m2!1sen!2sin!4v1738666280042!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
