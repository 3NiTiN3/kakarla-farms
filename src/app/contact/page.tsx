"use client";

import styles from "./Contact.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Contact Us</h1>
      </div>

      {/* Contact Information */}
      <section className={styles.infoSection}>
        <h2>📍 Our Address</h2>
        <p>Sri Potti Sriramulu Nellore - Dagadarthi, Andhra Pradesh</p>

        <h2>📞 Phone</h2>
        <p><a href="tel:+919876543210">+91 98765 43210</a></p>

        <h2>📧 Email</h2>
        <p><a href="mailto:info@kakarlafarma.com">info@kakarlafarma.com</a></p>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Interactive Google Map */}
      <section className={styles.mapSection}>
        <h2>🌍 Find Us on the Map</h2>
        <p>Explore our location directly on Google Maps.</p>
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
