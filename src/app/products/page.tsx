"use client";

import styles from "./Products.module.css";
import ProductCard from "@/components/ProductGrid/ProductCard";

const products = [
  { id: 1, name: "Punasa", price: 149, image: "/mangos/punasa.jpg" },
  { id: 2, name: "Banganapalli", price: 129, image: "/mangos/banganpalli.jpg" },
  { id: 3, name: "Imam Pasand", price: 139, image: "/mangos/imam.jpg" },
  { id: 4, name: "Totapuri", price: 119, image: "/mangos/Totapuri.jpg" },
];

export default function ProductsPage() {
  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.title}>Our Mango Collection</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
